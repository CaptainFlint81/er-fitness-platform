import { MindBodySupportDetail } from "@/components/AppSupportPages";
import { findMindBodyPage } from "@/lib/app-support-content";
import { buildRouteMetadata } from "@/lib/seo";

const stretchingPage = findMindBodyPage("stretching")!;

export const metadata = buildRouteMetadata({
  title: "Stretching",
  description: stretchingPage.overview,
  path: "/stretching",
  keywords: ["stretching", "beginner stretching", "cooldown", "mobility", "E.R. Fitness app"]
});

export default function StretchingPage() {
  return <MindBodySupportDetail page={stretchingPage} />;
}
