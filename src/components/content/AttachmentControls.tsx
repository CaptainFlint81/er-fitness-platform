"use client";

import { ImagePlus, Link as LinkIcon, Video } from "lucide-react";
import { useState } from "react";

type AttachmentMode = "photo" | "video" | "external-link";

const attachmentOptions: Array<{
  mode: AttachmentMode;
  label: string;
  icon: typeof ImagePlus;
  helper: string;
  inputLabel: string;
}> = [
  {
    mode: "photo",
    label: "Photo",
    icon: ImagePlus,
    helper: "Photo attachment fields support media upload storage, titles, review, and gallery organization.",
    inputLabel: "Photo title or storage path"
  },
  {
    mode: "video",
    label: "Video",
    icon: Video,
    helper: "Video attachment fields support demos, journals, coaching clips, and review media.",
    inputLabel: "Video title or storage path"
  },
  {
    mode: "external-link",
    label: "External Link",
    icon: LinkIcon,
    helper: "External links are routed through source, license, and moderation review.",
    inputLabel: "External URL"
  }
];

export function AttachmentControls({ compact = false }: { compact?: boolean }) {
  const [activeMode, setActiveMode] = useState<AttachmentMode>("photo");
  const selected = attachmentOptions.find((option) => option.mode === activeMode) ?? attachmentOptions[0];

  return (
    <div className="grid gap-3">
      <div className="grid gap-3 md:grid-cols-3">
        {attachmentOptions.map((option) => {
          const Icon = option.icon;
          const isActive = option.mode === activeMode;

          return (
            <button
              key={option.mode}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveMode(option.mode)}
              className={`inline-flex ${compact ? "min-h-11" : "min-h-24 flex-col"} items-center justify-center gap-2 rounded-md border px-4 text-sm font-black uppercase transition ${
                isActive
                  ? "border-volt-400 bg-volt-400/14 text-volt-300"
                  : "border-white/10 bg-white/6 text-white hover:border-ember-500/50"
              }`}
            >
              <Icon size={compact ? 17 : 24} aria-hidden />
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="rounded-md border border-white/10 bg-black/25 p-4">
        <label className="grid gap-2 text-sm font-bold text-zinc-200">
          {selected.inputLabel}
          <input
            type={activeMode === "external-link" ? "url" : "text"}
            placeholder={activeMode === "external-link" ? "https://odphp.health.gov/moveyourway" : "Example: day-90-progress-photo"}
            className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
          />
        </label>
        <p className="mt-3 text-xs font-bold text-zinc-500">{selected.helper}</p>
      </div>
    </div>
  );
}
