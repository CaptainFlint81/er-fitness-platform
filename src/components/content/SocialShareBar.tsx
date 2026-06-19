"use client";

import { Bookmark, Heart, MessageCircle, Repeat2, Share2 } from "lucide-react";
import { useMemo } from "react";

import type { ReactionSummary } from "@/types/content";

type SocialActionKey = keyof ReactionSummary | "reposts";

export function SocialShareBar({ reactions }: { reactions: ReactionSummary }) {
  void reactions;
  const actions = useMemo(
    (): Array<{ key: SocialActionKey; label: string; icon: typeof Heart }> => [
      { key: "likes", label: "Like", icon: Heart },
      { key: "comments", label: "Comment", icon: MessageCircle },
      { key: "shares", label: "Share", icon: Share2 },
      { key: "saves", label: "Save", icon: Bookmark },
      { key: "reposts", label: "Repost", icon: Repeat2 }
    ],
    []
  );

  return (
    <div className="grid gap-2">
      <div className="flex flex-wrap gap-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              type="button"
              disabled
              className="inline-flex min-h-9 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-black uppercase text-zinc-400"
            >
              <Icon size={15} aria-hidden />
              <span>{action.label}</span>
            </button>
          );
        })}
      </div>
      <p className="text-xs font-bold text-zinc-500" aria-live="polite">Preview only. No reaction, comment, share, save, or repost is recorded.</p>
    </div>
  );
}
