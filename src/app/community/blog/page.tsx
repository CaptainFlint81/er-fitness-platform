import { BookOpen } from "lucide-react";

import { AppValueCTA } from "@/components/AppValueCTA";
import { BlogCard } from "@/components/content/BlogCard";
import { CategoryTabs } from "@/components/content/CategoryTabs";
import { AttachmentControls } from "@/components/content/AttachmentControls";
import { ComposerStatusActions } from "@/components/content/ComposerStatusActions";
import { UploadPanel } from "@/components/content/UploadPanel";
import { CardGrid } from "@/components/CardGrid";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { blogSystems } from "@/lib/platform-data";
import { previewLimits } from "@/lib/access-control";
import { contentCategories, contentReviewFields, contentReviewWorkflow, demoBlogs, professionalContributorRoles } from "@/lib/content-data";
import { communityGroups } from "@/lib/community-groups";

const journalTypes = [
  "Blog posts",
  "Workout journals",
  "Nutrition journals",
  "Transformation journals",
  "Recovery journals"
];

const supportedFields = [
  "Title",
  "Body",
  "Tags",
  "Category",
  "Photos",
  "Videos",
  "External links",
  "Visibility"
];

export default function BlogPage() {
  const visibleBlogs = demoBlogs.slice(0, previewLimits.blogs);

  return (
    <>
      <PageHero
        eyebrow="Creator Blog"
        title="Long-form fitness education, journals, transformation stories, and embedded platform content."
        description="Users can publish instructional articles, workout journals, nutrition journals, transformation journals, and injury recovery journals with media, tags, visibility, and moderation state."
        primaryCta={{ label: "Blog Preview", href: "#blog-library" }}
        secondaryCta={{ label: "Community", href: "/community" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section id="write" className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <UploadPanel title="Blog and Journal Review Workflow" />
          <div className="space-y-5">
            <SearchFilters label="Search blogs and journals" />
            <CardGrid items={blogSystems} columns="two" />
            <div>
              <SectionHeader title="Journal Types" />
              <div className="mt-4">
                <TagGrid items={journalTypes} />
              </div>
            </div>
            <div>
              <SectionHeader title="Supported Fields" />
              <div className="mt-4">
                <TagGrid items={supportedFields} tone="green" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BookOpen size={24} className="text-volt-400" aria-hidden />
              <SectionHeader
                eyebrow="Composer"
                title="Structured blog and journal composer foundation."
                description="The UI supports text, photos, videos, external links, group selection, categories, tags, visibility, moderation state, and review-path previews."
              />
            </div>
          </div>
          <form className="grid gap-4 rounded-md border border-white/10 bg-white/[0.045] p-5">
            <p className="rounded-md border border-ember-500/25 bg-ember-500/8 px-3 py-2 text-xs font-black uppercase text-ember-400">
              Preview only. Blog and journal submission are disabled until account access is live.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-200">
                Journal type
                <select disabled className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-white outline-none focus:border-volt-400 disabled:cursor-not-allowed disabled:opacity-55" defaultValue="Workout journals">
                  {journalTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-200">
                Group
                <select disabled className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-white outline-none focus:border-volt-400 disabled:cursor-not-allowed disabled:opacity-55" defaultValue="General Fitness">
                  {communityGroups.slice(0, 12).map((group) => (
                    <option key={group.id}>{group.name}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-zinc-200">
              Title
              <input disabled className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-white outline-none focus:border-volt-400 disabled:cursor-not-allowed disabled:opacity-55" placeholder="Training week notes, meal prep recap, or transformation milestone" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-zinc-200">
              Body
              <textarea disabled className="min-h-32 rounded-md border border-white/10 bg-black/40 px-3 py-3 text-white outline-none focus:border-volt-400 disabled:cursor-not-allowed disabled:opacity-55" placeholder="Write the journal body, lesson, story, or educational notes." />
            </label>
            <AttachmentControls compact previewOnly />
            <ComposerStatusActions publishLabel="Show Blog Review Path" previewOnly />
          </form>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Contributor System"
              title="Professional submissions require owner approval, review, and publish approval."
              description="The content model supports physical therapists, trainers, coaches, nutrition professionals, adaptive fitness specialists, and recovery specialists."
            />
            <div className="mt-5">
              <TagGrid items={professionalContributorRoles} tone="green" />
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Review Fields"
              title="Every reviewed content type carries source and credential metadata."
              description="These fields prepare articles, videos, images, exercises, and blog posts for production review."
            />
            <div className="mt-5">
              <TagGrid items={contentReviewFields} tone="orange" />
            </div>
          </div>
          <div className="lg:col-span-2">
            <CardGrid items={contentReviewWorkflow} columns="four" />
          </div>
        </div>
      </section>

      <section id="blog-library" className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader title="Blog Library" description="Reviewed articles, journals, transformation stories, nutrition notes, and recovery entries." />
          <div className="mt-6">
            <CategoryTabs categories={contentCategories} />
          </div>
          <LockedContentPreview
            title="Blog Library Preview"
            description="Public visitors can inspect sample blog and journal cards. Full blogs, journals, comments, saves, and creator workflows require future account access."
            previewCount={visibleBlogs.length}
            totalCount={demoBlogs.length}
          >
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </LockedContentPreview>
        </div>
      </section>
    </>
  );
}
