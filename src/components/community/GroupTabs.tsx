import Link from "next/link";
import type { ReactNode } from "react";
import {
  Award,
  BookOpen,
  Clock3,
  Flame,
  HelpCircle,
  Image as ImageIcon,
  MessageCircle,
  MessageSquare,
  PawPrint,
  Pin,
  Reply,
  ShieldCheck,
  Sparkles,
  Tags,
  UsersRound
} from "lucide-react";

import { TagGrid } from "@/components/TagGrid";
import { BlogCard } from "@/components/content/BlogCard";
import { MediaCard } from "@/components/content/MediaCard";
import { PostCard } from "@/components/content/PostCard";
import { ProfileCard } from "@/components/content/ProfileCard";
import { ReportButton } from "@/components/content/ReportButton";
import { EmojiReactionBar } from "@/components/community/EmojiReactionBar";
import { demoProfiles } from "@/lib/content-data";
import { findProfile } from "@/lib/content-utils";
import type { BlogPost, CommunityGroup, CommunityPost, ContentMedia, CreatorProfile, GroupChatMessage } from "@/types/content";

type GroupGuideCard = {
  title: string;
  description: string;
  meta: string;
};

type GroupTabsProps = {
  group: CommunityGroup;
  posts: CommunityPost[];
  questions: CommunityPost[];
  blogs: BlogPost[];
  guideCards: GroupGuideCard[];
  media: ContentMedia[];
  members: Array<{ role: string; profile?: CreatorProfile }>;
  messages: GroupChatMessage[];
};

const roomTabs = [
  { label: "Feed", href: "#feed", icon: MessageSquare },
  { label: "Chat", href: "#chat", icon: MessageCircle },
  { label: "Media", href: "#media", icon: ImageIcon },
  { label: "Questions", href: "#questions", icon: HelpCircle },
  { label: "Guides", href: "#guides", icon: BookOpen },
  { label: "Members", href: "#members", icon: UsersRound }
];

const postLanes = [
  "Text posts",
  "Workout tips",
  "Nutrition posts",
  "Progress updates",
  "Transformation stories",
  "Photo and video media",
  "External source links"
];

function IdentityBadges({ profile }: { profile: CreatorProfile }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      <span className="inline-flex items-center gap-1 rounded-md border border-volt-400/30 bg-volt-400/10 px-2 py-1 text-xs font-bold text-volt-300">
        <PawPrint size={13} aria-hidden />
        {profile.pet.name} preview
      </span>
      <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/25 px-2 py-1 text-xs font-bold text-zinc-300">
        <Sparkles size={13} aria-hidden />
        Tier preview
      </span>
      <span className="inline-flex items-center gap-1 rounded-md border border-ember-500/30 bg-ember-500/10 px-2 py-1 text-xs font-bold text-ember-400">
        <Award size={13} aria-hidden />
        {profile.badges[0]}
      </span>
      <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/25 px-2 py-1 text-xs font-bold text-zinc-300">
        <Flame size={13} aria-hidden />
        App streak preview
      </span>
    </div>
  );
}

