import type { Metadata } from "next";
import { Activity, Dumbbell } from "lucide-react";

import { ButtonLink } from "@/components/ButtonLink";
import { AppValueCTA } from "@/components/AppValueCTA";
import { ContentPackPanel, ExerciseDemoPackPanel, OpenWorkoutSystemsPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { EquipmentLibraryPanel } from "@/components/PublishReadyPanels";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { equipmentLibrary } from "@/lib/publish-ready-content";
import { previewLimits } from "@/lib/access-control";
import { buildRouteMetadata } from "@/lib/seo";
import { exerciseLibrary, exerciseSystems, type ExerciseLibraryItem } from "@/lib/training-library";

export const metadata: Metadata = buildRouteMetadata({
  title: "Exercise Library",
  description: "E.R. Fitness exercise library with strength training, bodyweight training, mobility exercises, equipment variations, teaching cues, regressions, progressions, and source tracking.",
  path: "/exercises",
  keywords: ["exercise library", "strength training", "bodyweight training", "exercise science", "fitness education"]
});

const defaultExerciseSources = [
  {
    title: "ACE Exercise Library",
    href: "https://www.acefitness.org/resources/everyone/exercise-library/",
    notes: "External exercise demonstration reference; do not copy source media without permission."
  },
  {
    title: "MedlinePlus Exercise and Physical Fitness",
    href: "https://medlineplus.gov/exerciseandphysicalfitness.html",
    notes: "Public NIH health topic for exercise basics and safety context."
  },
  {
    title: "Physical Activity Guidelines for Americans",
    href: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines",
    notes: "Federal physical activity guidance for general education context."
  }
];

function getExerciseBenefits(exercise: ExerciseLibraryItem) {
  return exercise.benefits ?? [
    `Builds ${exercise.category.toLowerCase()} capacity with a clear setup and repeatable execution.`,
    `Trains ${exercise.bodyAreas.slice(0, 4).join(", ")} with scalable loading or leverage.`,
    "Supports app tracking for progression, symptoms, readiness, and technique notes."
  ];
}

function getExerciseSafetyNotes(exercise: ExerciseLibraryItem) {
  return exercise.safetyNotes ?? [
    exercise.commonMistake,
    "Use pain-free range and stop for sharp pain, dizziness, numbness, or unusual symptoms.",
    "Scale load, speed, range, and volume to match current ability and recovery."
  ];
}

function getExerciseMediaPlan(exercise: ExerciseLibraryItem) {
  return exercise.mediaPlan ?? {
    imageSlots: ["setup", "start position", "finish position", "common mistake"],
    videoSlots: ["full demo", "regression demo", "progression demo"],
    licensingNotes: "Use E.R. Fitness-owned, contributor-licensed, public-domain, Creative Commons, or purchased/licensed media only."
  };
}

export default function ExercisesPage() {
  const visibleExercises = exerciseLibrary.slice(0, previewLimits.exercises);
  const visibleEquipment = equipmentLibrary.slice(0, previewLimits.equipment);
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "E.R. Fitness Exercise Library",
    description: metadata.description,
    numberOfItems: exerciseLibrary.length
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Exercise Library"
        title="Exercise teaching cues for Bodyweight Warrior, Iron Forge, Performance Lab, and Mobility."
        description="The website teaches setup, execution, regressions, progressions, and common mistakes. The app tracks reps, load, effort, symptoms, and consistency."
        primaryCta={{ label: "Exercise Preview", href: "#exercise-library-preview" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search exercise education" />
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeader title="Exercise Systems" description="Exercise records now support the education pages and routine library." />
              <div className="mt-5">
                <TagGrid items={exerciseSystems} />
              </div>
            </div>
            <div className="rounded-md border border-volt-400/25 bg-volt-400/8 p-5">
              <div className="flex items-center gap-3">
                <Activity size={24} className="text-volt-400" aria-hidden />
                <SectionHeader title="App Handoff" description="Open the app dashboard to track selected exercises, loads, symptoms, and progress notes." />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href="/dashboard?open=exercise-library">Dashboard Preview</ButtonLink>
                <ButtonLink href="/dashboard?track=exercise-library" variant="secondary">Tracking Handoff Preview</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipment-library" className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Equipment Library"
            title="Dumbbells, barbells, kettlebells, machines, bands, benches, cables, and bodyweight."
            description="Equipment entries include best uses, coaching cues, safety notes, source fields, license fields, and searchable paths."
          />
          <div className="mt-6">
            <LockedContentPreview
              title="Equipment Library Preview"
              description="Public visitors can inspect representative equipment notes while full equipment education and tracking prompts stay reserved for the app access layer."
              previewCount={visibleEquipment.length}
              totalCount={equipmentLibrary.length}
              sourceNote="Source and license fields remain visible on previewed equipment records."
            >
              <EquipmentLibraryPanel items={visibleEquipment} />
            </LockedContentPreview>
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <ExerciseDemoPackPanel limit={previewLimits.mediaCards} />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <OpenWorkoutSystemsPanel
            areas={["Workout & Exercise", "Injury Education", "Recovery"]}
            title="Open Exercise Practice Systems"
            description="Public-source templates for bodyweight strength, video-guided strength/flex practice, and conservative return-to-training work."
            limit={2}
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Workout & Exercise", "Injury Education"]}
            title="Exercise Demonstration Pack"
            description="Source-linked exercise demos, image-sequence requirements, safety boundaries, and teaching lessons for movement education."
            lessonLimit={2}
            mediaLimit={2}
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Workout & Exercise", "Injury Education", "Recovery"]}
            title="Free Exercise Demonstrations, Plans, and Rehab References"
            description="External public resources for movement photos, videos, strength plans, and orthopaedic conditioning handouts."
            limit={previewLimits.publicMaterials}
          />
        </div>
      </section>

      <section id="exercise-library-preview" className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Library"
            title="Exercise entries with cues, mistakes, regressions, progressions, and tracking prompts."
            description="Each entry teaches setup, execution, common mistakes, regressions, progressions, related body areas, and app tracking prompts."
          />
          <LockedContentPreview
            title="Exercise Library Preview"
            description="Public visitors see representative exercises with source tracking and media planning. Full exercise access is reserved for the future app subscriber layer."
            previewCount={visibleExercises.length}
            totalCount={exerciseLibrary.length}
            sourceNote="Previewed records keep source links, review status, and licensing notes visible."
          >
            <div className="mt-6 grid gap-5">
              {visibleExercises.map((exercise) => (
              <article key={exercise.slug} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-volt-400">{exercise.system} | {exercise.category}</p>
                    <h2 className="mt-2 text-2xl font-black text-white">{exercise.name}</h2>
                    <p className="mt-3 max-w-4xl text-sm leading-6 text-zinc-400">{exercise.teachingFocus}</p>
                  </div>
                  <Dumbbell size={24} className="text-ember-400" aria-hidden />
                </div>
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-md border border-white/10 bg-black/25 p-4">
                    <p className="text-xs font-black uppercase text-zinc-500">Setup</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">{exercise.setup}</p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-black/25 p-4">
                    <p className="text-xs font-black uppercase text-zinc-500">Execution</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">{exercise.execution}</p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-black/25 p-4">
                    <p className="text-xs font-black uppercase text-zinc-500">Common Mistake</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">{exercise.commonMistake}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  <TagGrid items={exercise.bodyAreas} />
                  <TagGrid items={exercise.regressions} tone="orange" />
                  <TagGrid items={exercise.progressions} tone="green" />
                </div>
                <p className="mt-5 rounded-md border border-white/10 bg-black/25 p-4 text-sm leading-6 text-zinc-300">{exercise.appTracking}</p>
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  <div className="rounded-md border border-white/10 bg-black/25 p-4">
                    <p className="text-xs font-black uppercase text-volt-400">Benefits</p>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-zinc-300">
                      {getExerciseBenefits(exercise).map((benefit) => (
                        <li key={benefit} className="border-l border-volt-400/35 pl-3">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-md border border-ember-500/25 bg-ember-500/8 p-4">
                    <p className="text-xs font-black uppercase text-ember-400">Safety Notes</p>
                    <ul className="mt-2 space-y-2 text-sm leading-6 text-zinc-300">
                      {getExerciseSafetyNotes(exercise).map((note) => (
                        <li key={note} className="border-l border-ember-400/35 pl-3">{note}</li>
                      ))}
                    </ul>
                  </div>
                    <div className="rounded-md border border-white/10 bg-black/25 p-4">
                      <p className="text-xs font-black uppercase text-zinc-500">Review Status</p>
                      <p className="mt-2 text-sm font-bold text-zinc-300">{exercise.reviewStatus ?? "E.R. Fitness Draft"}</p>
                      <p className="mt-1 text-xs leading-5 text-zinc-500">
                        {exercise.reviewerType ?? "trainer or coach"} | {exercise.reviewedBy ?? "Unassigned"} | {exercise.reviewDate ?? "Pending"}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-zinc-400">{exercise.reviewNotes ?? "Exercise record is ready for professional review."}</p>
                      <p className="mt-4 text-xs font-black uppercase text-zinc-500">Source References</p>
                    <div className="mt-2 grid gap-2">
                      {(exercise.sourceReferences ?? defaultExerciseSources).map((source) => (
                        <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="text-sm font-bold text-volt-400 hover:text-volt-300">
                          {source.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-5 rounded-md border border-white/10 bg-black/25 p-4">
                  <p className="text-xs font-black uppercase text-zinc-500">Media Plan and Licensing</p>
                  <div className="mt-3 grid gap-4 lg:grid-cols-3">
                    <TagGrid items={getExerciseMediaPlan(exercise).imageSlots} />
                    <TagGrid items={getExerciseMediaPlan(exercise).videoSlots} tone="green" />
                    <p className="text-sm leading-6 text-zinc-300">{getExerciseMediaPlan(exercise).licensingNotes}</p>
                  </div>
                </div>
              </article>
              ))}
            </div>
          </LockedContentPreview>
        </div>
      </section>
    </>
  );
}
