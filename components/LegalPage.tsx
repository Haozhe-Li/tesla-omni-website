import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { href, type Lang } from "@/content/home";
import { CONTACT, CONTACT_EMAIL, PRIVACY, SUPPORT, UPDATED } from "@/content/legal";

/** The privacy policy or the support page, in one language. The text is ours (content/legal.ts). */
export function LegalPage({ lang, page }: { lang: Lang; page: "privacy" | "support" }) {
  const contact = CONTACT_EMAIL
    ? CONTACT[page][lang].replace("{link}", `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`)
    : "";
  const html = (page === "privacy" ? PRIVACY : SUPPORT)[lang]
    .replace("{updated}", UPDATED[lang])
    .replace("{contact}", contact);
  const other = href(lang === "en" ? "zh" : "en", page === "privacy" ? "/privacy" : "/support");
  return (
    <div lang={lang === "zh" ? "zh-Hans" : "en"} className="flex min-h-full flex-col">
      <SiteHeader lang={lang} other={other} />
      <main className="aura flex-1">
        <article
          className="legal mx-auto max-w-3xl px-5 pt-12 pb-20 text-[17px]"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
