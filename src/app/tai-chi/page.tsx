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
import { mediaLibrary, mindBodyHighlights, taiChiSystems } from "@/lib/platform-data";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Tai Chi Education",
  description: "E.R. Fitness Tai Chi education supports balance, breathing, mobility training, recovery fitness, forms, instructional media, and source-linked safety notes.",
  path: "/tai-chi",
  keywords: ["Tai Chi", "mobility training", "recovery fitness", "fitness education", "balance training"]
});

const taiChiCards = taiChiSystems.map((system) => ({
  title: system,
  description: "Forms, movements, images, instructional videos, articles, comments, saves, and education.",
  status: "live-ready-ui" as const
}));
const taiChiSupport = findMindBodyPage("tai-chi")!;

export default function TaiChiPage() {
  const taiChiMedia = mediaLibrary.filter((item) => item.title.toLowerCase().includes("tai chi") || item.tags.includes("balance"));
  const visibleTaiChiMedia = taiChiMedia.slice(0, previewLimits.mediaLibrary);

  return (
    <>
      <PageHero
        eyebrow="Tai Chi"
        title="Tai chi forms, movement education, balance practice, breathing, and recovery."
        description="Tai chi has its own content section with forms, media, educational articles, creator posts, and searchable tags."
        primaryCta={{ label: "Search Tai Chi", href: "#tai-chi" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      />
      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>
      <MindBodySupportSummary page={taiChiSupport} />
      <section id="tai-chi" className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search tai chi content" />
          <TagGrid items={taiChiSystems} />
          <CardGrid items={taiChiCards} columns="three" />
          <CardGrid items={mindBodyHighlights.filter((item) => item.title.includes("Balance"))} columns="three" />
          <LockedContentPreview
            title="Tai Chi Media Preview"
            description="Public visitors can inspect sample Tai Chi media. Full routines, saved flows, reminders, and progress notes belong in the app."
            previewCount={visibleTaiChiMedia.length}
            totalCount={taiChiMedia.length}
          >
            <MediaGrid items={visibleTaiChiMedia} />
          </LockedContentPreview>
        </div>
      </section>
      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <OpenWorkoutSystemsPanel
            areas={["Tai Chi"]}
            title="Open Tai Chi Balance Starter System"
            description="A public-source starter template for supported weight shift, slow stepping, posture, breath, balance confidence, and fall-risk boundaries."
            limit={1}
          />
        </div>
      </section>
      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Tai Chi"]}
            title="Tai Chi Balance and Breathing Lessons"
            description="Tai chi education for slow movement, posture, balance, breath, attention, fall-risk boundaries, and active-aging context."
            includeMedia={false}
            lessonLimit={2}
          />
        </div>
      </section>
      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Tai Chi"]}
            title="Free Tai Chi and Balance References"
            description="Public NIH tai chi research, balance exercise links, and active-aging materials for conservative movement education."
            limit={previewLimits.publicMaterials}
          />
        </div>
      </section>
      <section id="upload" className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <UploadPanel title="Create Tai Chi Form, Article, Photo, or Video" />
          <DisclaimerNotice />
        </div>
      </section>
    </>
  );
}
