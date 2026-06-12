import { stripLocaleFromPathname } from "@/lib/i18n/config";

export const DISCLAIMER_VERSION = "2026-06-10";

export const PROTECTED_DISCLAIMER_PATHS = [
  "/workouts",
  "/nutrition",
  "/recovery",
  "/adaptive-fitness",
  "/injured-athlete",
  "/yoga",
  "/pilates",
  "/tai-chi",
  "/community",
  "/media",
  "/training-nutrition-principles"
];

export type DisclaimerAcknowledgmentRecord = {
  userId: string | null;
  disclaimerVersion: string;
  acceptedAt: string;
  userAgentHash: string;
  ipHash: string;
  sourcePage: string;
};

export function isDisclaimerProtectedPath(pathname: string) {
  const normalizedPathname = stripLocaleFromPathname(pathname);

  return PROTECTED_DISCLAIMER_PATHS.some((path) => normalizedPathname === path || normalizedPathname.startsWith(`${path}/`));
}

export function createDisclaimerAcknowledgmentRecord(sourcePage: string, acceptedAt: string): DisclaimerAcknowledgmentRecord {
  return {
    userId: null,
    disclaimerVersion: DISCLAIMER_VERSION,
    acceptedAt,
    userAgentHash: "pending-supabase-edge-hash",
    ipHash: "pending-supabase-edge-hash",
    sourcePage
  };
}
