if (!window.initialItineraryData) window.initialItineraryData = [];

window.initialItineraryData.push(
    // 2026-04-06 (Mon) - Morning: Ghibli
    {
        id: "24", date: "2026-04-06", type: "accommodation",
        time: { start: "08:45", end: "09:00" },
        name: { zh: "三井ガーデンホテル大手町", jp: "三井ガーデンホテル大手町" },
        details: { notes: "從飯店出發。前往三鷹。" },
        contact: { phone: "+81-3-3254-3131" },
        location: { google_places_uri: "https://goo.gl/maps/xyz" }
    },
    {
        id: "25", date: "2026-04-06", type: "transport",
        time: { start: "09:00", end: "10:00" },
        name: { zh: "移動: 大手町 → 三鷹", jp: "大手町 → 三鷹" },
        details: { notes: "地鐵東西線直通JR總武線 約40-55分" },
        contact: { phone: "" },
        location: { google_places_uri: "" }
    },
    {
        id: "26", date: "2026-04-06", type: "main",
        time: { start: "10:00", end: "12:30" },
        name: { zh: "三鷹之森吉卜力美術館", jp: "三鷹の森ジブリ美術館" },
        details: { booking_info: "每月10日10:00(JST)開賣門票", notes: "需提前預約。請於10:00前抵達。" },
        contact: { phone: "+81-570-055-777" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Ghibli+Museum" }
    },
    
    // 2026-04-06 (Mon) - Afternoon: Kichijoji
    {
        id: "27", date: "2026-04-06", type: "meal",
        time: { start: "13:00", end: "14:00" },
        name: { zh: "吉祥寺 Satou 炸牛肉丸 & 輕食", jp: "吉祥寺さとう" },
        details: { notes: "必吃人氣店。若不想排隊可在2樓吃牛排。" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Kichijoji+Satou" }
    },
    {
        id: "28", date: "2026-04-06", type: "main",
        time: { start: "14:00", end: "16:30" },
        name: { zh: "吉祥寺雜貨 & 井之頭公園", jp: "吉祥寺・井の頭公園" },
        details: { notes: "逛Sunroad商店街、口琴橫丁。公園隨意散步。" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Kichijoji+Sunroad" }
    },
    {
        id: "29", date: "2026-04-06", type: "rain_backup",
        time: { start: "14:00", end: "16:30" },
        name: { zh: "吉祥寺 PARCO & 百貨", jp: "吉祥寺PARCO" },
        details: { notes: "室內逛街" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Kichijoji+Parco" }
    },

    // 2026-04-06 (Mon) - Night: Omakase
    {
        id: "30", date: "2026-04-06", type: "meal",
        time: { start: "18:00", end: "20:00" },
        name: { zh: "Manten Sushi Marunouchi (まんてん鮨 丸の内)", jp: "まんてん鮨 丸の内" },
        details: { notes: "建議預訂。高CP值 Omakase，就在飯店附近 (Marunouchi Brick Square B1F)。" },
        contact: { phone: "+81-3-6269-9100" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Manten+Sushi+Marunouchi" }
    },
    {
        id: "31", date: "2026-04-06", type: "accommodation",
        time: { start: "20:00", end: "20:30" },
        name: { zh: "三井ガーデンホテル大手町", jp: "三井ガーデンホテル大手町" },
        details: { notes: "返回飯店休息。" },
        contact: { phone: "+81-3-3254-3131" },
        location: { google_places_uri: "https://goo.gl/maps/xyz" }
    }
);
