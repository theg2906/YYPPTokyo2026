if (!window.initialItineraryData) window.initialItineraryData = [];

window.initialItineraryData.push(
    // 2026-04-07 (Tue) - Morning: Chiikawa Park
    {
        id: "32", date: "2026-04-07", type: "accommodation",
        time: { start: "09:00", end: "09:30" },
        name: { zh: "三井ガーデンホテル大手町", jp: "三井ガーデンホテル大手町" },
        details: { notes: "從飯店出發。前往池袋。" },
        contact: { phone: "+81-3-3254-3131" },
        location: { google_places_uri: "https://goo.gl/maps/xyz" }
    },
    {
        id: "33", date: "2026-04-07", type: "transport",
        time: { start: "09:30", end: "10:00" },
        name: { zh: "移動: 大手町 → 池袋", jp: "大手町 → 池袋" },
        details: { notes: "地鐵丸之內線約20-25分" },
        contact: { phone: "" },
        location: { google_places_uri: "" }
    },
    {
        id: "34", date: "2026-04-07", type: "main",
        time: { start: "10:00", end: "12:00" },
        name: { zh: "Chiikawa Park (Sunshine City)", jp: "ちいかわパーク (池袋サンシャインシティ アネックス)" },
        details: { notes: "必去行程，需提前抽抽籤/預約", booking_info: "需於指定網站預約" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Sunshine+City+Ikebukuro" }
    },

    // 2026-04-07 (Tue) - Afternoon: Korakuen
    {
        id: "35", date: "2026-04-07", type: "meal",
        time: { start: "12:30", end: "13:30" },
        name: { zh: "無敵家 / Kura壽司 (池袋旗艦店)", jp: "麺創房 無敵家 / くら寿司" },
        details: { notes: "無敵家拉麵需排隊。Kura壽司池袋店有特色。" },
        contact: { phone: "+81-3-3982-7656" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Mutekiya" }
    },
    {
        id: "36", date: "2026-04-07", type: "transport",
        time: { start: "13:30", end: "14:00" },
        name: { zh: "移動: 池袋 → 後樂園", jp: "池袋 → 後楽園" },
        details: { notes: "地鐵丸之內線/有樂町線約15-20分" },
        contact: { phone: "" },
        location: { google_places_uri: "" }
    },
    {
        id: "37", date: "2026-04-07", type: "main",
        time: { start: "14:00", end: "16:30" },
        name: { zh: "小石川後樂園 (日式庭園)", jp: "小石川後楽園" },
        details: { notes: "賞櫻名所(晚開櫻)，入園費300円。迴遊式庭園。" },
        contact: { phone: "+81-3-3811-3015" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Koishikawa+Korakuen" }
    },
    {
        id: "38", date: "2026-04-07", type: "rain_backup",
        time: { start: "14:00", end: "16:30" },
        name: { zh: "東京巨蛋城 / LaQua (室內)", jp: "東京ドームシティ / LaQua" },
        details: { notes: "雨備行程" },
        contact: { phone: "+81-3-5800-9999" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Tokyo+Dome+City" }
    },

    // 2026-04-07 (Tue) - Night: Kagurazaka
    {
        id: "39", date: "2026-04-07", type: "meal",
        time: { start: "17:30", end: "19:30" },
        name: { zh: "神樂坂 晚餐 (茶寮/鳥茶屋/Canal Cafe)", jp: "神楽坂 散策・夕食" },
        details: { notes: "推薦 Canal Cafe (運河畔義式) 或 鳥茶屋 (親子丼)。" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Kagurazaka" }
    },
    {
        id: "40", date: "2026-04-07", type: "accommodation",
        time: { start: "19:30", end: "20:00" },
        name: { zh: "三井ガーデンホテル大手町", jp: "三井ガーデンホテル大手町" },
        details: { notes: "地鐵東西線飯田橋/神樂坂回大手町" },
        contact: { phone: "+81-3-3254-3131" },
        location: { google_places_uri: "https://goo.gl/maps/xyz" }
    }
);
