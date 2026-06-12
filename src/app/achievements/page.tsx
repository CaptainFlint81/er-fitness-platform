import { Award } from "lucide-react";

import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { demoProfiles } from "@/lib/content-data";
import { achievementCatalog, achievementSystems, profileDemo } from "@/lib/platform-data";

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        title="Badges, titles, accolades, completed programs, streak awards, and creator contribution awards."
        description="Achievements mirror mobile app progress and profile showcase data with clear unlock categories and visible rewards."
        primaryCta={{ label: "Profile Showcase", href: "/profile/er-athlete" }}
        secondaryCta={{ label: "Challenges", href: "/challenges" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader title="Achievement Systems" />
            <div className="mt-6">
              <TagGrid items={achievementSystems} />
            </div>
          </div>
          <div>
            <SectionHeader title="Unlock Catalog" description="Representative badges, titles, and accolades for profile showcases." />
            <div className="mt-6">
              <CardGrid items={achievementCatalog} columns="three" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader eyebrow="Showcase" title="Member badges, titles, and featured accolades." />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {demoProfiles.map((profile) => (
              <article key={profile.id} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                <div className="flex items-center gap-3">
                  <Award size={22} className="text-volt-400" aria-hidden />
                  <h2 className="text-lg font-black text-white">{profile.displayName}</h2>
                </div>
                <div className="mt-4 space-y-4">
                  <TagGrid items={profile.badges} tone="green" />
                  <TagGrid items={profile.titles} tone="orange" />
                </div>
              </article>
            ))}
            <article className="rounded-md border border-ember-500/25 bg-ember-500/8 p-5 md:col-span-2">
              <h2 className="text-lg font-black text-white">Featured Accolades</h2>
              <div className="mt-4">
                <TagGrid items={profileDemo.accolades} />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

