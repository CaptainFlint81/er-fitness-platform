"use client";

import { PlusCircle } from "lucide-react";
import { useState } from "react";

import { VisibilitySelector } from "@/components/content/VisibilitySelector";

const builderBlocks = ["Warmup", "Primary lift", "Accessory block", "Conditioning", "Cooldown"];

export function WorkoutBuilderForm() {
  const [status, setStatus] = useState("Routine builder is ready.");

  return (
    <section className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-center gap-3">
        <PlusCircle size={24} className="text-ember-400" aria-hidden />
        <h2 className="text-xl font-black text-white">Routine Builder</h2>
      </div>
      <form className="mt-5 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-zinc-200">
            Routine name
            <input className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-white outline-none placeholder:text-zinc-500 focus:border-volt-400" placeholder="Upper Strength A" />
          </label>
          <VisibilitySelector />
        </div>
        {builderBlocks.map((block) => (
          <div key={block} className="rounded-md border border-white/10 bg-black/25 p-4">
            <p className="text-sm font-black uppercase text-volt-400">{block}</p>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <input className="h-10 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none placeholder:text-zinc-500" placeholder="Exercise" />
              <input className="h-10 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none placeholder:text-zinc-500" placeholder="Sets x reps" />
              <input className="h-10 rounded-md border border-white/10 bg-black/40 px-3 text-sm text-white outline-none placeholder:text-zinc-500" placeholder="Notes" />
            </div>
          </div>
        ))}
        <div className="grid gap-3">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setStatus("Routine preview updated with warmup, main work, accessories, conditioning, cooldown, and visibility fields.")}
              className="min-h-11 rounded-md bg-ember-500 px-4 text-sm font-black uppercase text-graphite-950 hover:bg-ember-400"
            >
              Preview Routine
            </button>
            <button
              type="button"
              onClick={() => setStatus("Workout post review path: owner review, media/source check, moderation review, then publish approval.")}
              className="min-h-11 rounded-md border border-white/10 bg-white/6 px-4 text-sm font-black uppercase text-white hover:border-volt-400/45"
            >
              Show Post Review Path
            </button>
          </div>
          <p className="rounded-md border border-ember-500/25 bg-ember-500/8 px-3 py-2 text-sm font-bold text-ember-400" aria-live="polite">
            {status}
          </p>
        </div>
      </form>
    </section>
  );
}
