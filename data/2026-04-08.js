if (!window.initialItineraryData) window.initialItineraryData = [];

window.initialItineraryData.push(
    // 2026-04-08 (Wed) - Morning: Meguro River
    {
        id: "46", date: "2026-04-08", type: "accommodation",
        time: { start: "08:30", end: "09:00" },
        name: { zh: "三井ガーデンホテル大手町", jp: "三井ガーデンホテル大手町" },
        details: { notes: "從飯店出發。前往中目黑。" },
        contact: { phone: "+81-3-3254-3131" },
        location: { google_places_uri: "https://goo.gl/maps/xyz" }
    },
    {
        id: "47", date: "2026-04-08", type: "transport",
        time: { start: "09:00", end: "09:30" },
        name: { zh: "移動: 大手町 → 中目黑", jp: "大手町 → 中目黒" },
        details: { notes: "地鐵日比谷線直通約25-35分" },
        contact: { phone: "" },
        location: { google_places_uri: "" }
    },
    {
        id: "48", date: "2026-04-08", type: "main",
        time: { start: "09:30", end: "11:30" },
        name: { zh: "目黑川櫻並木賞櫻", jp: "目黒川桜並木 (中目黒)" },
        details: { notes: "純散步拍照。早點到避開人潮。" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Meguro+River+Cherry+Blossoms" }
    },

    // 2026-04-08 (Wed) - Lunch: Peter Luger
    {
        id: "49", date: "2026-04-08", type: "meal",
        time: { start: "12:00", end: "14:00" },
        name: { zh: "Peter Luger 牛排 (惠比壽)", jp: "Peter Luger Steak House Tokyo" },
        details: { booking_info: "已預約 12:00", notes: "需準時。建議60天前再次確認訂位。" },
        contact: { phone: "+81-3-3356-6151" },
        location: { google_places_uri: "https://peterluger.co.jp/" }
    },

    // 2026-04-08 (Wed) - Afternoon: Nicolai Bergmann
    {
        id: "50", date: "2026-04-08", type: "transport",
        time: { start: "14:00", end: "14:30" },
        name: { zh: "移動: 惠比壽 → 南青山", jp: "恵比寿 → 南青山" },
        details: { notes: "地鐵或計程車約15-20分" },
        contact: { phone: "" },
        location: { google_places_uri: "" }
    },
    {
        id: "51", date: "2026-04-08", type: "main",
        time: { start: "14:30", end: "17:00" },
        name: { zh: "Nicolai Bergmann 花藝 & 咖啡 (南青山)", jp: "Nicolai Bergmann Nomu Cafe" },
        details: { notes: "參觀花藝展示，喝咖啡。如有預約可參加花藝課。" },
        contact: { phone: "+81-3-5464-0743" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Nicolai+Bergmann+Flagship+Store" }
    },
    {
        id: "52", date: "2026-04-08", type: "main",
        time: { start: "17:00", end: "18:30" },
        name: { zh: "表參道 / 根津美術館 周邊散步", jp: "表参道・根津美術館" },
        details: { notes: "欣賞隈研吾建築群與時尚街區氛圍。" },
        contact: { phone: "+81-3-3400-2536" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Nezu+Museum" }
    },
    {
        id: "53", date: "2026-04-08", type: "rain_backup",
        time: { start: "14:30", end: "18:30" },
        name: { zh: "根津美術館 (室內展覽)", jp: "根津美術館" },
        details: { notes: "雨備首選，庭園與展館皆美。" },
        contact: { phone: "+81-3-3400-2536" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Nezu+Museum" }
    },

    // 2026-04-08 (Wed) - Night: Light Dinner
    {
        id: "53", date: "2026-04-08", type: "meal",
        time: { start: "17:30", end: "19:00" },
        name: { zh: "AFURI 柚子鹽拉麵 (原宿/惠比壽)", jp: "AFURI ラーメン" },
        details: { notes: "清爽柚子湯頭，適合中午大餐後的晚餐。" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=AFURI+Harajuku" }
    },
    {
        id: "54", date: "2026-04-08", type: "accommodation",
        time: { start: "19:30", end: "20:00" },
        name: { zh: "三井ガーデンホテル大手町", jp: "三井ガーデンホテル大手町" },
        details: { notes: "返回飯店休息。" },
        contact: { phone: "+81-3-3254-3131" },
        location: { google_places_uri: "https://goo.gl/maps/xyz" }
    }
);
