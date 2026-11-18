"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { BatteryFull, Map as MapIcon, Mic, Navigation, Phone, Signal, Volume2, Wifi } from "lucide-react";

import { COPY, type Lang } from "@/content/home";

// A call with Omni, as the app shows it, playing on a loop:
// 0 listening (a dim blue edge, breathing), 1 you speak (bright blue), 2 Omni searches the map,
// 3 it sends the route (copper: Omni is working), 4 it answers (copper), then it starts over.
const HOLD = [1400, 1500, 900, 1000, 5200]; // ms spent at each step

export function CallDemo({ lang }: { lang: Lang }) {
  const t = COPY[lang].call;
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const id = setTimeout(() => setStep(4), 0);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => setStep((s) => (s + 1) % HOLD.length), HOLD[step]);
    return () => clearTimeout(id);
  }, [step]);

  const shown = (from: number) =>
    `transition-all duration-500 ease-out ${step >= from ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"}`;

  return (
    <div className="relative mx-auto w-[300px] sm:w-[320px]" aria-hidden>
      {/* the light the screen gives off */}
      <div
        className={`absolute -inset-10 -z-10 rounded-full blur-3xl transition-colors duration-700 ${
          step >= 2 ? "bg-agent/15" : "bg-user/15"
        }`}
      />
      <div className="rounded-[3.1rem] bg-[#0b0b0c] p-[10px] shadow-2xl ring-1 shadow-black/20 ring-black/10 dark:shadow-black/60 dark:ring-white/12">
        <div className="relative flex h-[620px] flex-col overflow-hidden rounded-[2.5rem] bg-screen sm:h-[650px]">
          {/* the edge light: blue while you are heard, copper while Omni works and speaks */}
          <div
            style={{ "--glow": "var(--user)" } as CSSProperties}
            className={`edge-glow absolute inset-0 rounded-[2.5rem] transition-opacity duration-700 ${
              step === 0 ? "breathe" : step === 1 ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            style={{ "--glow": "var(--agent)" } as CSSProperties}
            className={`edge-glow absolute inset-0 rounded-[2.5rem] transition-opacity duration-700 ${
              step === 2 || step === 3 ? "opacity-60" : step === 4 ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* status bar and the Dynamic Island */}
          <div className="relative flex h-12 shrink-0 items-center justify-between px-7 pt-1 text-[13px] font-semibold text-ink">
            <span>9:41</span>
            <span className="absolute top-2.5 left-1/2 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
            <span className="flex items-center gap-1">
              <Signal className="size-3.5" strokeWidth={2.5} />
              <Wifi className="size-3.5" strokeWidth={2.5} />
              <BatteryFull className="size-4" strokeWidth={2} />
            </span>
          </div>

          {/* the conversation */}
          <div className="relative flex-1 space-y-3 px-5 pt-8">
            <div className={`flex justify-end ${shown(1)}`}>
              <p className="max-w-[85%] rounded-[18px] bg-screen-bubble px-3.5 py-2.5 text-[15px] leading-snug text-ink">
                {t.you}
              </p>
            </div>
            <p className={`flex items-center gap-2.5 pt-1 text-[13px] text-screen-dim ${shown(2)}`}>
              <MapIcon className="size-4 shrink-0" strokeWidth={1.5} />
              <span className="truncate">{t.search}</span>
            </p>
            <p className={`flex items-center gap-2.5 text-[13px] text-screen-dim ${shown(3)}`}>
              <Navigation className="size-4 shrink-0" strokeWidth={1.5} />
              <span className="truncate">{t.navigate}</span>
            </p>
            <p className={`pt-1 font-serif text-[18px] leading-[1.45] text-ink ${shown(4)}`}>{t.omni}</p>
          </div>

          {/* what the app says while it listens, then the call's buttons */}
          <p
            className={`relative pb-5 text-center text-[13px] text-screen-dim transition-opacity duration-500 ${
              step === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            {t.listening}
          </p>
          <div className="relative flex items-center justify-between px-6 pb-7">
            <span className="flex size-11 items-center justify-center rounded-full border border-white/20 bg-glass text-ink backdrop-blur-md">
              <Volume2 className="size-[18px]" fill="currentColor" />
            </span>
            <span
              className={`flex size-[54px] items-center justify-center rounded-full border border-white/20 text-ink backdrop-blur-md transition-colors duration-500 ${
                step <= 1 ? "bg-user/40" : "bg-glass"
              }`}
            >
              <Mic className="size-[22px]" />
            </span>
            <span className="flex size-11 items-center justify-center rounded-full bg-[#ff3b30] text-white">
              <Phone className="size-[18px] rotate-[135deg]" fill="currentColor" strokeWidth={0} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
