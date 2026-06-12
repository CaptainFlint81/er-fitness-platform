import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ href, children, icon, variant = "primary" }: ButtonLinkProps) {
  const linkHref = href as ComponentProps<typeof Link>["href"];

  return (
    <Link
      href={linkHref}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-black uppercase tracking-normal transition",
        variant === "primary" && "bg-ember-500 text-graphite-950 hover:bg-ember-400",
        variant === "secondary" && "bg-volt-400 text-graphite-950 hover:bg-volt-300",
        variant === "ghost" && "border border-white/14 bg-white/6 text-white hover:border-volt-400/50"
      )}
    >
      {icon}
      {children}
    </Link>
  );
}
