import { AppValueCTA } from "@/components/AppValueCTA";
import { PageHero } from "@/components/PageHero";
import { QuestionAnswerPreview } from "@/components/QuestionAnswerPreview";
import { SectionHeader } from "@/components/SectionHeader";
import { buildRouteMetadata } from "@/lib/seo";

export const metadata = buildRouteMetadata({
  title: "Fitness Q&A Foundation",
  description: "E.R. Fitness Q&A foundation for preview-only questions, answers, categories, tags, moderation status, contributor badges, and future professional review badges.",
  path: "/community/questions",
  keywords: ["fitness questions", "workout questions", "nutrition questions", "fitness education", "community moderation"]
});

export default function CommunityQuestionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Q&A Foundation"
        title="Fitness questions and answers built for safe review before real posting opens."
        description="This preview models categories, tags, search, bookmarks, upvotes, reports, moderation status, contributor badges, future professional badges, and app access levels without enabling live public posting."
        primaryCta={{ label: "Search Q&A Preview", href: "#qa-preview" }}
        secondaryCta={{ label: "Community", href: "/community" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section id="qa-preview" className="section-shell bg-graphite-950/70">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Preview Only"
            title="Questions can be searched and filtered, but asking and replying are intentionally closed."
            description="The structure is ready for future member questions, subscriber access, moderation, professional review badges, and saved answer workflows after authentication and backend moderation exist."
          />
          <div className="mt-6">
            <QuestionAnswerPreview />
          </div>
        </div>
      </section>
    </>
  );
}
