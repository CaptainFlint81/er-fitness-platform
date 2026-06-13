import { Flame, ShieldCheck, Sparkles, Users } from "lucide-react";

import { AppValueCTA } from "@/components/AppValueCTA";
import { CardGrid } from "@/components/CardGrid";
import { ContentPackPanel, OpenWorkoutSystemsPanel, PublicMaterialsPanel } from "@/components/ContentPackPanel";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { BlogCard } from "@/components/content/BlogCard";
import { CategoryTabs } from "@/components/content/CategoryTabs";
import { CommentThread } from "@/components/content/CommentThread";
import { PostCard } from "@/components/content/PostCard";
import { ProfileCard } from "@/components/content/ProfileCard";
import { UploadPanel } from "@/components/content/UploadPanel";
import { GroupCard } from "@/components/community/GroupCard";
import {
  blogSystems,
  communityArchitecture,
  communityPostTypes,
  moderationFeatures,
  socialFeatures
} from "@/lib/platform-data";
import {
  communityDiscoveryFilters,
  communityGroups,
  communityModerationControls,
  communitySearchTargets,
  transformationHighlights,
  trendingCommunityPosts,
  userCreatedGroupFields
} from "@/lib/community-groups";
import { previewLimits } from "@/lib/access-control";
import { contentCategories, demoBlogs, demoComments, demoPosts, demoProfiles } from "@/lib/content-data";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Fitness Community",
  description: "E.R. Fitness community connects groups, posts, chat, blogs, media, progress sharing, moderation, and source-linked fitness education discussions.",
  path: "/community",
  keywords: ["fitness community", "fitness education", "workout library", "nutrition education", "recovery fitness"]
});

