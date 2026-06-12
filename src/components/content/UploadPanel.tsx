"use client";

import { Upload } from "lucide-react";

import { contentKindLabels } from "@/lib/content-data";
import type { ContentKind, PublishStatus } from "@/types/content";
import { AttachmentControls } from "@/components/content/AttachmentControls";
import { ComposerStatusActions } from "@/components/content/ComposerStatusActions";
import { VisibilitySelector } from "@/components/content/VisibilitySelector";

const uploadKinds: ContentKind[] = [
  "progress-update",
  "transformation-story",
  "workout-tip",
  "nutrition-tip",
  "recovery-tip",
  "question",
  "instructional-article",
  "uploaded-workout-video",
  "uploaded-progress-photo",
  "external-social-link"
];

const publishStatuses: PublishStatus[] = ["draft", "scheduled", "published"];

export function UploadPanel({ title = "Create Content" }: { title?: string }) {
  return (
    <section className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ember-500/14 text-ember-400">
          <Upload size={22} aria-hidden />
        </div>
        <div>
          <h2 className="text-xl font-black text-white">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Compose content, attach media, embed workouts or nutrition plans, select visibility, and preview the moderation workflow.
          </p>
        </div>
      </div>

      <form className="mt-5 grid gap-4">
        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2 text-sm font-bold text-zinc-200">
            Content type
            <select className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none focus:border-volt-400">
              {uploadKinds.map((kind) => (
                <option key={kind} value={kind}>
                  {contentKindLabels[kind]}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-bold text-zinc-200">
            Workflow
            <select className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none focus:border-volt-400">
              {publishStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <VisibilitySelector />
        </div>

        <label className="grid gap-2 text-sm font-bold text-zinc-200">
          Title
          <input
            type="text"
            placeholder="Example: Day 90 transformation update"
            className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold text-zinc-200">
          Body
          <textarea
            rows={5}
            placeholder="Write the post, blog entry, workout journal, nutrition journal, injury recovery note, or creator tip..."
            className="rounded-md border border-white/10 bg-black/40 p-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
          />
        </label>

        <AttachmentControls />

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-zinc-200">
            Categories
            <input
              type="text"
              placeholder="Workouts, Nutrition, Recovery"
              className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-zinc-200">
            Tags
            <input
              type="text"
              placeholder="chest, lean-bulk, day-90, knee"
              className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
            />
          </label>
        </div>

        <ComposerStatusActions publishLabel="Show Review Path" />
      </form>
    </section>
  );
}
