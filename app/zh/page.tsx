import type { Metadata } from "next";

import { Home } from "@/components/Home";
import { COPY } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: COPY.zh.meta.title },
  description: COPY.zh.meta.description,
};

export default function Page() {
  return <Home lang="zh" />;
}
