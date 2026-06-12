import { Flame } from "lucide-react";

import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { demoProfiles } from "@/lib/content-data";
import { petShowcase, petSystems } from "@/lib/platform-data";

export default function PetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Pets"
        title="Selected pet, pet level, pet XP, profile display, and pet showcase."
        description="The web platform mirrors mobile pet companion data for pet XP boosts, challenge rewards, collections, titles, and profile showcases."
        primaryCta={{ label: "Profile Pet", href: "/profile/er-athlete" }}
        secondaryCta={{ label: "Pet XP Leaderboard", href: "/leaderboards" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader title="Pet Systems" />
            <div className="mt-6">
              <CardGrid items={petSystems} columns="three" />
            </div>
            <div className="mt-6">
              <SectionHeader title="Showcase Companions" description="Representative pets with progression styles tied to user behavior." />
              <div className="mt-5">
                <CardGrid items={petShowcase} columns="three" />
              </div>
            </div>
          </div>
          <div>
            <SectionHeader title="Profile Pet Displays" />
            <div className="mt-6 grid gap-4">
              {demoProfiles.map((profile) => (
                <article key={profile.id} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex items-center gap-3">
                    <Flame size={22} className="text-volt-400" aria-hidden />
                    <h2 className="text-lg font-black text-white">{profile.pet.name}</h2>
                  </div>
                  <p className="mt-3 text-sm text-zinc-400">@{profile.username} | Level {profile.pet.level} | {profile.pet.xp.toLocaleString()} pet XP</p>
                  <div className="mt-4">
                    <TagGrid items={profile.titles} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

