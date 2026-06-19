import type { Metadata } from "next";
import { CheckCircle2, Mail, ShieldCheck } from "lucide-react";

import { AppScreens } from "@/components/AppScreens";
import { ButtonLink } from "@/components/ButtonLink";
import { CardGrid } from "@/components/CardGrid";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { appMirrorFeatures, appToWebsiteLinks } from "@/lib/platform-data";
import { appStoreSupportCards, playReleaseContact, playSupportLinks } from "@/lib/play-release-content";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata: Metadata = buildRouteMetadata({
  title: "E.R. Fitness App",
  description:
    "E.R. Fitness is the Every Routine Fitness mobile app for tracking workouts, routines, nutrition, recovery, habits, XP, pets, challenges, and progress.",
  path: "/app",
  keywords: ["E.R. Fitness app", "Every Routine Fitness app", "workout tracker", "Google Play fitness app"]
});

const appHighlights = [
  "Workout tracking",
  "Routine planning",
  "Exercise education",
  "Nutrition habits",
  "Recovery check-ins",
  "Progress photos",
  "XP and streaks",
  "Pets and challenges",
  "Leaderboards",
  "Profile milestones"
];

export default function AppLandingPage() {
  return (
    <>
      <PageHero
        eyebrow="E.R. Fitness App"
        title="Track every routine from the mobile app."
        description="The website is the public education companion. The E.R. Fitness app is the mobile layer for workouts, routines, recovery, nutrition habits, progress, XP, pets, challenges, and profile milestones."
        primaryCta={{ label: "App Overview", href: "/app-overview" }}
        secondaryCta={{ label: "Play Support", href: "/google-play-support" }}
      >
        <AppScreens />
      </PageHero>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeader
              eyebrow="Mobile Product"
              title={`${playReleaseContact.appName} connects tracking to education.`}
              description="Use the app for the daily training loop and use this website for public education, safety, policy, and support pages required around the release."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/support" variant="secondary" icon={<Mail size={18} aria-hidden />}>
                Contact Support
              </ButtonLink>
              <ButtonLink href="/legal/medical-educational-disclaimer" variant="ghost" icon={<ShieldCheck size={18} aria-hidden />}>
                Safety Disclaimer
              </ButtonLink>
            </div>
          </div>
          <div>
            <TagGrid items={appHighlights} tone="green" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="App Identity"
            title="Public release support details are collected in one place."
            description={`Package ID: ${playReleaseContact.packageId}. Developer: ${playReleaseContact.developerName}. Public support email: ${playReleaseContact.supportEmail}.`}
          />
          <div className="mt-6">
            <CardGrid items={appStoreSupportCards} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Website Mirror"
            title="Every major mobile feature has a website support or education page."
            description="The web platform gives reviewers and users public, crawlable pages for app scope, policies, safety boundaries, and education previews."
          />
          <div className="mt-6">
            <CardGrid items={appMirrorFeatures} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="App-to-Web"
            title="Mobile actions can open matching education and support pages."
            description="These links show how the app can connect logged actions to public lessons, safety pages, support, and policy information."
          />
          <div className="mt-6">
            <CardGrid items={[...appToWebsiteLinks, ...playSupportLinks]} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Release Readiness"
            title="Play listing pages are ready for production URLs."
            description="Use the final deployed domain for the privacy policy, support page, data deletion page, app landing page, and Google Play support index."
          />
          <div className="rounded-md border border-volt-400/25 bg-volt-400/8 p-5 text-sm leading-6 text-zinc-300">
            <p className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 shrink-0 text-volt-400" size={20} aria-hidden />
              Public web routes are present. Final production URL assignment and policy review remain external release steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/50">
        <div className="section-inner">
          <DisclaimerNotice />
        </div>
      </section>
    </>
  );
}
