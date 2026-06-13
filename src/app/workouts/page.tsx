import { Dumbbell, ListPlus } from "lucide-react";

import { AppValueCTA } from "@/components/AppValueCTA";
import { CardGrid } from "@/components/CardGrid";
import { ContentPackPanel, ExerciseDemoPackPanel, OpenWorkoutSystemsPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { KnowledgeResourcePanel } from "@/components/KnowledgeResourcePanel";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { UploadPanel } from "@/components/content/UploadPanel";
import { previewLimits } from "@/lib/access-control";
import { featuredWorkoutPlans, workoutBuilderBlocks, workoutSystemCards, workoutSystems, muscleGroups } from "@/lib/platform-data";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Workout Library",
  description: "Explore E.R. Fitness workout systems for strength training, bodyweight training, mobility, conditioning, sports performance, and trackable routine planning.",
  path: "/workouts",
  keywords: ["workout library", "strength training", "bodyweight training", "fitness education", "sports performance"]
});

export default function WorkoutsPage() {
  const visibleWorkoutPlans = featuredWorkoutPlans.slice(0, previewLimits.workoutCards);

  return (
    <>
      <PageHero
        eyebrow="Workout Library"
        title="Bodyweight Warrior, Iron Forge, and Performance Lab workout systems."
        description="A searchable training library with workout systems, exercises, muscle groups, workout posts, uploaded form videos, saved routines, favorite workouts, and completed program mirrors."
        primaryCta={{ label: "Workout Preview", href: "#featured-plans" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SearchFilters label="Search exercises and workouts" />
            <div>
              <SectionHeader title="Workout Systems" />
              <div className="mt-4"><TagGrid items={workoutSystems} /></div>
            </div>
            <div>
              <SectionHeader title="Muscle Groups and Subcategories" />
              <div className="mt-4"><TagGrid items={muscleGroups} tone="green" /></div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <Dumbbell size={24} className="text-ember-400" aria-hidden />
              <SectionHeader title="Training System" description="Every workout object can become a library entry, post attachment, saved routine, favorite workout, completed program, or app-synced history item." />
            </div>
            <div className="mt-6">
              <CardGrid items={workoutSystemCards} columns="three" />
            </div>
            <div className="mt-6">
              <CardGrid items={workoutBuilderBlocks} columns="two" />
            </div>
          </div>
        </div>
      </section>

      <section id="featured-plans" className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Featured Plans"
            title="Ready-to-build sessions for common goals."
            description="Use these as starting points for saved routines, workout posts, favorite workouts, and progress history."
          />
          <LockedContentPreview
            title="Workout Plan Preview"
            description="Public visitors can see a few workout examples. Full workout planning, generated routines, saved routines, timers, reminders, and tracking stay app-first."
            previewCount={visibleWorkoutPlans.length}
            totalCount={featuredWorkoutPlans.length}
          >
            <div className="mt-6">
              <CardGrid items={visibleWorkoutPlans} columns="three" />
            </div>
          </LockedContentPreview>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Teaching Libraries"
            title="Exercise and routine libraries connect the website to app tracking."
            description="Use these libraries to learn setup, cues, mistakes, regressions, progressions, and program structure before tracking work in E.R. Fitness."
          />
          <div className="mt-6">
            <CardGrid
              items={[
                {
                  title: "Exercise Library",
                  description: "Teaching cues for Bodyweight Warrior, Iron Forge, Performance Lab, and Mobility exercises.",
                  href: "/exercises",
                  meta: "Website teaches"
                },
                {
                  title: "Routine Library",
                  description: "Trackable routine templates that connect education pages to programs and app logs.",
                  href: "/routines",
                  meta: "App tracks"
                },
                {
                  title: "Training & Nutrition Principles",
                  description: "DC Training, muscle confusion, carb backloading, overload, periodization, volume, intensity, recovery, calories, and macros.",
                  href: "/training-nutrition-principles",
                  meta: "Learn the rules"
                },
                {
                  title: "Education Knowledge Base",
                  description: "Body education, training styles, injuries, nutrition, recovery, adaptive fitness, and habits.",
                  href: "/education",
                  meta: "Learn first"
                }
              ]}
              columns="three"
            />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <ExerciseDemoPackPanel limit={previewLimits.mediaCards} />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <OpenWorkoutSystemsPanel
            areas={["Workout & Exercise", "Training Principles"]}
            title="Open Public Workout Systems"
            description="Public-source weekly templates for adult activity, beginner bodyweight strength, free video-guided practice, and progression tracking."
            limit={2}
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Workout & Exercise", "Training Principles"]}
            title="Workout Lessons, Videos, and Image Sequences"
            description="Beginner movement education, programming principles, external demonstration links, and source notes for workout planning."
            lessonLimit={2}
            mediaLimit={2}
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Workout & Exercise", "Training Principles"]}
            title="Free Workout Guidelines, Exercise Libraries, and Video Hubs"
            description="Public and external resources for exercise basics, physical activity guidelines, movement demos, and beginner strength/flexibility videos."
            limit={previewLimits.publicMaterials}
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <KnowledgeResourcePanel
            title="Workout Pictures, Demonstrations, and Source Links"
            description="Visualize programming principles, open exercise demonstration resources, and connect training concepts to reliable reference links."
            visualLimit={4}
            videoLimit={4}
            referenceLimit={4}
          />
        </div>
      </section>

      <section id="workout-content" className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <UploadPanel title="Create Workout Post or Demonstration" />
          <div className="space-y-5">
            <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
              <div className="flex items-center gap-3">
                <ListPlus size={22} className="text-volt-400" aria-hidden />
                <h2 className="text-lg font-black text-white">Workout Content Supports</h2>
              </div>
              <div className="mt-4">
                <TagGrid items={["Workout posts", "Uploaded workout photos", "Uploaded workout videos", "Exercise demonstrations", "Embedded workouts", "Comments", "Likes", "Saves"]} />
              </div>
            </div>
            <DisclaimerNotice />
          </div>
        </div>
      </section>
    </>
  );
}
