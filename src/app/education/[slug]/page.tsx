import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertTriangle, BookOpen, CheckCircle2 } from "lucide-react";

import { AppIntegrationPanel } from "@/components/AppIntegrationPanel";
import { AppValueCTA } from "@/components/AppValueCTA";
import { CardGrid } from "@/components/CardGrid";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import {
  educationTopics,
  getEducationTopic,
  getRelatedEducationTopics
} from "@/lib/education-data";
import { previewLimits } from "@/lib/access-control";

export function generateStaticParams() {
  return educationTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = getEducationTopic(slug);

  if (!topic) {
    return {
      title: "Education Topic",
      description: "E.R. Fitness education topic."
    };
  }

  return {
    title: topic.title,
    description: topic.description
  };
}

export default async function EducationTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getEducationTopic(slug);

  if (!topic) {
    notFound();
  }

  const relatedCards = getRelatedEducationTopics(topic).map((item) => ({
    title: item.title,
    description: item.summary,
    href: `/education/${item.slug}`,
    meta: item.category
  }));
  const visibleArticleSections = topic.articleSections.slice(0, previewLimits.articles);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.title,
    description: topic.description,
    about: topic.tags,
    articleSection: topic.category,
    isPartOf: {
      "@type": "WebSite",
      name: "Every Routine Fitness"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow={topic.category}
        title={topic.title}
        description={topic.description}
        primaryCta={{ label: "Topic Preview", href: "#topic-preview" }}
        secondaryCta={{ label: "All Education", href: "/education" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section id="topic-preview" className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <div className="flex items-center gap-3">
              <BookOpen size={24} className="text-volt-400" aria-hidden />
              <SectionHeader title="What This Teaches" description={topic.summary} />
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-md border border-white/10 bg-black/25 p-4">
                <p className="text-xs font-black uppercase text-ember-400">Focus</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{topic.focus}</p>
              </div>
              {topic.essentials.map((essential) => (
                <div key={essential} className="flex gap-3 rounded-md border border-white/10 bg-black/25 p-4">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-volt-400" aria-hidden />
                  <p className="text-sm leading-6 text-zinc-300">{essential}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="space-y-5">
            <AppIntegrationPanel topic={topic} />
            <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
              <SectionHeader title="Benefits" />
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-300">
                {topic.benefits.map((benefit) => (
                  <li key={benefit} className="border-l border-volt-400/35 pl-3">{benefit}</li>
                ))}
              </ul>
            </article>
            <article className="rounded-md border border-ember-500/25 bg-ember-500/8 p-5">
              <div className="flex items-center gap-3">
                <AlertTriangle size={22} className="text-ember-400" aria-hidden />
                <h2 className="text-lg font-black text-white">Safety Boundary</h2>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{topic.safety}</p>
            </article>
            <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
              <SectionHeader title="Common Mistakes" />
              <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-300">
                {topic.commonMistakes.map((mistake) => (
                  <li key={mistake} className="border-l border-ember-400/35 pl-3">{mistake}</li>
                ))}
              </ul>
            </article>
            <div>
              <SectionHeader title="Topic Tags" />
              <div className="mt-4">
                <TagGrid items={[topic.category, topic.relatedWorkoutCategory, ...topic.tags]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Education"
            title="Deep Dive"
            description="Original E.R. Fitness teaching notes for applying this topic with safe progression, media planning, and source review."
          />
          <LockedContentPreview
            title="Education Topic Preview"
            description="Public visitors can read a sample deep-dive section. Full article depth, progression notes, and app tracking context are reserved for future app subscribers."
            previewCount={visibleArticleSections.length}
            totalCount={topic.articleSections.length}
            sourceNote="Source references and professional review notes remain visible below."
          >
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {visibleArticleSections.map((section) => (
                <article key={section.title} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                  <h2 className="text-lg font-black text-white">{section.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">{section.body}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-400">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="border-l border-volt-400/35 pl-3">{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </LockedContentPreview>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="App Integration"
              title="Track the behavior, not just the reading."
              description="Each topic connects to a related program and workout category so the app can log completion, notes, readiness, symptoms, or progress."
            />
            <div className="mt-5">
              <TagGrid items={[topic.relatedProgram, topic.relatedWorkoutCategory, topic.trackingPrompt]} tone="green" />
            </div>
          </div>
          <div>
            <SectionHeader title="Related Education" description="Continue learning from nearby topics in the same category or training system." />
            <div className="mt-6">
              <CardGrid items={relatedCards} columns="two" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <SectionHeader title="Source Tracking" description={`Review status: ${topic.reviewStatus} | Reviewer type: ${topic.reviewerType}`} />
            <div className="mt-5 grid gap-3">
              {topic.sourceReferences.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-black/25 p-4 transition hover:border-volt-400/40">
                  <p className="text-sm font-black text-volt-400">{source.title}</p>
                  <p className="mt-2 text-xs leading-5 text-zinc-400">{source.notes}</p>
                </a>
              ))}
            </div>
            <div className="mt-5 rounded-md border border-ember-500/25 bg-ember-500/8 p-4">
              <p className="text-xs font-black uppercase text-ember-400">Professional Review Preparation</p>
              <div className="mt-3 grid gap-2 text-sm leading-6 text-zinc-300">
                <p><span className="font-black text-white">Reviewed by:</span> {topic.reviewedBy}</p>
                <p><span className="font-black text-white">Review date:</span> {topic.reviewDate}</p>
                <p><span className="font-black text-white">Review notes:</span> {topic.reviewNotes}</p>
              </div>
              {topic.reviewFlags.length ? (
                <div className="mt-3">
                  <TagGrid items={topic.reviewFlags} tone="orange" />
                </div>
              ) : null}
            </div>
          </article>
          <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <SectionHeader title="Media Planning" description={topic.mediaPlan.licensingNotes} />
            <div className="mt-5 grid gap-4">
              <div>
                <p className="text-xs font-black uppercase text-zinc-500">Image Slots</p>
                <div className="mt-2">
                  <TagGrid items={topic.mediaPlan.imageSlots} />
                </div>
              </div>
              <div>
                <p className="text-xs font-black uppercase text-zinc-500">Video Slots</p>
                <div className="mt-2">
                  <TagGrid items={topic.mediaPlan.videoSlots} tone="green" />
                </div>
              </div>
            </div>
          </article>
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
