import { NextResponse, type NextRequest } from "next/server";

import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  detectLocaleFromAcceptLanguage,
  getLocaleFromPathname,
  normalizeLocale,
  stripLocaleFromPathname
} from "@/lib/i18n/config";

const ONE_YEAR = 60 * 60 * 24 * 365;

function getRequestLocale(request: NextRequest) {
  const pathnameLocale = getLocaleFromPathname(request.nextUrl.pathname);
  const cookieLocale = normalizeLocale(request.cookies.get(LOCALE_COOKIE_NAME)?.value);
  const browserLocale = detectLocaleFromAcceptLanguage(request.headers.get("accept-language"));

  return pathnameLocale ?? cookieLocale ?? browserLocale ?? DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const pathnameLocale = getLocaleFromPathname(request.nextUrl.pathname);
  const locale = getRequestLocale(request);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-er-fitness-locale", locale);

  const response = pathnameLocale
    ? NextResponse.rewrite(
        new URL(stripLocaleFromPathname(request.nextUrl.pathname) + request.nextUrl.search, request.url),
        { request: { headers: requestHeaders } }
      )
    : NextResponse.next({ request: { headers: requestHeaders } });

  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    maxAge: ONE_YEAR,
    path: "/",
    sameSite: "lax"
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"]
};
