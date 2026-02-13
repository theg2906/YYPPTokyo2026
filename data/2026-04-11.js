if (!window.initialItineraryData) window.initialItineraryData = [];

window.initialItineraryData.push(
    // 2026-04-11 (Sat) - Morning: Art & Sweets
    {
        id: "75", date: "2026-04-11", type: "accommodation",
        time: { start: "10:00", end: "10:30" },
        name: { zh: "星のや富士", jp: "星のや富士" },
        details: { notes: "退房。開車出發。" },
        contact: { phone: "+81-50-3134-8091" },
        location: { google_places_uri: "https://hoshinoya.com/fuji/" }
    },
    {
        id: "76", date: "2026-04-11", type: "main",
        time: { start: "10:40", end: "12:30" },
        name: { zh: "久保田一竹美術館 (和服藝術)", jp: "久保田一竹美術館" },
        details: { notes: "米其林三星景點。建築、庭園與和服染色藝術。" },
        contact: { phone: "+81-555-76-8811" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Itchiku+Kubota+Art+Museum" }
    },
    {
        id: "77", date: "2026-04-11", type: "meal",
        time: { start: "12:45", end: "14:15" },
        name: { zh: "HanaCafe Kikyou (桔梗信玄餅)", jp: "HanaCafe Kikyou" },
        details: { notes: "老舖咖啡廳，環境優雅。必吃信玄餅甜點。" },
        contact: { phone: "+81-555-28-3100" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=HanaCafe+Kikyou" }
    },

    // 2026-04-11 (Sat) - Afternoon: Music Forest & Return Car
    {
        id: "78", date: "2026-04-11", type: "main",
        time: { start: "14:30", end: "16:00" },
        name: { zh: "河口湖 音樂之森美術館", jp: "河口湖 音楽と森の美術館" },
        details: { notes: "歐風庭園與自動演奏樂器。最後的悠閒時光。" },
        contact: { phone: "+81-555-20-4111" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Kawaguchiko+Music+Forest+Museum" }
    },
    {
        id: "79", date: "2026-04-11", type: "transport",
        time: { start: "16:15", end: "16:45" },
        name: { zh: "還車: Nippon Rent-A-Car 河口湖站前", jp: "ニッポンレンタカー 河口湖駅前" },
        details: { notes: "請加滿油後還車 (附近有加油站)。預留驗車時間。" },
        contact: { phone: "050-1712-2693" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Nippon+Rent-A-Car+Kawaguchiko" }
    },

    // 2026-04-11 (Sat) - Return to Tokyo
    {
        id: "80", date: "2026-04-11", type: "transport",
        time: { start: "17:38", end: "19:40" },
        name: { zh: "特急 富士回遊 (河口湖 → 新宿)", jp: "特急 富士回遊" },
        details: { notes: "河口湖17:38發 -> 新宿19:40著。" },
        contact: { phone: "" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=Kawaguchiko+Station" }
    },
    {
        id: "81", date: "2026-04-11", type: "accommodation",
        time: { start: "19:45", end: "20:15" },
        name: { zh: "THE KNOT TOKYO Shinjuku", jp: "ザ ノット 東京新宿" },
        address: { jp: "東京都新宿区西新宿4-31-1" },
        contact: { phone: "+81-3-3375-6511" },
        details: { booking_info: "Check-in 15:00" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=THE+KNOT+TOKYO+Shinjuku" }
    },
    {
        id: "82", date: "2026-04-11", type: "meal",
        time: { start: "20:30", end: "22:30" },
        name: { zh: "牛舌的檸檬 (新宿總本店)", jp: "牛たんの檸檬 總本店" },
        details: {
            notes: "必吃熱門名店。預約代號: IDL2CNEG。",
            booking_info: "已預訂 2026/04/11 20:30 (2名)。需準時。建議選厚切牛舌定食。"
        },
        address: { jp: "東京都新宿区西新宿7-16-12 YSビル B1F" },
        contact: { phone: "+81-3-6279-3997" },
        location: { google_places_uri: "https://tabelog.com/tokyo/A1304/A130401/13251502/" }
    },
    {
        id: "83", date: "2026-04-11", type: "accommodation",
        time: { start: "22:30", end: "23:00" },
        name: { zh: "THE KNOT TOKYO Shinjuku", jp: "ザ ノット 東京新宿" },
        details: { notes: "返回飯店休息。計程車或步行回西新宿。" },
        contact: { phone: "+81-3-3375-6511" },
        location: { google_places_uri: "https://www.google.com/maps/search/?api=1&query=THE+KNOT+TOKYO+Shinjuku" }
    }
);
