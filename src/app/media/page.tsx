import { AppValueCTA } from "@/components/AppValueCTA";
import { CardGrid } from "@/components/CardGrid";
import { ContentPackOverviewPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { MediaCard } from "@/components/content/MediaCard";
import { CategoryTabs } from "@/components/content/CategoryTabs";
import { UploadPanel } from "@/components/content/UploadPanel";
import { MediaGrid } from "@/components/MediaGrid";
import { KnowledgeResourcePanel } from "@/components/KnowledgeResourcePanel";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { InstructionalMediaPanel } from "@/components/PublishReadyPanels";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { previewLimits } from "@/lib/access-control";
import { demoMedia } from "@/lib/content-data";
import { mediaArchitecture, mediaCategories, mediaLibrary, muscleGroups } from "@/lib/platform-data";
import { instructionalMediaStructure, videoEmbedLibrary } from "@/lib/publish-ready-content";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Resource Library and Media Source Directory",
  description: "E.R. Fitness media and resource library tracks instructional videos, visual guides, source directory records, licensing notes, exercise media, nutrition resources, and legal media planning.",
  path: "/media",
  keywords: ["free fitness resources", "source directory", "exercise library", "workout library", "nutrition education"]
});

export default function MediaPage() {
  const visibleDemoMedia = demoMedia.slice(0, previewLimits.mediaCards);
  const visibleMediaLibrary = mediaLibrary.slice(0, previewLimits.mediaLibrary);
  const visibleInstructionalMedia = instructionalMediaStructure.slice(0, previewLimits.mediaCards);
  const visibleVideoEmbeds = videoEmbedLibrary.slice(0, previewLimits.mediaCards);

  return (
    <>
      <PageHero
        eyebrow="Media Library"
        title="Media previews, demonstrations, galleries, and external creator embeds."
        description="Media is searchable by category, muscle group, keyword, and media type, with report-preview buttons and moderation planning controls. Uploads are disabled until backend storage is live."
        primaryCta={{ label: "Media Preview", href: "#movement-photos" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section id="upload" className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <UploadPanel title="Media Workflow Preview" />
          <div className="space-y-5">
            <SearchFilters label="Search media assets" />
            <TagGrid items={mediaCategories} />
            <TagGrid items={muscleGroups} tone="green" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Media Architecture"
            title="Photos, videos, and galleries for transformations, workouts, nutrition, and recovery."
            description="Media assets can be account-owned, attached to posts or milestones, grouped into galleries, and routed through moderation before public discovery."
          />
          <div className="mt-6">
            <CardGrid items={mediaArchitecture} columns="three" />
          </div>
        </div>
      </section>

      <section id="movement-photos" className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Instructional Media Structure"
            title="Movement photos, exercise videos, equipment photos, muscle diagrams, and recovery guides."
            description="Each media type now carries source, license, references, rights expectations, and a routed content path."
          />
          <div className="mt-6">
            <LockedContentPreview
              title="Instructional Media Preview"
              description="Public visitors can inspect sample media structure records. Full media planning and app-linked progress media belong in the app access layer."
              previewCount={visibleInstructionalMedia.length}
              totalCount={instructionalMediaStructure.length}
              sourceNote="Source and license fields remain visible on previewed records."
            >
              <InstructionalMediaPanel items={visibleInstructionalMedia} />
            </LockedContentPreview>
          </div>
        </div>
      </section>

      <section id="video-embeds" className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Video Embed Library"
            title="Instructional videos are embedded or linked, not downloaded."
            description="External videos stay hosted by the provider. E.R. Fitness stores educational context, source, license notes, tags, and review metadata."
          />
          <div className="mt-6">
            <LockedContentPreview
              title="Video Embed Preview"
              description="Public visitors can inspect sample external video records. Full video shelves and saved media workflows are reserved for future app access."
              previewCount={visibleVideoEmbeds.length}
              totalCount={videoEmbedLibrary.length}
              sourceNote="External source attribution remains visible."
            >
              <InstructionalMediaPanel items={visibleVideoEmbeds} />
            </LockedContentPreview>
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <ContentPackOverviewPanel />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Workout & Exercise", "Recovery", "Adaptive Fitness", "Injury Education", "Yoga", "Pilates", "Tai Chi", "Community Guidance", "Media Rights"]}
            title="Legitimate Media Sources and Public Teaching Materials"
            description="External video hubs, image-sequence references, public toolkits, and source/license notes for media that can be linked now and licensed or recreated later."
            limit={previewLimits.publicMaterials}
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader title="Uploaded Media Cards" description="Reusable media cards for workout photos, workout videos, transformation photos, transformation videos, exercise demos, and external embeds." />
          <div className="mt-6">
            <CategoryTabs categories={["All", ...mediaCategories]} />
          </div>
          <LockedContentPreview
            title="Uploaded Media Card Preview"
            description="Public visitors can inspect sample uploaded media cards. Full uploads, progress media, and saved media workflows belong in the app access layer."
            previewCount={visibleDemoMedia.length}
            totalCount={demoMedia.length}
          >
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleDemoMedia.map((media) => (
                <MediaCard key={media.id} media={media} />
              ))}
            </div>
          </LockedContentPreview>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader title="Instructional Content Library" description="Media entries for workouts, yoga, pilates, tai chi, recovery, and nutrition." />
          <div className="mt-6">
            <LockedContentPreview
              title="Instructional Content Media Preview"
              description="Public visitors can inspect sample media entries. Full media library access is reserved for the app/subscriber layer."
              previewCount={visibleMediaLibrary.length}
              totalCount={mediaLibrary.length}
            >
              <MediaGrid items={visibleMediaLibrary} />
            </LockedContentPreview>
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <KnowledgeResourcePanel
            title="Instructional Videos and Visual Guides"
            description="A richer media shelf with E.R. Fitness visual maps, public instructional videos, demonstration libraries, and evidence-oriented reference links."
            visualLimit={10}
            videoLimit={6}
            referenceLimit={5}
          />
        </div>
      </section>
    </>
  );
}
