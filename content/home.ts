// Everything the site says outside the legal pages, in English and Simplified Chinese. The
// language is the browser's (next.config.ts): there is no switch.

export type Lang = "en" | "zh";

export type AskIcon = "route" | "charger" | "stop" | "weather" | "web" | "car";

export const COPY = {
  en: {
    nav: { how: "How it works", privacy: "Privacy", support: "Support" },
    badge: "Voice assistant for Tesla",
    title: "Just say where.",
    title2: "Omni sends it\nto your Tesla.", // \n: where the line breaks on wider screens
    lead: "Tell Omni where you are going. It finds the places, plans the stops and sends the route to your car, while your hands stay on the wheel.",
    soon: "Coming soon to the App Store",
    how: "How it works",
    // The call on the phone: what you say, what Omni does, what it answers.
    call: {
      you: "Nearest McDonald's, then home",
      search: "Search maps for “McDonald's”",
      navigate: "Navigate: McDonald's → Home",
      omni: "McDonald's on Main St first, then home. The route is on your Tesla.",
      listening: "Listening…",
    },
    askTitle: "Talk to it like a passenger.",
    askLead: "In English, in Chinese, or both at once.",
    asks: [
      { icon: "route", text: "Nearest McDonald's, then home." },
      { icon: "charger", text: "Find a Supercharger with free stalls." },
      { icon: "stop", text: "Add a coffee stop on the way." },
      { icon: "weather", text: "Will it rain when I get there?" },
      { icon: "web", text: "What time does Costco close?" },
      { icon: "car", text: "How much range do I have left?" },
    ] as { icon: AskIcon; text: string }[],
    stepsTitle: "Three steps. Eyes on the road.",
    steps: [
      { title: "Start a call", text: "Swipe up in the app, or just say “Hey Omni”." },
      { title: "Say where", text: "A place, a few stops, a charger on the way." },
      { title: "Drive", text: "Omni sends the route to your Tesla." },
    ],
    privacyTitle: "Private by design.",
    privacy: ["“Hey Omni” is heard on your phone", "Recordings are never kept", "No ads, no tracking"],
    privacyLink: "Privacy policy",
    madeBy: "Made by",
    disclaimer: "Omni Auto is an independent app, not affiliated with or endorsed by Tesla, Inc.",
    meta: {
      title: "Omni Auto: just say where",
      description: "Omni is a voice assistant for Tesla: say where you are going, and it sends the route, stops and all, to your car.",
    },
  },
  zh: {
    nav: { how: "怎么用", privacy: "隐私", support: "支持" },
    badge: "Tesla 语音助手",
    title: "开口，就出发。",
    title2: "Omni 把路线\n发到你的 Tesla。",
    lead: "告诉 Omni 你要去哪。它找到地点、排好途经点，把路线发到你的车上，你的手一直在方向盘上。",
    soon: "即将上架 App Store",
    how: "怎么用",
    call: {
      you: "去最近的麦当劳，然后回家",
      search: "在地图上搜索“麦当劳”",
      navigate: "导航：麦当劳 → 家",
      omni: "先去 Main St 的麦当劳，再回家，路线已经发到你的 Tesla。",
      listening: "在听…",
    },
    askTitle: "像跟副驾说话一样。",
    askLead: "说中文、说英文，混着说都行。",
    asks: [
      { icon: "route", text: "去最近的麦当劳，然后回家。" },
      { icon: "charger", text: "找个有空位的超充。" },
      { icon: "stop", text: "路上加一个咖啡店。" },
      { icon: "weather", text: "到那边会下雨吗？" },
      { icon: "web", text: "Costco 几点关门？" },
      { icon: "car", text: "还能跑多少公里？" },
    ] as { icon: AskIcon; text: string }[],
    stepsTitle: "三步，眼睛不离路面。",
    steps: [
      { title: "开始通话", text: "在 App 里上滑，或者直接说“Hey Omni”。" },
      { title: "说出去哪", text: "一个地点，几个途经点，路上的超充。" },
      { title: "出发", text: "Omni 把路线发到你的 Tesla。" },
    ],
    privacyTitle: "隐私，从设计开始。",
    privacy: ["“Hey Omni”在手机上识别", "录音从不保存", "没有广告，不追踪"],
    privacyLink: "隐私政策",
    madeBy: "作者",
    disclaimer: "Omni Auto 是独立的第三方 App，与 Tesla, Inc. 没有关联，也未获其认可。",
    meta: {
      title: "Omni Auto：开口，就出发",
      description: "Omni 是 Tesla 语音助手：说出你要去哪，路线连同途经点直接发到你的车上。",
    },
  },
} as const;
