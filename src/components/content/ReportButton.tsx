"use client";

import { Flag } from "lucide-react";

export function ReportButton({ target = "content" }: { target?: "content" | "user" | "comment" | "media" | "group" | "post" | "blog" | "message" }) {
  return (
    <div className="grid gap-2">
      <button
        type="button"
        disabled
        className="inline-flex min-h-9 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 text-xs font-black uppercase text-zinc-400"
        aria-label={`Report ${target} preview only`}
      >
        <Flag size={14} aria-hidden />
        Report preview
      </button>
      <p className="text-xs font-bold text-zinc-500" aria-live="polite">
        {target} reporting is preview-only until moderation backend is enabled.
      </p>
    </div>
  );
}
