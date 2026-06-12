import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { BlogCard } from "@/components/content/BlogCard";
import { MediaCard } from "@/components/content/MediaCard";
import { PostCard } from "@/components/content/PostCard";
import { ProfileCard } from "@/components/content/ProfileCard";
import { GroupCard } from "@/components/community/GroupCard";
import { SearchableRecordPanel } from "@/components/PublishReadyPanels";
import {
  contentCategories,
  contentScaleTargets,
  demoBlogs,
  demoMedia,
  demoPosts,
  demoProfiles,
  knowledgeContentCategories,
  reviewedContentExamples,
  scalableSearchTargets
} from "@/lib/content-data";
import { educationCategoryCards } from "@/lib/education-data";
import { communityDiscoveryFilters, communityGroups, communitySearchTargets } from "@/lib/community-groups";
import { discoverTargets, searchArchitecture, searchFilters } from "@/lib/platform-data";
import { searchableContentRecords } from "@/lib/publish-ready-content";
import { getRoutineCards } from "@/lib/training-library";

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Search Engine"
        title="Unified search for exercises, articles, videos, images, muscle groups, injuries, conditions, contributors, and community content."
        description="The search UI supports scalable categories, tags, user filters, media type filters, reviewer metadata, status filters, and saved result collections."
        primaryCta={{ label: "Content Platform", href: "/content" }}
        secondaryCta={{ label: "Media", href: "/media" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters />
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <SectionHeader title="Search Targets" />
              <div className="mt-4"><TagGrid items={[...communitySearchTargets, ...discoverTargets]} /></div>
            </div>
            <div>
              <SectionHeader title="Filters" />
              <div className="mt-4"><TagGrid items={[...communityDiscoveryFilters, ...searchFilters]} tone="green" /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Search Architecture"
            title="Exercises, articles, videos, images, muscle groups, injuries, conditions, contributors, and blogs share one index plan."
            description="The frontend is prepared for Supabase-backed search document tables with categories, tags, contributor metadata, review status, visibility, and weighted text search."
          />
          <div className="mt-6">
            <CardGrid items={[...scalableSearchTargets, ...searchArchitecture]} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Searchable Content Records"
            title="Search fields are defined for exercises, articles, videos, images, equipment, conditions, and muscle groups."
            description="Each searchable type includes routed paths, source data, license data, references, tags, and review status."
          />
          <div className="mt-6">
            <SearchableRecordPanel items={searchableContentRecords} />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Scalable Content Platform"
              title="Prepared for thousands of exercises, articles, videos, images, and blogs."
              description="Content records share review metadata, contributor ownership, licenses, references, categories, tags, source status, and publish workflow."
            />
            <div className="mt-6">
              <CardGrid items={contentScaleTargets} columns="two" />
            </div>
          </div>
          <div>
            <SectionHeader title="Content Categories" description="Training, nutrition, recovery, adaptive fitness, injured athlete, mind-body practice, longevity, strength, HIIT, and sports performance." />
            <div className="mt-5">
              <TagGrid items={knowledgeContentCategories} tone="green" />
            </div>
            <div className="mt-6 grid gap-4">
              {reviewedContentExamples.map((item) => (
                <article key={item.id} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                  <p className="text-xs font-black uppercase text-volt-400">{item.type} | {item.category}</p>
                  <h2 className="mt-2 text-lg font-black text-white">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
                  <p className="mt-3 text-xs font-bold uppercase text-zinc-500">Author: {item.author} | Reviewed by: {item.reviewedBy} | {item.status}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Education Search"
            title="Education categories, exercises, routines, and app handoff pages are searchable surfaces."
            description="These cards represent the teach-first pages added for body education, training styles, adaptive fitness, injury education, nutrition, recovery, and habits."
          />
          <div className="mt-6">
            <CardGrid items={[...educationCategoryCards.slice(0, 4), ...getRoutineCards().slice(0, 2)]} columns="three" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader title="Indexed Results" description="Profiles, posts, blogs, and media all share report, visibility, tags, and moderation-ready structures." />
          <div className="mt-6">
            <TagGrid items={contentCategories} />
          </div>
          <div className="mt-6 grid gap-5 xl:grid-cols-2">
            <GroupCard group={communityGroups[0]} />
            <ProfileCard profile={demoProfiles[0]} />
            <PostCard post={demoPosts[0]} />
            <BlogCard blog={demoBlogs[0]} />
            <MediaCard media={demoMedia[0]} />
          </div>
        </div>
      </section>
    </>
  );
}
