import { CardGrid } from "@/components/CardGrid";
import { ContentPackPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { MediaGrid } from "@/components/MediaGrid";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { TagGrid } from "@/components/TagGrid";
import { UploadPanel } from "@/components/content/UploadPanel";
import { mediaLibrary, mindBodyHighlights, pilatesSystems } from "@/lib/platform-data";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Pilates Education",
  description: "E.R. Fitness Pilates education covers core control, posture, breathing, movement quality, recovery fitness, mobility training, and instructional media planning.",
  path: "/pilates",
  keywords: ["Pilates", "core control", "mobility training", "recovery fitness", "fitness education"]
});

const pilatesCards = pilatesSystems.map((system) => ({
  title: system,
  description: "Routines, images, videos, articles, comments, saves, and creator education.",
  status: "live-ready-ui" as const
}));

export default function PilatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pilates"
        title="Pilates routines, core control, athlete movement quality, posture, and recovery."
        description="Pilates content supports routines, images, videos, articles, saved content, comments, and creator uploads."
        primaryCta={{ label: "Search Pilates", href: "#pilates" }}
        secondaryCta={{ label: "Create Pilates Content", href: "#upload" }}
      />
      <section id="pilates" className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search pilates content" />
          <TagGrid items={pilatesSystems} />
          <CardGrid items={pilatesCards} columns="three" />
          <CardGrid items={mindBodyHighlights.filter((item) => item.title.includes("Core"))} columns="three" />
          <MediaGrid items={mediaLibrary.filter((item) => item.title.toLowerCase().includes("pilates") || item.tags.includes("core"))} />
        </div>
      </section>
      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Pilates"]}
            title="Pilates Core Control Lessons"
            description="Pilates education for breathing, trunk control, posture, progression, recovery support, and safe boundaries."
            includeMedia={false}
          />
        </div>
      </section>
      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Pilates", "Yoga", "Workout & Exercise"]}
            title="Free Pilates, Yoga, and Core-Control References"
            description="External public video hubs and exercise libraries for Pilates-style core control, breath work, and movement quality."
          />
        </div>
      </section>
      <section id="upload" className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <UploadPanel title="Create Pilates Routine, Article, Photo, or Video" />
          <DisclaimerNotice />
        </div>
      </section>
    </>
  );
}
