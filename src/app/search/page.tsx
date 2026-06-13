import { PageHero } from "@/components/PageHero";
import { SearchPagePanel } from "@/components/SearchPagePanel";

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Search Engine"
        title="Unified search for exercises, articles, videos, images, muscle groups, injuries, conditions, contributors, and community content."
        description="The search UI supports scalable categories, tags, user filters, media type filters, reviewer metadata, status filters, and saved result collections."
        primaryCta={{ label: "Content Platform", href: "/content" }}
        secondaryCta={{ label: "Media", href: "/media" }}
      />

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SearchPagePanel />
        </div>
      </section>
    </>
  );
}
