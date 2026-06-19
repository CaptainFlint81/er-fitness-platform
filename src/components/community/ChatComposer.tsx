"use client";

import { Send } from "lucide-react";

const chatChannels = ["General", "Questions", "Progress", "Media", "Tips", "Announcements"];

export function ChatComposer() {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-center gap-3">
        <Send size={22} className="text-ember-400" aria-hidden />
        <h2 className="text-lg font-black text-white">Message Composer Preview</h2>
      </div>
      <p className="mt-3 rounded-md border border-ember-500/25 bg-ember-500/8 px-3 py-2 text-xs font-black uppercase text-ember-400">
        Preview only. Live chat is disabled until account access and moderation are live.
      </p>
      <label className="mt-5 grid gap-2 text-sm font-bold text-zinc-200">
        Channel
        <select
          disabled
          className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-white outline-none focus:border-volt-400 disabled:cursor-not-allowed disabled:opacity-55"
          defaultValue="General"
        >
          {chatChannels.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-200">
        Message
        <textarea
          disabled
          className="min-h-32 rounded-md border border-white/10 bg-black/40 px-3 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-volt-400 disabled:cursor-not-allowed disabled:opacity-55"
          placeholder="Share a training update, tip, question, or recovery note."
        />
      </label>
      <button
        type="button"
        disabled
        className="mt-4 inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-white/6 px-4 text-sm font-black uppercase text-zinc-400"
      >
        <Send size={17} aria-hidden />
        Chat coming soon
      </button>
      <p className="mt-3 rounded-md border border-volt-400/25 bg-volt-400/8 px-3 py-2 text-sm font-bold text-volt-300" aria-live="polite">
        No message is sent or stored from this website preview.
      </p>
    </div>
  );
}
