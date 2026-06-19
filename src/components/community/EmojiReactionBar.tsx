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
  const labels = defaultReactions.map((reaction) => reaction.label);

  return (
    <div className="grid gap-2">
      <div className="flex flex-wrap gap-2">
        {labels.map((label) => (
          <button
            key={label}
            type="button"
            disabled
            className="inline-flex min-h-9 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-black/25 px-3 text-xs font-black uppercase text-zinc-400"
          >
            <span>{label}</span>
          </button>
        ))}
      </div>
      <p className="text-xs font-bold text-zinc-500" aria-live="polite">Reaction preview only. No reaction is recorded.</p>
    </div>
  );
}
