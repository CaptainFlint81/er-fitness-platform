import type { Metadata } from "next";

import { AppValueCTA } from "@/components/AppValueCTA";
import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import {
  appExclusiveFeatures,
  previewAccessCards,
  publicAccessCards,
  subscriberAccessCards,
  subscriberAccessNotice,
  websiteAppValueMessage
} from "@/lib/access-control";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  title: "Why the E.R. Fitness App Exists",
  description:
    "Learn why the E.R. Fitness website is a public education preview and why the app remains the tracking, calculation, routine, reminder, reward, and personalization layer.",
  path: "/why-the-app",
  keywords: ["E.R. Fitness", "Every Routine Fitness", "fitness app", "workout app", "exercise library"]
});

export default function WhyTheAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Why the App"
        title="The website is the companion knowledge hub. The app is the training system."
        description={websiteAppValueMessage}
        primaryCta={{ label: "Dashboard Preview", href: "/dashboard" }}
        secondaryCta={{ label: "Education Preview", href: "/education" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <AppValueCTA />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Access Model"
              title="Public visitors get previews, not the full product."
              description={subscriberAccessNotice}
            />
            <div className="mt-5">
              <TagGrid items={["public", "preview", "subscriber"]} tone="green" />
            </div>
          </div>
          <div className="grid gap-6">
            <div>
              <SectionHeader title="Public" description="Homepage, legal pages, disclaimer, app overview, sample education, and app-value explanations remain public." />
              <div className="mt-4">
                <CardGrid items={publicAccessCards} columns="three" />
              </div>
            </div>
            <div>
              <SectionHeader title="Preview" description="Large libraries show titles, summaries, sample cards, source attribution, and app/subscriber calls to action." />
              <div className="mt-4">
                <CardGrid items={previewAccessCards} columns="two" />
              </div>
            </div>
            <div>
              <SectionHeader title="Future Subscriber Access" description="Full access is not active yet, but the website is prepared to protect the full library surface." />
              <div className="mt-4">
                <CardGrid items={subscriberAccessCards} columns="two" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="App-Exclusive"
            title="These features belong in the E.R. Fitness app."
            description="The website can explain these concepts, but the real workflows should live in the app when account access is enabled."
          />
          <div className="mt-6">
            <TagGrid items={appExclusiveFeatures} tone="orange" />
          </div>
        </div>
      </section>
    </>
  );
}
