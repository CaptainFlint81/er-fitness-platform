import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { ProfileCard } from "@/components/content/ProfileCard";
import { demoProfiles } from "@/lib/content-data";
import { accountArchitecture } from "@/lib/platform-data";

export default function ProfilesPage() {
  return (
    <>
      <PageHero
        eyebrow="Profiles"
        title="Athlete, coach, creator, moderator, and admin profiles."
        description="Profiles support picture, banner, bio, goals, follows, accolades, achievements, badges, titles, streaks, XP, selected pet, pet level, media, and transformation walls."
        primaryCta={{ label: "View Featured Profile", href: "/profile/er-athlete" }}
        secondaryCta={{ label: "Discover People", href: "/discover" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search profiles and creators" />
          <SectionHeader
            eyebrow="Account Architecture"
            title="Profiles, badges, titles, transformation walls, uploads, community identity, and pets."
            description="The account surface is prepared for member profiles, achievement displays, media ownership, social identity, and pet companions without enabling billing."
          />
          <CardGrid items={accountArchitecture} columns="four" />
          <SectionHeader title="Profile Directory" description="Public profile cards with follow and report-user controls." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {demoProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

