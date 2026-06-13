import Link from "next/link";
import { BookOpen, Dumbbell, ExternalLink, FileText, Image as ImageIcon, PlaySquare } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

import { CardGrid } from "@/components/CardGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import {
  contentPackMedia,
  contentPackStats,
  openWorkoutSystemRecords,
  publicMaterialRecords,
  getContentPackLessonsByArea,
  getContentPackMediaByArea,
  getOpenWorkoutSystemsByArea,
  getPublicMaterialsByArea,
  type ContentPackArea,
  type ContentPackLesson,
  type ContentPackMedia,
  type OpenWorkoutSystemRecord,
  type PublicMaterialRecord
} from "@/lib/content-pack";

function ResourceLink({ href, children, className }: { href: string; children: ReactNode; className: string }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href as ComponentProps<typeof Link>["href"]} className={className}>
      {children}
    </Link>
  );
}

export function ContentPackOverviewPanel() {
  return (
    <div className="grid gap-6">
      <SectionHeader
        eyebrow="Content Pack"
        title="A source-linked teaching pack connected to the existing website sections."
        description="The pack adds original E.R. Fitness lessons, external video records, source-linked image sequence records, citations, license notes, and media-rights guidance without copying third-party assets."
      />
      <CardGrid items={contentPackStats} columns="four" />
      <OpenWorkoutSystemsGrid items={openWorkoutSystemRecords.slice(0, 6)} />
      <MediaRecordGrid items={contentPackMedia.slice(0, 6)} />
      <PublicMaterialsGrid items={publicMaterialRecords.slice(0, 9)} />
    </div>
  );
}

