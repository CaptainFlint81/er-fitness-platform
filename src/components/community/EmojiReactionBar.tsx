"use client";

import { useState } from "react";

type EmojiReaction = {
  emoji: string;
  label: string;
  initialCount: number;
};

const defaultReactions: EmojiReaction[] = [
  { emoji: "🔥", label: "Fire", initialCount: 8 },
  { emoji: "💪", label: "Strong", initialCount: 12 },
  { emoji: "✅", label: "Helpful", initialCount: 5 },
  { emoji: "⚡", label: "Volt", initialCount: 3 }
];

export function EmojiReactionBar({ reactions = defaultReactions }: { reactions?: EmojiReaction[] }) {
  void reactions;
  const [active, setActive] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState("Reaction preview only. No reaction is recorded.");
  const labels = defaultReactions.map((reaction) => reaction.label);

  return (
    <div className="grid gap-2">
      <div className="flex flex-wrap gap-2">
        {labels.map((label) => {
          const selected = Boolean(active[label]);

          return (
            <button
              key={label}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setActive((current) => ({ ...current, [label]: !selected }));
                setStatus(`${label} preview ${selected ? "cleared" : "selected"}. No reaction was recorded.`);
              }}
              className={`inline-flex min-h-9 items-center justify-center gap-2 rounded-md border px-3 text-xs font-black uppercase ${
                selected
                  ? "border-volt-400 bg-volt-400/14 text-volt-300"
                  : "border-white/10 bg-black/25 text-zinc-300 hover:border-volt-400/50 hover:text-volt-300"
              }`}
            >
              <span>{label}</span>
            </button>
          );
        })}
      </div>
      <p className="text-xs font-bold text-zinc-500" aria-live="polite">{status}</p>
    </div>
  );
}
