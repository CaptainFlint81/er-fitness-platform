import { BookOpen, Clock, Lock } from "lucide-react";

import { contentKindLabels, demoProfiles } from "@/lib/content-data";
import { contentStatusTone, findProfile } from "@/lib/content-utils";
import type { BlogPost } from "@/types/content";
import { ReportButton } from "@/components/content/ReportButton";
import { SocialShareBar } from "@/components/content/SocialShareBar";

export function BlogCard({ blog }: { blog: BlogPost }) {
  const author = findProfile(demoProfiles, blog.authorId);

  return (
    <article className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex aspect-[16/9] items-center justify-center rounded-md bg-[linear-gradient(135deg,rgba(255,106,0,0.24),rgba(140,255,0,0.18)),#14171b]">
        <BookOpen size={42} className="text-white" aria-hidden />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <span className={`rounded-md border px-2 py-1 text-xs font-black uppercase ${contentStatusTone(blog.status)}`}>{blog.status}</span>
        <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/25 px-2 py-1 text-xs font-black uppercase text-zinc-300">
          <Lock size={12} aria-hidden />
          {blog.visibility}
        </span>
      </div>
      <p className="mt-4 text-xs font-black uppercase text-volt-400">{contentKindLabels[blog.kind]} | {blog.category}</p>
      <h3 className="mt-2 text-xl font-black text-white">{blog.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-400">{blog.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-3 text-xs font-bold text-zinc-500">
        <span>Preview author @{author.username}</span>
        <span className="inline-flex items-center gap-1"><Clock size={13} aria-hidden />{blog.readTime}</span>
        <span>{blog.tags.join(", ")}</span>
      </div>
      {blog.review ? (
        <div className="mt-4 rounded-md border border-white/10 bg-black/25 p-3 text-xs leading-5 text-zinc-400">
          <p className="font-black uppercase text-volt-400">Reviewed Content</p>
          <p>Author: {blog.review.author}</p>
          <p>Reviewed by: {blog.review.reviewedBy}</p>
          <p>Credentials: {blog.review.credentials}</p>
          <p>Source: {blog.review.source} | License: {blog.review.license}</p>
        </div>
      ) : null}
      <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4">
        <SocialShareBar reactions={blog.reactions} />
        <ReportButton target="content" />
      </div>
    </article>
  );
}
