"use client";

import Link from "next/link";
import { Award, Flame, UserPlus } from "lucide-react";
import { useState } from "react";

import type { CreatorProfile } from "@/types/content";
import { formatCount } from "@/lib/content-utils";
import { ReportButton } from "@/components/content/ReportButton";

export function ProfileCard({ profile }: { profile: CreatorProfile }) {
  const [following, setFollowing] = useState(false);
  const followerCount = profile.followers + (following ? 1 : 0);

  return (
    <article className="overflow-hidden rounded-md border border-white/10 bg-white/[0.045]">
      <div className="h-20 bg-[linear-gradient(135deg,rgba(255,106,0,0.32),rgba(140,255,0,0.22)),#191b1f]" />
      <div className="p-5 pt-0">
        <div className="-mt-8 flex items-end justify-between gap-4">
          <Link
            href={`/profile/${profile.username}`}
            className="flex h-16 w-16 items-center justify-center rounded-md border border-white/15 bg-graphite-950 text-xl font-black text-white"
          >
            {profile.avatar}
          </Link>
          <button
            type="button"
            aria-pressed={following}
            onClick={() => setFollowing((value) => !value)}
            className={`inline-flex min-h-9 items-center gap-2 rounded-md px-3 text-xs font-black uppercase ${
              following ? "border border-volt-400 bg-volt-400/12 text-volt-300" : "bg-volt-400 text-graphite-950"
            }`}
          >
            <UserPlus size={14} aria-hidden />
            {following ? "Following" : "Follow"}
          </button>
        </div>
        <div className="mt-4">
          <Link href={`/profile/${profile.username}`} className="text-lg font-black text-white hover:text-volt-400">
            {profile.displayName}
          </Link>
          <p className="text-sm font-bold text-ember-400">@{profile.username} | {profile.role}</p>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{profile.bio}</p>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-md border border-white/10 bg-black/25 p-2">
            <p className="text-sm font-black text-white">{formatCount(followerCount)}</p>
            <p className="text-xs text-zinc-500">Followers</p>
          </div>
          <div className="rounded-md border border-white/10 bg-black/25 p-2">
            <p className="text-sm font-black text-white">{formatCount(profile.xp)}</p>
            <p className="text-xs text-zinc-500">XP</p>
          </div>
          <div className="rounded-md border border-white/10 bg-black/25 p-2">
            <p className="text-sm font-black text-white">{profile.streak}</p>
            <p className="text-xs text-zinc-500">Streak</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-md border border-volt-400/30 bg-volt-400/10 px-2 py-1 text-xs font-bold text-volt-300">
            <Flame size={13} aria-hidden />
            {profile.pet.name} L{profile.pet.level}
          </span>
          <span className="inline-flex items-center gap-2 rounded-md border border-ember-500/30 bg-ember-500/10 px-2 py-1 text-xs font-bold text-ember-400">
            <Award size={13} aria-hidden />
            {profile.titles[0]}
          </span>
        </div>
        <div className="mt-4">
          <ReportButton target="user" />
        </div>
      </div>
    </article>
  );
}