function RoomHeading({ icon, eyebrow, title, description }: { icon: ReactNode; eyebrow: string; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
      <div className="flex gap-3">
        <div className="mt-1 text-volt-400">{icon}</div>
        <div>
          <p className="text-xs font-black uppercase text-volt-400">{eyebrow}</p>
          <h2 className="mt-1 text-2xl font-black text-white">{title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function GroupTabs({ group, posts, questions, blogs, guideCards, media, members, messages }: GroupTabsProps) {
  return (
    <div className="grid gap-8">
      <nav id="room-tabs" className="flex gap-2 overflow-x-auto rounded-md border border-white/10 bg-white/[0.045] p-2" aria-label={`${group.name} room tabs`}>
        {roomTabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <a
              key={tab.label}
              href={tab.href}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-white/10 bg-black/25 px-4 text-sm font-black uppercase text-zinc-200 transition hover:border-volt-400/50 hover:text-volt-300"
            >
              <Icon size={16} aria-hidden />
              {tab.label}
            </a>
          );
        })}
      </nav>

      <section id="feed" className="grid gap-6 lg:grid-cols-[1fr_0.42fr]">
        <div className="grid gap-5">
          <RoomHeading
            icon={<MessageSquare size={24} aria-hidden />}
            eyebrow="Feed"
            title={`${group.name} feed`}
            description="Preview posts model training updates, photos, videos, tips, questions, transformation notes, nutrition posts, saves, comments, shares, and reports without live activity counts."
          />
          {posts.map((post) => (
            <PostCard key={`${group.id}-${post.id}`} post={post} />
          ))}
        </div>

        <aside className="space-y-5">
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <div className="flex items-center gap-3">
              <Pin size={21} className="text-ember-400" aria-hidden />
              <h3 className="text-lg font-black text-white">Pinned Room Posts</h3>
            </div>
            <div className="mt-4 grid gap-3">
              {posts.slice(0, 2).map((post) => (
                <a key={`pinned-${post.id}`} href="#feed" className="rounded-md border border-white/10 bg-black/25 p-3 transition hover:border-ember-500/50">
                  <p className="text-xs font-black uppercase text-ember-400">{post.kind.replaceAll("-", " ")}</p>
                  <p className="mt-1 text-sm font-black text-white">{post.title}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <h3 className="text-lg font-black text-white">Supported Post Types</h3>
            <div className="mt-4">
              <TagGrid items={postLanes} tone="green" />
            </div>
          </div>
          <div id="rules" className="rounded-md border border-ember-500/25 bg-ember-500/8 p-5">
            <div className="flex items-center gap-3">
              <ShieldCheck size={21} className="text-ember-400" aria-hidden />
              <h3 className="text-lg font-black text-white">Group Rules</h3>
            </div>
            <div className="mt-4 grid gap-3">
              {group.rules.map((rule) => (
                <p key={rule} className="rounded-md border border-white/10 bg-black/25 p-3 text-sm leading-6 text-zinc-300">{rule}</p>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section id="chat" className="grid gap-6 lg:grid-cols-[0.35fr_1fr]">
        <aside className="space-y-5">
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <RoomHeading
              icon={<MessageCircle size={24} aria-hidden />}
              eyebrow="Chat"
              title="Topic channels"
              description="Each group keeps fast conversation organized by channel."
            />
            <div className="mt-5 grid gap-2">
              {group.channels.map((channel) => (
                <a key={channel} href="#chat" className="rounded-md border border-white/10 bg-black/25 px-3 py-2 text-sm font-black text-white transition hover:border-volt-400/50">
                  #{channel}
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <h3 className="text-lg font-black text-white">Chat Safety</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">Messages include report controls, user identity, group context, and moderator review routing.</p>
            <div className="mt-4">
              <ReportButton target="message" />
            </div>
          </div>
        </aside>

        <div className="grid gap-4">
          {messages.map((message) => {
            const author = findProfile(demoProfiles, message.authorId);

            return (
              <article key={message.id} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ember-500 text-base font-black text-graphite-950">
                      {author.avatar}
                    </div>
                    <div>
                      <p className="font-black text-white">{author.displayName}</p>
                      <p className="text-sm text-zinc-500">Preview persona | @{author.username} | {author.role}</p>
                      <IdentityBadges profile={author} />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-black uppercase text-zinc-400">
                    <span className="inline-flex items-center gap-1 rounded-md border border-volt-400/30 bg-volt-400/10 px-2 py-1 text-volt-300">
                      <Tags size={12} aria-hidden />
                      {message.channel}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/25 px-2 py-1">
                      <Clock3 size={12} aria-hidden />
                      {message.createdAt}
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-zinc-300">{message.body}</p>
                <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 lg:flex-row lg:items-start lg:justify-between">
                  <EmojiReactionBar />
                  <div className="flex flex-wrap gap-2">
                    <a href="#composer" className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-black uppercase text-zinc-300 transition hover:border-volt-400/50 hover:text-volt-300">
                      <Reply size={14} aria-hidden />
                      Reply
                    </a>
                    <ReportButton target="message" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="media" className="grid gap-6">
        <RoomHeading
          icon={<ImageIcon size={24} aria-hidden />}
          eyebrow="Media"
          title="Photos, videos, embeds, and reviewable uploads"
          description="The media tab shows progress photos, exercise clips, external source embeds, storage-ready titles, media reports, and gallery organization."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {media.map((item) => (
            <MediaCard key={`${group.id}-${item.id}`} media={item} />
          ))}
        </div>
      </section>

      <section id="questions" className="grid gap-6">
        <RoomHeading
          icon={<HelpCircle size={24} aria-hidden />}
          eyebrow="Questions"
          title="Ask with context and get better answers"
          description="Question posts preview comments, saves, reports, replies through the composer, and enough context for useful community guidance."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {questions.map((post) => (
            <PostCard key={`${group.id}-question-${post.id}`} post={post} />
          ))}
        </div>
      </section>

      <section id="guides" className="grid gap-6">
        <RoomHeading
          icon={<BookOpen size={24} aria-hidden />}
          eyebrow="Guides"
          title="Room guides, journals, and educational posts"
          description="Guides help members post better questions, follow group safety rules, and connect website education to app tracking."
        />
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {guideCards.map((guide) => (
              <article key={guide.title} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                <p className="text-xs font-black uppercase text-volt-400">{guide.meta}</p>
                <h3 className="mt-2 text-lg font-black text-white">{guide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{guide.description}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-5">
            {blogs.map((blog) => (
              <BlogCard key={`${group.id}-${blog.id}`} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      <section id="members" className="grid gap-6">
        <RoomHeading
          icon={<UsersRound size={24} aria-hidden />}
          eyebrow="Members"
          title="Preview members, moderators, pets, tiers, badges, and app-only streaks"
          description="Member cards are preview personas. Live follows, member totals, XP, streaks, and moderator assignments require future account access."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {members.map((member) => member.profile ? (
            <ProfileCard key={`${group.id}-${member.profile.id}`} profile={member.profile} />
          ) : null)}
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
          <h3 className="text-lg font-black text-white">Room Roles</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {members.map((member) => member.profile ? (
              <article key={`${group.id}-role-${member.profile.id}`} className="rounded-md border border-white/10 bg-black/25 p-4">
                <p className="text-xs font-black uppercase text-ember-400">{member.role}</p>
                <h4 className="mt-1 text-base font-black text-white">{member.profile.displayName}</h4>
                <IdentityBadges profile={member.profile} />
              </article>
            ) : null)}
          </div>
        </div>
      </section>

      <section className="rounded-md border border-ember-500/25 bg-ember-500/8 p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-3">
            <ShieldCheck size={24} className="mt-1 shrink-0 text-ember-400" aria-hidden />
            <div>
              <p className="text-xs font-black uppercase text-ember-400">Moderation</p>
              <h2 className="mt-1 text-xl font-black text-white">Report post, report user, and moderator review paths are visible in the room.</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">Reports route to admin review, group moderators, content rules, mute/block decisions, and future Supabase moderation actions.</p>
            </div>
          </div>
          <Link href="/admin#review-workflow" className="inline-flex min-h-11 items-center justify-center rounded-md bg-ember-500 px-4 text-sm font-black uppercase text-graphite-950 transition hover:bg-ember-400">
            Open Admin Review
          </Link>
        </div>
      </section>
    </div>
  );
}
