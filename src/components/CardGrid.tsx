import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";

import type { FeatureCard } from "@/types/platform";

type CardGridProps = {
  items: FeatureCard[];
  columns?: "two" | "three" | "four";
};

const statusLabels: Record<NonNullable<FeatureCard["status"]>, string> = {
  "live-ready-ui": "Live UI",
  "supabase-ready": "Data ready",
  "billing-disabled": "Billing disabled"
};

export function CardGrid({ items, columns = "three" }: CardGridProps) {
  const grid =
    columns === "four"
      ? "sm:grid-cols-2 xl:grid-cols-4"
      : columns === "two"
        ? "md:grid-cols-2"
        : "md:grid-cols-2 xl:grid-cols-3";

  return (
    <div className={`grid gap-4 ${grid}`}>
      {items.map((item) => {
        const content = (
          <>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              {item.href ? <ArrowUpRight className="mt-1 shrink-0 text-volt-400" size={18} aria-hidden /> : null}
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
            {item.meta || item.status ? (
              <p className="mt-5 inline-flex rounded-md border border-white/10 bg-white/6 px-3 py-1 text-xs font-bold uppercase text-zinc-300">
                {item.meta ?? statusLabels[item.status!]}
              </p>
            ) : null}
          </>
        );

        const linkHref = item.href as ComponentProps<typeof Link>["href"];

        return item.href ? (
          <Link key={item.title} href={linkHref} className="rounded-md border border-white/10 bg-white/[0.045] p-5 shadow-glow transition hover:border-volt-400/40">
            {content}
          </Link>
        ) : (
          <article key={item.title} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            {content}
          </article>
        );
      })}
    </div>
  );
}
