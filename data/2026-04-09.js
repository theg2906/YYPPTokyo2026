if (!window.initialItineraryData) window.initialItineraryData = [];

window.initialItineraryData.push(
    {
        id: "55", date: "2026-04-09", type: "accommodation",
        time: { start: "07:30", end: "08:00" },
        name: { zh: "三井ガーデンホテル大手町", jp: "三井ガーデンホテル大手町" },
        details: { notes: "退房。前往新宿站，預留時間找月台。" },
        contact: { phone: "+81-3-3254-3131" },
        location: { google_places_uri: "https://goo.gl/maps/xyz" }
    },
    {
        id: "56", date: "2026-04-09", type: "transport",
        time: { start: "08:00", end: "08:30" },
        name: { zh: "移動: 大手町 → 新宿", jp: "大手町 → 新宿" },
        details: { notes: "地鐵丸之內線約20-25分" },
        contact: { phone: "" },
        location: { google_places_uri: "" }
    },
    {
        id: "57", date: "2026-04-09", type: "transport",
        time: { start: "08:30", end: "10:30" },
        name: { zh: "特急 富士回遊 (新宿 → 河口湖)", jp: "特急 富士回遊" },
        details: { notes: "新宿08:30發 -> 河口湖10:27著。建議1個月前提前劃位。" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Shinjuku+Station" }
    },

    // 2026-04-09 (Thu) - Arrival & Rent-a-Car
    {
        id: "58", date: "2026-04-09", type: "transport",
        time: { start: "10:40", end: "11:30" },
        name: { zh: "取車: Nippon Rent-A-Car 河口湖站前", jp: "ニッポンレンタカー 河口湖駅前" },
        details: {
            booking_info: "預約電話: 050-1712-2693",
            notes: "請備齊駕照日文譯本/國際駕照。建議預約休旅車型。"
        },
        contact: { phone: "050-1712-2693" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Nippon+Rent-A-Car+Kawaguchiko" }
    },

    // 2026-04-09 (Thu) - Lunch: Houtou Fudou (Cloud)
    {
        id: "59", date: "2026-04-09", type: "meal",
        time: { start: "12:00", end: "13:30" },
        name: { zh: "ほうとう不動 東恋路店 (雲朵建築)", jp: "ほうとう不動 東恋路店" },
        details: { notes: "名建築家保坂猛設計。必吃餺飥麵。自駕方便停車。" },
        contact: { phone: "+81-555-72-8511" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Houtou+Fudou+Higashikoiji" }
    },

    // 2026-04-09 (Thu) - Afternoon: Saiko Nenba
    {
        id: "60", date: "2026-04-09", type: "main",
        time: { start: "14:00", end: "15:30" },
        name: { zh: "西湖 Iyashi no Sato Nenba (根場)", jp: "西湖いやしの里根場" },
        details: { notes: "茅草屋聚落，可眺望富士山。體驗穿盔甲/和服。" },
        contact: { phone: "+81-555-20-4677" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Iyashi+no+Sato" }
    },

    // 2026-04-09 (Thu) - Check-in: Hoshinoya
    {
        id: "61", date: "2026-04-09", type: "accommodation",
        time: { start: "16:00", end: "17:00" },
        name: { zh: "星のや富士", jp: "星のや富士 Check-in" },
        details: { notes: "入住。直接開至 Reception 代客泊車。搭吉普車至客房。", booking_info: "Check-in 15:00" },
        address: { jp: "山梨県南都留郡富士河口湖町大石1408" },
        contact: { phone: "+81-50-3134-8091" },
        location: { google_places_uri: "https://hoshinoya.com/fuji/" }
    },

    // 2026-04-09 (Thu) - Dinner: Glamping Curry
    {
        id: "62", date: "2026-04-09", type: "meal",
        time: { start: "18:30", end: "20:30" },
        name: { zh: "星野晚餐 (Glamping Curry)", jp: "星のや富士 ディナー" },
        details: { notes: "建議預約戶外荷蘭鍋晚餐，享受焚火氛圍。" },
        contact: { phone: "+81-50-3134-8091" },
        location: { google_places_uri: "https://hoshinoya.com/fuji/" }
    },
    {
        id: "63", date: "2026-04-09", type: "accommodation",
        time: { start: "21:00", end: "21:30" },
        name: { zh: "星のや富士", jp: "星のや富士" },
        details: { notes: "返回客房。享受寧靜夜晚。" },
        contact: { phone: "+81-50-3134-8091" },
        location: { google_places_uri: "https://hoshinoya.com/fuji/" }
    }
);
