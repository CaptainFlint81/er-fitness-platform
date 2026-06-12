import type { BlogPost, CommunityPost, CreatorProfile } from "@/types/content";

export function findProfile(profiles: CreatorProfile[], id: string) {
  return profiles.find((profile) => profile.id === id) ?? profiles[0];
}

export function formatCount(value: number) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return String(value);
}

export function contentStatusTone(status: CommunityPost["status"] | BlogPost["status"]) {
  if (status === "published") return "border-volt-400/35 bg-volt-400/10 text-volt-300";
  if (status === "draft") return "border-zinc-500/35 bg-zinc-500/10 text-zinc-300";
  if (status === "scheduled") return "border-ember-500/35 bg-ember-500/10 text-ember-400";
  if (status === "flagged") return "border-red-500/35 bg-red-500/10 text-red-300";
  return "border-white/10 bg-white/6 text-zinc-300";
}
