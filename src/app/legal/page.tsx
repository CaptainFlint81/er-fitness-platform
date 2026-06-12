import { PageHero } from "@/components/PageHero";
import { CardGrid } from "@/components/CardGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { launchReadinessGaps, legalVerificationChecklist } from "@/lib/publish-ready-content";

const legalCards = [
  { title: "Disclaimer", description: "Medical, fitness, nutrition, recovery, injured athlete, and community-content disclaimer.", href: "/legal/disclaimer" },
  { title: "Privacy Policy", description: "Privacy foundation for profiles, media uploads, search, follows, saved content, and Supabase integration.", href: "/legal/privacy" },
  { title: "Terms of Service", description: "Terms foundation for content, comments, uploads, moderation, account rules, and community safety.", href: "/legal/terms" }
];

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Legal center for the E.R. Fitness platform."
        description="Footer and section links route users to disclaimer, privacy, and terms foundations for review."
        primaryCta={{ label: "Disclaimer", href: "/legal/disclaimer" }}
        secondaryCta={{ label: "Privacy", href: "/legal/privacy" }}
      />
      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <CardGrid items={legalCards} columns="three" />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Legal Verification"
            title="Disclaimer, privacy, terms, footer links, and medical disclaimer callouts are routed."
            description="This checklist keeps safety-sensitive education tied to clear legal pages and visible medical-disclaimer links."
          />
          <div className="mt-6">
            <CardGrid items={legalVerificationChecklist} columns="three" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Launch Review"
            title="Items that require manual owner, legal, professional, or backend review."
            description="These are explicit launch checks before collecting real data or treating reviewed content as production guidance."
          />
          <div className="mt-6">
            <CardGrid items={launchReadinessGaps} columns="four" />
          </div>
        </div>
      </section>
    </>
  );
}
