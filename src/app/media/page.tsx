import { CardGrid } from "@/components/CardGrid";
import { ContentPackOverviewPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { MediaCard } from "@/components/content/MediaCard";
import { CategoryTabs } from "@/components/content/CategoryTabs";
import { UploadPanel } from "@/components/content/UploadPanel";
import { MediaGrid } from "@/components/MediaGrid";
import { KnowledgeResourcePanel } from "@/components/KnowledgeResourcePanel";
import { PageHero } from "@/components/PageHero";
import { InstructionalMediaPanel } from "@/components/PublishReadyPanels";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
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
  return (
    <>
      <PageHero
        eyebrow="Media Library"
        title="Photo uploads, video uploads, demonstrations, galleries, and external creator embeds."
        description="Media is searchable by category, muscle group, user, keyword, and media type, with report buttons and moderation controls."
        primaryCta={{ label: "Upload Media", href: "#upload" }}
        secondaryCta={{ label: "Discover", href: "/discover" }}
      />

      <section id="upload" className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <UploadPanel title="Upload Photos, Videos, and Embeds" />
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
            <InstructionalMediaPanel items={instructionalMediaStructure} />
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
            <InstructionalMediaPanel items={videoEmbedLibrary} />
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
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader title="Uploaded Media Cards" description="Reusable media cards for workout photos, workout videos, transformation photos, transformation videos, exercise demos, and external embeds." />
          <div className="mt-6">
            <CategoryTabs categories={["All", ...mediaCategories]} />
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {demoMedia.map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader title="Instructional Content Library" description="Media entries for workouts, yoga, pilates, tai chi, recovery, and nutrition." />
          <div className="mt-6">
            <MediaGrid items={mediaLibrary} />
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
