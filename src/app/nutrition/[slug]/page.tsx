import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NutritionTopicDetail } from "@/components/AppSupportPages";
import { findNutritionTopic, nutritionTopicPages } from "@/lib/app-support-content";
import { buildRouteMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return nutritionTopicPages.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = findNutritionTopic(slug);

  if (!topic) {
    return {
      title: "Nutrition Topic",
      description: "E.R. Fitness nutrition topic."
    };
  }

  return buildRouteMetadata({
    title: topic.title,
    description: topic.beginnerExplanation,
    path: `/nutrition/${topic.slug}`,
    keywords: ["nutrition education", topic.title, "recipes", "meal planning", "E.R. Fitness app"]
  });
}

export default async function NutritionTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = findNutritionTopic(slug);

  if (!topic) {
    notFound();
  }

  return <NutritionTopicDetail topic={topic} />;
}
