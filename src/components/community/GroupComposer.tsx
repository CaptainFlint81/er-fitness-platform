"use client";

import { FileText, Send } from "lucide-react";
import { useState } from "react";

import { AttachmentControls } from "@/components/content/AttachmentControls";
import { VisibilitySelector } from "@/components/content/VisibilitySelector";
import type { CommunityGroup } from "@/types/content";

export function GroupComposer({ group }: { group: CommunityGroup }) {
  const [postType, setPostType] = useState("progress-update");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [previewMessage, setPreviewMessage] = useState("Choose a content type, write a title, attach media if needed, and preview the group workflow.");

  return (
    <section id="composer" className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-center gap-3">
        <Send size={22} className="text-volt-400" aria-hidden />
        <h2 className="text-lg font-black text-white">Create Post in {group.name}</h2>
      </div>
      <form className="mt-5 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-zinc-200">
            Post type
            <select
              className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-white outline-none focus:border-volt-400"
              value={postType}
              onChange={(event) => setPostType(event.target.value)}
            >
              <option value="progress-update">Progress update</option>
              <option value="workout-tip">Workout tip</option>
              <option value="nutrition-tip">Nutrition tip</option>
              <option value="recovery-tip">Recovery tip</option>
              <option value="question">Question</option>
              <option value="blog-journal">Blog or journal post</option>
              <option value="workout-journal">Workout journal</option>
              <option value="nutrition-journal">Nutrition journal</option>
              <option value="transformation-journal">Transformation journal</option>
              <option value="photo-upload">Photo upload</option>
              <option value="video-upload">Video upload</option>
              <option value="transformation-story">Transformation update</option>
              <option value="external-social-link">External social link</option>
            </select>
          </label>
          <VisibilitySelector />
        </div>
        <label className="grid gap-2 text-sm font-bold text-zinc-200">
          Title
          <input
            className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-white outline-none focus:border-volt-400"
            placeholder="Share a training update, question, journal, or tip"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-zinc-200">
          Body
          <textarea
            className="min-h-32 rounded-md border border-white/10 bg-black/40 px-3 py-3 text-white outline-none focus:border-volt-400"
            placeholder="Write the post body, coaching notes, journal entry, question context, or transformation update."
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </label>
        <AttachmentControls compact />
        <div className="grid gap-3">
          <button
            type="button"
            onClick={() => {
              const titleText = title.trim() || "Untitled draft";
              const bodyState = body.trim() ? "body captured" : "body still needed";
              setPreviewMessage(`${group.name} ${postType.replaceAll("-", " ")} preview: "${titleText}" with ${bodyState}, visibility, media, source review, and moderation routing.`);
            }}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-volt-400 px-4 text-sm font-black uppercase text-graphite-950 hover:bg-volt-300"
          >
            <FileText size={17} aria-hidden />
            Preview Post
          </button>
          <p className="rounded-md border border-volt-400/25 bg-volt-400/8 px-3 py-2 text-sm font-bold text-volt-300" aria-live="polite">
            {previewMessage}
          </p>
        </div>
      </form>
    </section>
  );
}
