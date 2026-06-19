import { ExternalLink, Image as ImageIcon, PlaySquare } from "lucide-react";

import type { ContentMedia } from "@/types/content";
import { ReportButton } from "@/components/content/ReportButton";

const mediaIcons = {
  photo: ImageIcon,
  video: PlaySquare,
  embed: ExternalLink
};

export function MediaCard({ media }: { media: ContentMedia }) {
  const Icon = mediaIcons[media.type];

  return (
    <article className="overflow-hidden rounded-md border border-white/10 bg-white/[0.045]">
      <div className="flex aspect-video items-center justify-center bg-[linear-gradient(135deg,rgba(255,106,0,0.22),rgba(140,255,0,0.16)),#14171b]">
        <Icon size={44} className="text-white" aria-hidden />
      </div>
      <div className="p-5">
        <p className="text-xs font-black uppercase text-volt-400">{media.category} | {media.type}</p>
        <h3 className="mt-2 text-lg font-black text-white">{media.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {media.muscleGroup ? (
            <span className="rounded-md border border-ember-500/30 bg-ember-500/10 px-2 py-1 text-xs font-bold text-ember-400">
              {media.muscleGroup}
            </span>
          ) : null}
          <span className="rounded-md border border-white/10 bg-black/25 px-2 py-1 text-xs font-bold text-zinc-300">
            Preview only
          </span>
        </div>
        <div className="mt-4">
          <ReportButton target="media" />
        </div>
      </div>
    </article>
  );
}
