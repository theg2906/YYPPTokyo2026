// State
let itinerary = [];

// 1. Try to load from LocalStorage
try {
    const cached = localStorage.getItem('travel_itinerary');
    if (cached) itinerary = JSON.parse(cached);
} catch (e) {
    console.error('Error parsing localStorage', e);
}

// 2. Direct Sync from Data Files (Source of Truth)
// This ensures that if you delete an item from the JS file, it disappears from the app.
if (window.initialItineraryData && Array.isArray(window.initialItineraryData)) {
    // Overwrite with file data
    itinerary = [...window.initialItineraryData];

    // Final Sort by date + start time
    itinerary.sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        return a.time.start.localeCompare(b.time.start);
    });

    // Update LocalStorage to match source code
    localStorage.setItem('travel_itinerary', JSON.stringify(itinerary));
}

// Backup if absolutely everything is empty
if (itinerary.length === 0) {
    // This should rarely happen now
}

// Backup if absolutely everything is empty
if (itinerary.length === 0) {
    // This should rarely happen now
}
let currentDate = null;
let showRainBackup = false;

// DOM Elements
const container = document.getElementById('itinerary-container');
const daySelector = document.querySelector('.day-selector');
const modal = document.getElementById('event-modal');
const form = document.getElementById('event-form');
const navToggleRain = document.getElementById('toggle-rain-backup');
const btnAdd = document.getElementById('add-event-btn');

const BREAKPOINT = 768; // Trigger multi-day view on tablets/landscape phones
// View State
let isDesktop = window.innerWidth >= BREAKPOINT;

window.addEventListener('resize', () => {
    const newMode = window.innerWidth >= BREAKPOINT;
    if (newMode !== isDesktop) {
        isDesktop = newMode;
        renderView();
    }
});


// Init
function init() {
    window.openEditModal = openEditModal;
    renderDaySelector();
    renderView(); // Initial Render
    setupEventListeners();
}

// Data Helpers
function saveItinerary() {
    localStorage.setItem('travel_itinerary', JSON.stringify(itinerary));
    // Re-render current view
    renderView();
    renderDaySelector();
}

function getUniqueDates() {
    const dates = [...new Set(itinerary.map(item => item.date))].sort();
    return dates.length > 0 ? dates : [new Date().toISOString().split('T')[0]];
}

// Rendering
function renderDaySelector() {
    const dates = getUniqueDates();
    if (!currentDate && dates.length > 0) currentDate = dates[0];

    daySelector.style.display = 'flex'; // Always show

    if (isDesktop) {
        // Desktop: Horizontal chips (always visible)
        daySelector.className = 'day-selector desktop';
        daySelector.innerHTML = dates.map(date => `
            <button class="day-chip ${date === currentDate ? 'active' : ''}" 
                    onclick="switchDate('${date}')">
                ${new Date(date).toLocaleDateString('zh-TW', { month: 'short', day: 'numeric', weekday: 'short' })}
            </button>
        `).join('');
    } else {
        // Mobile: Dropdown
        daySelector.className = 'day-selector mobile';
        const options = dates.map(date => {
            const label = new Date(date).toLocaleDateString('zh-TW', { month: 'short', day: 'numeric', weekday: 'short' });
            return `<option value="${date}" ${date === currentDate ? 'selected' : ''}>${label}</option>`;
        }).join('');

        daySelector.innerHTML = `
            <div class="dropdown-wrapper">
                <span class="material-icons-round">calendar_today</span>
                <select onchange="switchDate(this.value)">
                    ${options}
                </select>
            </div>
        `;
    }
}

