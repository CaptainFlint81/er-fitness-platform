import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BeginnerGuideDetail } from "@/components/AppSupportPages";
import { beginnerGuidePages, findBeginnerGuide } from "@/lib/app-support-content";
import { buildRouteMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return beginnerGuidePages.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = findBeginnerGuide(slug);

  if (!guide) {
    return {
      title: "Beginner Guide",
      description: "E.R. Fitness beginner guide."
    };
  }

  return buildRouteMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/beginner/${guide.slug}`,
    keywords: ["beginner guide", guide.title, "E.R. Fitness app"]
  });
}

export default async function BeginnerGuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = findBeginnerGuide(slug);

  if (!guide) {
    notFound();
  }

  return <BeginnerGuideDetail guide={guide} />;
}
