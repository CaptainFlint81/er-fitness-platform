import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

const privacySections = [
  "Profiles, posts, comments, media, follows, saved content, reports, and search activity are planned data categories for backend integration.",
  "Supabase environment variables are not configured by default, and this scaffold does not store user data until backend services are wired.",
  "Uploaded photos and videos should use storage policies, visibility controls, moderation review, and user deletion workflows."
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Privacy structure for educational pages, community content, user accounts, uploaded media, and app-to-website tracking handoffs."
        primaryCta={{ label: "Disclaimer", href: "/legal/disclaimer" }}
        secondaryCta={{ label: "Terms", href: "/legal/terms" }}
      />
      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader title="Privacy Policy" description="This copy explains current data boundaries and the review items needed before production data collection." />
          <div className="mt-6 grid gap-4">
            {privacySections.map((section) => (
              <p key={section} className="rounded-md border border-white/10 bg-white/[0.045] p-5 text-sm leading-6 text-zinc-300">{section}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