export function ContentPackPanel({
  areas,
  title = "Teaching Content Pack",
  description = "Original lesson cards, source links, image-sequence requirements, video references, and tracking prompts for this section.",
  includeMedia = true,
  lessonLimit,
  mediaLimit
}: {
  areas: ContentPackArea[];
  title?: string;
  description?: string;
  includeMedia?: boolean;
  lessonLimit?: number;
  mediaLimit?: number;
}) {
  const lessons = getContentPackLessonsByArea(areas);
  const media = getContentPackMediaByArea(areas);
  const visibleLessons = typeof lessonLimit === "number" ? lessons.slice(0, lessonLimit) : lessons;
  const visibleMedia = typeof mediaLimit === "number" ? media.slice(0, mediaLimit) : media;

  return (
    <div className="grid gap-8">
      <SectionHeader eyebrow="Verified Content Pack" title={title} description={description} />
      {includeMedia && visibleMedia.length ? <MediaRecordGrid items={visibleMedia} /> : null}
      {visibleLessons.length ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {visibleLessons.map((lesson) => (
            <LessonCard key={lesson.title} lesson={lesson} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function OpenWorkoutSystemsPanel({
  areas,
  title = "Open Public Workout Systems",
  description = "Practical workout, recovery, adaptive, and mind-body templates built from public source material and original E.R. Fitness summaries.",
  limit
}: {
  areas: ContentPackArea[];
  title?: string;
  description?: string;
  limit?: number;
}) {
  const systems = getOpenWorkoutSystemsByArea(areas);
  const visibleSystems = typeof limit === "number" ? systems.slice(0, limit) : systems;

  return (
    <div className="grid gap-6">
      <SectionHeader eyebrow="Open Information Pack" title={title} description={description} />
      <OpenWorkoutSystemsGrid items={visibleSystems} />
    </div>
  );
}

export function PublicMaterialsPanel({
  areas,
  title = "Verified Public Materials",
  description = "Free public articles, guidelines, exercise plans, video libraries, and handouts connected to this section.",
  limit
}: {
  areas: ContentPackArea[];
  title?: string;
  description?: string;
  limit?: number;
}) {
  const materials = getPublicMaterialsByArea(areas);
  const visibleMaterials = typeof limit === "number" ? materials.slice(0, limit) : materials;

  return (
    <div className="grid gap-6">
      <SectionHeader eyebrow="Public Materials" title={title} description={description} />
      <PublicMaterialsGrid items={visibleMaterials} />
    </div>
  );
}

export function ExerciseDemoPackPanel({ limit }: { limit?: number }) {
  const items = getContentPackMediaByArea(["Workout & Exercise", "Injury Education", "Recovery"]);
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <div className="grid gap-6">
      <SectionHeader
        eyebrow="Exercise Media Pack"
        title="Real demonstration links and image-sequence requirements for core movement education."
        description="The site links to legitimate external media instead of copying photos or videos. These records define the exact frames E.R. Fitness should shoot or license for original production."
      />
      <MediaRecordGrid items={visibleItems} />
    </div>
  );
}

function OpenWorkoutSystemsGrid({ items }: { items: OpenWorkoutSystemRecord[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-md border border-volt-400/20 bg-volt-400/[0.055] p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-volt-400/14 text-volt-400">
              <Dumbbell size={22} aria-hidden />
            </div>
            <div>
              <p className="text-xs font-black uppercase text-ember-400">{item.area} | {item.level}</p>
              <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-300">{item.summary}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <LessonList title="Weekly" items={item.weeklyStructure} tone="green" />
            <LessonList title="Session" items={item.sessionTemplate} />
            <LessonList title="Progress" items={item.progression} tone="green" />
          </div>
          <div className="mt-5 rounded-md border border-ember-500/25 bg-ember-500/8 p-4">
            <p className="text-xs font-black uppercase text-ember-400">Safety Boundary</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">{item.safety}</p>
          </div>
          <div className="mt-4">
            <TagGrid items={item.tags} />
          </div>
          <SourceBlock source={item.source} license={item.rights} sourceHref={item.sourceHref} references={item.references} />
        </article>
      ))}
    </div>
  );
}

function PublicMaterialsGrid({ items }: { items: PublicMaterialRecord[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={`${item.source}-${item.title}`} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-volt-400/12 text-volt-400">
              <BookOpen size={22} aria-hidden />
            </div>
            <div>
              <p className="text-xs font-black uppercase text-ember-400">{item.area} | {item.materialType}</p>
              <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{item.summary}</p>
          <div className="mt-4 grid gap-4">
            <div>
              <p className="text-xs font-black uppercase text-zinc-500">Use For</p>
              <div className="mt-2">
                <TagGrid items={item.useFor} tone="green" />
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase text-zinc-500">Tags</p>
              <div className="mt-2">
                <TagGrid items={item.tags} />
              </div>
            </div>
          </div>
          <SourceBlock
            source={item.source}
            license={item.rights}
            sourceHref={item.href}
            references={[{ title: item.title, href: item.href, source: item.source }]}
          />
        </article>
      ))}
    </div>
  );
}

function MediaRecordGrid({ items }: { items: ContentPackMedia[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="overflow-hidden rounded-md border border-white/10 bg-white/[0.045]">
          <div className="flex aspect-video items-center justify-center bg-[linear-gradient(135deg,rgba(255,106,0,0.24),rgba(140,255,0,0.18)),#101215]">
            {item.mediaType === "External video" ? <PlaySquare size={42} className="text-white" aria-hidden /> : <ImageIcon size={42} className="text-white" aria-hidden />}
          </div>
          <div className="p-5">
            <p className="text-xs font-black uppercase text-ember-400">{item.area} | {item.mediaType}</p>
            <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.summary}</p>
            <div className="mt-4">
              <SectionHeader title="Sequence Frames" />
              <div className="mt-3">
                <TagGrid items={item.sequenceFrames} tone="green" />
              </div>
            </div>
            <SourceBlock source={item.source} license={item.license} sourceHref={item.sourceHref} references={item.references} />
            <div className="mt-4 flex flex-wrap gap-3">
              <ResourceLink href={item.routeHref} className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/6 px-3 py-2 text-xs font-black uppercase text-white hover:border-volt-400/45">
                Site Section
              </ResourceLink>
              <ResourceLink href={item.sourceHref} className="inline-flex items-center gap-2 rounded-md bg-volt-400 px-3 py-2 text-xs font-black uppercase text-graphite-950 hover:bg-volt-300">
                Open Source <ExternalLink size={13} aria-hidden />
              </ResourceLink>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function LessonCard({ lesson }: { lesson: ContentPackLesson }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ember-500/14 text-ember-400">
          <FileText size={22} aria-hidden />
        </div>
        <div>
          <p className="text-xs font-black uppercase text-volt-400">{lesson.area} | {lesson.level}</p>
          <h3 className="mt-2 text-xl font-black text-white">{lesson.title}</h3>
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{lesson.summary}</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <LessonList title="Teach" items={lesson.teach} />
        <LessonList title="Apply" items={lesson.apply} />
        <LessonList title="Track" items={lesson.track} tone="green" />
      </div>
      <div className="mt-5 rounded-md border border-ember-500/25 bg-ember-500/8 p-4">
        <p className="text-xs font-black uppercase text-ember-400">Safety Boundary</p>
        <p className="mt-2 text-sm leading-6 text-zinc-300">{lesson.safety}</p>
      </div>
      <div className="mt-4">
        <TagGrid items={lesson.tags} />
      </div>
      <SourceBlock source="E.R. Fitness original lesson using cited references" license="Original summary; external source material remains hosted by each provider." sourceHref={lesson.routeHref} references={lesson.references} />
    </article>
  );
}

function LessonList({ title, items, tone = "default" }: { title: string; items: string[]; tone?: "default" | "green" }) {
  return (
    <div>
      <p className={`text-xs font-black uppercase ${tone === "green" ? "text-volt-400" : "text-zinc-500"}`}>{title}</p>
      <ul className="mt-2 space-y-2 text-sm leading-6 text-zinc-300">
        {items.map((item) => (
          <li key={item} className={`border-l pl-3 ${tone === "green" ? "border-volt-400/35" : "border-white/15"}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SourceBlock({
  source,
  license,
  sourceHref,
  references
}: {
  source: string;
  license: string;
  sourceHref: string;
  references: Array<{ title: string; href: string; source: string }>;
}) {
  return (
    <div className="mt-4 rounded-md border border-white/10 bg-black/25 p-4">
      <p className="text-xs font-black uppercase text-zinc-500">Source and License</p>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{source}</p>
      <p className="mt-1 text-sm leading-6 text-zinc-400">{license}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <ResourceLink href={sourceHref} className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/6 px-2 py-1 text-xs font-bold text-volt-400 hover:border-volt-400/40">
          Primary Source <ExternalLink size={12} aria-hidden />
        </ResourceLink>
        {references.slice(0, 3).map((reference) => (
          <a key={`${reference.source}-${reference.title}`} href={reference.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/6 px-2 py-1 text-xs font-bold text-volt-400 hover:border-volt-400/40">
            {reference.source} <ExternalLink size={12} aria-hidden />
          </a>
        ))}
      </div>
    </div>
  );
}
