"use client";

import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";

import { localeMetadata, locales, type Locale } from "@/lib/i18n/config";
import { persistLocale, useLocaleRouting } from "@/lib/i18n/client";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const { locale, messages, switchLocalePath } = useLocaleRouting();

  function changeLanguage(nextLocale: Locale) {
    persistLocale(nextLocale);
    const suffix = typeof window === "undefined" ? "" : `${window.location.search}${window.location.hash}`;
    router.push(`${switchLocalePath(nextLocale)}${suffix}`);
  }

  return (
    <label className={`inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/6 text-sm font-bold text-zinc-200 ${compact ? "px-2 py-2" : "px-3 py-2"}`}>
      <Languages size={16} className="text-volt-400" aria-hidden />
      <span className={compact ? "sr-only" : "hidden sm:inline"}>{messages.actions.language}</span>
      <select
        aria-label={messages.actions.language}
        className="max-w-36 bg-transparent text-sm font-bold text-white outline-none"
        onChange={(event) => changeLanguage(event.target.value as Locale)}
        value={locale}
      >
        {locales.map((item) => (
          <option key={item} value={item} className="bg-graphite-950 text-white">
            {localeMetadata[item].nativeLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
