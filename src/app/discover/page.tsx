import { BlogCard } from "@/components/content/BlogCard";
import { CardGrid } from "@/components/CardGrid";
import { CategoryTabs } from "@/components/content/CategoryTabs";
import { MediaCard } from "@/components/content/MediaCard";
import { PostCard } from "@/components/content/PostCard";
import { ProfileCard } from "@/components/content/ProfileCard";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { GroupCard } from "@/components/community/GroupCard";
import { contentCategories, contentScaleTargets, demoBlogs, demoMedia, demoPosts, demoProfiles, knowledgeContentCategories } from "@/lib/content-data";
import { educationCategoryCards } from "@/lib/education-data";
import { communityGroups } from "@/lib/community-groups";
import { discoverTargets } from "@/lib/platform-data";

export default function DiscoverPage() {
  return (
    <>
      <PageHero
        eyebrow="Discover"
        title="Search users, workouts, exercises, articles, videos, images, contributors, nutrition, and recovery content."
        description="The discover surface treats every profile and content object as searchable, categorized, reviewed, tagged, and moderation-aware."
        primaryCta={{ label: "Search", href: "/search" }}
        secondaryCta={{ label: "Content Platform", href: "/content" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Discover E.R. Fitness content" />
          <CategoryTabs categories={contentCategories} />
          <TagGrid items={discoverTargets} />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Content Platform"
              title="Reviewed libraries for education, media, blogs, and contributors."
              description="The architecture supports thousands of exercises, articles, videos, images, and blog posts with review metadata, licensing, references, and publish workflow."
            />
            <div className="mt-6">
              <CardGrid items={contentScaleTargets} columns="two" />
            </div>
          </div>
          <div>
            <SectionHeader title="Knowledge Categories" description="The scalable taxonomy mirrors the requested training, nutrition, recovery, adaptive, strength, and sports systems." />
            <div className="mt-5">
              <TagGrid items={knowledgeContentCategories} tone="green" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader title="Groups" description="Default spaces for fitness types, goals, adaptive athletes, sports, recovery, and support." />
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {communityGroups.filter((group) => group.featured).slice(0, 6).map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader title="People" description="Creator and athlete profile discovery." />
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {demoProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            title="Education"
            description="Browse the teaching layer for body education, training styles, adaptive fitness, injuries, nutrition, recovery, and consistency."
          />
          <div className="mt-6">
            <CardGrid items={educationCategoryCards} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeader title="Posts" description="Community and workout post discovery." />
            <div className="mt-6 grid gap-5">
              {demoPosts.slice(0, 2).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title="Blogs and Media" description="Instructional articles and uploaded assets." />
            <div className="mt-6 grid gap-5">
              {demoBlogs.slice(0, 1).map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
              {demoMedia.slice(0, 2).map((media) => (
                <MediaCard key={media.id} media={media} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
