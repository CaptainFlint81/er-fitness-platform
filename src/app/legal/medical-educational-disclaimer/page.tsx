import type { Metadata } from "next";

import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { medicalDisclaimer } from "@/lib/platform-data";
import { disclaimerSummaryCards } from "@/lib/play-release-content";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  title: "Medical and Educational Disclaimer",
  description:
    "Medical and educational disclaimer for E.R. Fitness app and Every Routine Fitness website content. Fitness, nutrition, recovery, and injury content is educational only.",
  path: "/legal/medical-educational-disclaimer",
  keywords: ["medical disclaimer", "educational disclaimer", "fitness app medical disclaimer"]
});

const medicalBoundaries = [
  "The app and website do not provide diagnosis, treatment, medical nutrition therapy, physical therapy, rehabilitation, mental health care, or emergency care.",
  "No page, workout, routine, progress prompt, recovery note, or community post should be treated as a substitute for professional evaluation.",
  "Consult a physician or qualified professional before beginning or changing exercise, nutrition, recovery, or wellness activity, especially with pain, injury, pregnancy, disability, illness, medication, or known conditions.",
  "Stop activity and seek professional care for pain, dizziness, chest pain, shortness of breath, numbness, tingling, faintness, severe fatigue, unusual symptoms, or worsening symptoms."
];

export default function MedicalEducationalDisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Medical and Educational Disclaimer"
        description="E.R. Fitness is an education and tracking companion. It does not provide medical advice, diagnosis, treatment, physical therapy, rehabilitation, or emergency care."
        primaryCta={{ label: "Fitness Disclaimer", href: "/legal/fitness-education-disclaimer" }}
        secondaryCta={{ label: "Support", href: "/support" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader title="Medical Boundary" description="These statements apply to the E.R. Fitness app, Every Routine Fitness website, public education pages, and community content." />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {medicalBoundaries.map((section) => (
              <p key={section} className="rounded-md border border-white/10 bg-white/[0.045] p-5 text-sm leading-6 text-zinc-300">
                {section}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader title="Summary" />
          <div className="mt-6">
            <CardGrid items={disclaimerSummaryCards} columns="four" />
          </div>
          <p className="mt-6 rounded-md border border-ember-500/25 bg-ember-500/8 p-5 text-sm leading-7 text-zinc-300">{medicalDisclaimer}</p>
        </div>
      </section>
    </>
  );
}
