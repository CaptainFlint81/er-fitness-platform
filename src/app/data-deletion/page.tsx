import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { dataDeletionSteps, playReleaseContact } from "@/lib/play-release-content";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  title: "Data Deletion Instructions",
  description:
    "Instructions for requesting deletion of E.R. Fitness app account data, profile data, uploaded media, community content, and support records.",
  path: "/data-deletion",
  keywords: ["E.R. Fitness data deletion", "delete fitness app account", "Google Play data deletion"]
});

const deletionScope = [
  "Account profile details such as username, display name, bio, goals, and public profile settings.",
  "Uploaded media such as progress photos, workout videos, profile images, and transformation media.",
  "Community content such as posts, comments, reports, saved content, follows, and moderation records when eligible.",
  "Support records connected to privacy, deletion, safety, and account requests when retention is not legally or operationally required."
];

export default function DataDeletionPage() {
  return (
    <>
      <PageHero
        eyebrow="Data Deletion"
        title="Request deletion of E.R. Fitness account data."
        description="This page gives users and Google Play reviewers a public deletion request path for app account data, profile data, uploaded media, community content, and support records."
        primaryCta={{ label: "Privacy Policy", href: "/legal/privacy" }}
        secondaryCta={{ label: "Support", href: "/support" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Deletion Request Steps"
            title="Email support from the account address and include the data scope."
            description={`Send requests to ${playReleaseContact.supportEmail}. If app accounts are not yet active, support can still record the request and confirm whether any production account data exists.`}
          />
          <div className="mt-6">
            <CardGrid items={dataDeletionSteps} columns="four" />
          </div>
          <a
            href={`mailto:${playReleaseContact.supportEmail}?subject=Data%20Deletion%20Request`}
            className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ember-500 px-4 py-2 text-sm font-black uppercase text-graphite-950 transition hover:bg-ember-400"
          >
            <Mail size={18} aria-hidden />
            Email Deletion Request
          </a>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Eligible Data"
            title="Deletion applies to eligible personal and account-linked data."
            description="Some security, legal, fraud-prevention, transaction, moderation, or abuse-prevention records may be retained only when required or permitted."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {deletionScope.map((item) => (
              <p key={item} className="rounded-md border border-white/10 bg-white/[0.045] p-5 text-sm leading-6 text-zinc-300">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
