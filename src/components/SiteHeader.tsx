"use client";

import { ArrowLeft, Menu, Search, User, X } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";
import { useState } from "react";

import { appMirrorNav, primaryNav } from "@/lib/platform-data";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ButtonLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocaleRouting } from "@/lib/i18n/client";
import { getNavLabel } from "@/lib/i18n/messages";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { locale, localizePath, messages } = useLocaleRouting();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-graphite-950/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex shrink-0 items-center gap-2">
          <Logo compact prominent />
          <Link
            href={localizePath("/") as ComponentProps<typeof Link>["href"]}
            className="inline-flex min-h-9 items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 text-xs font-black uppercase text-zinc-200 transition hover:border-volt-400/50 hover:text-volt-300 sm:px-3 sm:text-sm"
            aria-label={messages.actions.home}
            title={messages.actions.home}
          >
            <ArrowLeft size={15} aria-hidden />
            {messages.actions.home}
          </Link>
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {primaryNav.map((item) => (
            <Link key={item.href} href={localizePath(item.href) as ComponentProps<typeof Link>["href"]} className="rounded-md px-3 py-2 text-sm font-bold text-zinc-200 hover:bg-white/8 hover:text-white">
              {getNavLabel(item.label, locale)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher compact />
          <ButtonLink href={localizePath("/search")} variant="ghost" icon={<Search size={17} aria-hidden />}>
            {messages.actions.search}
          </ButtonLink>
          <ButtonLink href={localizePath("/profile/er-athlete")} variant="secondary" icon={<User size={17} aria-hidden />}>
            {messages.actions.profile}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/12 bg-white/6 text-white lg:hidden"
          aria-label={open ? messages.actions.closeNavigation : messages.actions.openNavigation}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-graphite-950 px-4 pb-5 pt-2 lg:hidden">
          <div className="mb-3">
            <LanguageSwitcher />
          </div>
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {[...primaryNav, ...appMirrorNav].map((item) => (
              <Link
                key={item.href}
                href={localizePath(item.href) as ComponentProps<typeof Link>["href"]}
                onClick={() => setOpen(false)}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-3 text-sm font-bold text-zinc-100"
              >
                {getNavLabel(item.label, locale)}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

