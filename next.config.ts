import type { NextConfig } from "next";

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
  // Chinese now lives under /zh.
  async redirects() {
    return ["privacy", "support"].map((page) => ({
      source: `/${page}`,
      has: [{ type: "query" as const, key: "lang", value: "zh(?:-.*)?" }],
      destination: `/zh/${page}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
