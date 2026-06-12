import { CardGrid } from "@/components/CardGrid";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { WorkoutBuilderForm } from "@/components/WorkoutBuilderForm";
import { builderTemplates, workoutBuilderBlocks, muscleGroups, workoutSystems } from "@/lib/platform-data";

export default function WorkoutBuilderPage() {
  return (
    <>
      <PageHero
        eyebrow="Workout Builder"
        title="Build routine structures with training blocks, visibility, and review paths."
        description="The builder teaches how routines are organized into warmups, primary work, accessories, conditioning, cooldowns, visibility settings, and workout-post review flow."
        primaryCta={{ label: "Workout Library", href: "/workouts" }}
        secondaryCta={{ label: "Profile History", href: "/profile/er-athlete" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <WorkoutBuilderForm />
          <div className="space-y-6">
            <SectionHeader title="Builder Blocks" description="Routines are structured around exercises, media, comments, saved content, and profile history." />
            <CardGrid items={workoutBuilderBlocks} columns="two" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <SectionHeader
              eyebrow="Templates"
              title="Start from a routine structure instead of a blank page."
              description="Each template maps cleanly to saved routines, workout posts, and completed workout history."
            />
            <div className="mt-6">
              <CardGrid items={builderTemplates} columns="four" />
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

