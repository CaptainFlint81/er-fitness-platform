import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { getEducationTopic } from "@/lib/education-data";
import { routineLibrary, routineSystems } from "@/lib/training-library";

export const metadata: Metadata = {
  title: "Routine Library",
  description: "E.R. Fitness routine library with Bodyweight Warrior, Iron Forge, Performance Lab, Mobility, adaptive, recovery, and nutrition consistency routines."
};

export default function RoutinesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "E.R. Fitness Routine Library",
    description: metadata.description,
    numberOfItems: routineLibrary.length
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Routine Library"
        title="Routine templates that connect education pages to trackable app programs."
        description="The website explains why each block exists. The app tracks completion, load, reps, effort, symptoms, readiness, and consistency."
        primaryCta={{ label: "Start in App", href: "/dashboard?open=routine-library" }}
        secondaryCta={{ label: "Exercise Library", href: "/exercises" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search routine education" />
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeader title="Routine Systems" description="Routine templates support workouts, recovery, adaptive movement, and nutrition consistency." />
              <div className="mt-5">
                <TagGrid items={routineSystems} />
              </div>
            </div>
            <div className="rounded-md border border-volt-400/25 bg-volt-400/8 p-5">
              <SectionHeader title="App Handoff" description="Use the app dashboard to start a routine, track completion, and attach notes." />
              <div className="mt-5 flex flex-wrap gap-3">
                <ButtonLink href="/dashboard?open=routine-library">Open in ER Fitness</ButtonLink>
                <ButtonLink href="/dashboard?track=routine-library" variant="secondary">Track in ER Fitness</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Templates"
            title="Routine entries with educational links and tracking prompts."
            description="Each routine keeps a clear bridge between the teaching website and the tracking app."
          />
          <div className="mt-6 grid gap-5">
            {routineLibrary.map((routine) => {
              const relatedTopics = routine.relatedEducation
                .map((slug) => getEducationTopic(slug))
                .filter((topic): topic is NonNullable<typeof topic> => Boolean(topic));

              return (
                <article key={routine.slug} id={routine.slug} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase text-volt-400">{routine.system} | {routine.duration} | {routine.level}</p>
                      <h2 className="mt-2 text-2xl font-black text-white">{routine.title}</h2>
                      <p className="mt-3 max-w-4xl text-sm leading-6 text-zinc-400">{routine.goal}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <ButtonLink href={`/dashboard?open=${routine.slug}`} variant="secondary">Open in ER Fitness</ButtonLink>
                      <ButtonLink href={`/dashboard?track=${routine.slug}`} variant="ghost">Track</ButtonLink>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 lg:grid-cols-4">
                    {routine.blocks.map((block) => (
                      <div key={`${routine.slug}-${block.name}`} className="rounded-md border border-white/10 bg-black/25 p-4">
                        <p className="text-xs font-black uppercase text-ember-400">{block.name}</p>
                        <p className="mt-2 text-sm font-bold text-white">{block.prescription}</p>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">{block.coachingNote}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr]">
                    <p className="rounded-md border border-white/10 bg-black/25 p-4 text-sm leading-6 text-zinc-300">{routine.appTracking}</p>
                    <div className="rounded-md border border-white/10 bg-black/25 p-4">
                      <p className="text-xs font-black uppercase text-zinc-500">Related Education</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {relatedTopics.map((topic) => (
                          <Link key={topic.slug} href={`/education/${topic.slug}`} className="rounded-md border border-white/10 bg-white/6 px-3 py-2 text-sm font-bold text-zinc-200 hover:border-volt-400/40">
                            {topic.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
