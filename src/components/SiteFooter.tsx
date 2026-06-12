"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

import { footerGroups, medicalDisclaimer } from "@/lib/platform-data";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Logo } from "@/components/Logo";
import { useLocaleRouting } from "@/lib/i18n/client";
import { getNavLabel } from "@/lib/i18n/messages";

export function SiteFooter() {
  const { locale, localizePath, messages } = useLocaleRouting();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_2fr] lg:px-8">
        <div className="space-y-5">
          <Logo compact />
          <p className="max-w-md text-sm leading-6 text-zinc-400">
            {messages.footer.description}
          </p>
          <LanguageSwitcher />
          <p className="max-w-xl rounded-md border border-ember-500/25 bg-ember-500/8 p-4 text-xs leading-5 text-zinc-300">
            {medicalDisclaimer}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-black uppercase text-white">{messages.footer.groups[group.title] ?? group.title}</h2>
              <div className="mt-4 grid gap-3">
                {group.links.map((link) => (
                  <Link key={link.href} href={localizePath(link.href) as ComponentProps<typeof Link>["href"]} className="text-sm text-zinc-400 hover:text-volt-400">
                    {getNavLabel(link.label, locale)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-zinc-500">
        {messages.footer.bottom}
      </div>
    </footer>
  );
}
