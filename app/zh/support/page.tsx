import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "技术支持" };

export default function Page() {
  return <LegalPage lang="zh" page="support" />;
}
