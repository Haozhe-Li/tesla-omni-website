import type { NextConfig } from "next";

const PAGES = ["", "/privacy", "/support"];

const nextConfig: NextConfig = {
  // Tailwind CSS v4 through Turbopack (as create-next-app sets it up).
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // The app and App Store Connect used to open these pages on the API server with ?lang=zh|en.
  async redirects() {
    return PAGES.filter(Boolean).map((page) => ({
      source: page,
      has: [{ type: "query" as const, key: "lang", value: "zh(?:-.*)?" }],
      destination: `/zh${page}`,
      permanent: true,
    }));
  },
  // The language follows the browser, with no switch: a browser that puts Chinese first gets the
  // Chinese page at the same address (the pages under /zh). ?lang=en keeps English.
  async rewrites() {
    return {
      beforeFiles: PAGES.map((page) => ({
        source: page || "/",
        has: [{ type: "header" as const, key: "accept-language", value: "[zZ][hH](?:[-_,;].*)?" }],
        missing: [{ type: "query" as const, key: "lang" }],
        destination: `/zh${page}`,
      })),
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
