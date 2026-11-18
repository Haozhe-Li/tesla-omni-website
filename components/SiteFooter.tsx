import Link from "next/link";

import { COPY, href, type Lang } from "@/content/home";

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Omni Auto</p>
        <nav className="flex gap-5">
          <Link href={href(lang, "/privacy")} className="hover:text-ink">{t.nav.privacy}</Link>
          <Link href={href(lang, "/support")} className="hover:text-ink">{t.nav.support}</Link>
        </nav>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-10 text-xs text-muted">{t.disclaimer}</p>
    </footer>
  );
}
