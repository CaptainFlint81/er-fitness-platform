import { CardGrid } from "@/components/CardGrid";
import { ContentPackPanel, OpenWorkoutSystemsPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { KnowledgeResourcePanel } from "@/components/KnowledgeResourcePanel";
import { MediaGrid } from "@/components/MediaGrid";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { UploadPanel } from "@/components/content/UploadPanel";
import { injuredAthleteGuidance, injuredAthletePhases, injuryCategories, mediaLibrary } from "@/lib/platform-data";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Injured Athlete Education",
  description: "E.R. Fitness injured athlete education supports recovery fitness, injury recovery learning, mobility, strengthening, return-to-training guidance, and medical-disclaimer boundaries.",
  path: "/injured-athlete",
  keywords: ["injury recovery", "recovery fitness", "mobility training", "fitness education", "exercise science"]
});

export default function InjuredAthletePage() {
  return (
    <>
      <PageHero
        eyebrow="Injured Athlete"
        title="Education, recovery exercises, mobility, strengthening, and return-to-training guidance."
        description="A dedicated recovery education area with articles, image galleries, video galleries, journals, creator tips, questions, and safety-first disclaimers."
        primaryCta={{ label: "Search Injuries", href: "#injury-search" }}
        secondaryCta={{ label: "Create Recovery Journal", href: "#journal" }}
      />

      <section id="injury-search" className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search injured athlete content" />
          <SectionHeader title="Injury Categories" description="Each category is ready for education, exercises, image galleries, videos, articles, and return-to-training plans." />
          <TagGrid items={injuryCategories} />
          <CardGrid items={injuredAthleteGuidance} columns="four" />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader title="Image, Video, and Article Galleries" description="Searchable media for recovery content, exercise demonstrations, and return-to-training education." />
          <div className="mt-6">
            <MediaGrid items={mediaLibrary.filter((item) => item.category === "Recovery Galleries" || item.category === "Workout Galleries")} />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Return Path"
            title="Four conservative phases from flare-up to training re-entry."
            description="The injured athlete area stays educational and prompts professional care when symptoms or risk factors require it."
          />
          <div className="mt-6">
            <CardGrid items={injuredAthletePhases} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <OpenWorkoutSystemsPanel
            areas={["Injury Education", "Recovery"]}
            title="Open Return-to-Training Systems"
            description="Conservative public-source templates for re-entry after irritation, layoff, or professional rehab clearance."
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Injury Education", "Recovery"]}
            title="Injury Education Lessons and Conditioning References"
            description="Return-to-training education, pain-aware progression, shoulder/knee/spine conditioning references, and professional-care boundaries."
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Injury Education", "Recovery"]}
            title="Free Injury Education and Rehab Handout Links"
            description="External AAOS conditioning programs, recovery references, and public exercise hubs for injury education and return-to-training context."
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <KnowledgeResourcePanel
            title="Injury Education Visuals, Videos, and References"
            description="Use the return-to-training ladder, exercise demonstration resources, movement videos, and reference links as education before tracking recovery actions."
            visualLimit={3}
            videoLimit={4}
            referenceLimit={4}
          />
        </div>
      </section>

      <section id="journal" className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <UploadPanel title="Create Injury Recovery Journal or Question" />
          <DisclaimerNotice />
        </div>
      </section>
    </>
  );
}
