import {
  ArrowDown,
  ArrowRight,
  CloudRain,
  Coffee,
  Gauge,
  Globe,
  Route,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { CallDemo } from "@/components/CallDemo";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { COPY, type AskIcon, type Lang } from "@/content/home";

const ICONS: Record<AskIcon, LucideIcon> = {
  route: Route,
  charger: Zap,
  stop: Coffee,
  weather: CloudRain,
  web: Globe,
  car: Gauge,
};

/** The home page: what Omni does (a call playing on a phone), what you can ask, how it goes. */
export function Home({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  return (
    <div lang={lang === "zh" ? "zh-Hans" : "en"} className="flex min-h-full flex-col">
      <SiteHeader lang={lang} />
      <main className="flex-1">
        {/* Hero: the promise on the left, a call on the right */}
        <section className="relative overflow-hidden">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pt-16 pb-20 sm:pt-24 lg:grid-cols-[1fr_auto] lg:gap-20 lg:pt-28 lg:pb-28">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-[13px] text-muted">
                <span className="pulse-dot size-1.5 rounded-full bg-agent" />
                {t.badge}
              </p>
              <h1 className="mt-6 text-[2.75rem] leading-[1.04] font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-[4.25rem]">
                {t.title}
                <span className="block text-faint sm:whitespace-pre-line">{t.title2}</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">{t.lead}</p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-[15px] font-medium text-bg">
                  {t.soon}
                </span>
                <a
                  href="#how"
                  className="inline-flex h-11 items-center gap-1.5 text-[15px] font-medium text-muted transition-colors hover:text-ink"
                >
                  {t.how}
                  <ArrowDown className="size-4" />
                </a>
              </div>
            </div>
            <CallDemo lang={lang} />
          </div>
        </section>

        {/* What you can say */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl">{t.askTitle}</h2>
            <p className="mt-3 text-lg text-muted">{t.askLead}</p>
            <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {t.asks.map((ask) => {
                const Icon = ICONS[ask.icon];
                return (
                  <li key={ask.text} className="flex items-center gap-3.5 rounded-2xl border border-line bg-card p-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-bubble text-ink">
                      <Icon className="size-[18px]" strokeWidth={1.75} />
                    </span>
                    <span className="text-[15px] leading-snug">“{ask.text}”</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="scroll-mt-14 border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-balance sm:text-4xl">{t.stepsTitle}</h2>
            <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {t.steps.map((step, i) => (
                <li key={step.title} className="border-t border-line pt-5">
                  <span className="font-mono text-[13px] text-faint">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Privacy, in one line */}
        <section className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <h2 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
                <ShieldCheck className="size-5 text-agent" strokeWidth={1.75} />
                {t.privacyTitle}
              </h2>
              <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[15px] text-muted">
                {t.privacy.map((line) => (
                  <li key={line} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-faint" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <a href="/privacy" className="inline-flex shrink-0 items-center gap-1 text-[15px] font-medium hover:underline">
              {t.privacyLink}
              <ArrowRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
