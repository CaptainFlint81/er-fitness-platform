import type { BlogPost, CommunityGroup, CommunityPost, GroupChatMessage, GroupMember } from "@/types/content";
import { demoBlogs, demoMedia, demoPosts, demoProfiles } from "@/lib/content-data";

const defaultChannels = ["General", "Questions", "Progress", "Media", "Tips", "Announcements"];

const baseRules = [
  "Keep advice respectful, practical, and training-focused.",
  "No harassment, spam, unsafe challenges, or medical claims.",
  "Use reports for unsafe content, abuse, scams, or rule violations."
];

type GroupSeed = [slug: string, name: string, category: string, description: string, tags: string[], members: number, featured?: boolean];

const groupSeeds: GroupSeed[] = [
  ["general-fitness", "General Fitness", "Open Community", "Daily training, health, routines, accountability, and general fitness discussion.", ["general", "accountability", "questions"], 24880, true],
  ["beginners", "Beginners", "Open Community", "A welcoming start point for new lifters, runners, and members building consistent routines.", ["beginner", "habits", "support"], 18420, true],
  ["bodybuilding", "Bodybuilding", "Training Style", "Hypertrophy, splits, posing, weak points, nutrition phases, and muscle-building education.", ["hypertrophy", "muscle", "posing"], 16740, true],
  ["powerlifting", "Powerlifting", "Strength Sport", "Squat, bench, deadlift, meet prep, technique, peaking, and strength programming.", ["squat", "bench", "deadlift"], 12150, true],
  ["weight-loss", "Weight Loss", "Nutrition Goal", "Sustainable fat loss, food habits, training consistency, and progress support.", ["cut", "habits", "support"], 15200, true],
  ["bulking", "Bulking", "Nutrition Goal", "Surplus planning, high-calorie meals, strength progression, and lean mass gain.", ["bulk", "calories", "strength"], 8700],
  ["cutting", "Cutting", "Nutrition Goal", "Deficit planning, satiety, protein, strength retention, and adherence.", ["cut", "protein", "body composition"], 9200],
  ["recomp", "Recomp", "Nutrition Goal", "Strength, protein, habit consistency, and body-composition progress without extreme phases.", ["recomp", "protein", "progress"], 7900],
  ["nutrition", "Nutrition", "Nutrition", "Macros, hydration, food quality, meal timing, and practical nutrition questions.", ["macros", "hydration", "meal planning"], 13260],
  ["meal-prep", "Meal Prep", "Nutrition", "Grocery lists, batch cooking, portable meals, prep photos, and weekly planning.", ["meal prep", "grocery", "planning"], 10150],
  ["bodyweight-training", "Bodyweight Training", "Training Style", "Calisthenics, push-ups, pull-ups, core control, skill progressions, and travel routines.", ["calisthenics", "bodyweight", "skills"], 11180],
  ["hiit", "HIIT", "Conditioning", "Intervals, work capacity, exercise selection, recovery cost, and conditioning plans.", ["intervals", "conditioning", "effort"], 8420],
  ["running", "Running", "Endurance", "Run-walk plans, base building, pacing, lower-leg strength, and race preparation.", ["running", "pacing", "lower leg"], 14320],
  ["endurance", "Endurance", "Endurance", "Aerobic base, long sessions, cycling, rowing, zone training, fueling, and recovery.", ["zone 2", "fueling", "aerobic"], 9600],
  ["tactical-fitness", "Tactical Fitness", "Performance", "Carries, rucking, conditioning, durability, readiness, and hybrid strength.", ["rucking", "carries", "readiness"], 8800],
  ["football-training", "Football Training", "Sports", "Strength, speed, power, conditioning, contact prep, and position-ready training.", ["football", "speed", "power"], 6200],
  ["wrestling-training", "Wrestling Training", "Sports", "Grip, conditioning, hips, mat strength, weight management, and recovery.", ["wrestling", "grip", "conditioning"], 5400],
  ["combat-sports", "Combat Sports", "Sports", "Rounds, rotational power, conditioning, shoulders, hips, neck, and recovery.", ["combat", "conditioning", "power"], 7100],
  ["mobility", "Mobility", "Recovery", "Joint control, active range, warmups, cooldowns, flexibility, and daily movement.", ["mobility", "range", "warmups"], 12420],
  ["recovery-longevity", "Recovery & Longevity", "Recovery", "Sleep, fatigue, active recovery, readiness, sustainable routines, and long-term training.", ["sleep", "recovery", "longevity"], 11860],
  ["injured-athlete", "Injured Athlete", "Recovery", "Safety-first education, return-to-training, symptom tracking, and conservative progressions.", ["injury", "return to training", "safety"], 9300, true],
  ["adaptive-fitness", "Adaptive Fitness", "Adaptive", "Inclusive training modifications, equipment options, support needs, and adaptive athletes.", ["adaptive", "inclusive", "modifications"], 5300, true],
  ["wheelchair-fitness", "Wheelchair Fitness", "Adaptive", "Seated strength, shoulder care, transfers, cardio options, and accessible setups.", ["wheelchair", "seated", "accessibility"], 3100],
  ["prosthetic-users", "Prosthetic Users", "Adaptive", "Training with prosthetics, fit notes, balance, gait support, and progressive loading.", ["prosthetic", "balance", "gait"], 2500],
  ["multiple-sclerosis-support", "Multiple Sclerosis Support", "Special Conditions", "Fatigue-aware training, heat sensitivity, balance, pacing, and support.", ["multiple sclerosis", "fatigue", "pacing"], 2900],
  ["arthritis-friendly-fitness", "Arthritis Friendly Fitness", "Special Conditions", "Joint-friendly strength, warmups, range of motion, flare planning, and consistency.", ["arthritis", "joints", "low impact"], 4300],
  ["senior-fitness", "Senior Fitness", "Active Aging", "Strength, balance, walking, mobility, confidence, and active aging routines.", ["seniors", "balance", "active aging"], 7800],
  ["yoga", "Yoga", "Mind Body", "Yoga flows, breath, mobility, strength, recovery, and routine sharing.", ["yoga", "breathing", "mobility"], 9600],
  ["pilates", "Pilates", "Mind Body", "Core control, mat routines, posture, athlete movement quality, and recovery.", ["pilates", "core", "posture"], 7200],
  ["tai-chi", "Tai Chi", "Mind Body", "Forms, balance, breathing, slow flow, joint-friendly movement, and recovery.", ["tai chi", "balance", "flow"], 4800],
  ["transformation-stories", "Transformation Stories", "Progress", "Long-form transformation stories, milestone reflections, and progress support.", ["transformation", "story", "milestones"], 10200, true],
  ["progress-photos", "Progress Photos", "Progress", "Progress photo sharing, visibility controls, encouragement, and transformation media.", ["photos", "progress", "media"], 8800],
  ["pet-companion", "Pet Companion", "Motivation", "Pet XP, companion progress, streak boosts, challenges, and profile showcases.", ["pets", "xp", "streaks"], 6100],
  ["challenges", "Challenges", "Motivation", "Daily, weekly, group, recovery, nutrition, and transformation challenges.", ["challenges", "streaks", "xp"], 11900],
  ["motivation", "Motivation", "Support", "Consistency, mindset, accountability, habit wins, and getting back on track.", ["motivation", "habits", "support"], 13600],
  ["questions-help", "Questions & Help", "Support", "Ask training, nutrition, recovery, app, and community questions.", ["questions", "help", "community"], 15260, true]
];

