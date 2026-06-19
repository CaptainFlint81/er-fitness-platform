import { AppValueCTA } from "@/components/AppValueCTA";
import { AppSupportRouteCards, MindBodySupportSummary } from "@/components/AppSupportPages";
import { CardGrid } from "@/components/CardGrid";
import { ContentPackPanel, OpenWorkoutSystemsPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { KnowledgeResourcePanel } from "@/components/KnowledgeResourcePanel";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { UploadPanel } from "@/components/content/UploadPanel";
import { previewLimits } from "@/lib/access-control";
import { findMindBodyPage, mindBodyPages } from "@/lib/app-support-content";
import { recoveryProtocols, recoverySystemCards, recoverySystems } from "@/lib/platform-data";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Recovery Fitness",
  description: "E.R. Fitness recovery education covers mobility training, cooldowns, active recovery, sleep, yoga, Pilates, Tai Chi, injury recovery boundaries, and source-linked wellness resources.",
  path: "/recovery",
  keywords: ["recovery fitness", "mobility training", "injury recovery", "yoga", "Pilates", "Tai Chi"]
});

const recoverySupport = findMindBodyPage("recovery")!;
const recoveryRouteCards = mindBodyPages.map((page) => ({
  title: page.title,
  href: `/${page.slug}`,
  description: page.whatItIsFor
}));

export default function RecoveryPage() {
  const visibleProtocols = recoveryProtocols.slice(0, previewLimits.recoveryProtocols);

  return (
    <>
      <PageHero
        eyebrow="Recovery and Longevity"
        title="Injured Athlete, Mobility, Yoga, Pilates, and Tai Chi recovery systems."
        description="Recovery content is built as a searchable education and creator platform with videos, articles, comments, saves, galleries, and profile history."
        primaryCta={{ label: "Injured Athlete", href: "/injured-athlete" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <MindBodySupportSummary page={recoverySupport} />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppSupportRouteCards
            title="Recovery and mind-body app pages"
            description="Direct app targets for recovery, mobility, stretching, yoga, Pilates, Tai Chi, and injured-athlete education."
            routes={recoveryRouteCards}
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search recovery content" />
          <TagGrid items={recoverySystems} />
          <CardGrid items={recoverySystemCards} columns="three" />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Protocols"
            title="Short recovery flows for daily use."
            description="Each protocol can be saved, attached to a profile history entry, or shared as a recovery tip."
          />
          <LockedContentPreview
            title="Recovery Protocol Preview"
            description="Public visitors can inspect sample recovery flows. Full saved protocols, reminders, readiness tracking, and symptom notes belong in the app."
            previewCount={visibleProtocols.length}
            totalCount={recoveryProtocols.length}
          >
            <div className="mt-6">
              <CardGrid items={visibleProtocols} columns="four" />
            </div>
          </LockedContentPreview>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <OpenWorkoutSystemsPanel
            areas={["Recovery", "Tai Chi", "Yoga"]}
            title="Open Recovery and Active-Aging Systems"
            description="Public-source templates for older adult multicomponent training, yoga mobility, tai chi balance practice, and recovery re-entry."
            limit={2}
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Recovery"]}
            title="Recovery Lessons, Spine Conditioning References, and Readiness Tracking"
            description="Source-linked recovery education covering readiness, pacing, gentle movement, symptom boundaries, and spine-conditioning references."
            lessonLimit={2}
            mediaLimit={2}
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Recovery"]}
            title="Free Recovery, Mobility, and Conditioning Materials"
            description="Public and external exercise hubs, recovery references, and conditioning handouts that support conservative recovery education."
            limit={previewLimits.publicMaterials}
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <KnowledgeResourcePanel
            title="Recovery Visuals, Movement Videos, and Reference Links"
            description="Pair recovery protocols with visual flow maps, activity videos, and credible safety-oriented references."
            visualLimit={3}
            videoLimit={4}
            referenceLimit={4}
          />
        </div>
      </section>

      <section id="recovery-content" className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <UploadPanel title="Create Recovery Tip, Journal, Photo, or Video" />
          <DisclaimerNotice />
        </div>
      </section>
    </>
  );
}
