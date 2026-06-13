import { LockKeyhole } from "lucide-react";
import type { ReactNode } from "react";

import { AppValueCTA } from "@/components/AppValueCTA";
import { subscriberAccessNotice } from "@/lib/access-control";

type LockedContentPreviewProps = {
  title: string;
  description: string;
  previewCount: number;
  totalCount: number;
  lockedLabel?: string;
  sourceNote?: string;
  children?: ReactNode;
};

export function LockedContentPreview({
  title,
  description,
  previewCount,
  totalCount,
  lockedLabel = "Full Library Locked",
  sourceNote,
  children
}: LockedContentPreviewProps) {
  const hiddenCount = Math.max(totalCount - previewCount, 0);

  return (
    <div className="grid gap-5">
      <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase text-volt-400">Limited Public Preview</p>
            <h2 className="mt-2 text-2xl font-black text-white">{title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">{description}</p>
            {sourceNote ? <p className="mt-3 text-xs leading-5 text-zinc-500">{sourceNote}</p> : null}
          </div>
          <div className="grid min-w-44 gap-2 rounded-md border border-white/10 bg-black/25 p-4 text-sm">
            <p className="text-xs font-black uppercase text-zinc-500">Public Preview</p>
            <p className="text-2xl font-black text-white">{previewCount}</p>
            <p className="text-xs leading-5 text-zinc-400">of {totalCount} records shown</p>
          </div>
        </div>
      </div>
      {children}
      <div className="rounded-md border border-ember-500/30 bg-ember-500/8 p-5">
        <div className="flex gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ember-500/14 text-ember-400">
            <LockKeyhole size={24} aria-hidden />
          </div>
          <div>
            <p className="text-xs font-black uppercase text-ember-400">{lockedLabel}</p>
            <h3 className="mt-2 text-xl font-black text-white">{hiddenCount} additional records are reserved for the app access layer.</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{subscriberAccessNotice}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">No login, billing, or subscription unlock is active yet. This is a launch-safe preview gate.</p>
          </div>
        </div>
      </div>
      <AppValueCTA compact />
    </div>
  );
}
