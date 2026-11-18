import Image from "next/image";
import Link from "next/link";

import { COPY, href, type Lang } from "@/content/home";

/** The bar along the top: the mark and name (home), the page links, and the other language. */
export function SiteHeader({ lang, other }: { lang: Lang; other: string }) {
  const t = COPY[lang].nav;
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href={href(lang, "/")} className="flex shrink-0 items-center gap-2.5 font-semibold tracking-tight whitespace-nowrap">
          <Image src="/logo.png" alt="" width={32} height={32} priority />
          <span className="text-[17px]">Omni Auto</span>
        </Link>
        <nav className="flex items-center gap-0.5 text-[14px] whitespace-nowrap text-muted sm:gap-1 sm:text-[15px]">
          <Link href={`${href(lang, "/")}#features`} className="hidden rounded-full px-3 py-1.5 hover:text-ink md:block">
            {t.features}
          </Link>
          <Link href={href(lang, "/privacy")} className="rounded-full px-2 py-1.5 hover:text-ink sm:px-3">
            {t.privacy}
          </Link>
          <Link href={href(lang, "/support")} className="rounded-full px-2 py-1.5 hover:text-ink sm:px-3">
            {t.support}
          </Link>
          <Link
            href={other}
            lang={lang === "en" ? "zh-Hans" : "en"}
            className="ml-1 rounded-full border border-line px-2.5 py-1.5 text-ink hover:border-teal/40 sm:px-3"
          >
            {t.other}
          </Link>
        </nav>
      </div>
    </header>
  );
}
