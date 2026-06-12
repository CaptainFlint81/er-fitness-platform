export type PlatformStatus = "live-ready-ui" | "supabase-ready" | "billing-disabled";

export type FeatureCard = {
  title: string;
  description: string;
  href?: string;
  meta?: string;
  status?: PlatformStatus;
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
