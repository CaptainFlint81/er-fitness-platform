"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { previewLimits, subscriberAccessNotice } from "@/lib/access-control";
import { communityGroups } from "@/lib/community-groups";
import {
  demoBlogs,
  demoMedia,
  demoPosts,
  demoProfiles,
  professionalContributors,
  reviewedContentExamples,
  scalableSearchTargets
} from "@/lib/content-data";
import { educationCategoryCards, educationTopics } from "@/lib/education-data";
import { mediaLibrary, searchArchitecture } from "@/lib/platform-data";
import {
  instructionalMediaStructure,
  searchableContentRecords,
  videoEmbedLibrary
} from "@/lib/publish-ready-content";
import { exerciseLibrary, getRoutineCards } from "@/lib/training-library";

const searchCategories = [
  "Groups",
  "Posts",
  "Blogs",
  "Users",
  "Photos",
  "Videos",
  "Workouts",
  "Nutrition",
  "Recovery",
  "Exercises",
  "Articles",
  "Images",
  "Muscle Groups",
  "Injuries",
  "Conditions",
  "Contributors",
  "Adaptive Fitness"
] as const;

type SearchCategory = (typeof searchCategories)[number];

type SearchResult = {
  id: string;
  category: SearchCategory;
  title: string;
  description: string;
  href: string;
  source: string;
  tags: string[];
};

const routineCards = getRoutineCards();

function result(item: SearchResult): SearchResult {
  return item;
}

