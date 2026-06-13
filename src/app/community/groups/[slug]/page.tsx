import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Flag, Images, Lock, MessageSquare, Newspaper, ShieldCheck, UsersRound } from "lucide-react";

import { AppValueCTA } from "@/components/AppValueCTA";
import { ButtonLink } from "@/components/ButtonLink";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { ReportButton } from "@/components/content/ReportButton";
import { GroupComposer } from "@/components/community/GroupComposer";
import { GroupJoinButton } from "@/components/community/GroupJoinButton";
import { GroupTabs } from "@/components/community/GroupTabs";
import {
  communityGroups,
  getCommunityGroup,
  getGroupBlogs,
  getGroupChat,
  getGroupGuideCards,
  getGroupMedia,
  getGroupMembers,
  getGroupPosts,
  getGroupQuestions
} from "@/lib/community-groups";
import { previewLimits } from "@/lib/access-control";

export function generateStaticParams() {
  return communityGroups.map((group) => ({ slug: group.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const group = getCommunityGroup(slug);

  if (!group) {
    return {
      title: "Community Group",
      description: "E.R. Fitness community group."
    };
  }

  return {
    title: `${group.name} Group`,
    description: group.description
  };
}

export default async function CommunityGroupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = getCommunityGroup(slug);

  if (!group) {
    notFound();
  }

  const posts = getGroupPosts(group);
  const questions = getGroupQuestions(group);
  const blogs = getGroupBlogs(group);
  const guideCards = getGroupGuideCards(group);
  const media = getGroupMedia(group);
  const members = getGroupMembers(group);
  const messages = getGroupChat(group);
  const visiblePosts = posts.slice(0, previewLimits.communityRoomItems);
  const visibleQuestions = questions.slice(0, previewLimits.communityRoomItems);
  const visibleBlogs = blogs.slice(0, previewLimits.communityRoomItems);
  const visibleGuides = guideCards.slice(0, previewLimits.communityRoomItems);
  const visibleMedia = media.slice(0, previewLimits.communityRoomItems);
  const visibleMembers = members.slice(0, previewLimits.communityRoomItems);
  const visibleMessages = messages.slice(0, previewLimits.communityRoomItems);
  const schema = {
    "@context": "https://schema.org",
    "@type": "DiscussionForumPosting",
    headline: `${group.name} Community Group`,
    description: group.description,
    keywords: group.tags
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow={`${group.category} Group`}
        title={group.name}
        description={group.description}
        primaryCta={{ label: "Open Room", href: "#room-tabs" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section id="overview" className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.045]">
            <div className="h-36" style={{ background: group.coverGradient }} />
            <div className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase text-volt-400">{group.visibility}</p>
                  <h2 className="mt-2 text-3xl font-black text-white">{group.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{group.description}</p>
                </div>
                {group.visibility === "private" ? <Lock size={22} className="text-ember-400" aria-hidden /> : null}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-md border border-white/10 bg-black/25 p-3">
                  <p className="text-xs uppercase text-zinc-500">Members</p>
                  <p className="mt-1 text-xl font-black text-white">{group.members.toLocaleString()}</p>
                </div>
                <div className="rounded-md border border-white/10 bg-black/25 p-3">
                  <p className="text-xs uppercase text-zinc-500">Moderators</p>
                  <p className="mt-1 text-xl font-black text-white">{group.moderators.length}</p>
                </div>
                <div className="rounded-md border border-white/10 bg-black/25 p-3">
                  <p className="text-xs uppercase text-zinc-500">Channels</p>
                  <p className="mt-1 text-xl font-black text-white">{group.channels.length}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <GroupJoinButton groupName={group.name} initialMembers={group.members} />
                <ButtonLink href="#feed" icon={<Newspaper size={17} aria-hidden />}>Read Feed</ButtonLink>
                <ButtonLink href="#chat" variant="secondary" icon={<MessageSquare size={17} aria-hidden />}>Open Chat</ButtonLink>
                <ButtonLink href="#media" variant="ghost" icon={<Images size={17} aria-hidden />}>View Media</ButtonLink>
                <ButtonLink href="#members" variant="ghost" icon={<UsersRound size={17} aria-hidden />}>Members</ButtonLink>
                <ButtonLink href="#rules" variant="ghost" icon={<ShieldCheck size={17} aria-hidden />}>Rules</ButtonLink>
                <ButtonLink href="/admin#review-workflow" variant="ghost" icon={<Flag size={17} aria-hidden />}>Admin Review</ButtonLink>
              </div>
              <div className="mt-5">
                <ReportButton target="group" />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <SectionHeader title="Group Navigation" description="Jump to the active room sections on this page: feed, chat, media, questions, guides, members, and rules." />
            <div className="flex gap-2 overflow-x-auto rounded-md border border-white/10 bg-white/[0.045] p-2">
              {[
                ["Feed", "#feed"],
                ["Chat", "#chat"],
                ["Media", "#media"],
                ["Questions", "#questions"],
                ["Guides", "#guides"],
                ["Members", "#members"]
              ].map(([label, href]) => (
                <a key={label} href={href} className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/25 px-3 text-sm font-black text-zinc-200 transition hover:border-volt-400/50 hover:text-volt-300">
                  {label}
                </a>
              ))}
            </div>
            <TagGrid items={group.tags} tone="green" />
            <GroupComposer group={group} />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <LockedContentPreview
            title={`${group.name} Room Preview`}
            description="Public visitors can inspect a small sample of the room. Full feed, chat, media, questions, guides, members, and saved community workflows require future app account access."
            previewCount={visiblePosts.length + visibleQuestions.length + visibleBlogs.length + visibleMedia.length + visibleMessages.length}
            totalCount={posts.length + questions.length + blogs.length + media.length + messages.length}
          >
            <GroupTabs
              group={group}
              posts={visiblePosts}
              questions={visibleQuestions}
              blogs={visibleBlogs}
              guideCards={visibleGuides}
              media={visibleMedia}
              members={visibleMembers}
              messages={visibleMessages}
            />
          </LockedContentPreview>
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
