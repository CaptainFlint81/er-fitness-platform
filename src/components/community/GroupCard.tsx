"use client";

import Link from "next/link";
import { DoorOpen, Lock, MessageSquare, UsersRound } from "lucide-react";

import { GroupJoinButton } from "@/components/community/GroupJoinButton";
import { TagGrid } from "@/components/TagGrid";
import type { CommunityGroup } from "@/types/content";

export function GroupCard({ group }: { group: CommunityGroup }) {
  return (
    <article className="overflow-hidden rounded-md border border-white/10 bg-white/[0.045] shadow-glow transition hover:border-volt-400/40">
      <Link href={`/community/groups/${group.slug}`} className="block h-24" style={{ background: group.coverGradient }} aria-label={`Open ${group.name} group room`} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase text-volt-400">{group.category}</p>
            <Link href={`/community/groups/${group.slug}`} className="mt-2 block text-xl font-black text-white hover:text-volt-400">
              {group.name}
            </Link>
          </div>
          {group.visibility === "private" ? <Lock size={18} className="text-ember-400" aria-hidden /> : null}
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{group.description}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold text-zinc-300">
          <span className="inline-flex items-center gap-2">
            <UsersRound size={17} className="text-ember-400" aria-hidden />
            {group.members.toLocaleString()} members
          </span>
          <span className="inline-flex items-center gap-2">
            <MessageSquare size={17} className="text-volt-400" aria-hidden />
            {group.channels.length} channels
          </span>
        </div>
        <div className="mt-4">
          <TagGrid items={group.tags.slice(0, 3)} />
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Link
            href={`/community/groups/${group.slug}`}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ember-500 px-4 text-sm font-black uppercase text-graphite-950 transition hover:bg-ember-400"
          >
            <DoorOpen size={17} aria-hidden />
            Open Room
          </Link>
          <GroupJoinButton groupName={group.name} initialMembers={group.members} compact />
        </div>
      </div>
    </article>
  );
}
