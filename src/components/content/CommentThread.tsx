"use client";

import { MessageSquare } from "lucide-react";
import { useState } from "react";

import { demoProfiles } from "@/lib/content-data";
import { findProfile } from "@/lib/content-utils";
import type { Comment } from "@/types/content";
import { ReportButton } from "@/components/content/ReportButton";

function CommentItem({ comment, depth = 0 }: { comment: Comment; depth?: number }) {
  const author = findProfile(demoProfiles, comment.authorId);
  const [liked, setLiked] = useState(false);
  const [replyOpen, setReplyOpen] = useState(false);
  const likeCount = comment.reactions.likes + (liked ? 1 : 0);

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
              <p className="text-xs text-zinc-500">{comment.createdAt} | {comment.status}</p>
            </div>
          </div>
          <ReportButton target="comment" />
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-400">{comment.body}</p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            aria-pressed={liked}
            onClick={() => setLiked((value) => !value)}
            className={`rounded-md border px-2 py-1 text-xs font-bold ${
              liked ? "border-volt-400 bg-volt-400/12 text-volt-300" : "border-white/10 bg-white/5 text-zinc-300"
            }`}
          >
            Like {likeCount}
          </button>
          <button
            type="button"
            aria-expanded={replyOpen}
            onClick={() => setReplyOpen((value) => !value)}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-bold text-zinc-300 hover:border-ember-500/45"
          >
            {replyOpen ? "Close Reply" : "Reply"}
          </button>
        </div>
        {replyOpen ? (
          <label className="mt-3 grid gap-2 text-xs font-bold uppercase text-zinc-400">
            Reply preview
            <textarea
              rows={3}
              placeholder={`Reply to ${author.displayName}`}
              className="rounded-md border border-white/10 bg-black/35 p-3 text-sm normal-case text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
            />
          </label>
        ) : null}
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
  const [status, setStatus] = useState("Comment form is ready.");

  return (
    <section className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-center gap-3">
        <MessageSquare size={22} className="text-volt-400" aria-hidden />
        <div>
          <h2 className="text-lg font-black text-white">Comment Thread</h2>
          <p className="text-sm text-zinc-500">Threaded comments, likes, replies, and reports are ready for review workflows.</p>
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
          placeholder="Write a comment, coaching note, question, or progress reply..."
          className="rounded-md border border-white/10 bg-black/35 p-3 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
        />
        <button
          type="button"
          onClick={() => setStatus("Comment preview updated for the visible thread workflow.")}
          className="min-h-11 rounded-md bg-ember-500 px-4 text-sm font-black uppercase text-graphite-950 hover:bg-ember-400"
        >
          Preview Comment
        </button>
        <p className="rounded-md border border-ember-500/25 bg-ember-500/8 px-3 py-2 text-sm font-bold text-ember-400" aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  );
}
