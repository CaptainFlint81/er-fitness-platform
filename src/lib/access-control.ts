import type { FeatureCard } from "@/types/platform";

export const subscriberAccessNotice =
  "Full library access is reserved for E.R. Fitness app subscribers when account access is enabled.";

export const websiteAppValueMessage =
  "Website teaches the basics. The app tracks, calculates, builds, reminds, records, rewards, and personalizes.";

export const previewLimits = {
  adaptiveSections: 2,
  articles: 1,
  blogs: 2,
  communityGroups: 6,
  communityRoomItems: 2,
  contentCards: 4,
  educationCards: 4,
  equipment: 4,
  exercises: 6,
  foodRows: 6,
  mediaCards: 3,
  mediaLibrary: 4,
  nutritionTemplates: 3,
  publicMaterials: 6,
  recoveryProtocols: 4,
  routines: 3,
  searchResults: 12,
  workoutCards: 3
};

export const appExclusiveFeatures = [
  "Evil Russian Push-Up Routine calculations",
  "hourly mission setup",
  "rep percentages",
  "daily target calculation",
  "timers",
  "reminders",
  "progress tracking",
  "progress photos",
  "transformations",
  "achievements",
  "pets",
  "XP",
  "streaks",
  "routine builder",
  "generated routines",
  "personal stats",
  "saved routines",
  "local camera/progress media"
];

export const publicAccessCards: FeatureCard[] = [
  {
    title: "Homepage",
    description: "Public brand, app overview, feature previews, and app-value messaging.",
    href: "/",
    meta: "public",
    accessLevel: "public"
  },
  {
    title: "Why the App",
    description: "Public explanation of what the website does, what the app does, and why full access is limited.",
    href: "/why-the-app",
    meta: "public",
    accessLevel: "public"
  },
  {
    title: "Legal",
    description: "Disclaimer, privacy, terms, and legal index stay fully public.",
    href: "/legal",
    meta: "public",
    accessLevel: "public"
  }
];

export const previewAccessCards: FeatureCard[] = [
  {
    title: "Exercise Library Preview",
    description: "Public visitors see samples, source notes, and app handoffs, not the entire exercise database.",
    href: "/exercises",
    meta: "preview",
    accessLevel: "preview"
  },
  {
    title: "Workout Library Preview",
    description: "Public visitors see sample systems and plans while full routine access waits for app accounts.",
    href: "/workouts",
    meta: "preview",
    accessLevel: "preview"
  },
  {
    title: "Education Preview",
    description: "Public visitors see topic summaries and sample lessons while full deep-dive libraries are reserved.",
    href: "/education",
    meta: "preview",
    accessLevel: "preview"
  },
  {
    title: "Community Preview",
    description: "Public visitors can inspect representative rooms, posts, blogs, and media without full room access.",
    href: "/community",
    meta: "preview",
    accessLevel: "preview"
  }
];

export const subscriberAccessCards: FeatureCard[] = [
  {
    title: "Full Libraries",
    description: "Full exercise, workout, nutrition, recovery, adaptive, injured athlete, media, and source directories.",
    href: "/why-the-app",
    meta: "future subscriber",
    accessLevel: "subscriber"
  },
  {
    title: "App Workflows",
    description: "Calculators, timers, reminders, progress tracking, saved routines, generated routines, XP, pets, and achievements.",
    href: "/why-the-app",
    meta: "app only",
    accessLevel: "subscriber"
  }
];
