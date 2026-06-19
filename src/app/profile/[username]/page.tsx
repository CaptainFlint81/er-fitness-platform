import { notFound } from "next/navigation";
import { BadgeCheck, Flame, Image as ImageIcon, Medal, Trophy } from "lucide-react";

import { BlogCard } from "@/components/content/BlogCard";
import { CategoryTabs } from "@/components/content/CategoryTabs";
import { MediaCard } from "@/components/content/MediaCard";
import { PostCard } from "@/components/content/PostCard";
import { ReportButton } from "@/components/content/ReportButton";
import { UploadPanel } from "@/components/content/UploadPanel";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { demoBlogs, demoMedia, demoPosts, demoProfiles } from "@/lib/content-data";
import { profileDemo, transformationMilestones } from "@/lib/platform-data";

export function generateStaticParams() {
  return demoProfiles.map((profile) => ({ username: profile.username }));
}

export default async function ProfilePage({ params }: { params: Promise<{ username: string }> }) {
  const { username } = await params;
  const profile = demoProfiles.find((item) => item.username === username);

  if (!profile) {
    notFound();
  }

  const userPosts = demoPosts.filter((post) => post.authorId === profile.id);
  const userBlogs = demoBlogs.filter((blog) => blog.authorId === profile.id);

  return (
    <>
      <PageHero
        eyebrow={`@${profile.username}`}
        title={profile.displayName}
        description={`${profile.bio} Preview persona for profile layout, content, and app-linked milestones. Current goal: ${profile.goal}.`}
        primaryCta={{ label: "View Content", href: "#profile-content" }}
        secondaryCta={{ label: "Chat Preview", href: "/community/chat" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-5">
            <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.045]">
              <div className="h-32 bg-[linear-gradient(135deg,rgba(255,106,0,0.34),rgba(140,255,0,0.22)),#191b1f]" />
              <div className="p-5 pt-0">
                <div className="-mt-10 flex h-20 w-20 items-center justify-center rounded-md border border-white/15 bg-black text-2xl font-black text-white">
                  {profile.avatar}
                </div>
                <h2 className="mt-4 text-2xl font-black text-white">{profile.displayName}</h2>
                <p className="font-bold text-ember-400">@{profile.username} | {profile.role}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{profile.bio}</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-md border border-white/10 bg-black/25 p-3">
                    <p className="text-xs uppercase text-zinc-500">Goal</p>
                    <p className="mt-1 text-sm font-black text-white">{profile.goal}</p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-black/25 p-3">
                    <p className="text-xs uppercase text-zinc-500">Leaderboard</p>
                    <p className="mt-1 text-sm font-black text-white">Preview only</p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-black/25 p-3">
                    <p className="text-xs uppercase text-zinc-500">Total XP</p>
                    <p className="mt-1 text-sm font-black text-white">App preview</p>
                  </div>
                  <div className="rounded-md border border-white/10 bg-black/25 p-3">
                    <p className="text-xs uppercase text-zinc-500">Streak</p>
                    <p className="mt-1 text-sm font-black text-white">App preview</p>
                  </div>
                </div>
                <div className="mt-5">
                  <ReportButton target="user" />
                </div>
              </div>
            </div>

            <div className="rounded-md border border-volt-400/25 bg-volt-400/8 p-5">
              <div className="flex items-center gap-3">
                <Flame size={22} className="text-volt-400" aria-hidden />
                <h2 className="text-lg font-black text-white">Pet Companion</h2>
              </div>
              <p className="mt-3 text-sm text-zinc-300">{profile.pet.name} | pet level and XP are app-preview data only.</p>
            </div>
          </aside>

          <div id="profile-content" className="space-y-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Followers", value: "App only", icon: BadgeCheck },
                { label: "Following", value: "App only", icon: Medal },
                { label: "Accolades", value: "Preview", icon: Trophy }
              ].map((stat) => {
                const Icon = stat.icon;

                return (
                  <article key={stat.label} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                    <Icon size={22} className="text-ember-400" aria-hidden />
                    <p className="mt-4 text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-sm font-bold text-zinc-500">{stat.label}</p>
                  </article>
                );
              })}
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                <SectionHeader title="Achievements, Badges, and Titles" />
                <div className="mt-5 space-y-4">
                  <TagGrid items={[...profile.badges, ...profile.titles]} />
                  <TagGrid items={profileDemo.achievements} tone="green" />
                </div>
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                <SectionHeader title="Workout and Nutrition History" />
                <div className="mt-5 space-y-4">
                  <TagGrid items={profileDemo.completedWorkouts} />
                  <TagGrid items={profileDemo.favoriteWorkouts} tone="orange" />
                  <TagGrid items={profileDemo.savedRoutines} tone="green" />
                </div>
              </div>
            </div>

            <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
              <div className="flex items-center gap-3">
                <ImageIcon size={22} className="text-volt-400" aria-hidden />
                <SectionHeader title="Transformation Wall and Profile Collage" description="Progress gallery slots for photos, videos, milestones, uploaded workout media, and profile collage blocks." />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {transformationMilestones.slice(0, 4).map((milestone) => (
                  <div key={milestone} className="flex aspect-square items-end rounded-md border border-white/10 bg-[linear-gradient(135deg,rgba(255,106,0,0.28),rgba(140,255,0,0.18)),#14171b] p-3">
                    <p className="font-black text-white">{milestone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <UploadPanel title="Profile Post or Journal Workflow" />
          <div>
            <SectionHeader title="Profile Feed" description="Posts, blogs, media uploads, saved content, and private visibility controls." />
            <div className="mt-6">
              <CategoryTabs categories={["All", "Posts", "Blogs", "Photos", "Videos", "Saved"]} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="grid gap-5">
            {(userPosts.length ? userPosts : demoPosts.slice(0, 1)).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="grid gap-5">
            {(userBlogs.length ? userBlogs : demoBlogs.slice(0, 1)).map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
            {demoMedia.slice(0, 1).map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