window.switchDate = function (date) {
    currentDate = date;
    renderView(); // Re-render everything

    // In Desktop, maybe we want to scroll the actual column into view?
    if (isDesktop) {
        const columns = document.querySelectorAll('.day-column');
        const dates = getUniqueDates();
        const index = dates.indexOf(date);
        if (index !== -1 && columns[index]) {
            columns[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
    }
}

const PIXELS_PER_MIN = 2;
const START_HOUR = 6; // 06:00

function getMinutesFromStart(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return (h * 60 + m) - (START_HOUR * 60);
}

// === VIEW DISPATCHER ===
function renderView() {
    container.innerHTML = '';
    // Reset classes
    container.className = 'timeline-container';

    // Ensure Day Selector visibility
    renderDaySelector();

    if (isDesktop) {
        renderDesktopView();
    } else {
        renderMobileView();
    }
}

// === MOBILE VIEW ===
function renderMobileView() {
    // 1. Render Time Axis
    renderTimeAxis(container);

    // 2. Render Single Day Events
    const eventsArea = document.createElement('div');
    eventsArea.className = 'events-area';
    container.appendChild(eventsArea);

    renderDayEvents(currentDate, eventsArea);
}

// === DESKTOP VIEW ===
function renderDesktopView() {
    container.classList.add('desktop-mode');

    // 2. Render Columns for EACH date
    const dates = getUniqueDates();
    dates.forEach(date => {
        const col = document.createElement('div');
        col.className = 'day-column';

        // Add Time Axis to EVERY column for ease of reading
        renderTimeAxis(col);

        // Header
        const header = document.createElement('div');
        header.className = 'day-header';
        header.innerText = new Date(date).toLocaleDateString('zh-TW', { month: 'short', day: 'numeric', weekday: 'short' });
        header.style.position = 'absolute';
        header.style.top = '0';
        header.style.width = '100%';
        header.style.height = '40px';
        header.style.zIndex = '55'; // Above cards
        col.appendChild(header);

        // Wrapper for events
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'column-content-wrapper';
        contentWrapper.style.position = 'relative';
        // Ensure height accommodates the full time range so scrolling works
        // (24 - 6) * 60 * 2 = 18 * 120 = 2160 px roughly
        contentWrapper.style.height = `${(24 - START_HOUR) * 60 * PIXELS_PER_MIN}px`;

        renderDayEvents(date, contentWrapper);
        col.appendChild(contentWrapper);
        container.appendChild(col);
    });
}

// Helper: Time Axis
function renderTimeAxis(targetContainer) {
    const timeAxis = document.createElement('div');
    timeAxis.className = 'time-axis';

    // Desktop mode needs full 24h or at least START to END coverage as background
    // Mobile might only need partial. 
    // Let's stick to START_HOUR to 23 for now to match event positioning logic.
    // Events are positioned relative to START_HOUR.

    for (let h = START_HOUR; h <= 23; h++) {
        // Hour marker
        const marker = document.createElement('div');
        marker.className = 'time-marker';
        marker.style.top = `${(h - START_HOUR) * 60 * PIXELS_PER_MIN}px`;
        marker.innerHTML = `<span>${h}</span>`;
        timeAxis.appendChild(marker);

        // Half-hour marker
        if (h < 24) {
            const halfMarker = document.createElement('div');
            halfMarker.className = 'time-marker half-hour';
            halfMarker.style.top = `${(h - START_HOUR + 0.5) * 60 * PIXELS_PER_MIN}px`;
            timeAxis.appendChild(halfMarker);
        }
    }

    // Ensure the axis has height to push content? 
    // No, for desktop it is absolute. For mobile it was relative.
    // If mobile view relies on this pushing content, we need to be careful.
    // In RenderMobileView, renderTimeAxis is called first. 
    // If we make it absolute globally via CSS for .time-axis, mobile breaks.
    // We only targeted `.day-column .time-axis` in CSS. Mobile uses `.timeline-container > .time-axis`.

    targetContainer.appendChild(timeAxis);
}

// Helper: Render Events for a Date
function renderDayEvents(date, targetContainer) {
    // Filter by date & rain backup
    let dayEvents = itinerary.filter(item => item.date === date);
    if (!showRainBackup) {
        dayEvents = dayEvents.filter(item => item.type !== 'rain_backup');
    }

    // Track for alternating colors
    let lastType = null;
    let isAlternate = false;

    dayEvents.forEach((item, index) => {
        // Determine alternating status
        if (item.type === lastType) {
            isAlternate = !isAlternate;
        } else {
            isAlternate = false;
        }
        lastType = item.type;

        const startMins = getMinutesFromStart(item.time.start);
        const endMins = getMinutesFromStart(item.time.end);
        const durationMins = endMins - startMins;

        let top = startMins * PIXELS_PER_MIN;
        let height = durationMins * PIXELS_PER_MIN;

        // "Short" logic
        const isShort = durationMins <= 45;

        const card = document.createElement('div');
        card.className = `event-card ${isShort ? 'short' : ''} ${isAlternate ? 'alternate-shade' : ''}`;
        card.dataset.type = item.type;
        card.style.top = `${top}px`;
        // Ensure height matches visual representation
        card.style.height = `${Math.max(height, 30)}px`;

        // Pre-calc details
        let durationStr = '';
        if (durationMins > 0) {
            const h = Math.floor(durationMins / 60);
            const m = durationMins % 60;
            if (h > 0) durationStr += `${h}h `;
            if (m > 0) durationStr += `${m}m`;
        }

        // Links
        let gmapsLink = item.location?.google_places_uri || '#';
        if (gmapsLink === '#' && item.address?.jp) gmapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address.jp)}`;

        let nextRouteLink = item.location?.next_route_url;
        if (!nextRouteLink && index < dayEvents.length - 1) {
            const nextItem = dayEvents[index + 1];
            if (item.name.jp && nextItem.name.jp) {
                nextRouteLink = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(item.name.jp)}&destination=${encodeURIComponent(nextItem.name.jp)}&travelmode=transit`;
            }
        }

        const editBtn = `<button class="action-btn" onclick="window.openEditModal('${item.id}'); event.stopPropagation();"><span class="material-icons-round">edit</span> Edit</button>`;

        const typeIcon = getTypeIcon(item.type);
        const displayName = item.name.jp || item.name.zh;

        card.innerHTML = `
            <div class="card-content-wrapper">
                <div class="card-header ${isShort ? 'compact' : ''}">
                    <!-- Duration + Time -->
                    <div class="primary-info">
                        <span class="duration-badge-inline">${durationStr}</span>
                        <span class="event-title">${displayName}</span>
                    </div>

                    <!-- Icon: Always visible on right -->
                    <span class="material-icons-round type-icon">${typeIcon}</span>
                </div>
                
                <div class="card-body">
                     <div class="time-range">${item.time.start} - ${item.time.end}</div>

                    <div class="expanded-details">
                         ${item.name.zh !== displayName ? `<div class="sub-name">${item.name.zh}</div>` : ''}

                        ${item.contact?.phone ? `
                        <div class="info-row">
                            <span class="material-icons-round">call</span>
                            <a href="tel:${item.contact.phone}" style="color:inherit;text-decoration:none">${item.contact.phone}</a>
                        </div>` : ''}

                        ${item.details?.booking_info ? `
                        <div class="info-row warning">
                            <span class="material-icons-round">bookmark</span>
                            <span>${item.details.booking_info}</span>
                        </div>` : ''}

                        ${item.details?.notes ? `
                        <div class="info-row note">
                            <span class="material-icons-round">info</span>
                            <span>${item.details.notes}</span>
                        </div>` : ''}
                        
                        <div class="card-actions">
                            <a href="${gmapsLink}" target="_blank" class="action-btn">
                                <span class="material-icons-round">place</span>
                            </a>
                            ${nextRouteLink ? `
                            <a href="${nextRouteLink}" target="_blank" class="action-btn nav">
                                <span class="material-icons-round">directions</span>
                            </a>` : ''}
                            ${editBtn}
                        </div>
                    </div>
                </div>
            </div>
        `;
        targetContainer.appendChild(card);

        // Card Click Logic: Toggle Expansion (Simple)
        card.onclick = (e) => {
            // Prevent triggering when clicking buttons/links
            if (e.target.closest('a') || e.target.closest('button')) return;

            const isExpanded = card.classList.contains('expanded');

            // Close all others
            document.querySelectorAll('.event-card.expanded').forEach(c => c.classList.remove('expanded'));

            if (!isExpanded) {
                card.classList.add('expanded');
                setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
            }
        };

    });
}

