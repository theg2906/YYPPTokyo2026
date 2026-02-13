if (!window.initialItineraryData) window.initialItineraryData = [];

window.initialItineraryData.push(
    // 2026-04-05 (Sun) - Morning: Sky Bus & Brunch
    {
        id: "12", date: "2026-04-05", type: "accommodation",
        time: { start: "09:45", end: "10:00" },
        name: { zh: "三井ガーデンホテル大手町", jp: "三井ガーデンホテル大手町" },
        details: { notes: "從飯店出發。步行至丸之內三菱大樓 (需於10:00前報到)。" },
        contact: { phone: "+81-3-3254-3131" },
        location: { google_places_uri: "https://goo.gl/maps/xyz" }
    },
    {
        id: "13", date: "2026-04-05", type: "main",
        time: { start: "10:15", end: "11:15" },
        name: { zh: "Sky Bus Tokyo 櫻花專車 (皇居/千鳥之淵)", jp: "スカイバス東京 桜コース" },
        details: {
            booking_info: "予約番号：QSE7I76P / 受付番号：T39MB9YA (ウ ピンヘン 大人x2) 【T119】春の東京コース 日時 2026-04-05 10:15 代表者名 ウ ピンヘン   大人 x 2",
            notes: "10:15發車。雙層敞篷巴士，請備防風外套/帽子。車程約50分。"
        },
        contact: { phone: "+81-3-3215-0008" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Sky+Bus+Tokyo+Ticket+Counter" }
    },
    {
        id: "14", date: "2026-04-05", type: "meal",
        time: { start: "12:00", end: "14:00" },
        name: { zh: "Mercer Brunch (銀座)", jp: "MERCER BRUNCH GINZA TERRACE" },
        contact: { phone: "+81-3-3562-9551" },
        details: { booking_info: "建議預約", notes: "法式吐司早午餐。僅收套餐。", environment: "indoor" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=MERCER+BRUNCH+GINZA+TERRACE" }
    },

    // 2026-04-05 (Sun) - Afternoon: Ginza Stroll
    {
        id: "15", date: "2026-04-05", type: "main",
        time: { start: "14:00", end: "16:30" },
        name: { zh: "銀座步行者天國 & 購物", jp: "銀座歩行者天国 & ショッピング" },
        details: { notes: "週日限定封街 (中央通)。參觀 GINZA SIX, Uniqlo 旗艦店, 伊東屋。" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Ginza+Six" }
    },
    {
        id: "16", date: "2026-04-05", type: "rain_backup",
        time: { start: "14:00", end: "16:30" },
        name: { zh: "銀座 Art Aquarium / 東急Plaza", jp: "アートアクアリウム美術館 GINZA" },
        details: { notes: "室內雨備" },
        contact: { phone: "+81-3-3535-3001" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Art+Aquarium+Museum+Ginza" }
    },

    // 2026-04-05 (Sun) - Night: Dinner
    {
        id: "17", date: "2026-04-05", type: "meal",
        time: { start: "17:30", end: "19:00" },
        name: { zh: "銀座 篝 (Kagari) 本店 - 雞白湯拉麵", jp: "銀座 篝 本店" },
        details: { notes: "米其林推薦。若大排長龍可改去東急Plaza根室花丸。" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Ginza+Kagari+Honten" }
    },
    {
        id: "18", date: "2026-04-05", type: "accommodation",
        time: { start: "19:30", end: "20:00" },
        name: { zh: "三井ガーデンホテル大手町", jp: "三井ガーデンホテル大手町" },
        details: { notes: "返回飯店休息。" },
        contact: { phone: "+81-3-3254-3131" },
        location: { google_places_uri: "https://goo.gl/maps/xyz" }
    }
);
