import { CalendarDays, Image as ImageIcon, Lock, PlaySquare, Radio, Tags } from "lucide-react";

import { contentKindLabels, demoProfiles } from "@/lib/content-data";
import { contentStatusTone, findProfile } from "@/lib/content-utils";
import type { CommunityPost } from "@/types/content";
import { ReportButton } from "@/components/content/ReportButton";
import { SocialShareBar } from "@/components/content/SocialShareBar";

export function PostCard({ post }: { post: CommunityPost }) {
  const author = findProfile(demoProfiles, post.authorId);

  return (
    <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ember-500 text-base font-black text-graphite-950">
            {author.avatar}
          </div>
          <div>
            <p className="font-black text-white">{author.displayName}</p>
            <p className="text-sm text-zinc-500">@{author.username} | {author.role}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className={`rounded-md border px-2 py-1 text-xs font-black uppercase ${contentStatusTone(post.status)}`}>{post.status}</span>
          <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/25 px-2 py-1 text-xs font-black uppercase text-zinc-300">
            <Lock size={12} aria-hidden />
            {post.visibility}
          </span>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-xs font-black uppercase text-volt-400">{contentKindLabels[post.kind]} | {post.category}</p>
        <h3 className="mt-2 text-xl font-black text-white">{post.title}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{post.body}</p>
      </div>

      {(post.embeddedWorkout || post.embeddedNutritionPlan || post.externalEmbed) ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {post.embeddedWorkout ? (
            <div className="rounded-md border border-volt-400/25 bg-volt-400/8 p-3">
              <p className="text-xs font-black uppercase text-volt-400">Embedded Workout</p>
              <p className="mt-1 text-sm font-bold text-white">{post.embeddedWorkout}</p>
            </div>
          ) : null}
          {post.embeddedNutritionPlan ? (
            <div className="rounded-md border border-ember-500/25 bg-ember-500/8 p-3">
              <p className="text-xs font-black uppercase text-ember-400">Embedded Nutrition</p>
              <p className="mt-1 text-sm font-bold text-white">{post.embeddedNutritionPlan}</p>
            </div>
          ) : null}
          {post.externalEmbed ? (
            <div className="rounded-md border border-white/10 bg-black/25 p-3">
              <p className="inline-flex items-center gap-2 text-xs font-black uppercase text-zinc-300">
                <Radio size={13} aria-hidden />
                External Embed
              </p>
              <a href={post.externalEmbed} target="_blank" rel="noreferrer" className="mt-1 inline-flex text-sm font-bold text-volt-400 hover:text-volt-300">
                Open external source
              </a>
            </div>
          ) : null}
        </div>
      ) : null}

      {post.media.length ? (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {post.media.map((media) => {
            const Icon = media.type === "video" ? PlaySquare : ImageIcon;

            return (
              <div key={media.id} className="flex items-center gap-4 rounded-md border border-white/10 bg-black/25 p-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-white/8 text-volt-400">
                  <Icon size={26} aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-black text-white">{media.title}</p>
                  <p className="text-xs font-bold uppercase text-zinc-500">{media.category} | {media.type}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
        <span className="inline-flex items-center gap-1"><CalendarDays size={13} aria-hidden />{post.createdAt}</span>
        <span className="inline-flex items-center gap-1"><Tags size={13} aria-hidden />{post.tags.join(", ")}</span>
      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 lg:flex-row lg:items-center lg:justify-between">
        <SocialShareBar reactions={post.reactions} />
        <ReportButton target="content" />
      </div>
    </article>
  );
}
