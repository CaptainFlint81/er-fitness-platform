"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const chatChannels = ["General", "Questions", "Progress", "Media", "Tips", "Announcements"];

export function ChatComposer() {
  const [channel, setChannel] = useState("General");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Message composer is ready.");

  return (
    <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
      <div className="flex items-center gap-3">
        <Send size={22} className="text-ember-400" aria-hidden />
        <h2 className="text-lg font-black text-white">Message Composer</h2>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold text-zinc-200">
        Channel
        <select
          className="h-11 rounded-md border border-white/10 bg-black/40 px-3 text-white outline-none focus:border-volt-400"
          value={channel}
          onChange={(event) => setChannel(event.target.value)}
        >
          {chatChannels.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-200">
        Message
        <textarea
          className="min-h-32 rounded-md border border-white/10 bg-black/40 px-3 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-volt-400"
          placeholder="Share a training update, tip, question, or recovery note."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => setStatus(message.trim() ? `Previewing a ${channel} channel message workflow.` : `Select a channel and write a message to preview the chat workflow.`)}
        className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-volt-400 px-4 text-sm font-black uppercase text-graphite-950 hover:bg-volt-300"
      >
        <Send size={17} aria-hidden />
        Preview Message
      </button>
      <p className="mt-3 rounded-md border border-volt-400/25 bg-volt-400/8 px-3 py-2 text-sm font-bold text-volt-300" aria-live="polite">
        {status}
      </p>
    </div>
  );
}
