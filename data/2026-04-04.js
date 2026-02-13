if (!window.initialItineraryData) window.initialItineraryData = [];

window.initialItineraryData.push(
    // 2026-04-04 (Sat) - Arrival
    {
        id: "1", date: "2026-04-04", type: "transport",
        time: { start: "09:00", end: "12:50" },
        name: { zh: "飛行: BR192 (TSA → HND)", jp: "BR192 (TSA → HND)" },
        details: { notes: "預計飛行時間 2h 50m" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Taipei+Songshan+Airport" }
    },
    {
        id: "2", date: "2026-04-04", type: "transport",
        time: { start: "12:50", end: "13:30" },
        name: { zh: "降落 & 入境審查", jp: "着陸 & 入国審査" },
        details: { notes: "填寫 Visit Japan Web" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Haneda+Airport" }
    },
    {
        id: "3", date: "2026-04-04", type: "transport",
        time: { start: "13:30", end: "14:00" },
        name: { zh: "提取行李 & 海關", jp: "手荷物受取 & 税関" },
        details: { notes: "領取行李後前往入境大廳" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Haneda+Airport" }
    },
    {
        id: "4", date: "2026-04-04", type: "transport",
        time: { start: "14:00", end: "15:00" },
        name: { zh: "移動: 羽田機場 → 大手町", jp: "HND → 大手町" },
        details: { notes: "HND約40-60分 / 京急線或利木津巴士" },
        contact: { phone: "+81-3-5757-8111" },
        location: { google_places_uri: "https://www.google.com/maps/dir/?api=1&origin=Haneda+Airport&destination=Mitsui+Garden+Hotel+Otemachi" }
    },
    {
        id: "5", date: "2026-04-04", type: "accommodation",
        time: { start: "15:00", end: "16:00" },
        name: { zh: "三井ガーデンホテル大手町", jp: "三井ガーデンホテル大手町" },
        address: { jp: "東京都千代田区内神田2-1-2" },
        contact: { phone: "+81-3-3254-3131" },
        details: { notes: "辦理入住 (Check-in 15:00)。大手町站 A2/A5 出口步行約3-5分。", booking_info: "Check-in 15:00" },
        location: { google_places_uri: "https://goo.gl/maps/xyz" }
    },
    {
        id: "6", date: "2026-04-04", type: "main",
        time: { start: "16:00", end: "18:00" },
        name: { zh: "丸之內仲通散步", jp: "丸の内仲通り" },
        contact: { phone: "" },
        details: { notes: "欣賞東京車站建築之美，享受都會氛圍。" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Marunouchi+Naka-dori" }
    },
    {
        id: "7", date: "2026-04-04", type: "meal",
        time: { start: "18:00", end: "19:30" },
        name: { zh: "Rigoleto Wine and Bar (新丸之內大廈)", jp: "リゴレット ワインアンドバー" },
        contact: { phone: "+81-3-6270-0520" },
        details: { notes: "義式Tapas、西班牙海鮮燉飯，氣氛極佳且就在飯店旁。", environment: "indoor" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=RIGOLETTO+WINE+AND+BAR" }
    },
    // 2026-04-04 (Sat) - Night: Chidorigafuchi
    {
        id: "8", date: "2026-04-04", type: "transport",
        time: { start: "19:30", end: "19:50" },
        name: { zh: "移動: 大手町 → 九段下", jp: "大手町 → 九段下" },
        contact: { phone: "" },
        details: { notes: "地鐵約10-15分" },
        location: { google_places_uri: "" }
    },
    {
        id: "9", date: "2026-04-04", type: "main",
        time: { start: "19:50", end: "21:00" },
        name: { zh: "千鳥之淵夜櫻 (九段下)", jp: "千鳥ヶ淵緑道 夜桜" },
        contact: { phone: "+81-3-3264-2111" },
        details: { notes: "必去夜櫻景點，體驗被櫻花包圍的震撼。", environment: "outdoor" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Chidorigafuchi" }
    },
    {
        id: "10", date: "2026-04-04", type: "rain_backup",
        time: { start: "18:30", end: "20:30" },
        name: { zh: "靖國神社/日本武道館 + 皇居周邊博物館", jp: "靖国神社・武道館周辺" },
        contact: { phone: "+81-3-3261-8326" },
        details: { environment: "indoor" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Yasukuni+Shrine" }
    },
    {
        id: "11", date: "2026-04-04", type: "accommodation",
        time: { start: "20:30", end: "21:00" },
        name: { zh: "返回飯店: 三井花園飯店大手町", jp: "三井ガーデンホテル大手町" },
        details: { notes: "休息儲備體力" },
        contact: { phone: "+81-3-3254-3131" },
        location: { google_places_uri: "https://goo.gl/maps/xyz" }
    }
);
