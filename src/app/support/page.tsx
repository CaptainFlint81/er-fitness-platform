import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { playReleaseContact, supportTopics } from "@/lib/play-release-content";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  title: "Support and Contact",
  description:
    "Support and contact page for E.R. Fitness app users, Every Routine Fitness website visitors, privacy questions, data deletion requests, and Google Play listing support.",
  path: "/support",
  keywords: ["E.R. Fitness support", "fitness app contact", "Google Play support"]
});

const supportRules = [
  "Do not send medical emergencies through this support page. Contact emergency services or a qualified healthcare professional for urgent symptoms.",
  "For data deletion, include the account email and username so the request can be matched to the correct account after verification.",
  "For Google Play review or listing questions, include the app name, package ID, device model, app version if known, and a short issue summary.",
  "For safety or moderation reports, include the public profile name, content title, link, screenshot description, and reason for review."
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Support and contact for E.R. Fitness."
        description="Use this page for app support, privacy questions, deletion requests, Google Play listing support, safety concerns, and website support."
        primaryCta={{ label: "Data Deletion", href: "/data-deletion" }}
        secondaryCta={{ label: "Play Support", href: "/google-play-support" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title={playReleaseContact.supportEmail}
              description={`${playReleaseContact.developerName} uses this public support address for app, website, privacy, and Google Play listing support.`}
            />
            <a
              href={`mailto:${playReleaseContact.supportEmail}?subject=E.R.%20Fitness%20Support`}
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-volt-400 px-4 py-2 text-sm font-black uppercase text-graphite-950 transition hover:bg-volt-300"
            >
              <Mail size={18} aria-hidden />
              Email Support
            </a>
          </div>
          <CardGrid items={supportTopics} columns="two" />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Before Sending"
            title="Include enough detail to route the request."
            description="These support rules make the page usable for Play review and for real users after the production domain is published."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {supportRules.map((rule) => (
              <p key={rule} className="rounded-md border border-white/10 bg-white/[0.045] p-5 text-sm leading-6 text-zinc-300">
                {rule}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
