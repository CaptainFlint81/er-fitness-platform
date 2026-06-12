import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

export const siteMetadataBase = new URL(configuredSiteUrl);

const defaultKeywords = [
  "E.R. Fitness",
  "Every Routine Fitness",
  "exercise library",
  "workout library",
  "fitness education",
  "adaptive fitness",
  "youth fitness",
  "women's fitness",
  "recovery fitness",
  "injury recovery",
  "strength training",
  "bodyweight training",
  "nutrition education",
  "exercise science"
];

const defaultOpenGraphImage = {
  url: "/brand/fitness-ecosystem-hero.png",
  width: 1200,
  height: 630,
  alt: "E.R. Fitness and Every Routine Fitness education platform"
};

type RouteMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildRouteMetadata({ title, description, path, keywords = [] }: RouteMetadataInput): Metadata {
  const fullTitle = `${title} | E.R. Fitness`;
  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: "Every Routine Fitness",
      type: "website",
      images: [defaultOpenGraphImage]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [defaultOpenGraphImage.url]
    }
  };
}
