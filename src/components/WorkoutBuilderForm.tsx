"use client";

import { PlusCircle } from "lucide-react";

import { VisibilitySelector } from "@/components/content/VisibilitySelector";

const builderBlocks = ["Warmup", "Primary lift", "Accessory block", "Conditioning", "Cooldown"];

export function WorkoutBuilderForm() {
  return (
    <section className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-center gap-3">
        <PlusCircle size={24} className="text-ember-400" aria-hidden />
        <h2 className="text-xl font-black text-white">Routine Builder Preview</h2>
      </div>
      <p className="mt-3 rounded-md border border-ember-500/25 bg-ember-500/8 px-3 py-2 text-xs font-black uppercase text-ember-400">
        Preview only. Saving routines and publishing workout posts require the app/backend.
      </p>
      <form className="mt-5 grid gap-4" onSubmit={(event) => event.preventDefault()}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-zinc-200">
            Routine name
            <input disabled className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-white outline-none placeholder:text-zinc-500 focus:border-volt-400 disabled:cursor-not-allowed disabled:opacity-55" placeholder="Upper Strength A" />
          </label>
          <VisibilitySelector disabled />
        </div>
        {builderBlocks.map((block) => (
          <div key={block} className="rounded-md border border-white/10 bg-black/25 p-4">
            <p className="text-sm font-black uppercase text-volt-400">{block}</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <input disabled className="h-10 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-55" placeholder="Exercise" />
              <input disabled className="h-10 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-55" placeholder="Sets x reps" />
              <input disabled className="h-10 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-55" placeholder="Notes" />
            </div>
          </div>
        ))}
        <div className="grid gap-3">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              className="min-h-11 cursor-not-allowed rounded-md border border-white/10 bg-white/6 px-4 text-sm font-black uppercase text-zinc-400"
            >
              Routine saving coming soon
            </button>
            <button
              type="button"
              disabled
              className="min-h-11 cursor-not-allowed rounded-md border border-white/10 bg-white/6 px-4 text-sm font-black uppercase text-zinc-400"
            >
              Publishing disabled
            </button>
          </div>
          <p className="rounded-md border border-ember-500/25 bg-ember-500/8 px-3 py-2 text-sm font-bold text-ember-400" aria-live="polite">
            Preview only. No routine, workout post, or media record is saved from this website.
          </p>
        </div>
      </form>
    </section>
  );
}
