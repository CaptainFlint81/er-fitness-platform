import { GlossarySupportPage } from "@/components/AppSupportPages";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Fitness Terms Glossary",
  description: "Plain-English E.R. Fitness glossary for hinge, brace, core, neutral spine, glutes, tempo, range of motion, mobility, stability, and app form cues.",
  path: "/glossary",
  keywords: ["fitness glossary", "beginner fitness terms", "exercise terms", "form cues"]
});

export default function GlossaryPage() {
  return <GlossarySupportPage />;
}
