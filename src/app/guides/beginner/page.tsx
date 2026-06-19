import { BeginnerGuideIndexPage } from "@/components/AppSupportPages";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Beginner Fitness Guide",
  description: "Plain-English E.R. Fitness guide for guided workouts, weekly progression, logs, reps, sets, time, body progress, and form terms.",
  path: "/guides/beginner",
  keywords: ["beginner fitness guide", "workout progress", "reps sets time", "fitness terms"]
});

export default function BeginnerGuidePage() {
  return <BeginnerGuideIndexPage />;
}
