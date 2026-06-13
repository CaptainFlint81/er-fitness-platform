import { Bell, Calculator, Camera, Smartphone, Trophy } from "lucide-react";

import { ButtonLink } from "@/components/ButtonLink";
import { TagGrid } from "@/components/TagGrid";
import { appExclusiveFeatures, subscriberAccessNotice, websiteAppValueMessage } from "@/lib/access-control";

const valueCards = [
  { label: "Calculates", icon: Calculator },
  { label: "Reminds", icon: Bell },
  { label: "Records", icon: Camera },
  { label: "Rewards", icon: Trophy }
];

type AppValueCTAProps = {
  title?: string;
  description?: string;
  compact?: boolean;
};

export function AppValueCTA({
  title = "The website teaches. The app does the work.",
  description = websiteAppValueMessage,
  compact = false
}: AppValueCTAProps) {
  return (
    <article className="rounded-md border border-volt-400/30 bg-volt-400/[0.075] p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-volt-400/14 text-volt-400">
            <Smartphone size={25} aria-hidden />
          </div>
          <div>
            <p className="text-xs font-black uppercase text-volt-400">E.R. Fitness App Value</p>
            <h2 className="mt-2 text-2xl font-black text-white">{title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-300">{description}</p>
            <p className="mt-3 text-sm font-bold leading-6 text-ember-300">{subscriberAccessNotice}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/why-the-app">Why the App</ButtonLink>
          <ButtonLink href="/dashboard" variant="secondary">App Preview</ButtonLink>
        </div>
      </div>
      {compact ? null : (
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          {valueCards.map(({ label, icon: Icon }, index) => (
            <div key={label} className="rounded-md border border-white/10 bg-black/25 p-4">
              <Icon size={20} className={index % 2 === 0 ? "text-volt-400" : "text-ember-400"} aria-hidden />
              <p className="mt-3 text-sm font-black uppercase text-white">{label}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-5">
        <TagGrid items={appExclusiveFeatures.slice(0, compact ? 6 : 12)} tone="green" />
      </div>
    </article>
  );
}
