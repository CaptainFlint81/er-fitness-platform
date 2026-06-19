import { MindBodySupportDetail } from "@/components/AppSupportPages";
import { findMindBodyPage } from "@/lib/app-support-content";
import { buildRouteMetadata } from "@/lib/seo";

const mobilityPage = findMindBodyPage("mobility")!;

export const metadata = buildRouteMetadata({
  title: "Mobility",
  description: mobilityPage.overview,
  path: "/mobility",
  keywords: ["mobility", "beginner mobility", "warmup", "recovery", "E.R. Fitness app"]
});

export default function MobilityPage() {
  return <MindBodySupportDetail page={mobilityPage} />;
}
