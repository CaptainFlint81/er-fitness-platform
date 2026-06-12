export function TagGrid({ items, tone = "mixed" }: { items: string[]; tone?: "orange" | "green" | "mixed" }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => {
        const green = tone === "green" || (tone === "mixed" && index % 3 === 1);
        const orange = tone === "orange" || (tone === "mixed" && index % 3 === 0);

        return (
          <span
            key={item}
            className={`rounded-md border px-3 py-2 text-sm font-bold ${
              green
                ? "border-volt-400/35 bg-volt-400/10 text-volt-300"
                : orange
                  ? "border-ember-500/35 bg-ember-500/10 text-ember-400"
                  : "border-white/10 bg-white/6 text-zinc-300"
            }`}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