const searchResults: SearchResult[] = [
  ...communityGroups.map((group) =>
    result({
      id: `group-${group.id}`,
      category: "Groups",
      title: group.name,
      description: group.description,
      href: `/community/groups/${group.slug}`,
      source: "Community group",
      tags: [group.category, group.visibility, ...group.tags]
    })
  ),
  ...demoPosts.map((post) =>
    result({
      id: `post-${post.id}`,
      category: "Posts",
      title: post.title,
      description: post.body,
      href: "/community",
      source: "Community post preview",
      tags: [post.category, post.kind, post.status, post.visibility, ...post.tags]
    })
  ),
  ...demoBlogs.map((blog) =>
    result({
      id: `blog-${blog.id}`,
      category: "Blogs",
      title: blog.title,
      description: blog.excerpt,
      href: "/community/blog",
      source: "Creator blog preview",
      tags: [blog.category, blog.kind, blog.status, blog.visibility, ...blog.tags]
    })
  ),
  ...demoProfiles.map((profile) =>
    result({
      id: `user-${profile.id}`,
      category: "Users",
      title: profile.displayName,
      description: profile.bio,
      href: `/profile/${profile.username}`,
      source: "Profile preview persona",
      tags: [profile.username, profile.role, profile.goal, ...profile.badges, ...profile.titles]
    })
  ),
  ...demoMedia
    .filter((media) => media.type === "photo")
    .map((media) =>
      result({
        id: `photo-${media.id}`,
        category: "Photos",
        title: media.title,
        description: `${media.category} photo record${media.muscleGroup ? ` for ${media.muscleGroup}` : ""}.`,
        href: "/media",
        source: "Uploaded media preview",
        tags: [media.category, media.type, media.muscleGroup ?? ""].filter(Boolean)
      })
    ),
  ...mediaLibrary
    .filter((media) => media.type === "photo")
    .map((media) =>
      result({
        id: `photo-library-${media.title}`,
        category: "Photos",
        title: media.title,
        description: `${media.category} photo library entry.`,
        href: "/media",
        source: "Media library",
        tags: [media.category, media.type, ...media.tags]
      })
    ),
  ...demoMedia
    .filter((media) => media.type === "video" || media.type === "embed")
    .map((media) =>
      result({
        id: `video-${media.id}`,
        category: "Videos",
        title: media.title,
        description: `${media.category} video or embed record${media.muscleGroup ? ` for ${media.muscleGroup}` : ""}.`,
        href: "/media",
        source: "Uploaded media preview",
        tags: [media.category, media.type, media.muscleGroup ?? ""].filter(Boolean)
      })
    ),
  ...mediaLibrary
    .filter((media) => media.type === "video")
    .map((media) =>
      result({
        id: `video-library-${media.title}`,
        category: "Videos",
        title: media.title,
        description: `${media.category} video library entry.`,
        href: "/media",
        source: "Media library",
        tags: [media.category, media.type, ...media.tags]
      })
    ),
  ...videoEmbedLibrary.map((video) =>
    result({
      id: `video-embed-${video.title}`,
      category: "Videos",
      title: video.title,
      description: video.description,
      href: "/media#video-embeds",
      source: video.source,
      tags: [video.mediaType, video.meta ?? "video"]
    })
  ),
  ...routineCards.map((routine) =>
    result({
      id: `workout-${routine.title}`,
      category: "Workouts",
      title: routine.title,
      description: routine.description,
      href: routine.href ?? "/routines",
      source: "Routine library",
      tags: [routine.meta ?? "routine", "workout", "program"]
    })
  ),
  ...searchArchitecture
    .filter((item) => item.title === "Workouts")
    .map((item) =>
      result({
        id: `workout-architecture-${item.title}`,
        category: "Workouts",
        title: item.title,
        description: item.description,
        href: item.href ?? "/workouts",
        source: "Search architecture",
        tags: [item.meta ?? "workouts"]
      })
    ),
  ...educationTopics
    .filter((topic) => topic.category === "Nutrition")
    .map((topic) =>
      result({
        id: `nutrition-${topic.slug}`,
        category: "Nutrition",
        title: topic.title,
        description: topic.summary,
        href: `/education/${topic.slug}`,
        source: "Nutrition education",
        tags: [topic.category, topic.relatedWorkoutCategory, ...topic.tags]
      })
    ),
  ...educationTopics
    .filter((topic) => topic.category === "Recovery")
    .map((topic) =>
      result({
        id: `recovery-${topic.slug}`,
        category: "Recovery",
        title: topic.title,
        description: topic.summary,
        href: `/education/${topic.slug}`,
        source: "Recovery education",
        tags: [topic.category, topic.relatedWorkoutCategory, ...topic.tags]
      })
    ),
  ...exerciseLibrary.map((exercise) =>
    result({
      id: `exercise-${exercise.slug}`,
      category: "Exercises",
      title: exercise.name,
      description: exercise.teachingFocus,
      href: "/exercises",
      source: "Exercise library",
      tags: [exercise.system, exercise.category, exercise.level, ...exercise.bodyAreas, ...exercise.equipment]
    })
  ),
  ...educationTopics.map((topic) =>
    result({
      id: `article-${topic.slug}`,
      category: "Articles",
      title: topic.title,
      description: topic.summary,
      href: `/education/${topic.slug}`,
      source: "Education article",
      tags: [topic.category, topic.relatedWorkoutCategory, ...topic.tags]
    })
  ),
  ...reviewedContentExamples.map((item) =>
    result({
      id: `article-record-${item.id}`,
      category: "Articles",
      title: item.title,
      description: item.description,
      href: "/content",
      source: "Reviewed content example",
      tags: [item.type, item.category, item.status, item.author, item.reviewedBy]
    })
  ),
  ...instructionalMediaStructure.map((item) =>
    result({
      id: `image-${item.title}`,
      category: "Images",
      title: item.title,
      description: item.description,
      href: item.href ?? "/media#movement-photos",
      source: item.source,
      tags: [item.mediaType, item.meta ?? "image"]
    })
  ),
  ...searchableContentRecords
    .filter((item) => item.recordType === "image")
    .map((item) =>
      result({
        id: `image-record-${item.title}`,
        category: "Images",
        title: item.title,
        description: item.description,
        href: item.href ?? "/content",
        source: item.source ?? "E.R. Fitness content record",
        tags: [item.recordType, item.meta ?? "search record", ...item.searchableFields]
      })
    ),
  ...educationTopics
    .filter((topic) => topic.category === "Body Education")
    .map((topic) =>
      result({
        id: `muscle-${topic.slug}`,
        category: "Muscle Groups",
        title: topic.title,
        description: topic.summary,
        href: `/education/${topic.slug}`,
        source: "Body education",
        tags: [topic.category, topic.relatedWorkoutCategory, ...topic.tags]
      })
    ),
  ...educationTopics
    .filter((topic) => topic.category === "Injury Education")
    .map((topic) =>
      result({
        id: `injury-${topic.slug}`,
        category: "Injuries",
        title: topic.title,
        description: topic.summary,
        href: `/education/${topic.slug}`,
        source: "Injury education",
        tags: [topic.category, topic.relatedWorkoutCategory, ...topic.tags]
      })
    ),
  ...educationTopics
    .filter((topic) => topic.category === "Special Conditions")
    .map((topic) =>
      result({
        id: `condition-${topic.slug}`,
        category: "Conditions",
        title: topic.title,
        description: topic.summary,
        href: `/education/${topic.slug}`,
        source: "Special condition education",
        tags: [topic.category, topic.relatedWorkoutCategory, ...topic.tags]
      })
    ),
  ...professionalContributors.map((contributor) =>
    result({
      id: `contributor-${contributor.id}`,
      category: "Contributors",
      title: contributor.displayName,
      description: `${contributor.credentials} ${contributor.discipline} with ${contributor.submissionCount} submissions in review workflow.`,
      href: "/content#contributors",
      source: "Professional contributor directory",
      tags: [contributor.discipline, contributor.credentials, contributor.approvalStatus, ...contributor.specialties]
    })
  ),
  ...educationTopics
    .filter((topic) => topic.category === "Adaptive Fitness")
    .map((topic) =>
      result({
        id: `adaptive-${topic.slug}`,
        category: "Adaptive Fitness",
        title: topic.title,
        description: topic.summary,
        href: `/education/${topic.slug}`,
        source: "Adaptive fitness education",
        tags: [topic.category, topic.relatedWorkoutCategory, ...topic.tags]
      })
    )
];

