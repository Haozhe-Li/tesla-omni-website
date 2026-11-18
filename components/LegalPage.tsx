import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { type Lang } from "@/content/home";
import { CONTACT, CONTACT_EMAIL, PRIVACY, SUPPORT, UPDATED } from "@/content/legal";

/** The privacy policy or the support page, in one language. The text is ours (content/legal.ts). */
export function LegalPage({ lang, page }: { lang: Lang; page: "privacy" | "support" }) {
  const contact = CONTACT_EMAIL
    ? CONTACT[page][lang].replace("{link}", `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`)
    : "";
  const html = (page === "privacy" ? PRIVACY : SUPPORT)[lang]
    .replace("{updated}", UPDATED[lang])
    .replace("{contact}", contact);
  return (
    <div lang={lang === "zh" ? "zh-Hans" : "en"} className="flex min-h-full flex-col">
      <SiteHeader lang={lang} />
      <main className="relative flex-1">
        <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-80" />
        <article
          className="legal relative mx-auto max-w-2xl px-6 pt-16 pb-24 text-base sm:pt-24"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
