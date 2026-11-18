import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "隐私政策" };

export default function Page() {
  return <LegalPage lang="zh" page="privacy" />;
}
