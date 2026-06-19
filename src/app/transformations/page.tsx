import { CalendarRange, ImagePlus, Video } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { MediaCard } from "@/components/content/MediaCard";
import { PostCard } from "@/components/content/PostCard";
import { UploadPanel } from "@/components/content/UploadPanel";
import { demoMedia, demoPosts } from "@/lib/content-data";
import { transformationMilestones } from "@/lib/platform-data";

export default function TransformationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Transformation Center"
        title="Preview progress timelines, galleries, and transformation stories."
        description="Transformation content supports Day 1 through final milestones, progress galleries, transformation walls, stories, comments, likes, shares, saves, and visibility controls."
        primaryCta={{ label: "Progress Preview", href: "#upload" }}
        secondaryCta={{ label: "Profile Wall", href: "/profile/er-athlete" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner space-y-8">
          <SearchFilters label="Search transformations" />
          <div className="flex items-center gap-3">
            <CalendarRange size={24} className="text-ember-400" aria-hidden />
            <SectionHeader title="Milestone Timeline" description="Each milestone can hold photos, videos, journal notes, measurements, accolades, and community posts." />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {transformationMilestones.map((milestone) => (
              <article key={milestone} className="flex min-h-32 flex-col justify-between rounded-md border border-white/10 bg-white/[0.045] p-4">
                <p className="text-lg font-black text-white">{milestone}</p>
                <div className="mt-4 flex gap-2 text-zinc-400">
                  <ImagePlus size={18} aria-hidden />
                  <Video size={18} aria-hidden />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="upload" className="section-shell bg-black/45">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <UploadPanel title="Create Transformation Story, Photo, or Video" />
          <div className="grid gap-5">
            {demoMedia.slice(1, 3).map((media) => (
              <MediaCard key={media.id} media={media} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader title="Progress Stories" />
          <div className="mt-6 grid gap-5">
            {demoPosts.filter((post) => post.category === "Transformations").map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

