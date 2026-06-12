import Image from "next/image";
import Link from "next/link";
import { ExternalLink, PlaySquare } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import type {
  AdaptiveEducationSection,
  EquipmentLibraryItem,
  InstructionalMediaRecord,
  ReferencedEducationCard,
  SearchableContentRecord
} from "@/lib/publish-ready-content";

type GridColumns = "two" | "three" | "four";

function gridClass(columns: GridColumns) {
  if (columns === "four") return "sm:grid-cols-2 xl:grid-cols-4";
  if (columns === "two") return "md:grid-cols-2";
  return "md:grid-cols-2 xl:grid-cols-3";
}

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

function SourceBlock({ item }: { item: ReferencedEducationCard }) {
  const mediaPlan = item.mediaPlan ?? {
    imageSlots: ["overview image", "detail image", "safety/caution image"],
    videoSlots: ["short overview", "demonstration or walkthrough"],
    licensingNotes: item.license
  };

  return (
    <div className="mt-4 rounded-md border border-white/10 bg-black/25 p-4">
      <p className="text-xs font-black uppercase text-zinc-500">Source and License</p>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{item.source}</p>
      <p className="mt-1 text-sm leading-6 text-zinc-400">{item.license}</p>
      <p className="mt-2 text-xs font-black uppercase text-volt-400">Review Status: {item.reviewStatus ?? "E.R. Fitness Draft"}</p>
      <p className="mt-1 text-xs leading-5 text-zinc-500">
        Reviewer: {item.reviewerType ?? "editorial reviewer"} | {item.reviewedBy ?? "Unassigned"} | {item.reviewDate ?? "Pending"}
      </p>
      <p className="mt-1 text-xs leading-5 text-zinc-400">{item.reviewNotes ?? "Source-linked record is ready for expert review routing."}</p>
      {item.references.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.references.map((reference) => (
            <a key={reference} href={reference} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/6 px-2 py-1 text-xs font-bold text-volt-400 hover:border-volt-400/40">
              Reference <ExternalLink size={12} aria-hidden />
            </a>
          ))}
        </div>
      ) : null}
      <div className="mt-4 grid gap-3">
        <div>
          <p className="text-xs font-black uppercase text-zinc-500">Image Slots</p>
          <div className="mt-2">
            <TagGrid items={mediaPlan.imageSlots} />
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase text-zinc-500">Video Slots</p>
          <div className="mt-2">
            <TagGrid items={mediaPlan.videoSlots} tone="green" />
          </div>
        </div>
        <p className="text-xs leading-5 text-zinc-400">{mediaPlan.licensingNotes}</p>
      </div>
    </div>
  );
}

export function ReferencedCardGrid({ items, columns = "three" }: { items: ReferencedEducationCard[]; columns?: GridColumns }) {
  return (
    <div className={`grid gap-4 ${gridClass(columns)}`}>
      {items.map((item) => (
        <article key={item.title} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase text-volt-400">{item.meta}</p>
              <h3 className="mt-2 text-lg font-black text-white">{item.title}</h3>
            </div>
            {item.href ? (
              <ResourceLink href={item.href} className="shrink-0 rounded-md border border-white/10 bg-white/6 px-2 py-1 text-xs font-black uppercase text-white hover:border-volt-400/40">
                Open
              </ResourceLink>
            ) : null}
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
          <SourceBlock item={item} />
        </article>
      ))}
    </div>
  );
}

export function InstructionalMediaPanel({ items }: { items: InstructionalMediaRecord[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="overflow-hidden rounded-md border border-white/10 bg-white/[0.045]">
          <div className="relative aspect-video bg-black/30">
            {item.embedHref ? (
              <iframe
                title={item.title}
                src={item.embedHref}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            )}
          </div>
          <div className="p-5">
            <p className="text-xs font-black uppercase text-ember-400">{item.mediaType} | {item.meta}</p>
            <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
            <SourceBlock item={item} />
          </div>
        </article>
      ))}
    </div>
  );
}

export function EquipmentLibraryPanel({ items }: { items: EquipmentLibraryItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <article key={item.equipment} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
          <p className="text-xs font-black uppercase text-volt-400">{item.meta}</p>
          <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
          <div className="mt-4 grid gap-3">
            <TagGrid items={item.bestFor} />
            <TagGrid items={item.coachingCues} tone="green" />
            <TagGrid items={item.safetyNotes} tone="orange" />
          </div>
          <SourceBlock item={item} />
        </article>
      ))}
    </div>
  );
}

export function AdaptiveEducationPanel({ items }: { items: AdaptiveEducationSection[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
          <p className="text-xs font-black uppercase text-volt-400">{item.audience} | {item.meta}</p>
          <h3 className="mt-2 text-xl font-black text-white">{item.title}</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div>
              <SectionHeader title="Focus Areas" />
              <div className="mt-3">
                <TagGrid items={item.focusAreas} />
              </div>
            </div>
            <div>
              <SectionHeader title="Track In App" />
              <div className="mt-3">
                <TagGrid items={item.trackingPrompts} tone="green" />
              </div>
            </div>
          </div>
          <SourceBlock item={item} />
        </article>
      ))}
    </div>
  );
}

export function SearchableRecordPanel({ items }: { items: SearchableContentRecord[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ember-500/14 text-ember-400">
              <PlaySquare size={20} aria-hidden />
            </div>
            <div>
              <p className="text-xs font-black uppercase text-ember-400">{item.recordType} | {item.meta}</p>
              <h3 className="mt-2 text-lg font-black text-white">{item.title}</h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
          <div className="mt-4">
            <TagGrid items={item.searchableFields} tone="green" />
          </div>
          <SourceBlock item={item} />
        </article>
      ))}
    </div>
  );
}
