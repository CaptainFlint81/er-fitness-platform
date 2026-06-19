import type { Metadata } from "next";

import { AppValueCTA } from "@/components/AppValueCTA";
import { CardGrid } from "@/components/CardGrid";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { appExclusiveFeatures, publicAccessCards, subscriberAccessCards } from "@/lib/access-control";
import { appStoreSupportCards, playSupportLinks } from "@/lib/play-release-content";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  title: "App Overview",
  description:
    "Overview of the E.R. Fitness app relationship to the Every Routine Fitness website, including tracking, education, support, legal, privacy, and data deletion pages.",
  path: "/app-overview",
  keywords: ["E.R. Fitness app overview", "fitness app support", "fitness education platform"]
});

const overviewSections = [
  "The website is a public education and support companion.",
  "The mobile app is the tracking, routine, reminder, reward, and personalization layer.",
  "Backend services and billing are not active on the public website in this phase.",
  "Google Play release support pages are public and can be connected to production URLs after deployment."
];

export default function AppOverviewPage() {
  return (
    <>
      <PageHero
        eyebrow="App Overview"
        title="A public overview for app users and Play reviewers."
        description="This page explains what the E.R. Fitness app does, what this website provides, and where users can find support, privacy, deletion, terms, and disclaimer information."
        primaryCta={{ label: "App Landing", href: "/app" }}
        secondaryCta={{ label: "Support", href: "/support" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <AppValueCTA />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Scope"
              title="The app tracks. The website teaches and supports."
              description="The two projects are intentionally separate but connected by public education, policy, and support URLs."
            />
          </div>
          <div className="grid gap-3">
            {overviewSections.map((section) => (
              <p key={section} className="rounded-md border border-white/10 bg-white/[0.045] p-4 text-sm leading-6 text-zinc-300">
                {section}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Release Support"
            title="Required public support pages are available."
            description="These pages cover the app landing surface, privacy, terms, support, data deletion, and educational safety boundaries."
          />
          <div className="mt-6">
            <CardGrid items={[...appStoreSupportCards, ...playSupportLinks]} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader title="Public Website Access" description="Public pages can be used by users and reviewers without requiring app account access." />
            <div className="mt-5">
              <CardGrid items={publicAccessCards} columns="two" />
            </div>
          </div>
          <div>
            <SectionHeader title="App-Owned Features" description="These capabilities belong in the app or future authenticated surfaces." />
            <div className="mt-5">
              <TagGrid items={appExclusiveFeatures} tone="orange" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            title="Future Subscriber and Account Areas"
            description="The website still treats account, billing, media, and community data as future backend-integrated surfaces."
          />
          <div className="mt-6">
            <CardGrid items={subscriberAccessCards} columns="three" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/50">
        <div className="section-inner">
          <DisclaimerNotice />
        </div>
      </section>
    </>
  );
}
