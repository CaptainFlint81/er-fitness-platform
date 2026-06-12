import Link from "next/link";

import { medicalDisclaimer } from "@/lib/platform-data";

export function DisclaimerNotice() {
  return (
    <aside className="rounded-md border border-ember-500/30 bg-ember-500/8 p-5">
      <h2 className="text-sm font-black uppercase text-ember-400">Safety and Disclaimer</h2>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{medicalDisclaimer}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold">
        <Link href="/legal/disclaimer" className="text-volt-400 hover:text-volt-300">Disclaimer</Link>
        <Link href="/legal/privacy" className="text-volt-400 hover:text-volt-300">Privacy</Link>
        <Link href="/legal/terms" className="text-volt-400 hover:text-volt-300">Terms</Link>
      </div>
    </aside>
  );
}
