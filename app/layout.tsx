import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";

import { COPY } from "@/content/home";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auto.omniknows.xyz"),
  title: { default: COPY.en.meta.title, template: "%s · Omni Auto" },
  description: COPY.en.meta.description,
  applicationName: "Omni Auto",
  openGraph: { siteName: "Omni Auto", type: "website", images: ["/logo.png"] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9f9" },
    { media: "(prefers-color-scheme: dark)", color: "#081011" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
