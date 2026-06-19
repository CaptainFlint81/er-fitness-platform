import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExerciseSupportDetail } from "@/components/AppSupportPages";
import { exerciseSupportPages, findExercise } from "@/lib/app-support-content";
import { buildRouteMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return exerciseSupportPages.map((exercise) => ({ slug: exercise.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const exercise = findExercise(slug);

  if (!exercise) {
    return {
      title: "Exercise",
      description: "E.R. Fitness exercise guide."
    };
  }

  return buildRouteMetadata({
    title: exercise.name,
    description: exercise.appSummary,
    path: `/exercises/${exercise.slug}`,
    keywords: ["exercise form guide", exercise.name, "beginner exercise", "E.R. Fitness app"]
  });
}

export default async function ExercisePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exercise = findExercise(slug);

  if (!exercise) {
    notFound();
  }

  return <ExerciseSupportDetail exercise={exercise} />;
}