function getTypeIcon(type) {
    const map = {
        'main': 'flag',
        'rain_backup': 'umbrella',
        'meal': 'restaurant',
        'transport': 'train',
        'accommodation': 'hotel'
    };
    return map[type] || 'circle';
}

// Modal & Form
function openEditModal(id = null) {
    modal.classList.remove('hidden');
    form.reset();

    const deleteBtn = document.getElementById('delete-btn');

    if (id) {
        const item = itinerary.find(i => i.id === id);
        document.getElementById('modal-title').innerText = 'Edit Event';
        document.getElementById('event-id').value = item.id;
        document.getElementById('event-date').value = item.date;
        document.getElementById('event-start').value = item.time.start;
        document.getElementById('event-end').value = item.time.end;
        document.getElementById('event-name-zh').value = item.name.zh;
        document.getElementById('event-name-jp').value = item.name.jp || '';
        document.getElementById('event-gmaps-uri').value = item.location?.google_places_uri || '';
        document.getElementById('event-address-jp').value = item.address?.jp || '';
        document.getElementById('event-route-url').value = item.location?.next_route_url || '';
        document.getElementById('event-notes').value = item.details?.notes || '';
        document.getElementById('event-booking').value = item.details?.booking_info || '';
        document.getElementById('event-phone').value = item.contact?.phone || '';

        // Select logic for type
        const typeRadio = form.querySelector(`input[name="type"][value="${item.type}"]`);
        if (typeRadio) typeRadio.checked = true;

        deleteBtn.classList.remove('hidden');
        deleteBtn.onclick = () => deleteEvent(id);
    } else {
        document.getElementById('modal-title').innerText = 'New Event';
        document.getElementById('event-id').value = '';
        document.getElementById('event-date').value = currentDate || new Date().toISOString().split('T')[0];
        deleteBtn.classList.add('hidden');
    }
}

