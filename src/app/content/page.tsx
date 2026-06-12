import type { Metadata } from "next";

import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { ReferencedCardGrid, SearchableRecordPanel } from "@/components/PublishReadyPanels";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import {
  contentReviewFields,
  contentReviewWorkflow,
  contentScaleTargets,
  contentSubmissionQueue,
  knowledgeContentCategories,
  professionalContributorRoles,
  professionalContributors,
  reviewedContentExamples,
  scalableSearchTargets
} from "@/lib/content-data";
import { professionalContributorPath, searchableContentRecords } from "@/lib/publish-ready-content";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  title: "Fitness Resource Library and Source Directory",
  description: "E.R. Fitness source directory and resource library organizes reviewed exercises, articles, videos, images, blogs, contributors, licensing fields, references, and search-ready fitness education records.",
  path: "/content",
  keywords: ["free fitness resources", "source directory", "fitness education", "exercise library", "workout library"]
});

export default function ContentPlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Content Platform"
        title="A scalable reviewed knowledge platform for E.R. Fitness education."
        description="The website teaches through reviewed exercises, articles, videos, images, blog posts, professional contributors, categories, references, licenses, and search-ready content records."
        primaryCta={{ label: "Search Content", href: "/search" }}
        secondaryCta={{ label: "Review Queue", href: "/admin#review-workflow" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search scalable content records" />
          <SectionHeader
            eyebrow="Scale Targets"
            title="Content architecture is prepared for thousands of records."
            description="Exercises, articles, videos, images, blogs, contributors, injuries, conditions, and muscle groups share category, review, reference, license, and search metadata."
          />
          <CardGrid items={contentScaleTargets} columns="three" />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader title="Content Categories" description="The taxonomy supports the requested educational areas and long-term library growth." />
            <div className="mt-5">
              <TagGrid items={knowledgeContentCategories} />
            </div>
          </div>
          <div>
            <SectionHeader title="Search Targets" description="Unified search indexes education, media, conditions, injuries, muscles, contributors, and community content." />
            <div className="mt-5">
              <CardGrid items={scalableSearchTargets} columns="two" />
            </div>
          </div>
        </div>
      </section>

      <section id="review-workflow" className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Review Workflow"
            title="Submission, owner approval, professional review, and publish approval are modeled."
            description="Every reviewed content type can carry author, reviewedBy, credentials, reviewDate, source, license, and references."
          />
          <div className="mt-6">
            <CardGrid items={contentReviewWorkflow} columns="four" />
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeader title="Required Fields" />
              <div className="mt-4">
                <TagGrid items={contentReviewFields} tone="orange" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {contentSubmissionQueue.map((submission) => (
                <article key={submission.id} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                  <p className="text-xs font-black uppercase text-volt-400">{submission.category} | {submission.type}</p>
                  <h2 className="mt-2 text-lg font-black text-white">{submission.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{submission.workflow.lastAction}</p>
                  <p className="mt-3 text-xs font-bold uppercase text-zinc-500">
                    {submission.review.author} | {submission.review.reviewedBy} | {submission.review.license}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contributors" className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Professional Contributors"
              title="Approved experts can submit content after owner review."
              description="Contributor roles include physical therapists, trainers, coaches, nutrition professionals, adaptive fitness specialists, and recovery specialists."
            />
            <div className="mt-5">
              <TagGrid items={professionalContributorRoles} tone="green" />
            </div>
          </div>
          <div className="grid gap-4">
            {professionalContributors.map((contributor) => (
              <article key={contributor.id} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                <p className="text-xs font-black uppercase text-volt-400">{contributor.discipline}</p>
                <h2 className="mt-2 text-lg font-black text-white">{contributor.displayName}</h2>
                <p className="mt-2 text-sm font-bold text-ember-400">{contributor.credentials} | {contributor.approvalStatus}</p>
                <div className="mt-4">
                  <TagGrid items={contributor.specialties} tone="green" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Contributor Path"
            title="Professional contributors move through contact, credentials, submission, review, and publish approval."
            description="The public workflow is explicit so trainers, coaches, physical therapists, nutrition professionals, adaptive specialists, and recovery specialists know what is required."
          />
          <div className="mt-6">
            <ReferencedCardGrid items={professionalContributorPath} columns="three" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Searchable Records"
            title="Exercises, articles, videos, images, equipment, conditions, and muscle groups are structured for search."
            description="Each record type includes fields for source, license, references, status, category, tags, and review metadata."
          />
          <div className="mt-6">
            <SearchableRecordPanel items={searchableContentRecords} />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Indexed Examples"
            title="Review-aware content records are ready for search indexing."
            description="These examples show how exercises, articles, videos, condition education, and contributor records enter the same search system."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reviewedContentExamples.map((item) => (
              <article key={item.id} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                <p className="text-xs font-black uppercase text-volt-400">{item.type} | {item.category}</p>
                <h2 className="mt-2 text-lg font-black text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
                <p className="mt-3 text-xs font-bold uppercase text-zinc-500">
                  Author: {item.author} | Reviewed by: {item.reviewedBy} | Status: {item.status}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
