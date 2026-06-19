import Link from "next/link";
import { Activity, CalendarCheck, CheckCircle2, Dumbbell, Flame, HeartPulse, NotebookPen, Trophy, Zap } from "lucide-react";

import { AppValueCTA } from "@/components/AppValueCTA";
import { ButtonLink } from "@/components/ButtonLink";
import { CardGrid } from "@/components/CardGrid";
import { DisclaimerNotice } from "@/components/DisclaimerNotice";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import {
  dashboardActivityFeed,
  appToWebsiteLinks,
  dashboardFocusTags,
  dashboardProgressTracks,
  dashboardQuickActions,
  dashboardSavedQueue,
  dashboardStats,
  dashboardTodayPlan
} from "@/lib/platform-data";

const statIcons = [HeartPulse, Flame, Zap, Trophy];

export default function DashboardPage() {
  return (
    <>
      <section className="section-shell bg-graphite-950/85">
        <div className="section-inner">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-volt-400">Dashboard Preview</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                Preview plan for training, recovery, nutrition, and community.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
                A member-facing preview for readiness, routines, streaks, XP, saved content, progress media, and the next actions that keep the app and website aligned. Live account data belongs in the app/backend.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href="/workouts/builder" icon={<Dumbbell size={18} aria-hidden />}>Builder Preview</ButtonLink>
                <ButtonLink href="/profile/er-athlete" variant="secondary" icon={<Activity size={18} aria-hidden />}>View Profile</ButtonLink>
                <ButtonLink href="/community/chat" variant="ghost" icon={<NotebookPen size={18} aria-hidden />}>Update Preview</ButtonLink>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {dashboardStats.map((stat, index) => {
                const Icon = statIcons[index] ?? Activity;

                return (
                  <article key={stat.label} className="rounded-md border border-white/10 bg-white/[0.045] p-5 shadow-glow">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-black uppercase text-zinc-400">{stat.label}</p>
                      <Icon size={22} className={index % 2 === 0 ? "text-volt-400" : "text-ember-400"} aria-hidden />
                    </div>
                    <p className="mt-4 text-4xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-xs font-black uppercase text-ember-400">Sample metric</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{stat.detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Today"
              title="Queued work across the whole platform."
              description="Training, nutrition, recovery, transformation, and community tasks stay visible as one daily plan."
            />
            <div className="mt-6 grid gap-4">
              {dashboardTodayPlan.map((item, index) => (
                <article key={item.title} className="grid gap-4 rounded-md border border-white/10 bg-white/[0.045] p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md border border-volt-400/35 bg-volt-400/10 text-sm font-black text-volt-300">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-white">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
                    <p className="mt-3 inline-flex rounded-md border border-white/10 bg-white/6 px-3 py-1 text-xs font-bold uppercase text-zinc-300">
                      {item.meta}
                    </p>
                  </div>
                  {item.href ? (
                    <Link href={item.href} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/6 px-3 text-xs font-black uppercase text-white hover:border-volt-400/50">
                      <CheckCircle2 size={16} aria-hidden />
                      Open
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Progress"
              title="Weekly tracks and focus areas."
              description="Progress rows summarize training, nutrition, recovery, and pet XP so members can quickly see what needs attention."
            />
            <div className="mt-6 grid gap-4">
              {dashboardProgressTracks.map((track) => (
                <article key={track.label} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-base font-black text-white">{track.label}</h2>
                      <p className="mt-1 text-sm text-zinc-400">{track.detail}</p>
                    </div>
                    <p className="shrink-0 rounded-md border border-ember-500/30 bg-ember-500/10 px-2 py-1 text-xs font-black uppercase text-ember-400">
                      {track.value}
                    </p>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-volt-400" style={{ width: `${track.progress}%` }} />
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <SectionHeader title="Focus Tags" />
              <div className="mt-5">
                <TagGrid items={dashboardFocusTags} tone="green" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Actions"
              title="Fast paths for the most common member workflows."
              description="Dashboard cards link into existing platform areas without adding new backend assumptions."
            />
            <div className="mt-6">
              <CardGrid items={dashboardQuickActions} columns="two" />
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Saved Queue"
              title="Content and plans ready to resume."
              description="Saved workouts, media, articles, and nutrition items are grouped for profile and app sync."
            />
            <div className="mt-6">
              <CardGrid items={dashboardSavedQueue} columns="two" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="App-to-Website Links"
            title="Every major app area has a teaching destination on the website."
            description="The app remains the tracker. These links define where app screens should send users when they need education, cues, routines, safety context, or deeper explanations."
          />
          <div className="mt-6">
            <CardGrid items={appToWebsiteLinks} columns="four" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/50">
        <div className="section-inner">
          <div className="flex items-center gap-3">
            <CalendarCheck size={24} className="text-ember-400" aria-hidden />
            <SectionHeader
              eyebrow="Recent Activity"
              title="Profile, pet, and community updates in one feed."
              description="The feed gives members a compact trail of comments, XP, transformation progress, and app events."
            />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {dashboardActivityFeed.map((item) => (
              <article key={item.title} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                <p className="text-xs font-black uppercase text-volt-400">{item.meta}</p>
                <h2 className="mt-2 text-lg font-black text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <DisclaimerNotice />
          </div>
        </div>
      </section>
    </>
  );
}

