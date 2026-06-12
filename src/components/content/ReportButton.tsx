"use client";

import { Flag } from "lucide-react";
import { useState } from "react";

export function ReportButton({ target = "content" }: { target?: "content" | "user" | "comment" | "media" | "group" | "post" | "blog" | "message" }) {
  const [reported, setReported] = useState(false);

  return (
    <div className="grid gap-2">
      <button
        type="button"
        onClick={() => setReported(true)}
        className={`inline-flex min-h-9 items-center justify-center gap-2 rounded-md border px-3 text-xs font-black uppercase ${
          reported
            ? "border-ember-500/50 bg-ember-500/10 text-ember-400"
            : "border-white/10 bg-white/5 text-zinc-300 hover:border-ember-500/50 hover:text-ember-400"
        }`}
        aria-label={`Report ${target}`}
      >
        <Flag size={14} aria-hidden />
        {reported ? "Reported" : "Report"}
      </button>
      {reported ? (
        <p className="text-xs font-bold text-ember-400" aria-live="polite">
          {target} queued for admin review.
        </p>
      ) : null}
    </div>
  );
}
