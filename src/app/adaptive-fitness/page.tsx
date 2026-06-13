import type { Metadata } from "next";

import { AppValueCTA } from "@/components/AppValueCTA";
import { CardGrid } from "@/components/CardGrid";
import { ContentPackPanel, OpenWorkoutSystemsPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { AdaptiveEducationPanel } from "@/components/PublishReadyPanels";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { UploadPanel } from "@/components/content/UploadPanel";
import {
  getEducationCardsByCategory,
  getEducationTopicsByCategory
} from "@/lib/education-data";
import { previewLimits } from "@/lib/access-control";
import { adaptiveEducationSections } from "@/lib/publish-ready-content";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  title: "Adaptive Fitness Education",
  description:
    "E.R. Fitness adaptive fitness education covers wheelchair fitness, prosthetic users, amputees, seniors, neurological conditions, limited mobility, modified movement, safety reminders, and app tracking handoffs.",
  path: "/adaptive-fitness",
  keywords: ["adaptive fitness", "fitness education", "recovery fitness", "exercise science", "mobility training"]
});

const adaptiveTopics = getEducationTopicsByCategory("Adaptive Fitness");
const specialConditionTopics = getEducationTopicsByCategory("Special Conditions");
const adaptiveCards = getEducationCardsByCategory("Adaptive Fitness");
const specialConditionCards = getEducationCardsByCategory("Special Conditions");
const adaptiveTags = Array.from(
  new Set(
    [...adaptiveTopics, ...specialConditionTopics].flatMap((topic) => [
      topic.title,
      topic.relatedWorkoutCategory,
      ...topic.tags
    ])
  )
).sort();

export default function AdaptiveFitnessPage() {
  const visibleAdaptiveSections = adaptiveEducationSections.slice(0, previewLimits.adaptiveSections);
  const visibleAdaptiveCards = adaptiveCards.slice(0, previewLimits.educationCards);
  const visibleConditionCards = specialConditionCards.slice(0, previewLimits.educationCards);
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "E.R. Fitness Adaptive Fitness Education",
    description: metadata.description,
    numberOfItems: adaptiveTopics.length + specialConditionTopics.length,
    hasPart: [...adaptiveTopics, ...specialConditionTopics].map((topic) => ({
      "@type": "Article",
      name: topic.title,
      url: `/education/${topic.slug}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Adaptive Fitness"
        title="Adaptive fitness and special-condition education."
        description="Educational movement considerations for amputees, prosthetic users, wheelchair users, limited mobility users, neurological conditions, senior fitness, adaptive athletes, MS, Parkinson's, arthritis, fibromyalgia, joint replacements, chronic pain, and balance impairments."
        primaryCta={{ label: "Adaptive Topics", href: "#adaptive-topics" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search adaptive education" />
          <TagGrid items={adaptiveTags.slice(0, 48)} />
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-md border border-volt-400/25 bg-volt-400/8 p-5">
              <p className="text-xs font-black uppercase text-volt-400">Coverage</p>
              <p className="mt-2 text-3xl font-black text-white">{adaptiveTopics.length}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">Adaptive population pages with app handoff prompts.</p>
            </article>
            <article className="rounded-md border border-ember-400/25 bg-ember-400/8 p-5">
              <p className="text-xs font-black uppercase text-ember-400">Conditions</p>
              <p className="mt-2 text-3xl font-black text-white">{specialConditionTopics.length}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">Special-condition pages with conservative safety reminders.</p>
            </article>
            <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
              <p className="text-xs font-black uppercase text-zinc-500">App Handoff</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Website pages teach considerations. The mobile app tracks routine completion, modifications, fatigue, symptoms, confidence, and notes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="adaptive-education" className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Adaptive Sections"
            title="Wheelchair fitness, prosthetic users, amputees, MS, Parkinson's, arthritis, fibromyalgia, chronic pain, senior fitness, and limited mobility."
            description="Each section includes focus areas, app tracking prompts, source fields, license fields, and reference links for professional review."
          />
          <LockedContentPreview
            title="Adaptive Fitness Section Preview"
            description="Public visitors can review representative adaptive education records. Full adaptive libraries, modification tracking, fatigue notes, and confidence logs belong in the app access layer."
            previewCount={visibleAdaptiveSections.length}
            totalCount={adaptiveEducationSections.length}
            sourceNote="Previewed adaptive records keep source and professional review metadata visible."
          >
            <div className="mt-6">
              <AdaptiveEducationPanel items={visibleAdaptiveSections} />
            </div>
          </LockedContentPreview>
        </div>
      </section>

      <section id="adaptive-content-pack" className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <OpenWorkoutSystemsPanel
            areas={["Adaptive Fitness", "Recovery"]}
            title="Open Adaptive and Seated Movement Systems"
            description="Public-source templates for chair-based movement, wheelchair-compatible activity, disability-aware pacing, and conservative recovery support."
            limit={2}
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Adaptive Fitness"]}
            title="Adaptive Fitness Lessons and Inclusive Video References"
            description="Conservative adaptive education for setup, options, fatigue pacing, assistive equipment, confidence tracking, and source-linked adaptive videos."
            lessonLimit={2}
            mediaLimit={2}
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Adaptive Fitness"]}
            title="Free Adaptive Fitness and Disability-Inclusive Resources"
            description="CDC, NCHPAD, and NHS resources for chronic conditions, disabilities, wheelchair fitness, chair-based movement, and inclusive health education."
            limit={previewLimits.publicMaterials}
          />
        </div>
      </section>

      <section id="adaptive-topics" className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Adaptive Fitness"
            title="Inclusive education for modified setups, equipment, progression, and tracking."
            description="Each topic links back to the reusable education page template and keeps professional-care boundaries visible."
          />
          <LockedContentPreview
            title="Adaptive Topic Preview"
            description="Public visitors can see sample adaptive topic cards. Full adaptive education access is reserved for future app subscribers."
            previewCount={visibleAdaptiveCards.length}
            totalCount={adaptiveCards.length}
          >
            <div className="mt-6">
              <CardGrid items={visibleAdaptiveCards} columns="three" />
            </div>
          </LockedContentPreview>
        </div>
      </section>

      <section id="special-conditions" className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Special Conditions"
            title="Educational movement considerations for fatigue, balance, pain, joints, and neurological needs."
            description="This content is educational only and should be reviewed by qualified professionals before being treated as polished condition-specific guidance."
          />
          <LockedContentPreview
            title="Special Condition Preview"
            description="Public visitors can see sample special-condition topic cards. Full condition-specific education stays behind the future app access layer."
            previewCount={visibleConditionCards.length}
            totalCount={specialConditionCards.length}
          >
            <div className="mt-6">
              <CardGrid items={visibleConditionCards} columns="three" />
            </div>
          </LockedContentPreview>
        </div>
      </section>

      <section className="section-shell bg-black/50">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <UploadPanel title="Create Adaptive Fitness Guide, Journal, Photo, or Video" />
          <DisclaimerNotice />
        </div>
      </section>
    </>
  );
}