export default function CommunityPage() {
  const featuredGroups = communityGroups.filter((group) => group.featured);
  const visibleFeaturedGroups = featuredGroups.slice(0, previewLimits.communityGroups);
  const visiblePosts = demoPosts.slice(0, previewLimits.communityRoomItems);
  const visibleProfiles = demoProfiles.slice(0, previewLimits.communityRoomItems);
  const visibleBlogs = demoBlogs.slice(0, previewLimits.blogs);

  return (
    <>
      <PageHero
        eyebrow="Community Platform"
        title="Groups, posts, chat, blogs, media, and people who train like you."
        description="E.R. Fitness community spaces help members join groups, post, chat, blog, journal, share media, ask questions, follow creators, and stay safe with moderation tools."
        primaryCta={{ label: "Community Preview", href: "#community-preview" }}
        secondaryCta={{ label: "Browse Groups", href: "/community/groups" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section id="community-preview" className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Featured Groups"
            title="Default spaces for every training style, goal, body, and support need."
            description="Each group page contains a real overview, feed, pinned posts, media, members, chat, rules, and moderation path."
          />
          <LockedContentPreview
            title="Featured Group Preview"
            description="Public visitors can inspect representative groups. Full rooms, chat, feeds, media, and members are reserved for future app account access."
            previewCount={visibleFeaturedGroups.length}
            totalCount={featuredGroups.length}
          >
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleFeaturedGroups.map((group) => (
                <GroupCard key={group.id} group={group} />
              ))}
            </div>
          </LockedContentPreview>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Flame size={24} className="text-ember-400" aria-hidden />
              <SectionHeader title="Trending Posts" description="High-signal conversations from groups, journals, media, and transformation spaces." />
            </div>
            <div className="mt-6 grid gap-4">
              {trendingCommunityPosts.map((post) => (
                <a key={post.title} href={post.href} className="rounded-md border border-white/10 bg-white/[0.045] p-5 transition hover:border-volt-400/40">
                  <p className="text-xs font-black uppercase text-volt-400">{post.group}</p>
                  <h2 className="mt-2 text-lg font-black text-white">{post.title}</h2>
                  <p className="mt-2 text-sm font-bold text-zinc-400">{post.metric}</p>
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <Sparkles size={24} className="text-volt-400" aria-hidden />
              <SectionHeader title="Transformation Highlights" description="Community progress stories, photo updates, and comeback milestones." />
            </div>
            <div className="mt-6 grid gap-4">
              {transformationHighlights.map((highlight) => (
                <a key={highlight.title} href={highlight.href} className="rounded-md border border-white/10 bg-white/[0.045] p-5 transition hover:border-ember-500/40">
                  <p className="text-xs font-black uppercase text-ember-400">{highlight.group}</p>
                  <h2 className="mt-2 text-lg font-black text-white">{highlight.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{highlight.detail}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="create" className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <UploadPanel title="Create Community Content" />
          <div className="space-y-5">
            <SearchFilters label="Search community content" />
            <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
              <div className="flex items-center gap-3">
                <Users size={22} className="text-volt-400" aria-hidden />
                <h2 className="text-lg font-black text-white">Post Types</h2>
              </div>
              <div className="mt-4">
                <TagGrid items={communityPostTypes} />
              </div>
            </div>
            <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
              <h2 className="text-lg font-black text-white">Search and Discovery</h2>
              <div className="mt-4 grid gap-4">
                <TagGrid items={communitySearchTargets} tone="green" />
                <TagGrid items={communityDiscoveryFilters} tone="orange" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Feed"
            title="Community posts with workflow, visibility, media, reactions, comments, saves, and reports."
            description="Posts carry author, content type, status, visibility, category, tags, media, embeds, reactions, comments, saved state, and moderation state."
          />
          <div className="mt-6">
            <CategoryTabs categories={contentCategories} />
          </div>
          <div className="mt-6 grid gap-5">
            {visiblePosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Users size={22} className="text-volt-400" aria-hidden />
              <SectionHeader title="New Member Area" description="A guided on-ramp for people joining the community for the first time." />
            </div>
            <div className="mt-5">
              <CardGrid
                items={[
                  { title: "Introduce Yourself", description: "Share your training goal, experience level, preferred groups, and what support you need.", href: "/community/groups/beginners", meta: "Start here" },
                  { title: "Find Your Space", description: "Browse default groups by training style, nutrition goal, sport, condition, or support need.", href: "/community/groups", meta: "Groups" },
                  { title: "Ask a Question", description: "Use the preview-only Q&A foundation for training, nutrition, recovery, app, and safety questions.", href: "/community/questions", meta: "Q&A Preview" },
                  { title: "Post Progress", description: "Share progress photos, transformations, milestones, wins, or comeback notes with visibility controls.", href: "/community/groups/progress-photos", meta: "Progress" }
                ]}
                columns="two"
              />
            </div>
          </div>
          <div>
            <SectionHeader title="User-Created Group Requirements" description="Member-created spaces require owner approval, group rules, moderators, visibility settings, report handling, and backend governance before public creation opens." />
            <div className="mt-5">
              <TagGrid items={userCreatedGroupFields} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <OpenWorkoutSystemsPanel
            areas={["Community Guidance"]}
            title="Open Community Activity Challenge System"
            description="A public-source framework for inclusive challenges, source-linked posts, beginner/adaptive options, check-ins, and moderation boundaries."
            limit={1}
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <ContentPackPanel
            areas={["Community Guidance", "Media Rights"]}
            title="Community Guidance and Creator Source Lessons"
            description="Education for source-aware posts, safe questions, moderation signals, media rights, and useful fitness discussions."
            lessonLimit={2}
            mediaLimit={2}
          />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <PublicMaterialsPanel
            areas={["Community Guidance", "Workout & Exercise", "Adaptive Fitness"]}
            title="Free Community Program Materials"
            description="Public campaign materials, community playbooks, adaptive fitness resources, and source links creators can use in posts without copying protected content."
            limit={previewLimits.publicMaterials}
          />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Community Architecture"
            title="Posts, comments, likes, follows, reports, and moderation are modeled together."
            description="The social layer is prepared for public content, creator education, community profiles, report flows, admin review, and safety decisions."
          />
          <div className="mt-6">
            <CardGrid items={communityArchitecture} columns="three" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader eyebrow="Creators" title="Profile cards, follows, badges, pets, XP, and report-user controls." />
            <div className="mt-6 grid gap-4">
              {visibleProfiles.map((profile) => (
                <ProfileCard key={profile.id} profile={profile} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Creator Blog" title="Blog and journal library." />
            <div className="mt-6 grid gap-4">
              {visibleBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/50">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader eyebrow="Social Layer" title="Followers, saved content, favorite creators, and moderation." />
            <div className="mt-5 space-y-6">
              <TagGrid items={socialFeatures} />
              <div className="rounded-md border border-ember-500/25 bg-ember-500/8 p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={22} className="text-ember-400" aria-hidden />
                  <h2 className="text-lg font-black text-white">Moderation Tools</h2>
                </div>
                <div className="mt-4">
                  <TagGrid items={[...moderationFeatures, ...communityModerationControls]} tone="orange" />
                </div>
              </div>
              <CardGrid items={blogSystems} columns="two" />
            </div>
          </div>
          <CommentThread comments={demoComments} />
        </div>
      </section>
    </>
  );
}
