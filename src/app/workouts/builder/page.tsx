import { AppValueCTA } from "@/components/AppValueCTA";
import { CardGrid } from "@/components/CardGrid";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { previewLimits } from "@/lib/access-control";
import { builderTemplates, workoutBuilderBlocks, muscleGroups, workoutSystems } from "@/lib/platform-data";

export default function WorkoutBuilderPage() {
  const visibleBuilderTemplates = builderTemplates.slice(0, previewLimits.workoutCards);

  return (
    <>
      <PageHero
        eyebrow="Workout Builder"
        title="Build routine structures with training blocks, visibility, and review paths."
        description="The website explains routine structure. The live routine builder, generated routines, saved routines, timers, and reminders belong in the E.R. Fitness app."
        primaryCta={{ label: "Workout Library", href: "/workouts" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <LockedContentPreview
            title="Routine Builder Preview"
            description="The live routine builder is app-exclusive. Public visitors can see how routines are structured, but generated routines, saved routines, timers, and reminders belong in the app."
            previewCount={visibleBuilderTemplates.length}
            totalCount={builderTemplates.length}
          >
            <CardGrid items={visibleBuilderTemplates} columns="three" />
          </LockedContentPreview>
          <div className="space-y-6">
            <SectionHeader title="Builder Blocks" description="Routines are structured around exercises, media, comments, saved content, and profile history." />
            <CardGrid items={workoutBuilderBlocks} columns="two" />
            <AppValueCTA compact />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <SectionHeader
              eyebrow="Templates"
              title="Start from a routine structure instead of a blank page."
              description="Sample templates show the structure. Full editing, generation, saving, and tracking are app workflows."
            />
            <div className="mt-6">
              <CardGrid items={visibleBuilderTemplates} columns="four" />
            </div>
          </div>
          <div>
            <SectionHeader title="Exercise Filters" />
            <div className="mt-5"><TagGrid items={muscleGroups} /></div>
          </div>
          <div>
            <SectionHeader title="Program Types" />
            <div className="mt-5"><TagGrid items={workoutSystems} tone="green" /></div>
          </div>
          <div className="lg:col-span-2">
            <DisclaimerNotice />
          </div>
        </div>
      </section>
    </>
  );
}
