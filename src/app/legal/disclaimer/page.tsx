import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { medicalDisclaimer } from "@/lib/platform-data";

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        description="Safety, education, and medical disclaimer for training, nutrition, recovery, injured athlete, yoga, pilates, tai chi, and community content."
        primaryCta={{ label: "Privacy", href: "/legal/privacy" }}
        secondaryCta={{ label: "Terms", href: "/legal/terms" }}
      />
      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader title="Medical Disclaimer" />
          <p className="mt-5 max-w-4xl rounded-md border border-ember-500/25 bg-ember-500/8 p-5 text-sm leading-7 text-zinc-300">{medicalDisclaimer}</p>
        </div>
      </section>
    </>
  );
}
