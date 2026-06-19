"use client";

import { Filter, Search } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { useState } from "react";

import { searchFilters } from "@/lib/platform-data";

const searchIndex = [
  { title: "Exercise Library", href: "/exercises", category: "Exercises", tags: ["exercise", "equipment", "muscle groups", "workouts"] },
  { title: "Pushup Form Guide", href: "/exercises/pushup", category: "Exercises", tags: ["pushup", "form guide", "reps"] },
  { title: "Beginner Fitness Guide", href: "/guides/beginner", category: "Guides", tags: ["beginner", "weekly progression", "workout logs"] },
  { title: "Fitness Terms Glossary", href: "/glossary", category: "Guides", tags: ["hinge", "brace", "core", "neutral spine"] },
  { title: "Routine Library", href: "/routines", category: "Workouts", tags: ["routines", "programs", "training"] },
  { title: "Beginner Fitness Workout", href: "/workouts/beginner-fitness", category: "Workouts", tags: ["guided workouts", "weekly progression", "beginner"] },
  { title: "Training & Nutrition Principles", href: "/training-nutrition-principles", category: "Articles", tags: ["principles", "nutrition", "periodization"] },
  { title: "Adaptive Fitness", href: "/adaptive-fitness", category: "Conditions", tags: ["adaptive fitness", "conditions", "limited mobility"] },
  { title: "Injured Athlete", href: "/injured-athlete", category: "Injuries", tags: ["injuries", "recovery", "return to training"] },
  { title: "Media Library", href: "/media", category: "Videos", tags: ["videos", "images", "photos", "media type"] },
  { title: "Equipment Library", href: "/exercises#equipment-library", category: "Equipment", tags: ["equipment", "dumbbells", "barbells", "bands"] },
  { title: "Community Groups", href: "/community/groups", category: "Groups", tags: ["groups", "community", "users"] },
  { title: "Content Platform", href: "/content", category: "Contributors", tags: ["contributors", "credentials", "review status"] },
  { title: "Recovery Education", href: "/recovery", category: "Recovery", tags: ["recovery", "mobility", "breathing"] },
  { title: "Mobility", href: "/mobility", category: "Recovery", tags: ["mobility", "warmup", "range of motion"] },
  { title: "Stretching", href: "/stretching", category: "Recovery", tags: ["stretching", "cooldown", "flexibility"] },
  { title: "Nutrition Systems", href: "/nutrition", category: "Nutrition", tags: ["nutrition", "meal timing", "calories"] },
  { title: "Recipes", href: "/nutrition/recipes", category: "Nutrition", tags: ["recipes", "protein", "meal building"] },
  { title: "Cookbooks", href: "/nutrition/cookbooks", category: "Nutrition", tags: ["cookbooks", "legal resources", "MyPlate"] },
  { title: "Body Education", href: "/education#body-education", category: "Muscle Groups", tags: ["body areas", "muscle groups", "education"] }
];

export function SearchFilters({ label = "Search the E.R. Fitness ecosystem" }: { label?: string }) {
  const [query, setQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const normalizedFilters = activeFilters.map((filter) => filter.toLowerCase());

    return searchIndex
      .filter((item) => {
        const haystack = [item.title, item.category, ...item.tags].join(" ").toLowerCase();
        const queryMatches = normalizedQuery ? haystack.includes(normalizedQuery) : true;
        const filterMatches = normalizedFilters.length
          ? normalizedFilters.some((filter) => haystack.includes(filter))
          : true;

        return queryMatches && filterMatches;
      })
      .slice(0, 5);
  }, [activeFilters, query]);

  function toggleFilter(filter: string) {
    setActiveFilters((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter]
    );
  }

  return (
    <div className="rounded-md border border-white/10 bg-white/[0.045] p-4">
      <label className="text-sm font-black uppercase text-white" htmlFor="platform-search">
        {label}
      </label>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} aria-hidden />
          <input
            id="platform-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search education, body areas, exercises, routines, nutrition, recovery..."
            className="h-12 w-full rounded-md border border-white/10 bg-black/40 pl-10 pr-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
          />
        </div>
        <button
          type="button"
          aria-expanded={filtersOpen}
          onClick={() => setFiltersOpen((value) => !value)}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-volt-400 px-4 text-sm font-black uppercase text-graphite-950 hover:bg-volt-300"
        >
          <Filter size={17} aria-hidden />
          {filtersOpen ? "Hide Filters" : "Filters"}
        </button>
      </div>
      <div className={`${filtersOpen ? "mt-4 flex" : "hidden"} flex-wrap gap-2`}>
        {searchFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilters.includes(filter)}
            onClick={() => toggleFilter(filter)}
            className={`rounded-md border px-3 py-2 text-xs font-bold ${
              activeFilters.includes(filter)
                ? "border-ember-500 bg-ember-500/12 text-ember-400"
                : "border-white/10 bg-white/6 text-zinc-300 hover:border-ember-500/50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs font-bold text-zinc-500" aria-live="polite">
        {query || activeFilters.length
          ? `${results.length} matching content path${results.length === 1 ? "" : "s"} found.`
          : "Popular searchable content paths are ready below."}
      </p>
      <div className="mt-3 grid gap-2 md:grid-cols-2">
        {(query || activeFilters.length ? results : searchIndex.slice(0, 4)).map((result) => (
          <Link key={`${result.category}-${result.title}`} href={result.href} className="rounded-md border border-white/10 bg-black/25 p-3 text-sm transition hover:border-volt-400/45">
            <span className="block text-xs font-black uppercase text-volt-400">{result.category}</span>
            <span className="mt-1 block font-black text-white">{result.title}</span>
            <span className="mt-1 block text-xs text-zinc-500">{result.tags.slice(0, 3).join(", ")}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
