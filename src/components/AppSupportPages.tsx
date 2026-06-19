import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, BookOpen, Dumbbell, LockKeyhole, ShieldCheck, Utensils } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import {
  beginnerGuidePages,
  findExercise,
  glossaryTerms,
  type BeginnerGuidePage,
  type Definition,
  type ExerciseSupportPage,
  type MindBodyPage,
  type NutritionTopicPage,
  type ResourceLink,
  type WorkoutPathPage
} from "@/lib/app-support-content";

function SupportSection({
  tone = "dark",
  children
}: {
  tone?: "dark" | "graphite";
  children: ReactNode;
}) {
  return (
    <section className={`section-shell ${tone === "graphite" ? "bg-graphite-950/70" : "bg-black/45"}`}>
      <div className="section-inner">{children}</div>
    </section>
  );
}

function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <h2 className="text-lg font-black text-white">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-zinc-300">{children}</div>
    </article>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2">
      {items.map((item) => (
        <li key={item} className="border-l border-volt-400/35 pl-3">
          {item}
        </li>
      ))}
    </ul>
  );
}

function DefinitionList({ items }: { items: Definition[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.term} className="rounded-md border border-white/10 bg-black/25 p-4">
          <h3 className="text-sm font-black uppercase text-volt-400">{item.term}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">{item.definition}</p>
        </article>
      ))}
    </div>
  );
}

function PremiumPreview({ text }: { text: string }) {
  return (
    <article className="rounded-md border border-ember-500/30 bg-ember-500/8 p-5">
      <div className="flex gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ember-500/14 text-ember-400">
          <LockKeyhole size={22} aria-hidden />
        </div>
        <div>
          <p className="text-xs font-black uppercase text-ember-400">Premium Preview</p>
          <h2 className="mt-2 text-xl font-black text-white">Preview only until app services are live.</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">{text}</p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">No payment, login, unlock, upload, or subscription action is active on this page.</p>
        </div>
      </div>
    </article>
  );
}

