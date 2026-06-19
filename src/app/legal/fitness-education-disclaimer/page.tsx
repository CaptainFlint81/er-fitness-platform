import type { Metadata } from "next";

import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { medicalDisclaimer } from "@/lib/platform-data";
import { disclaimerSummaryCards } from "@/lib/play-release-content";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  title: "Fitness Education Disclaimer",
  description:
    "Fitness education disclaimer for E.R. Fitness workout, routine, exercise, nutrition, recovery, adaptive fitness, injured athlete, yoga, pilates, and tai chi content.",
  path: "/legal/fitness-education-disclaimer",
  keywords: ["fitness education disclaimer", "exercise disclaimer", "E.R. Fitness disclaimer"]
});

const fitnessDisclaimerSections = [
  "E.R. Fitness content is for general fitness education, habit support, and app companion learning.",
  "Exercise examples, routines, nutrition education, recovery suggestions, and injured-athlete content are not individualized professional advice.",
  "Users are responsible for choosing appropriate intensity, range of motion, equipment, progressions, regressions, and rest based on their circumstances.",
  "People who are pregnant, injured, managing a condition, returning from illness, new to training, or unsure about safety should consult a qualified professional before participating."
];

export default function FitnessEducationDisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Fitness Education Disclaimer"
        description="This page states the educational boundary for exercise, routines, nutrition, recovery, adaptive fitness, injured-athlete content, yoga, pilates, tai chi, and community posts."
        primaryCta={{ label: "Medical Disclaimer", href: "/legal/medical-educational-disclaimer" }}
        secondaryCta={{ label: "Privacy", href: "/legal/privacy" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader title="Educational Boundary" description="These statements should stay visible before production release and be reviewed by qualified counsel or reviewers as needed." />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {fitnessDisclaimerSections.map((section) => (
              <p key={section} className="rounded-md border border-white/10 bg-white/[0.045] p-5 text-sm leading-6 text-zinc-300">
                {section}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader title="Core Safety Rules" />
          <div className="mt-6">
            <CardGrid items={disclaimerSummaryCards} columns="four" />
          </div>
          <p className="mt-6 rounded-md border border-ember-500/25 bg-ember-500/8 p-5 text-sm leading-7 text-zinc-300">{medicalDisclaimer}</p>
        </div>
      </section>
    </>
  );
}
