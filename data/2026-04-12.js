if (!window.initialItineraryData) window.initialItineraryData = [];

window.initialItineraryData.push(
    {
        id: "82", date: "2026-04-12", type: "accommodation",
        time: { start: "08:00", end: "08:30" },
        name: { zh: "退房: THE KNOT TOKYO Shinjuku", jp: "Check-out & ホテル出発" },
        details: { notes: "預留時間辦理退房" },
        contact: { phone: "+81-3-3375-6511" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=THE+KNOT+TOKYO+Shinjuku" }
    },
    {
        id: "83", date: "2026-04-12", type: "transport",
        time: { start: "08:30", end: "09:30" },
        name: { zh: "移動: 新宿 → 羽田機場", jp: "新宿 → 羽田空港" },
        details: { notes: "利木津巴士或電車。務必於09:30前出發。" },
        contact: { phone: "+81-3-3665-7220" },
        location: { next_route_url: "https://www.google.com/maps/dir/?api=1&origin=The+Knot+Tokyo+Shinjuku&destination=Haneda+Airport" }
    },
    {
        id: "84", date: "2026-04-12", type: "transport",
        time: { start: "09:30", end: "10:30" },
        name: { zh: "報到 & 行李託運 (羽田)", jp: "Check-in & 手荷物預け入れ" },
        details: { notes: "BR191 (12:40起飛)。建議起飛前2.5小時抵達。" },
        contact: { phone: "+81-3-5757-8111" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Haneda+Airport" }
    },
    {
        id: "85", date: "2026-04-12", type: "transport",
        time: { start: "10:30", end: "11:30" },
        name: { zh: "安檢 & 出境審查 & 免稅店", jp: "保安検査 & 出国審査" },
        details: { notes: "最後採買伴手禮" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Haneda+Airport+Duty+Free" }
    },
    {
        id: "86", date: "2026-04-12", type: "transport",
        time: { start: "12:10", end: "12:40" },
        name: { zh: "登機: BR191", jp: "搭乗" },
        details: { notes: "前往登機門" },
        contact: { phone: "" },
        location: { google_places_uri: "" }
    },
    {
        id: "87", date: "2026-04-12", type: "transport",
        time: { start: "12:40", end: "15:05" },
        name: { zh: "飛行: BR191 (HND → TSA)", jp: "BR191 (HND → TSA)" },
        details: { notes: "飛行時間約 3h 25m" },
        contact: { phone: "" },
        location: { google_places_uri: "" }
    },
    {
        id: "88", date: "2026-04-12", type: "transport",
        time: { start: "15:05", end: "15:40" },
        name: { zh: "降落 & 入境 (松山)", jp: "着陸 & 入国" },
        details: { notes: "歡迎回家" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Taipei+Songshan+Airport" }
    },
    {
        id: "89", date: "2026-04-12", type: "transport",
        time: { start: "15:40", end: "16:00" },
        name: { zh: "提取行李", jp: "手荷物受取" },
        details: { notes: "確認行李件數" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Taipei+Songshan+Airport" }
    },
    {
        id: "90", date: "2026-04-12", type: "accommodation",
        time: { start: "16:00", end: "16:30" },
        name: { zh: "返家", jp: "帰宅" },
        details: { notes: "旅程結束" },
        contact: { phone: "" },
        location: { google_places_uri: "" }
    }
);
