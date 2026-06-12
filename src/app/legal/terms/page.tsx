import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

const termsSections = [
  "Users are responsible for the content they post, upload, embed, save, comment on, and share.",
  "Community posts, workout tips, nutrition tips, recovery tips, questions, and transformation stories should follow moderation and safety rules.",
  "Billing and subscriptions are not active. No paid entitlement terms are included in this phase.",
  "Final production terms should be reviewed by qualified counsel before launch."
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Terms structure for education, content, community, media uploads, moderation, and app-to-web sync."
        primaryCta={{ label: "Disclaimer", href: "/legal/disclaimer" }}
        secondaryCta={{ label: "Privacy", href: "/legal/privacy" }}
      />
      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader title="Terms of Service" description="This copy defines current product boundaries and the review items needed before production launch." />
          <div className="mt-6 grid gap-4">
            {termsSections.map((section) => (
              <p key={section} className="rounded-md border border-white/10 bg-white/[0.045] p-5 text-sm leading-6 text-zinc-300">{section}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
