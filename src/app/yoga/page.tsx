import { AppValueCTA } from "@/components/AppValueCTA";
import { MindBodySupportSummary } from "@/components/AppSupportPages";
import { CardGrid } from "@/components/CardGrid";
import { ContentPackPanel, OpenWorkoutSystemsPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { MediaGrid } from "@/components/MediaGrid";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { TagGrid } from "@/components/TagGrid";
import { UploadPanel } from "@/components/content/UploadPanel";
import { previewLimits } from "@/lib/access-control";
import { findMindBodyPage } from "@/lib/app-support-content";
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
const yogaSupport = findMindBodyPage("yoga")!;

export default function YogaPage() {
  const yogaMedia = mediaLibrary.filter((item) => item.title.toLowerCase().includes("yoga") || item.tags.includes("mobility"));
  const visibleYogaMedia = yogaMedia.slice(0, previewLimits.mediaLibrary);

  return (
    <>
      <PageHero
        eyebrow="Yoga"
        title="Beginner, intermediate, and advanced yoga content for mobility, breath, strength, and recovery."
        description="Yoga is structured as a content category with routines, images, videos, articles, creator posts, and saved routines."
        primaryCta={{ label: "Search Yoga", href: "#yoga" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      />
      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>
      <MindBodySupportSummary page={yogaSupport} />
      <section id="yoga" className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search yoga content" />
          <TagGrid items={yogaLevels} />
          <CardGrid items={yogaCards} columns="three" />
          <CardGrid items={mindBodyHighlights.filter((item) => item.title.includes("Mobility"))} columns="three" />
          <LockedContentPreview
            title="Yoga Media Preview"
            description="Public visitors can inspect sample yoga media. Full yoga routines, saved flows, reminders, and progress notes belong in the app."
            previewCount={visibleYogaMedia.length}
            totalCount={yogaMedia.length}
          >
            <MediaGrid items={visibleYogaMedia} />
          </LockedContentPreview>
        </div>
      </section>
      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <OpenWorkoutSystemsPanel
            areas={["Yoga"]}
            title="Open Yoga Mobility Starter System"
            description="A public-source starter template for breath, gentle mobility, supported positions, recovery context, and safe progression."
            limit={1}
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
            lessonLimit={2}
          />
        </div>
      </section>
      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Yoga", "Pilates"]}
            title="Free Yoga and Mind-Body Video References"
            description="Public NIH safety research and external public video hubs for yoga, Pilates, mobility, and recovery education."
            limit={previewLimits.publicMaterials}
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
