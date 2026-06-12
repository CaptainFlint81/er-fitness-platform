import { Target } from "lucide-react";

import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { UploadPanel } from "@/components/content/UploadPanel";
import { challengeCatalog, challengeTypes } from "@/lib/platform-data";

export default function ChallengesPage() {
  return (
    <>
      <PageHero
        eyebrow="Challenges"
        title="Daily, weekly, transformation, nutrition, recovery, creator, and pet XP challenges."
        description="Challenge structure is ready for XP awards, streaks, badges, pet XP, leaderboards, group scopes, and community submissions."
        primaryCta={{ label: "Leaderboards", href: "/leaderboards" }}
        secondaryCta={{ label: "Achievements", href: "/achievements" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Target size={24} className="text-ember-400" aria-hidden />
              <SectionHeader title="Challenge Types" />
            </div>
            <div className="mt-6">
              <TagGrid items={challengeTypes} />
            </div>
          </div>
          <UploadPanel title="Create Challenge Submission or Progress Update" />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Challenge Library"
            title="Active challenge templates for training, nutrition, recovery, and community."
            description="Each challenge card defines the behavior shown in profiles, achievements, pets, and leaderboards."
          />
          <div className="mt-6">
            <CardGrid items={challengeCatalog} columns="three" />
          </div>
        </div>
      </section>
    </>
  );
}