export const communityGroups: CommunityGroup[] = groupSeeds.map(([slug, name, category, description, tags, members, featured]) => ({
  id: `group-${slug}`,
  slug,
  name,
  category,
  description,
  tags,
  members,
  featured,
  visibility: "public",
  coverGradient: "linear-gradient(135deg, rgba(255,106,0,0.34), rgba(140,255,0,0.18), #101215)",
    moderators: ["Coach Maya", "ER Athlete"],
  channels: defaultChannels,
  rules: [
    ...baseRules,
    `Keep posts relevant to ${name.toLowerCase()} training, education, progress, or support.`
  ]
}));

export const communityGroupCategories = Array.from(new Set(communityGroups.map((group) => group.category))).sort();

export const communityGroupMembers: GroupMember[] = communityGroups.flatMap((group, index) => [
  { id: `${group.id}-member-demo`, groupId: group.id, profileId: "profile-er-athlete", role: index % 5 === 0 ? "moderator" : "member", joinedAt: "2026-05-14" },
  { id: `${group.id}-member-maya`, groupId: group.id, profileId: "profile-coach-maya", role: "moderator", joinedAt: "2026-05-01" },
  { id: `${group.id}-member-jordan`, groupId: group.id, profileId: "profile-jordan-r", role: "member", joinedAt: "2026-06-03" }
]);

