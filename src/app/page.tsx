import { BookOpen, Dumbbell, Search, Users, Utensils } from "lucide-react";

import { AppScreens } from "@/components/AppScreens";
import { AppValueCTA } from "@/components/AppValueCTA";
import { ButtonLink } from "@/components/ButtonLink";
import { CardGrid } from "@/components/CardGrid";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { KnowledgeResourcePanel } from "@/components/KnowledgeResourcePanel";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { SupabaseReady } from "@/components/SupabaseReady";
import { TagGrid } from "@/components/TagGrid";
import { appMirrorFeatures, appToWebsiteLinks, homeSections, workoutSystems, nutritionGoals, recoverySystems, communityChannels } from "@/lib/platform-data";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Every Routine Fitness",
  description: "E.R. Fitness is a fitness education platform and app companion for exercise libraries, workout systems, nutrition education, recovery fitness, adaptive fitness, injury recovery, and progress tracking.",
  path: "/",
  keywords: ["free fitness resources", "fitness knowledge hub", "exercise science", "workout app"]
});

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Every Routine Fitness"
        title="Learn on the website. Track in the E.R. Fitness app."
        description="The E.R. Fitness web companion teaches body education, training styles, adaptive fitness, injury education, nutrition, recovery, routines, and consistency systems while the app tracks progress."
        primaryCta={{ label: "Explore Education", href: "/education" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      >
        <AppScreens />
      </PageHero>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/education" icon={<BookOpen size={18} aria-hidden />}>Explore Education</ButtonLink>
            <ButtonLink href="/workouts" icon={<Dumbbell size={18} aria-hidden />}>Explore Workouts</ButtonLink>
            <ButtonLink href="/nutrition" variant="secondary" icon={<Utensils size={18} aria-hidden />}>Explore Nutrition</ButtonLink>
            <ButtonLink href="/community" variant="ghost" icon={<Users size={18} aria-hidden />}>Join Community</ButtonLink>
            <ButtonLink href="/search" variant="ghost" icon={<Search size={18} aria-hidden />}>Search Platform</ButtonLink>
          </div>
          <div className="mt-8">
            <AppValueCTA compact />
          </div>
          <div className="mt-10">
            <CardGrid items={homeSections} />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/40">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="App <-> Website Mirror"
            title="Every mobile-app feature gets a website section."
            description="The structure is Supabase-ready for syncing training, nutrition, recovery, media, community, profile, pet, XP, challenge, and achievement data when backend services are connected."
          />
          <CardGrid items={appMirrorFeatures} columns="two" />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="App-to-Website Bridge"
            title="The app tracks. The website opens the lesson behind the logged action."
            description="These bridge links map core app areas to website education, exercise cues, routine templates, injury education, nutrition guidance, recovery systems, media galleries, and search."
          />
          <div className="mt-6">
            <CardGrid items={appToWebsiteLinks} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <KnowledgeResourcePanel visualLimit={3} videoLimit={4} referenceLimit={4} />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/60">
        <div className="section-inner grid gap-8 lg:grid-cols-3">
          <div>
            <SectionHeader title="Workout Systems" description="Major training categories for the web library and builder." />
            <div className="mt-5"><TagGrid items={workoutSystems} /></div>
          </div>
          <div>
            <SectionHeader title="Nutrition Systems" description="Goal-based nutrition foundations and searchable food planning." />
            <div className="mt-5"><TagGrid items={nutritionGoals} tone="green" /></div>
          </div>
          <div>
            <SectionHeader title="Recovery Systems" description="Longevity, readiness, and low-friction recovery education." />
            <div className="mt-5"><TagGrid items={recoverySystems} tone="orange" /></div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/50">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Community Platform"
              title="Creator content, chat, posts, tips, and social discovery."
              description="Public channels, creator blogs, community posts, media sharing, social follows, moderation, and discover search are included as platform foundations."
            />
            <div className="mt-5"><TagGrid items={communityChannels} /></div>
          </div>
          <div className="space-y-5">
            <SearchFilters />
            <SupabaseReady />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <DisclaimerNotice />
        </div>
      </section>
    </>
  );
}
