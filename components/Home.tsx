import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  AudioLines,
  BookMarked,
  MessageCircleQuestionMark,
  Route,
  ShieldCheck,
  Volume2,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { COPY, href, type FeatureIcon, type Lang } from "@/content/home";

const ICONS: Record<FeatureIcon, LucideIcon> = {
  route: Route,
  charger: Zap,
  ask: MessageCircleQuestionMark,
  wake: AudioLines,
  book: BookMarked,
  voice: Volume2,
};

/** The home page: what Omni Auto is, its key features, how a trip goes, and privacy. */
export function Home({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  return (
    <div lang={lang === "zh" ? "zh-Hans" : "en"} className="flex min-h-full flex-col">
      <SiteHeader lang={lang} other={href(lang === "en" ? "zh" : "en", "/")} />
      <main className="flex-1">
        {/* Hero */}
        <section className="aura">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pt-16 pb-20 lg:grid-cols-[1.1fr_1fr] lg:pt-24 lg:pb-28">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm font-medium text-accent backdrop-blur">
                <span className="size-1.5 rounded-full bg-copper" />
                {t.eyebrow}
              </p>
              <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight whitespace-pre-line sm:text-6xl lg:text-7xl">
                {t.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{t.lead}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <span className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-[15px] font-semibold text-bg">
                  {t.soon}
                </span>
                <Link
                  href="#features"
                  className="inline-flex h-12 items-center gap-1.5 rounded-full border border-line bg-card px-6 text-[15px] font-medium backdrop-blur hover:border-teal/40"
                >
                  {t.more}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 -z-10 rounded-full bg-teal/20 blur-3xl" />
              <Image src="/logo.png" alt="Omni Auto" width={360} height={360} priority className="mx-auto w-64 sm:w-80" />
              <div className="mt-6 space-y-3">
                <p className="ml-auto w-fit max-w-[85%] rounded-3xl rounded-br-lg bg-teal px-4 py-3 text-[15px] leading-snug text-white shadow-lg shadow-teal/20">
                  {t.chat.you}
                </p>
                <div className="flex max-w-[90%] items-start gap-2.5">
                  <Image src="/logo.png" alt="" width={28} height={28} className="mt-1 shrink-0" />
                  <p className="rounded-3xl rounded-bl-lg border border-line bg-card px-4 py-3 text-[15px] leading-snug shadow-sm backdrop-blur">
                    {t.chat.omni}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:py-28">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{t.featuresTitle}</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.features.map((f) => {
                const Icon = ICONS[f.icon];
                return (
                  <article key={f.title} className="rounded-3xl border border-line bg-card p-6 backdrop-blur transition hover:border-teal/30">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-teal/10 text-accent">
                      <Icon className="size-5" strokeWidth={2} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{f.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.howTitle}</h2>
            <ol className="mt-10 grid gap-4 sm:grid-cols-3">
              {t.how.map((step, i) => (
                <li key={step} className="flex items-center gap-4 rounded-3xl border border-line bg-card p-5 backdrop-blur">
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-full text-[15px] font-semibold text-white ${i === 2 ? "bg-copper" : "bg-teal"}`}>
                    {i + 1}
                  </span>
                  <span className="text-[17px] font-medium leading-snug">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Privacy */}
        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
            <div className="overflow-hidden rounded-[2rem] bg-teal-deep px-7 py-10 text-white sm:px-12 sm:py-14">
              <ShieldCheck className="size-9 text-copper" strokeWidth={1.75} />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{t.privacyTitle}</h2>
              <ul className="mt-7 grid gap-3 text-[17px] text-white/85 sm:grid-cols-2">
                {t.privacy.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-copper" />
                    {line}
                  </li>
                ))}
              </ul>
              <Link
                href={href(lang, "/privacy")}
                className="mt-9 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-[15px] font-semibold text-teal-deep hover:bg-white/90"
              >
                {t.privacyLink}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
