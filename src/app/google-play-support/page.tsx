import type { Metadata } from "next";

import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { appStoreSupportCards, playReleaseContact, playSupportLinks } from "@/lib/play-release-content";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  title: "Google Play Support",
  description:
    "Google Play support page for E.R. Fitness with app identity, support, privacy policy, terms, data deletion, and medical educational disclaimer links.",
  path: "/google-play-support",
  keywords: ["E.R. Fitness Google Play", "Google Play support", "fitness app privacy policy"]
});

const playListingUrls = [
  "/app",
  "/app-overview",
  "/support",
  "/data-deletion",
  "/legal/privacy",
  "/legal/terms",
  "/legal/fitness-education-disclaimer",
  "/legal/medical-educational-disclaimer"
];

export default function GooglePlaySupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Google Play Support"
        title="Public support index for the E.R. Fitness Play listing."
        description="Use this page as a public index for app identity, support contact, privacy policy, terms, data deletion, and educational safety disclaimers."
        primaryCta={{ label: "Privacy Policy", href: "/legal/privacy" }}
        secondaryCta={{ label: "Data Deletion", href: "/data-deletion" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="App Record"
            title={`${playReleaseContact.appName} by ${playReleaseContact.developerName}`}
            description={`Package ID: ${playReleaseContact.packageId}. Support email: ${playReleaseContact.supportEmail}.`}
          />
          <div className="mt-6">
            <CardGrid items={appStoreSupportCards} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Required Public Pages"
            title="Privacy, support, deletion, terms, and disclaimers are linkable."
            description="After deployment, replace localhost or staging hosts with the final production domain in the Google Play Console."
          />
          <div className="mt-6">
            <CardGrid items={playSupportLinks} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="URL Checklist"
            title="Production paths to map in the Play Console."
            description="These routes are static App Router pages and should be public after deployment."
          />
          <div className="mt-5">
            <TagGrid items={playListingUrls} />
          </div>
        </div>
      </section>
    </>
  );
}
