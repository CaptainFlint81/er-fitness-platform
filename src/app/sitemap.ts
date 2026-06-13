import type { MetadataRoute } from "next";

import { communityGroups } from "@/lib/community-groups";
import { educationTopics } from "@/lib/education-data";
import { siteMetadataBase } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/admin",
  "/adaptive-fitness",
  "/community",
  "/content",
  "/dashboard",
  "/education",
  "/exercises",
  "/injured-athlete",
  "/legal",
  "/legal/disclaimer",
  "/legal/privacy",
  "/legal/terms",
  "/media",
  "/nutrition",
  "/pilates",
  "/profile",
  "/recovery",
  "/search",
  "/tai-chi",
  "/training-nutrition-principles",
  "/why-the-app",
  "/workouts",
  "/yoga"
];

function sitemapEntry(route: string, lastModified: Date): MetadataRoute.Sitemap[number] {
  const isHome = route === "/";
  const isEducation = route.startsWith("/education/");
  const isCommunityGroup = route.startsWith("/community/groups/");

  return {
    url: new URL(route, siteMetadataBase).toString(),
    lastModified,
    changeFrequency: isHome ? "weekly" : "monthly",
    priority: isHome ? 1 : isEducation || isCommunityGroup ? 0.7 : 0.8
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const dynamicRoutes = [
    ...educationTopics.map((topic) => `/education/${topic.slug}`),
    ...communityGroups.map((group) => `/community/groups/${group.slug}`)
  ];
  const routes = Array.from(new Set([...staticRoutes, ...dynamicRoutes]));

  return routes.map((route) => sitemapEntry(route, lastModified));
}
