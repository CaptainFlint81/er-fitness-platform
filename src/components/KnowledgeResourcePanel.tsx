"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ExternalLink, PlaySquare, Search } from "lucide-react";

import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { subscriberAccessNotice } from "@/lib/access-control";
import {
  freeFitnessResourceLibrary,
  instructionalVideoResources,
  mediaSourceDirectory,
  referenceResources,
  resourceHubSeoKeywords,
  sourceDirectoryResources,
  topicHubResources,
  visualLearningResources,
  type MediaSourceDirectoryItem,
  type ReferenceResource,
  type ResourceHubCard,
  type SourceDirectoryCard,
  type VideoResource,
  type VisualResource
} from "@/lib/knowledge-resources";

type KnowledgeResourcePanelProps = {
  title?: string;
  description?: string;
  visualLimit?: number;
  videoLimit?: number;
  referenceLimit?: number;
  resourceLimit?: number;
  sourceLimit?: number;
  topicLimit?: number;
  mediaSourceLimit?: number;
};

export function KnowledgeResourcePanel({
  title = "Visual Learning, Instructional Videos, and Reference Links",
  description = "Use these resources to move from concept to example: E.R. Fitness visual maps, public instructional videos, exercise demonstrations, and credible reference links.",
  visualLimit = visualLearningResources.length,
  videoLimit = instructionalVideoResources.length,
  referenceLimit = referenceResources.length,
  resourceLimit = 6,
  sourceLimit = 6,
  topicLimit = 6,
  mediaSourceLimit = 6
}: KnowledgeResourcePanelProps) {
  const [sourceQuery, setSourceQuery] = useState("");
  const [sourceCategory, setSourceCategory] = useState("All");

  const sourceCategories = useMemo(
    () => ["All", ...Array.from(new Set(sourceDirectoryResources.map((resource) => resource.category))).sort()],
    []
  );

  const filteredSources = sourceDirectoryResources.filter((resource) => {
    const query = sourceQuery.trim().toLowerCase();
    const matchesCategory = sourceCategory === "All" || resource.category === sourceCategory;
    const searchable = [
      resource.title,
      resource.sourceName,
      resource.sourceType,
      resource.category,
      resource.shortSummary,
      resource.whatItIs,
      resource.whoItIsFor,
      resource.tags.join(" ")
    ].join(" ").toLowerCase();

    return matchesCategory && (!query || searchable.includes(query));
  });
  const visibleSources = filteredSources.slice(0, sourceLimit);

  return (
    <div className="grid gap-8">
      <SectionHeader eyebrow="Knowledge Resources" title={title} description={description} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visualLearningResources.slice(0, visualLimit).map((resource) => (
          <VisualCard key={resource.title} resource={resource} />
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeader title="Instructional Video Library" description="Curated external video and demonstration links. Open videos in a new tab and use E.R. Fitness pages for tracking context." />
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {instructionalVideoResources.slice(0, videoLimit).map((resource) => (
              <VideoCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
        <div>
          <SectionHeader title="Reference Links" description="Credible external resources for deeper reading. These links support education only and do not replace professional care." />
          <div className="mt-5 grid gap-4">
            {referenceResources.slice(0, referenceLimit).map((resource) => (
              <ReferenceCard key={resource.title} resource={resource} />
            ))}
          </div>
        </div>
      </div>
      <section className="grid gap-5">
        <SectionHeader
          eyebrow="Free Fitness Resource Library"
          title="Legal public fitness knowledge sources"
          description="Government health references, public exercise databases, routine libraries, research tools, adaptive fitness, nutrition, youth fitness, women's fitness, and sports performance resources."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {freeFitnessResourceLibrary.slice(0, resourceLimit).map((resource) => (
            <ResourceHubCardView key={resource.title} resource={resource} />
          ))}
        </div>
        <LockNotice hiddenCount={Math.max(freeFitnessResourceLibrary.length - resourceLimit, 0)} label="Full Resource Library" />
      </section>
      <section className="grid gap-5">
        <SectionHeader
          eyebrow="Source Directory"
          title="Searchable and filterable source cards"
          description="Each source card includes who it is for, safety considerations, source links, media needs, disclaimer handoff, and review status."
        />
        <div className="grid gap-3 rounded-md border border-white/10 bg-black/25 p-4 md:grid-cols-[1fr_260px]">
          <label className="grid gap-2">
            <span className="text-xs font-black uppercase text-zinc-500">Search Sources</span>
            <span className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2">
              <Search size={18} className="text-zinc-500" aria-hidden />
              <input
                value={sourceQuery}
                onChange={(event) => setSourceQuery(event.target.value)}
                placeholder="Search CDC, nutrition, adaptive, research..."
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
              />
            </span>
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-black uppercase text-zinc-500">Filter Category</span>
            <select
              value={sourceCategory}
              onChange={(event) => setSourceCategory(event.target.value)}
              className="rounded-md border border-white/10 bg-graphite-950 px-3 py-2 text-sm font-bold text-white outline-none"
            >
              {sourceCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleSources.map((resource) => (
            <SourceDirectoryCardView key={resource.title} resource={resource} />
          ))}
        </div>
        <LockNotice hiddenCount={Math.max(filteredSources.length - visibleSources.length, 0)} label="Full Source Directory" />
      </section>
      <section className="grid gap-5">
        <SectionHeader
          eyebrow="Topic Hubs"
          title="Structured education hubs ready for more lessons"
          description="These hubs plan the required educational areas with related routines, app sections, source links, review status, and media slots."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {topicHubResources.slice(0, topicLimit).map((resource) => (
            <ResourceHubCardView key={resource.title} resource={resource} />
          ))}
        </div>
        <LockNotice hiddenCount={Math.max(topicHubResources.length - topicLimit, 0)} label="Full Topic Hub Library" />
      </section>
      <section className="grid gap-5">
        <SectionHeader
          eyebrow="Media Source Directory"
          title="Rights-aware media sources for future images and videos"
          description="No media is downloaded here. These records identify candidate sources, license notes, attribution needs, commercial use checks, modification checks, and preferred link/embed behavior."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mediaSourceDirectory.slice(0, mediaSourceLimit).map((source) => (
            <MediaSourceCard key={source.sourceName} source={source} />
          ))}
        </div>
        <LockNotice hiddenCount={Math.max(mediaSourceDirectory.length - mediaSourceLimit, 0)} label="Full Media Source Directory" />
      </section>
      <section className="rounded-md border border-ember-500/30 bg-ember-500/8 p-5">
        <h2 className="text-sm font-black uppercase text-ember-400">Educational Disclaimer</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-300">
          This content is educational only and is not medical advice. Consult a qualified healthcare professional before beginning any exercise, nutrition, recovery, or wellness program.
        </p>
        <Link href="/legal/disclaimer" className="mt-4 inline-flex text-sm font-bold text-volt-400 hover:text-volt-300">
          Full Medical Disclaimer
        </Link>
      </section>
      <section className="grid gap-4">
        <SectionHeader
          eyebrow="SEO Planning"
          title="Resource hub keyword coverage"
          description="These keywords are tracked in the content layer. Route-level metadata still requires app-file approval."
        />
        <TagGrid items={resourceHubSeoKeywords} tone="green" />
      </section>
    </div>
  );
}

function LockNotice({ hiddenCount, label }: { hiddenCount: number; label: string }) {
  if (hiddenCount <= 0) return null;

  return (
    <div className="rounded-md border border-ember-500/30 bg-ember-500/8 p-4">
      <p className="text-xs font-black uppercase text-ember-400">{label} Locked</p>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{hiddenCount} additional records are hidden from public preview. {subscriberAccessNotice}</p>
    </div>
  );
}

function VisualCard({ resource }: { resource: VisualResource }) {
  return (
    <Link href={resource.href} className="overflow-hidden rounded-md border border-white/10 bg-white/[0.045] shadow-glow transition hover:border-volt-400/45">
      <div className="relative aspect-video bg-black/30">
        <Image src={resource.image} alt={resource.title} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-black text-white">{resource.title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{resource.description}</p>
        <div className="mt-4">
          <TagGrid items={resource.tags.slice(0, 4)} tone="green" />
        </div>
      </div>
    </Link>
  );
}

function VideoCard({ resource }: { resource: VideoResource }) {
  return (
    <a href={resource.href} target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-white/[0.045] p-5 transition hover:border-ember-500/45">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ember-500/14 text-ember-400">
          <PlaySquare size={25} aria-hidden />
        </div>
        <div>
          <p className="text-xs font-black uppercase text-ember-400">{resource.category} | {resource.provider}</p>
          <h3 className="mt-2 text-lg font-black text-white">{resource.title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{resource.description}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm font-bold text-volt-400">
        Watch or open resource <ExternalLink size={15} aria-hidden />
      </div>
    </a>
  );
}

function ReferenceCard({ resource }: { resource: ReferenceResource }) {
  return (
    <a href={resource.href} target="_blank" rel="noreferrer" className="rounded-md border border-white/10 bg-black/25 p-4 transition hover:border-volt-400/45">
      <p className="text-xs font-black uppercase text-volt-400">{resource.category} | {resource.source}</p>
      <h3 className="mt-2 text-base font-black text-white">{resource.title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{resource.description}</p>
    </a>
  );
}

function ResourceHubCardView({ resource }: { resource: ResourceHubCard }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <p className="text-xs font-black uppercase text-volt-400">{resource.reviewStatus}</p>
      <p className="mt-1 text-xs leading-5 text-zinc-500">{resource.reviewerType} | {resource.reviewedBy} | {resource.reviewDate}</p>
      <h3 className="mt-2 text-lg font-black text-white">{resource.title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{resource.shortSummary}</p>
      <p className="mt-2 text-xs leading-5 text-zinc-500">{resource.reviewNotes}</p>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
        <p><span className="font-black text-white">What it is:</span> {resource.whatItIs}</p>
        <p><span className="font-black text-white">Who it is for:</span> {resource.whoItIsFor}</p>
      </div>
      <MiniList title="Benefits" items={resource.benefits} />
      <MiniList title="Safety" items={resource.safetyConsiderations} tone="orange" />
      <MiniList title="Common Mistakes" items={resource.commonMistakes} />
      <div className="mt-4 grid gap-3 rounded-md border border-white/10 bg-black/25 p-4 text-xs leading-5 text-zinc-400">
        <p><span className="font-black uppercase text-zinc-500">Beginner:</span> {resource.levelNotes.beginner}</p>
        <p><span className="font-black uppercase text-zinc-500">Intermediate:</span> {resource.levelNotes.intermediate}</p>
        <p><span className="font-black uppercase text-zinc-500">Advanced:</span> {resource.levelNotes.advanced}</p>
      </div>
      <div className="mt-4">
        <p className="text-xs font-black uppercase text-zinc-500">Related App Sections</p>
        <div className="mt-2">
          <TagGrid items={resource.relatedAppSections} />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs font-black uppercase text-zinc-500">Related Routines</p>
        <div className="mt-2">
          <TagGrid items={resource.relatedRoutines} tone="green" />
        </div>
      </div>
      <MediaNeededBlock resource={resource} />
      <div className="mt-4 grid gap-2">
        {resource.freeSourceLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-volt-400 hover:text-volt-300">
            {link.title} <ExternalLink size={14} aria-hidden />
          </a>
        ))}
        <Link href={resource.disclaimerHref} className="text-sm font-bold text-ember-400 hover:text-ember-300">Medical Disclaimer</Link>
      </div>
    </article>
  );
}

function SourceDirectoryCardView({ resource }: { resource: SourceDirectoryCard }) {
  return (
    <article className="rounded-md border border-white/10 bg-black/25 p-5">
      <p className="text-xs font-black uppercase text-ember-400">{resource.category} | {resource.sourceType}</p>
      <h3 className="mt-2 text-lg font-black text-white">{resource.sourceName}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-400">{resource.shortSummary}</p>
      <p className="mt-3 text-xs font-bold uppercase text-zinc-500">Review: {resource.reviewStatus}</p>
      <p className="mt-1 text-xs leading-5 text-zinc-500">{resource.reviewerType} | {resource.reviewedBy} | {resource.reviewDate}</p>
      <p className="mt-2 text-xs leading-5 text-zinc-500">{resource.reviewNotes}</p>
      <div className="mt-4">
        <TagGrid items={resource.tags.slice(0, 5)} tone="green" />
      </div>
      <div className="mt-4 grid gap-2">
        <a href={resource.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-volt-400 hover:text-volt-300">
          Open source <ExternalLink size={14} aria-hidden />
        </a>
        <Link href={resource.disclaimerHref} className="text-sm font-bold text-ember-400 hover:text-ember-300">Disclaimer</Link>
      </div>
    </article>
  );
}

function MediaSourceCard({ source }: { source: MediaSourceDirectoryItem }) {
  const fields = [
    ["Media", source.mediaType],
    ["License notes", source.licenseNotes],
    ["Attribution", source.attributionRequired],
    ["Commercial use", source.commercialUseAllowed],
    ["Modification", source.modificationAllowed],
    ["Download", source.downloadAllowed],
    ["Embed/link", source.embedOrLinkPreferred],
    ["Reviewer", `${source.reviewerType} | ${source.reviewedBy} | ${source.reviewDate}`],
    ["Review notes", source.reviewNotes]
  ];

  return (
    <article className="rounded-md border border-white/10 bg-black/25 p-5">
      <p className="text-xs font-black uppercase text-volt-400">{source.reviewStatus}</p>
      <h3 className="mt-2 text-lg font-black text-white">{source.sourceName}</h3>
      <div className="mt-4 grid gap-3">
        {fields.map(([label, value]) => (
          <p key={label} className="text-sm leading-6 text-zinc-400">
            <span className="font-black text-white">{label}:</span> {value}
          </p>
        ))}
      </div>
      <a href={source.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-volt-400 hover:text-volt-300">
        Review license/source <ExternalLink size={14} aria-hidden />
      </a>
    </article>
  );
}

function MediaNeededBlock({ resource }: { resource: ResourceHubCard }) {
  return (
    <div className="mt-4 rounded-md border border-white/10 bg-black/25 p-4">
      <p className="text-xs font-black uppercase text-zinc-500">Media Needed Planning</p>
      <div className="mt-3">
        <TagGrid
          items={[
            resource.suggestedMedia.demoImageNeeded,
            resource.suggestedMedia.demoVideoNeeded,
            resource.suggestedMedia.anatomyImageNeeded,
            resource.suggestedMedia.infographicNeeded,
            resource.suggestedMedia.routineChartNeeded,
            resource.suggestedMedia.safetyGraphicNeeded,
            resource.suggestedMedia.progressionGraphicNeeded
          ]}
        />
      </div>
    </div>
  );
}

function MiniList({ title, items, tone = "green" }: { title: string; items: string[]; tone?: "green" | "orange" }) {
  return (
    <div className="mt-4">
      <p className={`text-xs font-black uppercase ${tone === "orange" ? "text-ember-400" : "text-volt-400"}`}>{title}</p>
      <ul className="mt-2 space-y-2 text-sm leading-6 text-zinc-400">
        {items.map((item) => (
          <li key={item} className={`border-l pl-3 ${tone === "orange" ? "border-ember-400/35" : "border-volt-400/35"}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
