export type PlatformStatus = "live-ready-ui" | "supabase-ready" | "billing-disabled";
export type AccessLevel = "public" | "preview" | "subscriber";

export type FeatureCard = {
  title: string;
  description: string;
  href?: string;
  meta?: string;
  status?: PlatformStatus;
  accessLevel?: AccessLevel;
};

export type MediaItem = {
  title: string;
  type: "photo" | "video" | "article" | "program" | "journal";
  category: string;
  tags: string[];
};

export type RouteLink = {
  label: string;
  href: string;
};
