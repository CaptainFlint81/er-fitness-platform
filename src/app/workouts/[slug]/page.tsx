import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkoutPathDetail } from "@/components/AppSupportPages";
import { findWorkoutPath, workoutPathPages } from "@/lib/app-support-content";
import { buildRouteMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return workoutPathPages.map((workout) => ({ slug: workout.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const workout = findWorkoutPath(slug);

  if (!workout) {
    return {
      title: "Workout Path",
      description: "E.R. Fitness workout path."
    };
  }

  return buildRouteMetadata({
    title: workout.title,
    description: workout.goal,
    path: `/workouts/${workout.slug}`,
    keywords: ["beginner workout", workout.title, "guided workouts", "weekly progression"]
  });
}

export default async function WorkoutPathPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const workout = findWorkoutPath(slug);

  if (!workout) {
    notFound();
  }

  return <WorkoutPathDetail workout={workout} />;
}