export const groupChatMessages: GroupChatMessage[] = [
  {
    id: "chat-general-001",
    groupId: "group-general-fitness",
    channel: "General",
    authorId: "profile-er-athlete",
    body: "Logged the new routine and moved my recovery note to the dashboard. Website lesson helped me pick the right accessory work.",
    createdAt: "2026-06-08 7:20 PM"
  },
  {
    id: "chat-beginner-001",
    groupId: "group-beginners",
    channel: "Questions",
    authorId: "profile-jordan-r",
    body: "Should I start with Bodyweight Warrior or Iron Forge if I only have dumbbells at home?",
    createdAt: "2026-06-08 6:44 PM"
  },
  {
    id: "chat-injury-001",
    groupId: "group-injured-athlete",
    channel: "Progress",
    authorId: "profile-coach-maya",
    body: "Reminder: if symptoms spike the next day, repeat the same phase instead of jumping ahead.",
    createdAt: "2026-06-07 5:18 PM"
  }
];

export const userCreatedGroupFields = [
  "Group name",
  "Description",
  "Category",
  "Public or private",
  "Rules",
  "Cover image",
  "Members",
  "Moderators"
];

export const communityDiscoveryFilters = ["Category", "Group", "Media type", "Newest", "Popular"];

export const communitySearchTargets = ["Groups", "Posts", "Blogs", "Users", "Photos", "Videos", "Workouts", "Nutrition", "Recovery"];

export const communityModerationControls = [
  "Report user",
  "Report post",
  "Report comment",
  "Block user",
  "Mute user",
  "Moderation queue",
  "Admin review",
  "Group moderators",
  "Content rules"
];

export function getCommunityGroup(slug: string) {
  return communityGroups.find((group) => group.slug === slug);
}

export function getGroupPosts(group: CommunityGroup): CommunityPost[] {
  const categoryMatch = demoPosts.filter((post) =>
    post.category.toLowerCase().includes(group.category.toLowerCase()) ||
    group.tags.some((tag) => post.tags.includes(tag) || post.body.toLowerCase().includes(tag))
  );

  return categoryMatch.length ? categoryMatch : demoPosts.slice(0, 3);
}

export function getGroupBlogs(group: CommunityGroup): BlogPost[] {
  const matches = demoBlogs.filter((blog) =>
    group.tags.some((tag) => blog.tags.includes(tag) || blog.excerpt.toLowerCase().includes(tag))
  );

  return matches.length ? matches : demoBlogs.slice(0, 2);
}

export function getGroupMedia(group: CommunityGroup) {
  const matches = demoMedia.filter((media) =>
    group.tags.some((tag) => media.category.toLowerCase().includes(tag) || media.title.toLowerCase().includes(tag))
  );

  return matches.length ? matches : demoMedia;
}

