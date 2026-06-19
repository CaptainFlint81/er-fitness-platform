"use client";

import { Bookmark, Flag, Search, ShieldCheck, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { subscriberAccessNotice } from "@/lib/access-control";
import { qaAccessLevels, qaCategories, qaFoundationItems } from "@/lib/qa-foundation";

type ActiveCategory = "All" | (typeof qaCategories)[number];

const publicPreviewLimit = 4;

export function QuestionAnswerPreview() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All");

  const categoryCounts = qaCategories.reduce<Record<string, number>>((counts, category) => {
    counts[category] = qaFoundationItems.filter((item) => item.category === category).length;
    return counts;
  }, {});

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return qaFoundationItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const haystack = [item.question, item.answer, item.category, item.moderationStatus, item.contributorBadge, item.futureProfessionalBadge, ...item.tags]
        .join(" ")
        .toLowerCase();
      const matchesQuery = normalizedQuery ? haystack.includes(normalizedQuery) : true;

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const visibleItems = filteredItems.slice(0, publicPreviewLimit);
  const hiddenCount = Math.max(filteredItems.length - visibleItems.length, 0);

  return (
    <div className="grid gap-8">
      <section className="rounded-md border border-white/10 bg-white/[0.045] p-5">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <label className="grid gap-2">
            <span className="text-sm font-black uppercase text-white">Search Q&A foundation</span>
            <span className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search questions, answers, tags, review status..."
                className="h-12 w-full rounded-md border border-white/10 bg-black/40 pl-10 pr-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
              />
            </span>
          </label>

          <div className="rounded-md border border-ember-500/25 bg-ember-500/8 p-4">
            <p className="text-xs font-black uppercase text-ember-400">Posting Disabled</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">Ask and reply forms stay closed until authentication and moderation are live.</p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2" aria-label="Q&A categories">
          <button
            type="button"
            aria-pressed={activeCategory === "All"}
            onClick={() => setActiveCategory("All")}
            className={`rounded-md border px-3 py-2 text-xs font-black uppercase ${
              activeCategory === "All"
                ? "border-volt-400 bg-volt-400 text-graphite-950"
                : "border-white/10 bg-white/6 text-zinc-300 hover:border-volt-400/45"
            }`}
          >
            All {qaFoundationItems.length}
          </button>
          {qaCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-md border px-3 py-2 text-xs font-black uppercase ${
                activeCategory === category
                  ? "border-ember-500 bg-ember-500 text-graphite-950"
                  : "border-white/10 bg-white/6 text-zinc-300 hover:border-ember-500/45"
              }`}
            >
              {category} {categoryCounts[category]}
            </button>
          ))}
        </div>

        <p className="mt-4 text-sm font-bold text-zinc-400" aria-live="polite">
          Showing {filteredItems.length} Q&A foundation record{filteredItems.length === 1 ? "" : "s"}.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {qaAccessLevels.map((item) => (
          <article key={item.level} className="rounded-md border border-white/10 bg-black/25 p-5">
            <p className="text-xs font-black uppercase text-volt-400">{item.level}</p>
            <h2 className="mt-2 text-lg font-black text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5">
        {visibleItems.map((item) => (
          <article key={item.id} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase text-volt-400">{item.category} | {item.accessLevel} access</p>
                <h2 className="mt-2 text-xl font-black text-white">{item.question}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.answer}</p>
              </div>
              <div className="grid min-w-56 gap-2 rounded-md border border-white/10 bg-black/25 p-4 text-xs font-bold uppercase text-zinc-400">
                <span className="inline-flex items-center gap-2 text-ember-300">
                  <ShieldCheck size={15} aria-hidden />
                  {item.moderationStatus}
                </span>
                <span>{item.contributorBadge}</span>
                <span>{item.futureProfessionalBadge}</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-white/10 bg-black/25 px-3 py-1 text-xs font-bold text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                disabled
                className="inline-flex min-h-10 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-white/6 px-3 text-xs font-black uppercase text-zinc-400"
              >
                <Bookmark size={15} aria-hidden />
                Bookmark preview
              </button>
              <button
                type="button"
                disabled
                className="inline-flex min-h-10 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-white/6 px-3 text-xs font-black uppercase text-zinc-400"
              >
                <ThumbsUp size={15} aria-hidden />
                Upvote preview
              </button>
              <button
                type="button"
                disabled
                className="inline-flex min-h-10 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-white/6 px-3 text-xs font-black uppercase text-zinc-400"
              >
                <Flag size={15} aria-hidden />
                Report preview
              </button>
            </div>

            <p className="mt-3 text-xs font-bold leading-5 text-zinc-500" aria-live="polite">
              Preview interaction only. No bookmark, vote, or report can be submitted until account access and moderation are enabled.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-xs font-black uppercase">
              {item.relatedSections.map((href) => (
                <Link key={href} href={href} className="text-volt-400 hover:text-volt-300">
                  {href}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>

      {hiddenCount ? (
        <section className="rounded-md border border-ember-500/30 bg-ember-500/8 p-5">
          <p className="text-xs font-black uppercase text-ember-400">Full Q&A Access Locked</p>
          <h2 className="mt-2 text-xl font-black text-white">{hiddenCount} matching Q&A records are outside the public preview.</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">{subscriberAccessNotice}</p>
        </section>
      ) : null}
    </div>
  );
}
