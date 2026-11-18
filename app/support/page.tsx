import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Support" };

export default function Page() {
  return <LegalPage lang="en" page="support" />;
}
