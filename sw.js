const CACHE_NAME = 'travel-app-v2'; // Bump version to v2
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    'https://fonts.googleapis.com/icon?family=Material+Icons+Round'
    // Dynamic data files are fetched via network now due to strategy change
];

// Install: Skip Waiting to activate immediately
self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

// Activate: Clean old caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

// Fetch: Network First, Fallback to Cache
// This ensures F5 always gets the latest version if online.
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request)
            .then((response) => {
                // If valid response, clone and cache it
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(e.request, responseToCache);
                });
                return response;
            })
            .catch(() => {
                // Network failed, try cache
                return caches.match(e.request);
            })
    );
});
