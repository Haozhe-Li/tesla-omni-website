# Omni Auto website

The public site of Omni Auto, at https://auto.omniknows.xyz: a home page, the privacy policy and
the support page, in English (at the root) and Simplified Chinese (under `/zh`). Next.js 16 (App
Router, all pages static) with Tailwind CSS 4.

| Page | English | 中文 |
|---|---|---|
| Home | `/` | `/zh` |
| Privacy policy | `/privacy` | `/zh/privacy` |
| Support | `/support` | `/zh/support` |

The iOS app opens the privacy and support pages here (`AppSettings.pageURL`). `/privacy?lang=zh`
and `/support?lang=zh`, the old addresses' form, redirect to the Chinese pages, and the API
server's own `/privacy` and `/support` redirect here.

## Editing

- The home page's words: `content/home.ts` (both languages). Layout: `components/Home.tsx`.
- The privacy policy and support text: `content/legal.ts`. Keep the policy true to the backend's
  code, and change `UPDATED` with it. Set `CONTACT_EMAIL` to show the contact lines.
- Colors come from the app icon (`app/globals.css`); `public/logo.png` is the icon's mark on a
  transparent background, `app/icon.png` and `app/apple-icon.png` the icon itself.

## Running

```bash
npm install
npm run dev
```

## Deploying

Import the repository in Vercel (no settings needed), then add `auto.omniknows.xyz` under the
project's domains and point that name at Vercel in DNS (a CNAME to `cname.vercel-dns.com`).
