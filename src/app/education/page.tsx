import type { Metadata } from "next";

import { AppValueCTA } from "@/components/AppValueCTA";
import { CardGrid } from "@/components/CardGrid";
import { ContentPackOverviewPanel, OpenWorkoutSystemsPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { KnowledgeResourcePanel } from "@/components/KnowledgeResourcePanel";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { ReferencedCardGrid } from "@/components/PublishReadyPanels";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import {
  educationAuditReport,
  educationCategories,
  educationCategoryCards,
  educationSearchTags,
  getEducationCardsByCategory
} from "@/lib/education-data";
import { previewLimits } from "@/lib/access-control";
import { appCategoryPaths, learningPaths } from "@/lib/publish-ready-content";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  title: "Fitness Education Knowledge Base",
  description: "E.R. Fitness education hub for body education, exercise science, training styles, adaptive fitness, youth fitness, women's fitness, injury recovery, nutrition education, recovery fitness, and consistency systems.",
  path: "/education",
  keywords: ["fitness education", "exercise science", "adaptive fitness", "youth fitness", "women's fitness", "nutrition education"]
});

export default function EducationPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "E.R. Fitness Education Knowledge Base",
    description: metadata.description,
    hasPart: educationCategories.map((category) => ({
      "@type": "ItemList",
      name: category,
      numberOfItems: getEducationCardsByCategory(category).length
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Education Knowledge Base"
        title="The website teaches. The E.R. Fitness app tracks."
        description="Use the knowledge base to learn body areas, training styles, adaptive fitness, special conditions, injury education, nutrition, recovery, and consistency systems. Then open E.R. Fitness to track actions and progress."
        primaryCta={{ label: "Search Education", href: "#education-search" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section id="education-search" className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search educational topics" />
          <SectionHeader
            eyebrow="Knowledge Base Audit"
            title="Educational systems completed from the current route and coverage audit."
            description="Existing app/platform pages stayed intact. Education categories were added as reusable topic pages with app handoff links."
          />
          <CardGrid items={educationCategoryCards} columns="four" />
          <TagGrid items={educationSearchTags.slice(0, 48)} />
        </div>
      </section>

      <section id="learning-paths" className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Learning Paths"
            title="Certification-style education tracks for users and contributors."
            description="Beginner fitness, strength, nutrition, recovery, adaptive fitness, and trainer/coach contributor education now have source, license, and reference fields."
          />
          <div className="mt-6">
            <ReferencedCardGrid items={learningPaths} columns="three" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="App Category Paths"
            title="Every major app category has a website learning path."
            description="These links keep the website aligned with app categories while preserving the current layout and branding."
          />
          <div className="mt-6">
            <CardGrid items={appCategoryPaths} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <ContentPackOverviewPanel />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={[
              "Workout & Exercise",
              "Training Principles",
              "Nutrition",
              "Recovery",
              "Adaptive Fitness",
              "Injury Education",
              "Yoga",
              "Pilates",
              "Tai Chi",
              "Community Guidance"
            ]}
            title="Public Education Library"
            description="A verified shelf of public and external articles, guidelines, video libraries, exercise plans, and handouts that support every major E.R. Fitness education area."
            limit={previewLimits.publicMaterials}
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <OpenWorkoutSystemsPanel
            areas={[
              "Workout & Exercise",
              "Recovery",
              "Adaptive Fitness",
              "Injury Education",
              "Yoga",
              "Tai Chi",
              "Community Guidance"
            ]}
            title="Open Public Workout and Recovery Systems"
            description="Practical templates built from public source material for general workouts, older adults, adaptive movement, return-to-training, yoga, tai chi, and community challenges."
            limit={2}
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <KnowledgeResourcePanel
            title="Education Pictures, Videos, and Reference Links"
            description="Use the visual maps, instructional video links, exercise demonstration resources, and reference links to deepen each knowledge-base topic."
            visualLimit={10}
            videoLimit={6}
            referenceLimit={5}
          />
        </div>
      </section>

      {educationCategories.map((category, index) => (
        <section
          key={category}
          id={category.toLowerCase().replace(/\s+/g, "-")}
          className={`section-shell ${index % 2 === 0 ? "bg-black/45" : "bg-graphite-950/70"}`}
        >
          <div className="section-inner">
            <SectionHeader
              eyebrow={category}
              title={`${category} Pages`}
              description={`${getEducationCardsByCategory(category).length} completed education pages with app tracking handoff controls.`}
            />
            <LockedContentPreview
              title={`${category} Preview`}
              description="Public visitors can inspect sample education cards. Full topic access is reserved for the future app subscriber layer."
              previewCount={getEducationCardsByCategory(category).slice(0, previewLimits.educationCards).length}
              totalCount={getEducationCardsByCategory(category).length}
            >
              <div className="mt-6">
                <CardGrid items={getEducationCardsByCategory(category).slice(0, previewLimits.educationCards)} columns="four" />
              </div>
            </LockedContentPreview>
          </div>
        </section>
      ))}

      <section className="section-shell bg-black/50">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Production Review Queue"
            title="Human review items before public launch."
            description="The site contains educational coverage and source-linked materials; these operational items should be reviewed by qualified people before launch."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {educationAuditReport.reviewQueue.map((item) => (
              <article key={item} className="rounded-md border border-ember-500/25 bg-ember-500/8 p-5">
                <p className="text-sm leading-6 text-zinc-300">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
