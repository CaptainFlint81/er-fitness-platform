"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useSyncExternalStore } from "react";

import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  LOCALE_STORAGE_KEY,
  getLocaleFromPathname,
  localeMetadata,
  normalizeLocale,
  stripLocaleFromPathname,
  withLocalePrefix,
  type Locale
} from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

const LOCALE_CHANGE_EVENT = "er-fitness:locale-change";

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") {
    return null;
  }

  return normalizeLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
}

function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  for (const language of window.navigator.languages ?? [window.navigator.language]) {
    const locale = normalizeLocale(language);

    if (locale) {
      return locale;
    }
  }

  return DEFAULT_LOCALE;
}

export function persistLocale(locale: Locale) {
  if (typeof window === "undefined") {
    return;
  }

  const previousLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);

  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=31536000; samesite=lax`;
  document.documentElement.lang = locale;
  document.documentElement.dir = localeMetadata[locale].dir;

  if (previousLocale !== locale) {
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
  }
}

function subscribeToLocaleStore(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LOCALE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
  };
}

function getLocaleSnapshot() {
  return readStoredLocale() ?? detectBrowserLocale();
}

export function useLocaleRouting() {
  const pathname = usePathname() ?? "/";
  const pathnameLocale = getLocaleFromPathname(pathname);
  const preferredLocale = useSyncExternalStore(subscribeToLocaleStore, getLocaleSnapshot, () => DEFAULT_LOCALE);
  const locale = pathnameLocale ?? preferredLocale;

  useEffect(() => {
    persistLocale(locale);
  }, [locale]);

  const messages = useMemo(() => getMessages(locale), [locale]);

  return {
    locale,
    messages,
    localizePath: (href: string) => {
      if (href.startsWith("http") || href.startsWith("#")) {
        return href;
      }

      return withLocalePrefix(href, locale);
    },
    switchLocalePath: (nextLocale: Locale) => withLocalePrefix(stripLocaleFromPathname(pathname), nextLocale)
  };
}

export function LocalePreferenceSync() {
  useLocaleRouting();
  return null;
}
