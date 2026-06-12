import { Database, Lock, RadioTower } from "lucide-react";

import { isSupabaseConfigured, plannedSupabaseTables } from "@/lib/supabase";

export function SupabaseReady() {
  return (
    <section className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-volt-400/12 text-volt-400">
          <Database size={22} aria-hidden />
        </div>
        <div>
          <p className="text-sm font-black uppercase text-volt-400">Supabase-ready architecture</p>
          <h2 className="mt-2 text-xl font-black text-white">
            Backend integration is planned, not activated.
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Environment wiring, client creation, and table planning are in place. Current status: {isSupabaseConfigured ? "configured" : "waiting for Supabase environment variables"}.
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {plannedSupabaseTables.slice(0, 16).map((table) => (
          <span key={table} className="rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs font-bold text-zinc-300">
            {table}
          </span>
        ))}
        <span className="rounded-md border border-ember-500/30 bg-ember-500/10 px-2 py-1 text-xs font-bold text-ember-400">
          +{plannedSupabaseTables.length - 16} more
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="flex items-center gap-3 rounded-md border border-white/10 bg-black/25 p-3 text-sm text-zinc-300">
          <Lock size={18} className="text-ember-400" aria-hidden />
          Billing and premium gates are inactive.
        </div>
        <div className="flex items-center gap-3 rounded-md border border-white/10 bg-black/25 p-3 text-sm text-zinc-300">
          <RadioTower size={18} className="text-volt-400" aria-hidden />
          App sync endpoints can attach to these routes later.
        </div>
      </div>
    </section>
  );
}
