import { ShieldCheck, UsersRound } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { ChatComposer } from "@/components/community/ChatComposer";
import { GroupCard } from "@/components/community/GroupCard";
import { communityGroups, getGroupChat } from "@/lib/community-groups";

const advancedChat = ["Direct messages", "Group chats", "Coaching chats", "Private groups", "Mute controls", "Block controls"];
const featuredChatGroups = communityGroups.filter((group) => group.featured).slice(0, 4);
const activeChatMessages = featuredChatGroups.flatMap((group) => getGroupChat(group).slice(0, 1).map((message) => ({ ...message, groupName: group.name })));

export default function ChatPage() {
  return (
    <>
      <PageHero
        eyebrow="Community Chat"
        title="Group chat, topic channels, and direct-message foundations for the fitness community."
        description="Chat is organized around groups, channels, profile identity, reports, mute/block controls, group moderators, admin review, and realtime-ready message records."
        primaryCta={{ label: "Community Hub", href: "/community" }}
        secondaryCta={{ label: "Browse Groups", href: "/community/groups" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Group Chat"
            title="Featured groups with active channel previews."
            description="Each group includes General, Questions, Progress, Media, Tips, and Announcements channels."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {featuredChatGroups.map((group) => (
              <GroupCard key={group.id} group={group} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Channel Preview"
              title="Recent messages stay tied to profiles and content areas."
              description="The channel preview shows how training, recovery, and nutrition conversations stay organized around groups and safety controls."
            />
            <div className="mt-6 grid gap-4">
              {activeChatMessages.map((message) => (
                <article key={`${message.groupId}-${message.id}`} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                  <p className="text-xs font-black uppercase text-volt-400">{message.groupName} | {message.channel}</p>
                  <h2 className="mt-2 text-lg font-black text-white">Member Message</h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">{message.body}</p>
                </article>
              ))}
            </div>
          </div>
          <ChatComposer />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex items-center gap-3">
            <UsersRound size={24} className="text-ember-400" aria-hidden />
            <SectionHeader title="Advanced Chat Controls" description="Direct messages, coaching chats, private groups, mutes, blocks, and moderation review are modeled for account and backend rules." />
          </div>
          <div className="space-y-5">
            <TagGrid items={advancedChat} />
            <div className="rounded-md border border-ember-500/25 bg-ember-500/8 p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck size={22} className="text-ember-400" aria-hidden />
                <h2 className="text-lg font-black text-white">Chat Safety Controls</h2>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  { title: "Report Message", description: "Messages can be routed to reports and admin review.", meta: "Safety" },
                  { title: "Mute or Block", description: "Account controls are prepared for muting users, blocking users, and hiding unsafe contact.", meta: "Controls" }
                ].map((item) => (
                  <article key={item.title} className="rounded-md border border-ember-500/25 bg-black/20 p-4">
                    <p className="text-xs font-black uppercase text-ember-400">{item.meta}</p>
                    <h3 className="mt-2 text-base font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
