// Everything the site says outside the legal pages, in English and Simplified Chinese.

export type Lang = "en" | "zh";

/** A page's address in a language: English at the root, Chinese under /zh. */
export function href(lang: Lang, path: "/" | "/privacy" | "/support"): string {
  if (lang === "en") return path;
  return path === "/" ? "/zh" : `/zh${path}`;
}

export type FeatureIcon = "route" | "charger" | "ask" | "wake" | "book" | "voice";

export const COPY = {
  en: {
    nav: { features: "Features", privacy: "Privacy", support: "Support", other: "中文" },
    eyebrow: "The voice assistant for your Tesla",
    title: "Your Tesla,\nby voice.", // \n: where the line breaks
    lead: "Tell Omni where you are going. It plans the route, stops and all, and sends it straight to your car.",
    soon: "Coming soon to the App Store",
    more: "See what it does",
    chat: {
      you: "Go to the nearest McDonald's, then take me home.",
      omni: "McDonald's on Main St first, then home. It's on your Tesla.",
    },
    featuresTitle: "Everything, with your hands on the wheel",
    features: [
      { icon: "route", title: "Just say where to",
        text: "“The nearest McDonald's, then home.” Omni finds the places, plans the stops and sends the whole trip to your Tesla." },
      { icon: "charger", title: "Superchargers, live",
        text: "Superchargers nearby with the stalls free right now, along with your battery and range." },
      { icon: "ask", title: "Ask anything",
        text: "The weather, opening hours, scores, the news: Omni looks it up while you drive." },
      { icon: "wake", title: "Hey Omni",
        text: "Start without touching your phone. The wake word is heard on your phone, never in the cloud." },
      { icon: "book", title: "Address Book",
        text: "Omni remembers the places you go, so the next one is a tap away and “take me home” just works." },
      { icon: "voice", title: "Your language, your voice",
        text: "Speak English or Chinese, or mix them, and pick the voice Omni answers in." },
    ] as { icon: FeatureIcon; title: string; text: string }[],
    howTitle: "Three steps, no screens",
    how: ["Swipe up, or say “Hey Omni”", "Say where you are going", "The route is on your Tesla"],
    privacyTitle: "Private by design",
    privacy: [
      "“Hey Omni” is recognized on your phone.",
      "Recordings are never kept.",
      "No ads, no tracking, and your data is never sold.",
      "Delete conversations, places or your whole account at any time.",
    ],
    privacyLink: "Read the privacy policy",
    disclaimer: "Omni Auto is an independent app, not affiliated with or endorsed by Tesla, Inc.",
    madeBy: "Made by",
    meta: {
      title: "Omni Auto: your Tesla, by voice",
      description: "Omni is the voice assistant for your Tesla: say where you are going, and the route, stops and all, goes straight to your car.",
    },
  },
  zh: {
    nav: { features: "功能", privacy: "隐私", support: "支持", other: "English" },
    eyebrow: "你的 Tesla 语音助手",
    title: "开 Tesla，\n动动嘴就行。",
    lead: "告诉 Omni 你要去哪。它会规划路线、安排途经点，直接发到你的车上。",
    soon: "即将上架 App Store",
    more: "看看能做什么",
    chat: {
      you: "导航去最近的麦当劳，然后回家。",
      omni: "好的，先去 Main St 的麦当劳，再回家，路线已经发到你的 Tesla。",
    },
    featuresTitle: "手不离方向盘，什么都能办",
    features: [
      { icon: "route", title: "直接说想去哪",
        text: "“去最近的麦当劳，然后回家。”Omni 找到地点、排好途经点，把整条路线发到你的 Tesla。" },
      { icon: "charger", title: "超充，实时",
        text: "附近超充站现在有几个空位，还有你的电量和续航，一问就知道。" },
      { icon: "ask", title: "还可以问别的",
        text: "天气、营业时间、比分、新闻，开车的时候 Omni 帮你查。" },
      { icon: "wake", title: "Hey Omni",
        text: "不碰手机就能开始。唤醒词在手机上识别，从不上传云端。" },
      { icon: "book", title: "地址簿",
        text: "Omni 记住你去过的地点，下一个目的地点一下就走，说“回家”就能导航。" },
      { icon: "voice", title: "你的语言，你的声音",
        text: "说中文、说英文，混着说都行，还能挑 Omni 回答你的声音。" },
    ] as { icon: FeatureIcon; title: string; text: string }[],
    howTitle: "三步，不用看屏幕",
    how: ["上滑，或说“Hey Omni”", "说出你要去哪", "路线已经在你的 Tesla 上"],
    privacyTitle: "隐私，从设计开始",
    privacy: [
      "“Hey Omni”在手机上识别。",
      "录音从不保存。",
      "不投广告，不追踪，也从不出售你的数据。",
      "对话、地点，甚至整个账号，随时都能删除。",
    ],
    privacyLink: "阅读隐私政策",
    disclaimer: "Omni Auto 是独立的第三方 App，与 Tesla, Inc. 没有关联，也未获其认可。",
    madeBy: "作者",
    meta: {
      title: "Omni Auto：开 Tesla，动动嘴就行",
      description: "Omni 是你的 Tesla 语音助手：说出你要去哪，路线连同途经点直接发到你的车上。",
    },
  },
} as const;
