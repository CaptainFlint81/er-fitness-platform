import Image from "next/image";
import type { ReactNode } from "react";

import { brand } from "@/lib/platform-data";
import { ButtonLink } from "@/components/ButtonLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-graphite-950">
      <Image src={brand.heroImage} alt="" fill priority className="object-cover opacity-42" sizes="100vw" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(140,255,0,0.18),transparent_34%),linear-gradient(90deg,#070809_0%,rgba(7,8,9,0.92)_36%,rgba(7,8,9,0.55)_100%)]" />
      <div className="relative mx-auto grid min-h-[460px] w-full min-w-0 max-w-7xl content-end gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8 lg:py-16">
        <div className="w-full min-w-0 max-w-xs sm:max-w-3xl">
          <p className="text-sm font-black uppercase text-volt-400">{eyebrow}</p>
          <h1 className="mt-4 max-w-full break-words text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-full text-base leading-7 text-zinc-300 sm:max-w-2xl sm:text-lg">{description}</p>
          {(primaryCta || secondaryCta) ? (
            <div className="mt-7 grid max-w-full gap-3 sm:flex sm:flex-wrap">
              {primaryCta ? <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink> : null}
              {secondaryCta ? <ButtonLink href={secondaryCta.href} variant="secondary">{secondaryCta.label}</ButtonLink> : null}
            </div>
          ) : null}
        </div>
        {children ? <div className="min-w-0 overflow-hidden lg:self-end">{children}</div> : null}
      </div>
    </section>
  );
}