function ResourceLinks({ resources }: { resources: ResourceLink[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {resources.map((resource) => (
        <a
          key={resource.href}
          href={resource.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-white/10 bg-black/25 p-4 transition hover:border-volt-400/45"
        >
          <span className="text-sm font-black text-white">{resource.title}</span>
          <span className="mt-2 block text-sm leading-6 text-zinc-300">{resource.note}</span>
          <span className="mt-3 block text-xs font-bold uppercase text-zinc-500">{resource.licenseNote}</span>
        </a>
      ))}
    </div>
  );
}

export function ExerciseSupportDetail({ exercise }: { exercise: ExerciseSupportPage }) {
  return (
    <>
      <PageHero
        eyebrow="Exercise Library"
        title={exercise.name}
        description={exercise.appSummary}
        primaryCta={{ label: "Back to Exercises", href: "/exercises" }}
        secondaryCta={{ label: "Open Workout Paths", href: "/workouts" }}
      />

      <SupportSection tone="graphite">
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard title="What it is">{exercise.whatItIs}</InfoCard>
          <InfoCard title="Target area">{exercise.targetArea}</InfoCard>
          <InfoCard title="Why it matters">{exercise.whyItMatters}</InfoCard>
        </div>
      </SupportSection>

      <SupportSection>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader title="Step-by-step instructions" description="Use these cues for app form guide popups and workout-log reminders." />
            <div className="mt-5 rounded-md border border-white/10 bg-white/[0.045] p-5">
              <ol className="grid gap-3 text-sm leading-6 text-zinc-300">
                {exercise.steps.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-volt-400/14 text-sm font-black text-volt-300">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="grid gap-5">
            <InfoCard title="Common mistakes">
              <BulletList items={exercise.commonMistakes} />
            </InfoCard>
            <InfoCard title="App-friendly short summary">{exercise.appSummary}</InfoCard>
          </div>
        </div>
      </SupportSection>

      <SupportSection tone="graphite">
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard title="Easier version">{exercise.easierVersion}</InfoCard>
          <InfoCard title="Harder version">{exercise.harderVersion}</InfoCard>
          <InfoCard title="Safety notes">
            <BulletList items={exercise.safetyNotes} />
          </InfoCard>
        </div>
      </SupportSection>

      <SupportSection>
        <SectionHeader title="Beginner terms explained" description="These definitions match the app form-guide popup language." />
        <div className="mt-5">
          <DefinitionList items={exercise.beginnerTerms} />
        </div>
      </SupportSection>
    </>
  );
}

export function WorkoutPathDetail({ workout }: { workout: WorkoutPathPage }) {
  return (
    <>
      <PageHero
        eyebrow="Workout Path"
        title={workout.title}
        description={workout.goal}
        primaryCta={{ label: "Back to Workouts", href: "/workouts" }}
        secondaryCta={{ label: "Beginner Guide", href: "/guides/beginner" }}
      />

      <SupportSection tone="graphite">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="Difficulty">{workout.difficulty}</InfoCard>
          <InfoCard title="Estimated time">{workout.estimatedTime}</InfoCard>
          <InfoCard title="Equipment">{workout.equipment}</InfoCard>
          <InfoCard title="Weekly progression">{workout.progression}</InfoCard>
        </div>
      </SupportSection>

      <SupportSection>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <SectionHeader title="Sample exercises" description="Each exercise links to a real teaching page for app form guides." />
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {workout.sampleExercises.map((slug) => {
                const exercise = findExercise(slug);
                return (
                  <Link
                    key={slug}
                    href={`/exercises/${slug}`}
                    className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.045] p-4 text-sm font-black text-white transition hover:border-volt-400/45"
                  >
                    <span>{exercise?.name ?? slug}</span>
                    <ArrowRight size={17} className="text-volt-400" aria-hidden />
                  </Link>
                );
              })}
            </div>
          </div>
          <InfoCard title="Beginner safety notes">
            <BulletList items={workout.safetyNotes} />
          </InfoCard>
        </div>
      </SupportSection>

      <SupportSection tone="graphite">
        <PremiumPreview text={workout.premiumPreview} />
      </SupportSection>
    </>
  );
}

export function BeginnerGuideIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Beginner Guide"
        title="Learn the terms before the app tracks the work."
        description="Plain-English support for guided workouts, weekly progression, logs, reps, sets, time, body progress, and form-guide language."
        primaryCta={{ label: "Open Glossary", href: "/glossary" }}
        secondaryCta={{ label: "Exercise Library", href: "/exercises" }}
      />

      <SupportSection tone="graphite">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <InfoCard title="Beginner starting rules">
            <BulletList
              items={[
                "Start with movements you can control.",
                "Progress one variable at a time.",
                "Use logs to learn, not to punish yourself.",
                "Read safety notes before increasing difficulty.",
                "Use direct exercise pages when the app opens a form cue."
              ]}
            />
          </InfoCard>
          <div className="grid gap-3 md:grid-cols-2">
            {beginnerGuidePages.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/beginner/${guide.slug}`}
                className="rounded-md border border-white/10 bg-white/[0.045] p-5 transition hover:border-volt-400/45"
              >
                <BookOpen size={20} className="text-volt-400" aria-hidden />
                <h2 className="mt-3 text-lg font-black text-white">{guide.title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </SupportSection>
    </>
  );
}

export function BeginnerGuideDetail({ guide }: { guide: BeginnerGuidePage }) {
  return (
    <>
      <PageHero
        eyebrow="Beginner Guide"
        title={guide.title}
        description={guide.description}
        primaryCta={{ label: "All Beginner Guides", href: "/guides/beginner" }}
        secondaryCta={{ label: "Glossary", href: "/glossary" }}
      />
      <SupportSection tone="graphite">
        <div className="grid gap-5 md:grid-cols-2">
          {guide.sections.map((section) => (
            <InfoCard key={section.title} title={section.title}>
              <BulletList items={section.items} />
            </InfoCard>
          ))}
        </div>
      </SupportSection>
      <SupportSection>
        <InfoCard title="Safety note">{guide.safety}</InfoCard>
      </SupportSection>
    </>
  );
}

export function GlossarySupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Glossary"
        title="Plain-English fitness terms for app form popups."
        description="Definitions for beginner workout logs, exercise pages, guided workouts, progression notes, and movement cues."
        primaryCta={{ label: "Beginner Guide", href: "/guides/beginner" }}
        secondaryCta={{ label: "Exercises", href: "/exercises" }}
      />
      <SupportSection tone="graphite">
        <DefinitionList items={glossaryTerms} />
      </SupportSection>
    </>
  );
}

export function MindBodySupportDetail({ page }: { page: MindBodyPage }) {
  return (
    <>
      <PageHero
        eyebrow="Recovery / Mobility / Mind-Body"
        title={page.title}
        description={page.overview}
        primaryCta={{ label: "Recovery Home", href: "/recovery" }}
        secondaryCta={{ label: "Exercise Library", href: "/exercises" }}
      />

      <SupportSection tone="graphite">
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard title="What it is for">{page.whatItIsFor}</InfoCard>
          <InfoCard title="Free content">
            <TagGrid items={page.freeContent} />
          </InfoCard>
          <InfoCard title="Safety notes">
            <BulletList items={page.safetyNotes} />
          </InfoCard>
        </div>
      </SupportSection>

      <SupportSection>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <SectionHeader title="Beginner routine" description="A real starter flow the app can link to without creating a placeholder page." />
            <div className="mt-5 rounded-md border border-white/10 bg-white/[0.045] p-5">
              <ol className="grid gap-3 text-sm leading-6 text-zinc-300">
                {page.beginnerRoutine.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2rem_1fr] gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ember-500/14 text-sm font-black text-ember-400">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <PremiumPreview text={page.premiumPreview} />
        </div>
      </SupportSection>
    </>
  );
}

export function MindBodySupportSummary({ page }: { page: MindBodyPage }) {
  return (
    <section className="section-shell bg-graphite-950/70">
      <div className="section-inner space-y-8">
        <SectionHeader
          eyebrow="App Support"
          title={`${page.title} beginner support`}
          description={page.whatItIsFor}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard title="Beginner routine">
            <BulletList items={page.beginnerRoutine} />
          </InfoCard>
          <InfoCard title="Safety notes">
            <BulletList items={page.safetyNotes} />
          </InfoCard>
          <InfoCard title="Free content">
            <TagGrid items={page.freeContent} />
          </InfoCard>
        </div>
        <PremiumPreview text={page.premiumPreview} />
      </div>
    </section>
  );
}

export function NutritionTopicDetail({ topic }: { topic: NutritionTopicPage }) {
  return (
    <>
      <PageHero
        eyebrow="Nutrition"
        title={topic.title}
        description={topic.beginnerExplanation}
        primaryCta={{ label: "Nutrition Home", href: "/nutrition" }}
        secondaryCta={{ label: "Cookbook Hub", href: "/nutrition/cookbooks" }}
      />

      <SupportSection tone="graphite">
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard title="Calorie estimate disclaimer">{topic.calorieDisclaimer}</InfoCard>
          <InfoCard title="Protein / carbs / fat basics">
            <BulletList items={topic.macroBasics} />
          </InfoCard>
          <InfoCard title="Meal-building basics">
            <BulletList items={topic.mealBasics} />
          </InfoCard>
        </div>
      </SupportSection>

      <SupportSection>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <InfoCard title="Free recipe examples">
            <TagGrid items={topic.recipeExamples} tone="green" />
          </InfoCard>
          <div>
            <div className="flex items-center gap-3">
              <Utensils size={24} className="text-ember-400" aria-hidden />
              <SectionHeader
                title="Legal free resources"
                description="These are external links only. E.R. Fitness does not copy paid cookbooks, rehost PDFs, or use recipe images without rights."
              />
            </div>
            <div className="mt-5">
              <ResourceLinks resources={topic.resources} />
            </div>
          </div>
        </div>
      </SupportSection>

      <SupportSection tone="graphite">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <PremiumPreview text={topic.premiumPreview} />
          <InfoCard title="Education boundary">
            <div className="flex gap-3">
              <ShieldCheck size={22} className="mt-1 shrink-0 text-volt-400" aria-hidden />
              <p>
                Nutrition content is educational and cannot diagnose, treat, prescribe, or replace care from a qualified professional.
              </p>
            </div>
          </InfoCard>
        </div>
      </SupportSection>
    </>
  );
}

export function AppSupportRouteCards({ title, description, routes }: { title: string; description: string; routes: Array<{ title: string; href: string; description: string }> }) {
  return (
    <div>
      <SectionHeader title={title} description={description} />
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="rounded-md border border-white/10 bg-white/[0.045] p-4 transition hover:border-volt-400/45"
          >
            <Dumbbell size={18} className="text-volt-400" aria-hidden />
            <h3 className="mt-3 text-base font-black text-white">{route.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{route.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
