import { Trophy } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { demoProfiles } from "@/lib/content-data";
import { leaderboardScopes, leaderboardCategories } from "@/lib/platform-data";

export default function LeaderboardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Leaderboards"
        title="Leaderboard preview for XP, reps, challenges, streaks, and pet XP."
        description="Leaderboard cards use sample profile data to show future global, friends, and group ranking scopes. No live ranking or app-synced scoring is active on the website."
        primaryCta={{ label: "View Profile", href: "/profile/er-athlete" }}
        secondaryCta={{ label: "Challenges", href: "/challenges" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <SectionHeader title="Categories" />
            <TagGrid items={leaderboardCategories} />
            <SectionHeader title="Scopes" />
            <TagGrid items={leaderboardScopes} tone="green" />
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <div className="flex items-center gap-3">
              <Trophy size={24} className="text-ember-400" aria-hidden />
              <h2 className="text-xl font-black text-white">Demo XP Leaderboard</h2>
            </div>
            <div className="mt-5 grid gap-3">
              {demoProfiles
                .slice()
                .sort((a, b) => b.xp - a.xp)
                .map((profile, index) => (
                  <div key={profile.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md border border-white/10 bg-black/25 p-4">
                    <p className="text-xl font-black text-volt-400">Preview #{index + 1}</p>
                    <div>
                      <p className="font-black text-white">{profile.displayName}</p>
                      <p className="text-sm text-zinc-500">{profile.pet.name} | sample streak</p>
                    </div>
                    <p className="font-black text-white">{profile.xp.toLocaleString()} demo XP</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

