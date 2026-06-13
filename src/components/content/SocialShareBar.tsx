"use client";

import { Bookmark, Heart, MessageCircle, Repeat2, Share2 } from "lucide-react";
import { useMemo, useState } from "react";

import type { ReactionSummary } from "@/types/content";

type SocialActionKey = keyof ReactionSummary | "reposts";

export function SocialShareBar({ reactions }: { reactions: ReactionSummary }) {
  void reactions;
  const [active, setActive] = useState<Record<SocialActionKey, boolean>>({
    likes: false,
    comments: false,
    shares: false,
    saves: false,
    reposts: false
  });
  const [status, setStatus] = useState("Preview controls only. No social action is recorded.");

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

  function handleAction(key: SocialActionKey, label: string) {
    setActive((current) => ({ ...current, [key]: !current[key] }));
    setStatus(`${label} preview ${active[key] ? "cleared" : "selected"}. No reaction, comment, share, save, or repost was recorded.`);
  }

  return (
    <div className="grid gap-2">
      <div className="flex flex-wrap gap-2">
        {actions.map((action) => {
          const Icon = action.icon;
          const isActive = Boolean(active[action.key]);

          return (
            <button
              key={action.label}
              type="button"
              aria-pressed={isActive}
              onClick={() => handleAction(action.key, action.label)}
              className={`inline-flex min-h-9 items-center justify-center gap-2 rounded-md border px-3 text-xs font-black uppercase ${
                isActive
                  ? "border-volt-400 bg-volt-400/14 text-volt-300"
                  : "border-white/10 bg-black/25 text-zinc-300 hover:border-volt-400/50 hover:text-volt-300"
              }`}
            >
              <Icon size={15} aria-hidden />
              <span>{action.label}</span>
            </button>
          );
        })}
      </div>
      <p className="text-xs font-bold text-zinc-500" aria-live="polite">{status}</p>
    </div>
  );
}
