import { FileText, Image as ImageIcon, PlaySquare, Rows3 } from "lucide-react";

import type { MediaItem } from "@/types/platform";

const iconMap = {
  photo: ImageIcon,
  video: PlaySquare,
  article: FileText,
  program: Rows3,
  journal: FileText
};

export function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const Icon = iconMap[item.type];

        return (
          <article key={item.title} className="overflow-hidden rounded-md border border-white/10 bg-white/[0.045]">
            <div className="flex aspect-video items-center justify-center bg-[linear-gradient(135deg,rgba(255,106,0,0.24),rgba(140,255,0,0.18)),#14171b]">
              <Icon size={42} className="text-white" aria-hidden />
            </div>
            <div className="p-5">
              <p className="text-xs font-black uppercase text-volt-400">{item.category} | {item.type}</p>
              <h3 className="mt-2 text-lg font-black text-white">{item.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-white/7 px-2 py-1 text-xs font-bold text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
