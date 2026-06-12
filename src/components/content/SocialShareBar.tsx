"use client";

import { Bookmark, Heart, MessageCircle, Repeat2, Share2 } from "lucide-react";
import { useMemo, useState } from "react";

import type { ReactionSummary } from "@/types/content";
import { formatCount } from "@/lib/content-utils";

type SocialActionKey = keyof ReactionSummary | "reposts";

export function SocialShareBar({ reactions }: { reactions: ReactionSummary }) {
  const [counts, setCounts] = useState({ ...reactions, reposts: 0 });
  const [active, setActive] = useState<Record<SocialActionKey, boolean>>({
    likes: false,
    comments: false,
    shares: false,
    saves: false,
    reposts: false
  });
  const [status, setStatus] = useState("Use these controls to interact with this content.");

  const actions = useMemo(
    (): Array<{ key: SocialActionKey; label: string; icon: typeof Heart; count: number }> => [
      { key: "likes", label: "Like", icon: Heart, count: counts.likes },
      { key: "comments", label: "Comment", icon: MessageCircle, count: counts.comments },
      { key: "shares", label: "Share", icon: Share2, count: counts.shares },
      { key: "saves", label: "Save", icon: Bookmark, count: counts.saves },
      { key: "reposts", label: "Repost", icon: Repeat2, count: counts.reposts }
    ],
    [counts]
  );

  function handleAction(key: SocialActionKey, label: string) {
    setCounts((current) => ({
      ...current,
      [key]: current[key] + (active[key] ? -1 : 1)
    }));
    setActive((current) => ({ ...current, [key]: !current[key] }));
    setStatus(`${label} ${active[key] ? "removed" : "saved"} for this session.`);
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
              {action.count ? <span className="text-zinc-500">{formatCount(action.count)}</span> : null}
            </button>
          );
        })}
      </div>
      <p className="text-xs font-bold text-zinc-500" aria-live="polite">{status}</p>
    </div>
  );
}