function closeEditModal() {
    modal.classList.add('hidden');
}

function deleteEvent(id) {
    if (confirm('Delete this event?')) {
        itinerary = itinerary.filter(i => i.id !== id);
        saveItinerary();
        closeEditModal();
    }
}

// Event Listeners
function setupEventListeners() {
    navToggleRain.onclick = () => {
        showRainBackup = !showRainBackup;
        navToggleRain.style.color = showRainBackup ? 'var(--color-rain)' : 'var(--primary-color)';
        // Re-render
        renderView();
    };

    btnAdd.onclick = () => openEditModal();

    document.getElementById('close-modal').onclick = closeEditModal;

    // Close expanded cards when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.event-card')) {
            document.querySelectorAll('.event-card.expanded').forEach(c => c.classList.remove('expanded'));
        }
    });

    form.onsubmit = (e) => {
        e.preventDefault();
        const id = document.getElementById('event-id').value;
        const formData = {
            id: id || crypto.randomUUID(),
            date: document.getElementById('event-date').value,
            time: {
                start: document.getElementById('event-start').value,
                end: document.getElementById('event-end').value
            },
            type: form.querySelector('input[name="type"]:checked').value,
            name: {
                zh: document.getElementById('event-name-zh').value,
                jp: document.getElementById('event-name-jp').value
            },
            address: {
                jp: document.getElementById('event-address-jp').value
            },
            contact: {
                phone: document.getElementById('event-phone').value
            },
            location: {
                google_places_uri: document.getElementById('event-gmaps-uri').value,
                next_route_url: document.getElementById('event-route-url').value
            },
            details: {
                notes: document.getElementById('event-notes').value,
                booking_info: document.getElementById('event-booking').value
            }
        };

        if (id) {
            const index = itinerary.findIndex(i => i.id === id);
            itinerary[index] = formData;
        } else {
            itinerary.push(formData);
        }

        saveItinerary();
        closeEditModal();
    };
}

// Run
init();
