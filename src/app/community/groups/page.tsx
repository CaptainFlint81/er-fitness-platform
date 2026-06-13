import type { Metadata } from "next";
import { PlusCircle, ShieldCheck, UsersRound } from "lucide-react";

import { AppValueCTA } from "@/components/AppValueCTA";
import { CardGrid } from "@/components/CardGrid";
import { LockedContentPreview } from "@/components/LockedContentPreview";
import { PageHero } from "@/components/PageHero";
import { SearchFilters } from "@/components/SearchFilters";
import { SectionHeader } from "@/components/SectionHeader";
import { TagGrid } from "@/components/TagGrid";
import { GroupDirectorySearch } from "@/components/community/GroupDirectorySearch";
import { previewLimits } from "@/lib/access-control";
import {
  communityDiscoveryFilters,
  communityGroupCategories,
  communityGroups,
  communityModerationControls,
  userCreatedGroupFields
} from "@/lib/community-groups";

export const metadata: Metadata = {
  title: "Community Groups",
  description: "E.R. Fitness community groups for training styles, nutrition goals, recovery, adaptive fitness, sports, transformations, motivation, and member support."
};

export default function CommunityGroupsPage() {
  const visibleGroups = communityGroups.slice(0, previewLimits.communityGroups);
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "E.R. Fitness Community Groups",
    description: metadata.description,
    numberOfItems: communityGroups.length
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        eyebrow="Community Groups"
        title="Find people who train, recover, eat, compete, adapt, and progress like you."
        description="Browse default E.R. Fitness spaces for training styles, nutrition phases, adaptive fitness, recovery, sports, progress photos, transformations, challenges, and support."
        primaryCta={{ label: "Browse Groups", href: "#groups" }}
        secondaryCta={{ label: "Why the App", href: "/why-the-app" }}
      />

      <section className="section-shell bg-black/45">
        <div className="section-inner">
          <AppValueCTA compact />
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <SearchFilters label="Search groups, posts, blogs, users, media, workouts, nutrition, and recovery" />
            <div>
              <SectionHeader title="Group Categories" />
              <div className="mt-4">
                <TagGrid items={communityGroupCategories} />
              </div>
            </div>
            <div>
              <SectionHeader title="Discovery Filters" />
              <div className="mt-4">
                <TagGrid items={communityDiscoveryFilters} tone="green" />
              </div>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <div className="flex items-center gap-3">
              <PlusCircle size={24} className="text-volt-400" aria-hidden />
              <SectionHeader title="User-Created Group Requirements" description="Member-created public and private spaces require owner approval, group rules, moderators, visibility settings, report handling, and backend governance before public creation opens." />
            </div>
            <div className="mt-5">
              <TagGrid items={userCreatedGroupFields} tone="orange" />
            </div>
          </div>
        </div>
      </section>

      <section id="groups" className="section-shell bg-black/45">
        <div className="section-inner">
          <SectionHeader
            eyebrow="Default Spaces"
            title={`${communityGroups.length} prebuilt community spaces.`}
            description="Each group has a header, rules, post feed, pinned posts, media tab, members tab, chat tab, report controls, and group moderation support."
          />
          <LockedContentPreview
            title="Community Group Directory Preview"
            description="Public visitors can browse a sample of default groups. Full group directory, room feeds, chat, media, and members are reserved for future app access."
            previewCount={visibleGroups.length}
            totalCount={communityGroups.length}
          >
            <div className="mt-6">
              <GroupDirectorySearch groups={visibleGroups} categories={communityGroupCategories} />
            </div>
          </LockedContentPreview>
        </div>
      </section>

      <section className="section-shell bg-graphite-950/70">
        <div className="section-inner grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-md border border-ember-500/25 bg-ember-500/8 p-5">
            <div className="flex items-center gap-3">
              <ShieldCheck size={24} className="text-ember-400" aria-hidden />
              <SectionHeader title="Moderation and Safety" description="Groups include reports, block and mute controls, moderators, admin review, and content rules." />
            </div>
            <div className="mt-5">
              <TagGrid items={communityModerationControls} tone="orange" />
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <div className="flex items-center gap-3">
              <UsersRound size={24} className="text-volt-400" aria-hidden />
              <SectionHeader title="Welcoming by Design" description="The group system covers beginners, adaptive athletes, seniors, condition-specific support, sports, mind-body practice, nutrition phases, and motivation." />
            </div>
            <div className="mt-5">
              <CardGrid
                items={[
                  { title: "Join Spaces", description: "Members can discover and join groups by training style, goal, condition, sport, or support need.", meta: "Groups" },
                  { title: "Post and Chat", description: "Spaces include post feeds, media sharing, blogs, journals, topic channels, and chat foundations.", meta: "Community" }
                ]}
                columns="two"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
