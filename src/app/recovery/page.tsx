import { CardGrid } from "@/components/CardGrid";
import { ContentPackPanel, OpenWorkoutSystemsPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { KnowledgeResourcePanel } from "@/components/KnowledgeResourcePanel";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { UploadPanel } from "@/components/content/UploadPanel";
import { recoveryProtocols, recoverySystemCards, recoverySystems } from "@/lib/platform-data";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Recovery Fitness",
  description: "E.R. Fitness recovery education covers mobility training, cooldowns, active recovery, sleep, yoga, Pilates, Tai Chi, injury recovery boundaries, and source-linked wellness resources.",
  path: "/recovery",
  keywords: ["recovery fitness", "mobility training", "injury recovery", "yoga", "Pilates", "Tai Chi"]
});

export default function RecoveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Recovery and Longevity"
        title="Injured Athlete, Mobility, Yoga, Pilates, and Tai Chi recovery systems."
        description="Recovery content is built as a searchable education and creator platform with videos, articles, comments, saves, galleries, and profile history."
        primaryCta={{ label: "Injured Athlete", href: "/injured-athlete" }}
        secondaryCta={{ label: "Create Recovery Tip", href: "#recovery-content" }}
      />

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
          <div className="mt-6">
            <CardGrid items={recoveryProtocols} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <OpenWorkoutSystemsPanel
            areas={["Recovery", "Tai Chi", "Yoga"]}
            title="Open Recovery and Active-Aging Systems"
            description="Public-source templates for older adult multicomponent training, yoga mobility, tai chi balance practice, and recovery re-entry."
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Recovery"]}
            title="Recovery Lessons, Spine Conditioning References, and Readiness Tracking"
            description="Source-linked recovery education covering readiness, pacing, gentle movement, symptom boundaries, and spine-conditioning references."
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Recovery"]}
            title="Free Recovery, Mobility, and Conditioning Materials"
            description="Public and external exercise hubs, recovery references, and conditioning handouts that support conservative recovery education."
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
