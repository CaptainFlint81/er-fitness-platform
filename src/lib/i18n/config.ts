export const locales = [
  "en",
  "es",
  "fr",
  "de",
  "pt",
  "it",
  "nl",
  "pl",
  "uk",
  "ar",
  "hi",
  "zh",
  "ja",
  "ko",
  "vi",
  "tl",
  "id",
  "th",
  "tr",
  "ru"
] as const;

export type Locale = (typeof locales)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE_NAME = "er_fitness_locale";
export const LOCALE_STORAGE_KEY = "erFitnessLocale";

export const localeMetadata: Record<Locale, { label: string; nativeLabel: string; dir: "ltr" | "rtl" }> = {
  en: { label: "English", nativeLabel: "English", dir: "ltr" },
  es: { label: "Spanish", nativeLabel: "Español", dir: "ltr" },
  fr: { label: "French", nativeLabel: "Français", dir: "ltr" },
  de: { label: "German", nativeLabel: "Deutsch", dir: "ltr" },
  pt: { label: "Portuguese", nativeLabel: "Português", dir: "ltr" },
  it: { label: "Italian", nativeLabel: "Italiano", dir: "ltr" },
  nl: { label: "Dutch", nativeLabel: "Nederlands", dir: "ltr" },
  pl: { label: "Polish", nativeLabel: "Polski", dir: "ltr" },
  uk: { label: "Ukrainian", nativeLabel: "Українська", dir: "ltr" },
  ar: { label: "Arabic", nativeLabel: "العربية", dir: "rtl" },
  hi: { label: "Hindi", nativeLabel: "हिन्दी", dir: "ltr" },
  zh: { label: "Chinese", nativeLabel: "中文", dir: "ltr" },
  ja: { label: "Japanese", nativeLabel: "日本語", dir: "ltr" },
  ko: { label: "Korean", nativeLabel: "한국어", dir: "ltr" },
  vi: { label: "Vietnamese", nativeLabel: "Tiếng Việt", dir: "ltr" },
  tl: { label: "Filipino", nativeLabel: "Filipino", dir: "ltr" },
  id: { label: "Indonesian", nativeLabel: "Bahasa Indonesia", dir: "ltr" },
  th: { label: "Thai", nativeLabel: "ไทย", dir: "ltr" },
  tr: { label: "Turkish", nativeLabel: "Türkçe", dir: "ltr" },
  ru: { label: "Russian", nativeLabel: "Русский", dir: "ltr" }
};

const localeSet = new Set<string>(locales);

export function isLocale(value: string | undefined | null): value is Locale {
  return Boolean(value && localeSet.has(value));
}

export function normalizeLocale(value: string | undefined | null): Locale | null {
  if (!value) {
    return null;
  }

  const normalized = value.toLowerCase().replace("_", "-");
  const exact = normalized.split("-")[0];

  return isLocale(exact) ? exact : null;
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segment = pathname.split("/").filter(Boolean)[0];
  return normalizeLocale(segment);
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (isLocale(segments[0])) {
    const stripped = `/${segments.slice(1).join("/")}`;
    return stripped === "/" ? "/" : stripped.replace(/\/$/, "");
  }

  return pathname || "/";
}

export function withLocalePrefix(pathname: string, locale: Locale) {
  const cleanPath = stripLocaleFromPathname(pathname);
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

export function detectLocaleFromAcceptLanguage(headerValue: string | null): Locale {
  if (!headerValue) {
    return DEFAULT_LOCALE;
  }

  const requested = headerValue
    .split(",")
    .map((part) => {
      const [language, quality] = part.trim().split(";q=");
      return { locale: normalizeLocale(language), quality: quality ? Number(quality) : 1 };
    })
    .filter((entry): entry is { locale: Locale; quality: number } => Boolean(entry.locale))
    .sort((a, b) => b.quality - a.quality);

  return requested[0]?.locale ?? DEFAULT_LOCALE;
}