const searchSummaryItems = [
  ...scalableSearchTargets,
  ...searchArchitecture,
  ...searchableContentRecords,
  ...educationCategoryCards
];

export function SearchPagePanel() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<SearchCategory | "All">("All");

  const categoryCounts = searchCategories.reduce<Record<SearchCategory, number>>((counts, category) => {
    counts[category] = searchResults.filter((item) => item.category === category).length;
    return counts;
  }, {} as Record<SearchCategory, number>);

  const visibleCategories = searchCategories.filter((category) => categoryCounts[category] > 0);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredResults = searchResults.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const haystack = [item.title, item.description, item.category, item.source, ...item.tags].join(" ").toLowerCase();
    const matchesQuery = normalizedQuery ? haystack.includes(normalizedQuery) : true;

    return matchesCategory && matchesQuery;
  });

  const visibleResults = filteredResults.slice(0, previewLimits.searchResults);
  const hiddenResultCount = Math.max(filteredResults.length - visibleResults.length, 0);
  const activeControlCount = activeCategory === "All" ? searchResults.length : categoryCounts[activeCategory];

  return (
    <div className="grid gap-8">
      <section className="rounded-md border border-white/10 bg-white/[0.045] p-5">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <label className="grid gap-2">
            <span className="text-sm font-black uppercase text-white">Search indexed website content</span>
            <span className="relative block">
              <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={18} aria-hidden />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search exercises, groups, nutrition, injuries, contributors..."
                className="h-12 w-full rounded-md border border-white/10 bg-black/40 pl-10 pr-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
              />
            </span>
          </label>
          {(query || activeCategory !== "All") ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory("All");
              }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/6 px-4 text-sm font-black uppercase text-white hover:border-ember-500/45"
            >
              <X size={17} aria-hidden />
              Clear
            </button>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-2" aria-label="Search result categories">
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
            All {searchResults.length}
          </button>
          {visibleCategories.map((category) => (
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
          Showing {filteredResults.length} result{filteredResults.length === 1 ? "" : "s"} from {activeControlCount} indexed {activeCategory === "All" ? "records" : activeCategory.toLowerCase()}.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleResults.map((item) => (
          <Link key={item.id} href={item.href} className="rounded-md border border-white/10 bg-white/[0.045] p-5 transition hover:border-volt-400/45">
            <p className="text-xs font-black uppercase text-volt-400">{item.category} | {item.source}</p>
            <h2 className="mt-2 text-lg font-black text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
            <p className="mt-4 text-xs leading-5 text-zinc-500">{item.tags.filter(Boolean).slice(0, 6).join(" | ")}</p>
          </Link>
        ))}
      </section>

      {hiddenResultCount ? (
        <section className="rounded-md border border-ember-500/30 bg-ember-500/8 p-5">
          <p className="text-xs font-black uppercase text-ember-400">Full Search Results Locked</p>
          <h2 className="mt-2 text-xl font-black text-white">{hiddenResultCount} more matching records are hidden from public preview.</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-300">{subscriberAccessNotice}</p>
        </section>
      ) : null}

      <section className="rounded-md border border-white/10 bg-black/25 p-5">
        <p className="text-xs font-black uppercase text-ember-400">Search Coverage</p>
        <h2 className="mt-2 text-2xl font-black text-white">Every visible Search page category is backed by routed data.</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {searchSummaryItems.slice(0, 18).map((item) => (
            <Link key={`${item.title}-${item.meta}`} href={item.href ?? "/search"} className="rounded-md border border-white/10 bg-white/[0.045] p-4 transition hover:border-volt-400/45">
              <p className="text-xs font-black uppercase text-zinc-500">{item.meta ?? "indexed"}</p>
              <h3 className="mt-2 font-black text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
