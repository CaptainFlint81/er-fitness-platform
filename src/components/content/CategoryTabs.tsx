"use client";

import { useState } from "react";

export function CategoryTabs({ categories, defaultValue = "All" }: { categories: string[]; defaultValue?: string }) {
  const [active, setActive] = useState(defaultValue);

  return (
    <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Content categories">
      {categories.map((category) => {
        const isActive = category === active;

        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActive(category)}
            className={`min-h-10 shrink-0 rounded-md border px-3 text-sm font-black ${
              isActive
                ? "border-volt-400 bg-volt-400 text-graphite-950"
                : "border-white/10 bg-white/6 text-zinc-300 hover:border-ember-500/40"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
