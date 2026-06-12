"use client";

import { Send } from "lucide-react";
import { useState } from "react";

type ComposerStatusActionsProps = {
  draftLabel?: string;
  publishLabel?: string;
  draftMessage?: string;
  publishMessage?: string;
};

export function ComposerStatusActions({
  draftLabel = "Preview Entry",
  publishLabel = "Show Review Path",
  draftMessage = "Entry preview state updated on this page.",
  publishMessage = "Review path: owner approval, professional review when required, source/license check, then publish approval."
}: ComposerStatusActionsProps) {
  const [message, setMessage] = useState(draftMessage);

  return (
    <div className="grid gap-3 border-t border-white/10 pt-4">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setMessage(draftMessage)}
          className="min-h-11 rounded-md border border-white/10 bg-white/6 px-4 text-sm font-black uppercase text-white hover:border-volt-400/45"
        >
          {draftLabel}
        </button>
        <button
          type="button"
          onClick={() => setMessage(publishMessage)}
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-ember-500 px-4 text-sm font-black uppercase text-graphite-950 hover:bg-ember-400"
        >
          <Send size={17} aria-hidden />
          {publishLabel}
        </button>
      </div>
      <p className="rounded-md border border-volt-400/25 bg-volt-400/8 px-3 py-2 text-sm font-bold text-volt-300" aria-live="polite">
        {message}
      </p>
    </div>
  );
}
