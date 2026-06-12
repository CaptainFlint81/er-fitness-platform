import type { Metadata } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ButtonLink";
import { ContentPackPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { KnowledgeResourcePanel } from "@/components/KnowledgeResourcePanel";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import {
  allPrinciples,
  featuredPrinciples,
  nutritionPrinciples,
  principleTags,
  trainingNutritionPrinciplesNotice,
  trainingPrinciples,
  type PrincipleTopic
} from "@/lib/principles-data";

export const metadata: Metadata = {
  title: "Training & Nutrition Principles",
  description:
    "E.R. Fitness education for DC Training, Doggcrapp Training, muscle confusion, periodization, carb backloading, workout principles, and nutrition principles.",
  keywords: [
    "E.R. Fitness training principles",
    "DC Training",
    "Doggcrapp Training",
    "muscle confusion",
    "periodization",
    "carb backloading",
    "workout principles",
    "nutrition principles"
  ]
};

export default function TrainingNutritionPrinciplesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "E.R. Fitness Training & Nutrition Principles",
    description: metadata.description,
    numberOfItems: allPrinciples.length,
    hasPart: allPrinciples.map((topic) => ({
      "@type": "Article",
      name: topic.title,
      url: `/training-nutrition-principles#${topic.slug}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Every Routine Fitness"
        title="Training & Nutrition Principles"
        description="Plain-language education for advanced methods, smart variation, periodization, progressive overload, calories, macros, hydration, meal timing, and recovery nutrition."
        primaryCta={{ label: "Featured Concepts", href: "#featured-concepts" }}
        secondaryCta={{ label: "Nutrition Principles", href: "#nutrition-principles" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <div className="rounded-md border border-ember-500/35 bg-ember-500/10 p-5">
            <p className="text-sm font-black uppercase text-ember-400">Educational Notice</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{trainingNutritionPrinciplesNotice}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href="/legal/disclaimer">View Medical Disclaimer</ButtonLink>
              <ButtonLink href="/nutrition" variant="secondary">Nutrition Center</ButtonLink>
              <ButtonLink href="/workouts" variant="ghost">Workout Library</ButtonLink>
            </div>
          </div>
          <SearchFilters label="Search training and nutrition principles" />
          <TagGrid items={principleTags.slice(0, 54)} />
        </div>
      </section>

      <section id="featured-concepts" className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Featured Concepts"
            title="Advanced and misunderstood methods explained without hype."
            description="DC Training is clearly labeled advanced, muscle confusion is corrected as structured variation, and carb backloading is presented as optional nutrition timing."
          />
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {featuredPrinciples.map((topic) => (
              <PrincipleArticle key={topic.slug} topic={topic} />
            ))}
          </div>
        </div>
      </section>

      <section id="training-principles" className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Training Principles"
            title="The rules behind smart workout programming."
            description="Use these principles to make training measurable, recoverable, and structured instead of random."
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trainingPrinciples.map((topic) => (
              <PrincipleArticle key={topic.slug} topic={topic} compact />
            ))}
          </div>
        </div>
      </section>

      <section id="nutrition-principles" className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Nutrition Principles"
            title="The fundamentals behind goal-based eating."
            description="Calories, macros, hydration, meal timing, carb cycling, bulking, cutting, recomp, training days, rest days, and recovery nutrition are educational planning concepts."
          />
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {nutritionPrinciples.map((topic) => (
              <PrincipleArticle key={topic.slug} topic={topic} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Training Principles", "Nutrition", "Media Rights"]}
            title="Principles Content Pack"
            description="Original lessons for progressive overload, programming, training-day nutrition, media sourcing, and practical safety boundaries."
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Training Principles", "Nutrition", "Workout & Exercise"]}
            title="Public Training and Nutrition Source Library"
            description="Federal physical activity guidelines, nutrition references, exercise libraries, and public video hubs connected to the training-principles curriculum."
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <KnowledgeResourcePanel
            title="Principles Pictures, Instructional Videos, and Reference Links"
            description="Visual maps, public videos, exercise demonstrations, and source links make the principles easier to inspect, compare, and apply conservatively."
            visualLimit={6}
            videoLimit={6}
            referenceLimit={5}
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <h2 className="text-xl font-black text-white">How the app uses this page</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              The website teaches principles. The E.R. Fitness app tracks routines, nutrition goals, saved plans, progress, challenges, achievements, and builder output. The Evil Russian Push-Up Program remains a legacy featured program inside E.R. Fitness, not the app brand.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href="/exercises" variant="secondary">Exercise Library</ButtonLink>
              <ButtonLink href="/routines" variant="ghost">Routine Library</ButtonLink>
            </div>
          </div>
          <DisclaimerNotice />
        </div>
      </section>
    </>
  );
}

function PrincipleArticle({ topic, compact = false }: { topic: PrincipleTopic; compact?: boolean }) {
  return (
    <article id={topic.slug} className="scroll-mt-28 rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-volt-400/40 bg-volt-400/10 px-3 py-1 text-xs font-black uppercase text-volt-400">
          {topic.category}
        </span>
        <span className="rounded-full border border-ember-400/35 bg-ember-400/10 px-3 py-1 text-xs font-black uppercase text-ember-400">
          {topic.level}
        </span>
      </div>
      <h2 className="mt-4 text-xl font-black text-white">{topic.title}</h2>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{topic.summary}</p>
      <div className="mt-4">
        <h3 className="text-xs font-black uppercase text-zinc-500">Key points</h3>
        <ul className="mt-2 space-y-2 text-sm leading-6 text-zinc-300">
          {topic.keyPoints.map((point) => (
            <li key={point} className="border-l border-volt-400/35 pl-3">
              {point}
            </li>
          ))}
        </ul>
      </div>
      {!compact && (
        <div className="mt-4 grid gap-3">
          <DetailBlock title="How to use it" body={topic.application} />
          <DetailBlock title="Safety reminder" body={topic.safety} tone="warning" />
        </div>
      )}
      {compact && <p className="mt-4 text-sm leading-6 text-ember-300">{topic.safety}</p>}
      <Link href="/legal/disclaimer" className="mt-4 inline-flex text-sm font-bold text-volt-400 hover:text-volt-300">
        View full Medical Disclaimer
      </Link>
    </article>
  );
}

function DetailBlock({ title, body, tone = "default" }: { title: string; body: string; tone?: "default" | "warning" }) {
  return (
    <div className={`rounded-md border p-4 ${tone === "warning" ? "border-ember-400/30 bg-ember-400/8" : "border-white/10 bg-black/20"}`}>
      <h3 className={`text-xs font-black uppercase ${tone === "warning" ? "text-ember-400" : "text-zinc-500"}`}>{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{body}</p>
    </div>
  );
}
