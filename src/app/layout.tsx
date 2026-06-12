import type { Metadata } from "next";

import "@/app/globals.css";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalePreferenceSync } from "@/lib/i18n/client";
import { buildRouteMetadata, siteMetadataBase } from "@/lib/seo";

const rootMetadata = buildRouteMetadata({
  title: "Every Routine Fitness Companion Platform",
  description: "The E.R. Fitness education companion for body education, training, nutrition, recovery, injuries, adaptive fitness, routines, and app-tracked progress.",
  path: "/",
  keywords: ["free fitness resources", "fitness knowledge hub", "mobility training", "yoga", "Pilates", "Tai Chi"]
});

export const metadata: Metadata = {
  ...rootMetadata,
  metadataBase: siteMetadataBase,
  title: {
    default: "Every Routine Fitness | Companion Platform",
    template: "%s | E.R. Fitness"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-body antialiased">
        <LocalePreferenceSync />
        <SiteHeader />
        <DisclaimerGate />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
