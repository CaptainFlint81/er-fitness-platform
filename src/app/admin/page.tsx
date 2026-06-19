import { ShieldCheck, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

import { CardGrid } from "@/components/CardGrid";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import {
  contentReviewFields,
  contentReviewWorkflow,
  contentSubmissionQueue,
  contentTablePlan,
  knowledgeContentCategories,
  moderationQueue,
  professionalContributors
} from "@/lib/content-data";
import { communityModerationControls, communityGroups, userCreatedGroupFields } from "@/lib/community-groups";
import { expertReviewQueue, expertReviewStatuses } from "@/lib/education-data";
import { adminArchitecture, databaseModelGroups, moderationFeatures } from "@/lib/platform-data";

export default function AdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Admin Safety Dashboard"
        title="Moderation queue, report review, content workflow, users, and platform controls."
        description="This non-billing, backend-ready dashboard organizes reports, moderation, visibility review, content status, external embeds, and user safety controls."
        primaryCta={{ label: "Community", href: "/community" }}
        secondaryCta={{ label: "Supabase Plan", href: "#schema" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <div className="flex items-center gap-3">
            <ShieldCheck size={26} className="text-ember-400" aria-hidden />
            <SectionHeader title="Moderation Queue" description="Report content, report users, review media, review comments, and clear or escalate items." />
          </div>
          <div className="mt-6 overflow-hidden rounded-md border border-white/10">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-white/8 text-xs uppercase text-zinc-400">
                <tr>
                  <th className="p-3">Target</th>
                  <th className="p-3">Reason</th>
                  <th className="p-3">Priority</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Reporter</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {moderationQueue.map((item) => (
                  <tr key={item.id} className="border-t border-white/10 bg-black/20 text-zinc-300">
                    <td className="p-3 font-bold text-white">{item.targetType}: {item.targetId}</td>
                    <td className="p-3">{item.reason}</td>
                    <td className="p-3 uppercase">{item.priority}</td>
                    <td className="p-3 uppercase">{item.status}</td>
                    <td className="p-3">{item.reportedBy}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button type="button" disabled className="cursor-not-allowed rounded-md border border-white/10 bg-white/6 px-3 py-2 text-xs font-black uppercase text-zinc-400">Approve preview</button>
                        <button type="button" disabled className="cursor-not-allowed rounded-md border border-white/10 bg-white/6 px-3 py-2 text-xs font-black uppercase text-zinc-400">Hide preview</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="schema" className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="flex items-center gap-3">
              <SlidersHorizontal size={24} className="text-volt-400" aria-hidden />
              <SectionHeader title="Admin Controls" description="Review controls cover publish states, visibility, reports, category management, tags, media limits, role permissions, and audit decisions." />
            </div>
            <div className="mt-5">
              <TagGrid items={[...moderationFeatures, ...communityModerationControls]} tone="orange" />
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="Admin Architecture"
              title="Moderation, reports, content review, user review, and community safety."
              description="No billing or subscription controls are included in this phase."
            />
            <div className="mt-6">
              <CardGrid items={adminArchitecture} columns="two" />
            </div>
          </div>
        </div>
      </section>

      <section id="review-workflow" className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Content Review Workflow"
            title="Professional content moves from submission to owner approval, review, and publish approval."
            description="The workflow applies to exercises, articles, videos, images, muscle-group education, injuries, conditions, contributors, blogs, and journals."
          />
          <div className="mt-6">
            <CardGrid items={contentReviewWorkflow} columns="four" />
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <article className="rounded-md border border-white/10 bg-black/25 p-5">
              <SectionHeader
                title="Expert Review Statuses"
                description="Admin-ready status labels for source-linked education, exercise records, media records, and medical-adjacent content."
              />
              <div className="mt-4">
                <TagGrid items={expertReviewStatuses} tone="orange" />
              </div>
            </article>
            <article className="rounded-md border border-white/10 bg-black/25 p-5">
              <SectionHeader
                title="Flagged Education Review Queue"
                description={`${expertReviewQueue.length} education records currently carry injury, adaptive, youth, women's fitness, nutrition, recovery, or medical-adjacent review flags.`}
              />
              <div className="mt-4 grid gap-3">
                {expertReviewQueue.slice(0, 6).map((topic) => (
                  <Link key={topic.href} href={topic.href} className="rounded-md border border-white/10 bg-white/[0.045] p-4 transition hover:border-volt-400/45">
                    <p className="text-xs font-black uppercase text-volt-400">{topic.category} | {topic.reviewStatus}</p>
                    <h3 className="mt-2 font-black text-white">{topic.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-zinc-500">{topic.reviewerType} | {topic.reviewedBy} | {topic.reviewDate}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{topic.reviewNotes}</p>
                  </Link>
                ))}
              </div>
            </article>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {contentSubmissionQueue.map((submission) => (
              <article key={submission.id} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                <p className="text-xs font-black uppercase text-volt-400">{submission.category} | {submission.type}</p>
                <h2 className="mt-2 text-lg font-black text-white">{submission.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{submission.workflow.lastAction}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-md border border-ember-500/30 bg-ember-500/10 px-2 py-1 text-xs font-bold uppercase text-ember-400">
                    {submission.workflow.status}
                  </span>
                  <span className="rounded-md border border-white/10 bg-black/25 px-2 py-1 text-xs font-bold text-zinc-300">
                    {submission.review.credentials}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contributors" className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Professional Contributors"
              title="Contributor approval supports therapists, trainers, coaches, nutrition pros, adaptive specialists, and recovery specialists."
              description="Each contributor has an approval state, credentials, specialties, and submission count before production publishing."
            />
            <div className="mt-6 grid gap-4">
              {professionalContributors.map((contributor) => (
                <article key={contributor.id} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                  <p className="text-xs font-black uppercase text-volt-400">{contributor.discipline}</p>
                  <h2 className="mt-2 text-lg font-black text-white">{contributor.displayName}</h2>
                  <p className="mt-2 text-sm font-bold text-ember-400">{contributor.credentials} | {contributor.approvalStatus}</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{contributor.submissionCount} submissions in review-ready content categories.</p>
                  <div className="mt-4">
                    <TagGrid items={contributor.specialties} tone="green" />
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Review Metadata"
              title="Required fields for scalable educational content."
              description="These fields attach to articles, exercises, videos, images, blogs, injury education, condition pages, and contributor submissions."
            />
            <TagGrid items={contentReviewFields} tone="orange" />
            <SectionHeader title="Content Categories" description="The platform taxonomy supports the complete educational knowledge base." />
            <TagGrid items={knowledgeContentCategories} />
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Group Moderation"
              title="Default spaces, member-created groups, and group moderator workflows."
              description="Admins and group moderators need controls for reports, content rules, member review, muted users, blocked users, and unsafe media."
            />
            <div className="mt-5">
              <TagGrid items={userCreatedGroupFields} />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {communityGroups.filter((group) => group.featured).slice(0, 4).map((group) => (
              <article key={group.id} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
                <p className="text-xs font-black uppercase text-volt-400">{group.category}</p>
                <h2 className="mt-2 text-lg font-black text-white">{group.name}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Preview group record | moderator workflow sample</p>
                <div className="mt-4 flex gap-2">
                  <Link href="/admin#review-workflow" className="rounded-md bg-volt-400 px-3 py-2 text-xs font-black uppercase text-graphite-950">Review workflow</Link>
                  <Link href={`/community/groups/${group.slug}`} className="rounded-md border border-white/10 bg-white/6 px-3 py-2 text-xs font-black uppercase text-white">Rules</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Database Models"
            title="Supabase-ready schema groups for Phase 2."
            description="The schema plan covers account, community, media, search, content categories, and admin review models without live backend activation."
          />
          <div className="mt-6">
            <CardGrid items={databaseModelGroups} columns="three" />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contentTablePlan.map((item) => (
              <article key={item.table} className="rounded-md border border-white/10 bg-white/[0.045] p-4">
                <h2 className="font-black text-white">{item.table}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.purpose}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
