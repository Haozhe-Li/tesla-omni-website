import Image from "next/image";

import { COPY, type Lang } from "@/content/home";

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <Image src="/logo.png" alt="" width={20} height={20} />
            <span>
              © 2026 Omni Auto · {t.madeBy}{" "}
              <a href="https://haozhe.li" className="text-ink hover:underline">Haozhe Li</a>
            </span>
          </p>
          <nav className="flex gap-6">
            <a href="/privacy" className="transition-colors hover:text-ink">{t.nav.privacy}</a>
            <a href="/support" className="transition-colors hover:text-ink">{t.nav.support}</a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-faint">{t.disclaimer}</p>
      </div>
    </footer>
  );
}
