import { MessageSquare } from "lucide-react";

import { demoProfiles } from "@/lib/content-data";
import { findProfile } from "@/lib/content-utils";
import type { Comment } from "@/types/content";
import { ReportButton } from "@/components/content/ReportButton";

function CommentItem({ comment, depth = 0 }: { comment: Comment; depth?: number }) {
  const author = findProfile(demoProfiles, comment.authorId);
  void comment.reactions;

  return (
    <div className={`${depth ? "ml-5 border-l border-white/10 pl-4" : ""}`}>
      <div className="rounded-md border border-white/10 bg-black/25 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-volt-400 text-xs font-black text-graphite-950">
              {author.avatar}
            </div>
            <div>
              <p className="text-sm font-black text-white">{author.displayName}</p>
              <p className="text-xs text-zinc-500">Preview persona | {comment.createdAt} | {comment.status}</p>
            </div>
          </div>
          <ReportButton target="comment" />
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{comment.body}</p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-bold text-zinc-400"
          >
            Like preview
          </button>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-bold text-zinc-400"
          >
            Reply coming soon
          </button>
        </div>
      </div>
      {comment.replies?.length ? (
        <div className="mt-3 grid gap-3">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function CommentThread({ comments }: { comments: Comment[] }) {
  return (
    <section className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-center gap-3">
        <MessageSquare size={22} className="text-volt-400" aria-hidden />
        <div>
          <h2 className="text-lg font-black text-white">Comment Thread</h2>
          <p className="text-sm text-zinc-500">Threaded comments, likes, replies, and reports are preview-only until account access and moderation are enabled.</p>
        </div>
      </div>
      <div className="mt-5 grid gap-3">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
      <form className="mt-5 grid gap-3 border-t border-white/10 pt-5">
        <label htmlFor="comment" className="text-sm font-black uppercase text-white">
          Add comment
        </label>
        <textarea
          id="comment"
          rows={4}
          disabled
          placeholder="Write a comment, coaching note, question, or progress reply..."
          className="rounded-md border border-white/10 bg-black/35 p-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-volt-400 disabled:cursor-not-allowed disabled:opacity-55"
        />
        <button
          type="button"
          disabled
          className="min-h-11 cursor-not-allowed rounded-md border border-white/10 bg-white/6 px-4 text-sm font-black uppercase text-zinc-400"
        >
          Comments coming soon
        </button>
        <p className="rounded-md border border-ember-500/25 bg-ember-500/8 px-3 py-2 text-sm font-bold text-ember-400" aria-live="polite">
          Preview only. No comment is submitted or stored from this website.
        </p>
      </form>
    </section>
  );
}
