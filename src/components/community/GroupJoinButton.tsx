"use client";

import { UserCheck, UserPlus } from "lucide-react";
import { useState } from "react";

import { formatCount } from "@/lib/content-utils";

type GroupJoinButtonProps = {
  groupName: string;
  initialMembers: number;
  compact?: boolean;
};

export function GroupJoinButton({ groupName, initialMembers, compact = false }: GroupJoinButtonProps) {
  const [joined, setJoined] = useState(false);
  const memberCount = initialMembers + (joined ? 1 : 0);
  const Icon = joined ? UserCheck : UserPlus;

  return (
    <div className="grid gap-2">
      <button
        type="button"
        aria-pressed={joined}
        onClick={() => setJoined((value) => !value)}
        className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-black uppercase transition ${
          joined
            ? "border border-volt-400 bg-volt-400/12 text-volt-300 hover:border-volt-300"
            : "bg-volt-400 text-graphite-950 hover:bg-volt-300"
        }`}
      >
        <Icon size={17} aria-hidden />
        {joined ? "Leave Group" : "Join Group"}
      </button>
      <p className={`${compact ? "sr-only" : "text-xs font-bold text-zinc-500"}`} aria-live="polite">
        {joined ? `Joined ${groupName} for this session.` : `${formatCount(memberCount)} members in ${groupName}.`}
      </p>
    </div>
  );
}
