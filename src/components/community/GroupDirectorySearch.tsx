"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

import { GroupCard } from "@/components/community/GroupCard";
import type { CommunityGroup } from "@/types/content";

type GroupDirectorySearchProps = {
  groups: CommunityGroup[];
  categories: string[];
};

export function GroupDirectorySearch({ groups, categories }: GroupDirectorySearchProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const visibleGroups = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return groups.filter((group) => {
      const haystack = [group.name, group.category, group.description, ...group.tags].join(" ").toLowerCase();
      const matchesQuery = normalizedQuery ? haystack.includes(normalizedQuery) : true;
      const matchesCategory = category === "All" ? true : group.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [category, groups, query]);

  return (
    <div className="grid gap-5">
      <div className="rounded-md border border-white/10 bg-white/[0.045] p-4">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <label className="grid gap-2 text-sm font-black uppercase text-white" htmlFor="group-search">
            Search groups
            <span className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} aria-hidden />
              <input
                id="group-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search powerlifting, MS support, meal prep, progress photos..."
                className="h-12 w-full rounded-md border border-white/10 bg-black/40 pl-10 pr-3 text-sm normal-case text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
              />
            </span>
          </label>
          <label className="grid gap-2 text-sm font-black uppercase text-white" htmlFor="group-category">
            Category
            <span className="relative block">
              <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} aria-hidden />
              <select
                id="group-category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-12 min-w-56 rounded-md border border-white/10 bg-black/40 pl-10 pr-3 text-sm normal-case text-white outline-none focus:border-volt-400"
              >
                <option>All</option>
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </span>
          </label>
        </div>
        <p className="mt-4 text-sm font-bold text-zinc-400" aria-live="polite">
          Showing {visibleGroups.length} of {groups.length} community rooms.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleGroups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
}