export function getGroupMembers(group: CommunityGroup) {
  const members = communityGroupMembers.filter((member) => member.groupId === group.id);

  return members.map((member) => ({
    ...member,
    profile: demoProfiles.find((profile) => profile.id === member.profileId)
  }));
}

export function getGroupChat(group: CommunityGroup) {
  const messages = groupChatMessages.filter((message) => message.groupId === group.id);
  const fallbackMessages = [
    `What is everyone training today for ${group.name}? Drop the main lift, movement, route, flow, or recovery focus.`,
    `Question thread: share one detail about equipment, experience level, symptoms, or schedule so members can give more useful guidance.`,
    `Progress check: post a small win, a form note, a consistency streak, or one thing you are adjusting this week.`,
    `Media thread: attach a form clip, meal prep photo, mobility flow, progress image, or external source for review.`,
    `Tip thread: one practical cue that helped with ${group.tags[0] ?? group.name.toLowerCase()} this week.`,
    `Announcement thread: moderators keep group rules, safety reminders, and review updates visible here.`
  ];

  return messages.length
    ? messages
    : group.channels.map((channel, index) => ({
        id: `${group.id}-${channel.toLowerCase()}-${index}`,
        groupId: group.id,
        channel,
        authorId: demoProfiles[index % demoProfiles.length].id,
        body: fallbackMessages[index] ?? `${group.name} discussion for ${channel.toLowerCase()}.`,
        createdAt: `2026-06-08 ${7 - (index % 4)}:${index % 2 === 0 ? "10" : "35"} PM`
      }));
}

export function getGroupQuestions(group: CommunityGroup): CommunityPost[] {
  const questions = getGroupPosts(group).filter((post) => post.kind === "question");

  return questions.length
    ? questions
    : [
        {
          ...demoPosts[2],
          id: `${group.id}-starter-question`,
          title: `What should a new member ask first in ${group.name}?`,
          body: `Share your goal, current routine, equipment, training age, limitations, recovery status, and what you want help choosing inside ${group.name}.`,
          tags: [...new Set(["question", ...group.tags])],
          category: group.category,
          createdAt: "2026-06-08",
          updatedAt: "2026-06-08"
        }
      ];
}

export function getGroupGuideCards(group: CommunityGroup) {
  return [
    {
      title: `${group.name} starter checklist`,
      description: `Start with your goal, training level, available equipment, weekly schedule, recovery limits, and one measurable next step.`,
      meta: "Guide"
    },
    {
      title: `${group.name} posting guide`,
      description: "Good posts include context, what you tried, what changed, photos or clips when useful, and specific questions for the room.",
      meta: "Posting"
    },
    {
      title: `${group.name} safety guide`,
      description: "Avoid diagnosis claims, extreme advice, harassment, unsafe challenges, and medical certainty. Use reports for moderator review.",
      meta: "Safety"
    }
  ];
}

export const trendingCommunityPosts = [
  { title: "Day 90 recomp check-in", group: "Transformation Stories", metric: "Preview discussion", href: "/community/groups/transformation-stories" },
  { title: "Bench setup cues that fixed shoulder position", group: "Powerlifting", metric: "Preview save workflow", href: "/community/groups/powerlifting" },
  { title: "Meal prep for lean bulk weeks", group: "Meal Prep", metric: "Preview nutrition post", href: "/community/groups/meal-prep" },
  { title: "Return-to-training after knee irritation", group: "Injured Athlete", metric: "Preview Q&A thread", href: "/community/groups/injured-athlete" }
];

export const transformationHighlights = [
  { title: "Day 30 consistency win", group: "Transformation Stories", detail: "First milestone wall completed", href: "/community/groups/transformation-stories" },
  { title: "Progress photo privacy setup", group: "Progress Photos", detail: "Visibility workflow preview", href: "/community/groups/progress-photos" },
  { title: "Recovery comeback note", group: "Injured Athlete", detail: "Returned to controlled lower-body training", href: "/community/groups/injured-athlete" }
];

