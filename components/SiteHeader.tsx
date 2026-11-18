import Image from "next/image";

import { COPY, type Lang } from "@/content/home";

// Links are plain <a> to the shared addresses (/, /privacy, /support): each page load picks the
// browser's language again (next.config.ts), with no client-side routing to second-guess it.
/* eslint-disable @next/next/no-html-link-for-pages */

/** The bar along the top: the mark and name (home), and the page links. */
export function SiteHeader({ lang }: { lang: Lang }) {
  const t = COPY[lang].nav;
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex shrink-0 items-center gap-2 text-[15px] font-semibold tracking-tight">
          <Image src="/logo.png" alt="" width={26} height={26} priority />
          Omni Auto
        </a>
        <nav className="flex items-center gap-5 text-sm whitespace-nowrap text-muted sm:gap-7">
          <a href="/#how" className="hidden transition-colors hover:text-ink sm:block">{t.how}</a>
          <a href="/privacy" className="transition-colors hover:text-ink">{t.privacy}</a>
          <a href="/support" className="transition-colors hover:text-ink">{t.support}</a>
        </nav>
      </div>
    </header>
  );
}
