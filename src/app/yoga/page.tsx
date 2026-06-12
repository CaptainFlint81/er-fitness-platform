import { CardGrid } from "@/components/CardGrid";
import { ContentPackPanel, OpenWorkoutSystemsPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { MediaGrid } from "@/components/MediaGrid";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { TagGrid } from "@/components/TagGrid";
import { UploadPanel } from "@/components/content/UploadPanel";
import { mediaLibrary, mindBodyHighlights, yogaLevels } from "@/lib/platform-data";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Yoga Education",
  description: "E.R. Fitness yoga education supports mobility training, breath, strength, recovery fitness, beginner routines, instructional media, and source-linked safety notes.",
  path: "/yoga",
  keywords: ["yoga", "mobility training", "recovery fitness", "fitness education", "bodyweight training"]
});

const yogaCards = yogaLevels.map((level) => ({
  title: level,
  description: "Routine library, photos, instructional videos, articles, comments, saves, and creator tips.",
  status: "live-ready-ui" as const
}));

export default function YogaPage() {
  return (
    <>
      <PageHero
        eyebrow="Yoga"
        title="Beginner, intermediate, and advanced yoga content for mobility, breath, strength, and recovery."
        description="Yoga is structured as a content category with routines, images, videos, articles, creator posts, and saved routines."
        primaryCta={{ label: "Search Yoga", href: "#yoga" }}
        secondaryCta={{ label: "Upload Yoga Video", href: "#upload" }}
      />
      <section id="yoga" className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search yoga content" />
          <TagGrid items={yogaLevels} />
          <CardGrid items={yogaCards} columns="three" />
          <CardGrid items={mindBodyHighlights.filter((item) => item.title.includes("Mobility"))} columns="three" />
          <MediaGrid items={mediaLibrary.filter((item) => item.title.toLowerCase().includes("yoga") || item.tags.includes("mobility"))} />
        </div>
      </section>
      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <OpenWorkoutSystemsPanel
            areas={["Yoga"]}
            title="Open Yoga Mobility Starter System"
            description="A public-source starter template for breath, gentle mobility, supported positions, recovery context, and safe progression."
          />
        </div>
      </section>
      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Yoga"]}
            title="Yoga Safety, Practice, and Recovery Lessons"
            description="Source-linked yoga education for breath, mobility, strength, practice selection, safety boundaries, and recovery context."
            includeMedia={false}
          />
        </div>
      </section>
      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Yoga", "Pilates"]}
            title="Free Yoga and Mind-Body Video References"
            description="Public NIH safety research and external public video hubs for yoga, Pilates, mobility, and recovery education."
          />
        </div>
      </section>
      <section id="upload" className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <UploadPanel title="Create Yoga Routine, Article, Photo, or Video" />
          <DisclaimerNotice />
        </div>
      </section>
    </>
  );
}
