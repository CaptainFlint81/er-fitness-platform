import type {
  BlogPost,
  Comment,
  CommunityPost,
  ContentKind,
  ContentMedia,
  ContentPlatformCategory,
  ContentSubmission,
  ContentWorkflow,
  CreatorProfile,
  ModerationItem,
  ProfessionalContributor,
  SearchDocument,
  Visibility
} from "@/types/content";
import type { FeatureCard } from "@/types/platform";

export const contentKindLabels: Record<ContentKind, string> = {
  "transformation-story": "Transformation Story",
  "workout-tip": "Workout Tip",
  "nutrition-tip": "Nutrition Tip",
  "recovery-tip": "Recovery Tip",
  question: "Question",
  "progress-update": "Progress Update",
  "instructional-article": "Instructional Article",
  "uploaded-workout-video": "Uploaded Workout Video",
  "uploaded-progress-photo": "Uploaded Progress Photo",
  "external-social-link": "External Social Link"
};

export const contentCategories = [
  "All",
  "Blogs",
  "Journals",
  "Transformations",
  "Tips",
  "Questions",
  "Progress Updates",
  "Videos",
  "Photos"
];

export const knowledgeContentCategories: ContentPlatformCategory[] = [
  "Training",
  "Nutrition",
  "Recovery",
  "Adaptive Fitness",
  "Injured Athlete",
  "Yoga",
  "Pilates",
  "Tai Chi",
  "Mobility",
  "Longevity",
  "Athletic Performance",
  "Bodybuilding",
  "Powerlifting",
  "HIIT",
  "Sports Performance"
];

export const contentScaleTargets: FeatureCard[] = [
  {
    title: "Exercise Library",
    description: "Scalable exercise records for setup, execution, cues, regressions, progressions, media, muscles, equipment, and app tracking handoff.",
    href: "/exercises",
    meta: "thousands ready"
  },
  {
    title: "Article Library",
    description: "Reviewed education articles with author, reviewer, credentials, source, license, references, workflow status, and publish approval.",
    href: "/education",
    meta: "reviewed education"
  },
  {
    title: "Video Library",
    description: "Instructional videos, demos, coaching breakdowns, recovery flows, and creator media indexed by category, tags, reviewer, and license.",
    href: "/media",
    meta: "video search"
  },
  {
    title: "Image Library",
    description: "Exercise images, progress photos, nutrition media, recovery galleries, transformation media, and moderation-ready upload records.",
    href: "/media",
    meta: "image search"
  },
  {
    title: "Blog Platform",
    description: "Community blogs, journals, transformation stories, professional submissions, review workflow, visibility, comments, saves, and reports.",
    href: "/community/blog",
    meta: "creator content"
  },
  {
    title: "Contributor Pipeline",
    description: "Professional contributors submit content for owner approval, credential review, professional review, source checks, and publish approval.",
    href: "/admin#contributors",
    meta: "approval workflow"
  }
];

export const contentReviewFields = [
  "author",
  "reviewedBy",
  "credentials",
  "reviewDate",
  "source",
  "license",
  "references"
];

export const professionalContributorRoles = [
  "physical therapists",
  "trainers",
  "coaches",
  "nutrition professionals",
  "adaptive fitness specialists",
  "recovery specialists"
];

export const contentReviewWorkflow: FeatureCard[] = [
  {
    title: "Submission Intake",
    description: "Contributor submissions enter the queue with category, tags, body, media, source, license, references, and ownership metadata.",
    href: "/community/blog#write",
    meta: "submitted"
  },
  {
    title: "Owner Approval",
    description: "The owner approves the topic, contributor role, audience fit, category placement, and whether the content belongs on the website.",
    href: "/admin#review-workflow",
    meta: "owner-review"
  },
  {
    title: "Professional Review",
    description: "Qualified reviewers check accuracy, scope, safety language, credentials, source quality, references, and medical boundaries.",
    href: "/admin#review-workflow",
    meta: "professional-review"
  },
  {
    title: "Publish Approval",
    description: "Approved content receives final metadata, category assignments, search document rows, media review, and publish status.",
    href: "/admin#review-workflow",
    meta: "publish-approved"
  }
];

export const scalableSearchTargets: FeatureCard[] = [
  { title: "Exercises", description: "Search by name, muscles, equipment, level, pattern, regressions, progressions, and app tracking cues.", href: "/exercises", meta: "exercise" },
  { title: "Articles", description: "Search reviewed education, blog posts, journal entries, references, sources, contributors, and credentials.", href: "/education", meta: "article" },
  { title: "Videos", description: "Search demos, form checks, creator videos, yoga, pilates, tai chi, recovery flows, and workout media.", href: "/media", meta: "video" },
  { title: "Images", description: "Search progress photos, exercise images, nutrition media, transformation galleries, and recovery galleries.", href: "/media", meta: "image" },
  { title: "Muscle Groups", description: "Search body education topics, related exercises, media, routines, recovery notes, and app handoff pages.", href: "/education", meta: "muscle-group" },
  { title: "Injuries", description: "Search injury education, return-to-training phases, recovery protocols, media, and safety notes.", href: "/injured-athlete", meta: "injury" },
  { title: "Conditions", description: "Search special conditions, adaptive fitness guidance, pacing systems, contributors, and professional review records.", href: "/adaptive-fitness", meta: "condition" },
  { title: "Contributors", description: "Search approved professionals by discipline, credentials, specialties, review history, and content ownership.", href: "/admin#contributors", meta: "contributor" }
];

const reviewedWorkflow: ContentWorkflow = {
  status: "published",
  ownerApprovalRequired: true,
  professionalReviewRequired: true,
  publishApprovalRequired: true,
  lastAction: "Published after owner and professional review."
};

export const visibilityOptions: Array<{ value: Visibility; label: string; description: string }> = [
  { value: "public", label: "Public", description: "Visible to everyone and discoverable in search." },
  { value: "followers", label: "Followers", description: "Visible to followers and profile visitors with access." },
  { value: "group", label: "Group", description: "Use for group and private community spaces." },
  { value: "private", label: "Private", description: "Saved as personal progress or a private entry." }
];

export const demoProfiles: CreatorProfile[] = [
  {
    id: "profile-er-athlete",
    username: "er-athlete",
    displayName: "ER Athlete",
    role: "creator",
    avatar: "DA",
    banner: "Recomp | Tactical Hybrid",
    bio: "Hybrid strength athlete documenting training, recovery, nutrition, and progress.",
    goal: "Recomp with tactical conditioning",
    followers: 1840,
    following: 214,
    xp: 42850,
    streak: 18,
    pet: { name: "Volt Lynx", level: 12, xp: 6400 },
    badges: ["Chest Specialist", "Mobility Builder", "Lean Bulk", "Form Check"],
    titles: ["Routine Architect", "Volt Streaker"]
  },
  {
    id: "profile-coach-maya",
    username: "coach-maya",
    displayName: "Coach Maya",
    role: "coach",
    avatar: "CM",
    banner: "Strength Education",
    bio: "Coach posting strength cues, recovery regressions, and practical nutrition planning.",
    goal: "Teach sustainable progressive overload",
    followers: 5320,
    following: 188,
    xp: 91700,
    streak: 41,
    pet: { name: "Ember Hawk", level: 22, xp: 15100 },
    badges: ["Coach Tip Pro", "Powerlifting", "Recovery Guide"],
    titles: ["Strength Educator"]
  },
  {
    id: "profile-jordan-r",
    username: "jordan-r",
    displayName: "Jordan R.",
    role: "athlete",
    avatar: "JR",
    banner: "Day 90 Progress",
    bio: "Sharing progress photos, meal prep notes, and beginner lifting questions.",
    goal: "Lean bulk and better consistency",
    followers: 612,
    following: 309,
    xp: 18620,
    streak: 9,
    pet: { name: "Green Bolt", level: 7, xp: 2100 },
    badges: ["Day 30", "Meal Prep", "Streak Starter"],
    titles: ["Builder"]
  }
];

export const demoMedia: ContentMedia[] = [
  {
    id: "media-bench-video",
    type: "video",
    title: "Bench setup walkthrough",
    category: "Workouts",
    muscleGroup: "Chest",
    thumbnail: "form check"
  },
  {
    id: "media-progress-photo",
    type: "photo",
    title: "Day 90 progress photo",
    category: "Transformations",
    thumbnail: "progress"
  },
  {
    id: "media-social-embed",
    type: "embed",
    title: "External creator reel",
    category: "Creator Tips",
    thumbnail: "embed"
  }
];

export const demoPosts: CommunityPost[] = [
  {
    id: "post-001",
    kind: "uploaded-workout-video",
    title: "Bench setup cues that fixed my shoulder position",
    body: "Posted a quick form breakdown with scapular position, grip width, and tempo notes. This embeds into the workout library as a community tip.",
    authorId: "profile-coach-maya",
    category: "Workouts",
    tags: ["chest", "bench", "form", "coach-tip"],
    media: [demoMedia[0]],
    status: "published",
    visibility: "public",
    reactions: { likes: 284, comments: 38, shares: 22, saves: 93 },
    createdAt: "2026-06-01",
    updatedAt: "2026-06-01",
    embeddedWorkout: "Upper Strength A"
  },
  {
    id: "post-002",
    kind: "progress-update",
    title: "Day 90: recomp check-in",
    body: "Weight stayed steady, waist came down, strength is moving again. Added progress photos to the transformation wall and saved the current nutrition plan.",
    authorId: "profile-er-athlete",
    category: "Transformations",
    tags: ["day-90", "recomp", "progress-photo", "nutrition"],
    media: [demoMedia[1]],
    status: "published",
    visibility: "followers",
    reactions: { likes: 512, comments: 71, shares: 18, saves: 146 },
    createdAt: "2026-05-30",
    updatedAt: "2026-05-31",
    embeddedNutritionPlan: "Recomp 2,650 kcal"
  },
  {
    id: "post-003",
    kind: "question",
    title: "How should I return to squats after knee irritation?",
    body: "Looking for conservative regressions and readiness checks before moving back to barbell squats.",
    authorId: "profile-jordan-r",
    category: "Injured Athlete",
    tags: ["knee", "return-to-training", "question", "mobility"],
    media: [],
    status: "published",
    visibility: "public",
    reactions: { likes: 88, comments: 19, shares: 6, saves: 34 },
    createdAt: "2026-06-06",
    updatedAt: "2026-06-06"
  },
  {
    id: "post-004",
    kind: "external-social-link",
    title: "Creator reel: five-minute hip warmup",
    body: "A short creator warmup that teaches hip circles, supported hinges, adductor rocks, and breathing before lower-body training.",
    authorId: "profile-coach-maya",
    category: "Recovery",
    tags: ["hip", "warmup", "external-embed", "creator"],
    media: [demoMedia[2]],
    status: "published",
    visibility: "public",
    reactions: { likes: 74, comments: 9, shares: 11, saves: 38 },
    createdAt: "2026-06-07",
    updatedAt: "2026-06-07",
    externalEmbed: "https://www.youtube.com/watch?v=61p1OIO20wk"
  }
];

export const demoBlogs: BlogPost[] = [
  {
    id: "blog-001",
    kind: "instructional-article",
    title: "How to build a push day without junk volume",
    excerpt: "A coach-friendly structure for warmups, primary presses, accessory work, intensity management, and recovery notes.",
    authorId: "profile-coach-maya",
    category: "Workouts",
    tags: ["hypertrophy", "programming", "chest", "triceps"],
    readTime: "7 min",
    status: "published",
    visibility: "public",
    cover: demoMedia[0],
    reactions: { likes: 630, comments: 84, shares: 57, saves: 242 },
    createdAt: "2026-05-22",
    review: {
      author: "Coach Maya",
      reviewedBy: "E.R. Fitness Review Team",
      credentials: "CSCS review pending production credential verification",
      reviewDate: "2026-06-07",
      source: "Internal coaching curriculum",
      license: "E.R. Fitness original educational content",
      references: ["ACSM resistance training position stand", "NSCA essentials of strength training"]
    },
    workflow: reviewedWorkflow
  },
  {
    id: "blog-002",
    kind: "nutrition-tip",
    title: "Lean bulk grocery list for busy training weeks",
    excerpt: "Protein anchors, carb bases, micronutrient coverage, hydration reminders, and prep shortcuts.",
    authorId: "profile-er-athlete",
    category: "Nutrition",
    tags: ["lean-bulk", "grocery-list", "meal-prep"],
    readTime: "5 min",
    status: "published",
    visibility: "public",
    cover: demoMedia[1],
    reactions: { likes: 174, comments: 22, shares: 11, saves: 68 },
    createdAt: "2026-06-05"
  },
  {
    id: "blog-003",
    kind: "recovery-tip",
    title: "A simple return-to-training checklist after a flare-up",
    excerpt: "Pain-free range, load tolerance, movement control, fatigue checks, and when to ask a professional.",
    authorId: "profile-coach-maya",
    category: "Recovery",
    tags: ["recovery", "injured-athlete", "return-to-training"],
    readTime: "6 min",
    status: "published",
    visibility: "public",
    cover: demoMedia[2],
    reactions: { likes: 42, comments: 6, shares: 4, saves: 18 },
    createdAt: "2026-06-03"
  }
];

export const professionalContributors: ProfessionalContributor[] = [
  {
    id: "contrib-pt-aria",
    displayName: "Dr. Aria Patel",
    discipline: "physical therapist",
    credentials: "DPT, SCS",
    specialties: ["Injured Athlete", "Mobility", "Recovery", "Sports Performance"],
    approvalStatus: "pending-owner-review",
    submissionCount: 3
  },
  {
    id: "contrib-coach-maya",
    displayName: "Coach Maya",
    discipline: "coach",
    credentials: "CSCS",
    specialties: ["Training", "Bodybuilding", "Powerlifting", "Athletic Performance"],
    approvalStatus: "approved",
    submissionCount: 12
  },
  {
    id: "contrib-nutrition-eli",
    displayName: "Eli Brooks",
    discipline: "nutrition professional",
    credentials: "RD",
    specialties: ["Nutrition", "Athletic Performance", "Sports Performance"],
    approvalStatus: "needs-more-info",
    submissionCount: 2
  }
];

export const contentSubmissionQueue: ContentSubmission[] = [
  {
    id: "submission-shoulder-return",
    title: "Return to pressing after shoulder irritation",
    type: "article",
    category: "Injured Athlete",
    contributorId: "contrib-pt-aria",
    workflow: {
      status: "professional-review",
      ownerApprovalRequired: true,
      professionalReviewRequired: true,
      publishApprovalRequired: true,
      lastAction: "Owner approved topic; clinical reviewer is checking scope and safety language."
    },
    review: {
      author: "Dr. Aria Patel",
      reviewedBy: "Pending clinical reviewer",
      credentials: "DPT, SCS",
      reviewDate: "Pending",
      source: "Contributor submission",
      license: "Contributor grant pending owner approval",
      references: ["Journal of Orthopaedic and Sports Physical Therapy shoulder rehabilitation review"]
    }
  },
  {
    id: "submission-lean-bulk-video",
    title: "Lean bulk meal prep walkthrough",
    type: "video",
    category: "Nutrition",
    contributorId: "contrib-nutrition-eli",
    workflow: {
      status: "owner-review",
      ownerApprovalRequired: true,
      professionalReviewRequired: true,
      publishApprovalRequired: true,
      lastAction: "Contributor credentials and source license need owner review."
    },
    review: {
      author: "Eli Brooks",
      reviewedBy: "Owner review pending",
      credentials: "RD verification requested",
      reviewDate: "Pending",
      source: "Contributor upload",
      license: "License declaration incomplete",
      references: ["International Society of Sports Nutrition position stand on protein and exercise"]
    }
  },
  {
    id: "submission-squat-cue-images",
    title: "Squat setup image sequence",
    type: "image",
    category: "Powerlifting",
    contributorId: "contrib-coach-maya",
    workflow: {
      status: "publish-approved",
      ownerApprovalRequired: true,
      professionalReviewRequired: false,
      publishApprovalRequired: true,
      lastAction: "Media and copy approved for publish queue."
    },
    review: {
      author: "Coach Maya",
      reviewedBy: "E.R. Fitness Owner",
      credentials: "CSCS",
      reviewDate: "2026-06-08",
      source: "Original media shoot",
      license: "E.R. Fitness owned media",
      references: ["Internal exercise standards"]
    }
  }
];

export const reviewedContentExamples: SearchDocument[] = [
  {
    id: "search-doc-bench",
    type: "exercise",
    title: "Barbell Bench Press",
    category: "Powerlifting",
    description: "Reviewed exercise entry for setup, execution, muscles, shoulder readiness, media, and tracking notes.",
    tags: ["chest", "front delts", "triceps", "rotator cuff", "pressing"],
    href: "/exercises",
    author: "Coach Maya",
    reviewedBy: "E.R. Fitness Review Team",
    status: "published"
  },
  {
    id: "search-doc-return-knee",
    type: "article",
    title: "Return-to-training checklist after knee irritation",
    category: "Injured Athlete",
    description: "Safety-first article model with professional review metadata, references, and app tracking handoff.",
    tags: ["knee", "injury education", "return to training", "recovery"],
    href: "/injured-athlete",
    author: "Dr. Aria Patel",
    reviewedBy: "Pending clinical reviewer",
    status: "professional-review"
  },
  {
    id: "search-doc-meal-prep",
    type: "video",
    title: "Lean bulk meal prep walkthrough",
    category: "Nutrition",
    description: "Video content model with source, license, reviewer, transcript tags, and nutrition category assignment.",
    tags: ["lean bulk", "meal prep", "protein", "grocery list"],
    href: "/media",
    author: "Eli Brooks",
    reviewedBy: "Owner review pending",
    status: "owner-review"
  },
  {
    id: "search-doc-ms",
    type: "condition",
    title: "Multiple Sclerosis exercise pacing",
    category: "Adaptive Fitness",
    description: "Condition-aware education model indexed by symptoms, pacing, cooling, balance, and professional-care boundaries.",
    tags: ["multiple sclerosis", "adaptive fitness", "fatigue", "balance"],
    href: "/education/condition-multiple-sclerosis",
    author: "E.R. Fitness Education Team",
    reviewedBy: "Manual professional review required",
    status: "submitted"
  }
];

export const demoComments: Comment[] = [
  {
    id: "comment-001",
    postId: "post-001",
    authorId: "profile-er-athlete",
    body: "The grip-width cue helped. Saving this to my next upper session.",
    status: "visible",
    reactions: { likes: 19 },
    createdAt: "2026-06-01",
    replies: [
      {
        id: "comment-001-r1",
        postId: "post-001",
        authorId: "profile-coach-maya",
        body: "Good. Keep the first sets submaximal while the setup becomes automatic.",
        status: "visible",
        reactions: { likes: 12 },
        createdAt: "2026-06-01"
      }
    ]
  },
  {
    id: "comment-002",
    postId: "post-001",
    authorId: "profile-jordan-r",
    body: "Could this be used for dumbbell pressing too?",
    status: "visible",
    reactions: { likes: 8 },
    createdAt: "2026-06-02"
  }
];

export const moderationQueue: ModerationItem[] = [
  {
    id: "mod-001",
    targetType: "post",
    targetId: "post-004",
    reason: "External embed awaiting review",
    status: "queued",
    priority: "medium",
    reportedBy: "system"
  },
  {
    id: "mod-002",
    targetType: "comment",
    targetId: "comment-002",
    reason: "Member reported comment for moderator review",
    status: "reviewing",
    priority: "low",
    reportedBy: "profile-er-athlete"
  },
  {
    id: "mod-003",
    targetType: "profile",
    targetId: "profile-jordan-r",
    reason: "Profile media awaiting safety review",
    status: "queued",
    priority: "high",
    reportedBy: "system"
  }
];

export const contentTablePlan = [
  {
    table: "profiles",
    purpose: "Account profile, community profile, role, bio, goals, XP, streaks, privacy, banner, avatar, and social counts."
  },
  {
    table: "profile_settings",
    purpose: "Account preferences, privacy defaults, notification settings, content defaults, and profile safety state."
  },
  {
    table: "content_posts",
    purpose: "Community posts, tips, questions, progress updates, transformations, external embeds, status, visibility, and tags."
  },
  {
    table: "groups",
    purpose: "Default and user-created community spaces with category, visibility, rules, cover image, members, and moderators."
  },
  {
    table: "group_members",
    purpose: "Group membership, roles, join state, muted or blocked state, and private group access."
  },
  {
    table: "posts",
    purpose: "Group-scoped text, photo, video, tips, questions, transformations, progress updates, and external social links."
  },
  {
    table: "blog_posts",
    purpose: "Blogs, journals, instructional articles, creator tips, review/publish workflow, embedded workouts, and nutrition plans."
  },
  {
    table: "blogs",
    purpose: "Group-scoped blog posts, workout journals, nutrition journals, transformation journals, and recovery journals."
  },
  {
    table: "media_assets",
    purpose: "Photo uploads, video uploads, thumbnails, category, muscle group, owner, storage path, visibility, and review state."
  },
  {
    table: "media_galleries",
    purpose: "Transformation, workout, nutrition, and recovery galleries with ownership, status, visibility, and cover media."
  },
  {
    table: "media_gallery_items",
    purpose: "Ordered gallery membership for photos, videos, transformation milestones, workouts, nutrition, and recovery media."
  },
  {
    table: "comments",
    purpose: "Threaded comments with moderation state and realtime-ready subscriptions."
  },
  {
    table: "likes",
    purpose: "Like records for posts, blogs, comments, media, users, and group content."
  },
  {
    table: "saved_posts",
    purpose: "Saved group posts and collections for member libraries."
  },
  {
    table: "chat_rooms",
    purpose: "Group chat rooms and topic channels for General, Questions, Progress, Media, Tips, and Announcements."
  },
  {
    table: "media_uploads",
    purpose: "Group, post, and blog media uploads for photos, videos, thumbnails, review state, and visibility."
  },
  {
    table: "reactions",
    purpose: "Likes and reaction types scoped to posts, blogs, comments, media, and transformations."
  },
  {
    table: "follows",
    purpose: "Follower graph for people, favorite creators, and private group access."
  },
  {
    table: "saved_content",
    purpose: "Saved posts, blogs, workouts, media, nutrition plans, and recovery protocols."
  },
  {
    table: "reports",
    purpose: "Report content/user actions with reason, target, reporter, and status."
  },
  {
    table: "moderation_queue",
    purpose: "Admin review dashboard for reported content, external embeds, comments, media, and users."
  },
  {
    table: "moderation_actions",
    purpose: "Audit trail for approve, hide, escalate, archive, dismiss, user review, and content review decisions."
  },
  {
    table: "badges",
    purpose: "Badge catalog with category, rarity, icon key, XP value, and profile award state."
  },
  {
    table: "titles",
    purpose: "Title catalog and profile-selected earned titles for account and community profile showcases."
  },
  {
    table: "search_documents",
    purpose: "Unified index for users, workouts, exercises, articles, videos, photos, nutrition, and recovery search."
  },
  {
    table: "content_categories",
    purpose: "Shared taxonomy for workout systems, recovery systems, nutrition systems, media galleries, and community content types."
  },
  {
    table: "content_submissions",
    purpose: "Professional contributor and member submissions with owner approval, review workflow, publish approval, visibility, and category assignment."
  },
  {
    table: "content_reviews",
    purpose: "Review metadata for author, reviewedBy, credentials, reviewDate, source, license, references, reviewer notes, and approval decisions."
  },
  {
    table: "professional_contributors",
    purpose: "Approved and pending physical therapists, trainers, coaches, nutrition professionals, adaptive specialists, and recovery specialists."
  },
  {
    table: "content_references",
    purpose: "Structured citation and source records attached to exercises, articles, videos, images, blogs, injuries, conditions, and contributor submissions."
  },
  {
    table: "content_licenses",
    purpose: "License declarations and ownership records for article copy, videos, images, contributor uploads, and original E.R. Fitness media."
  },
  {
    table: "content_search_documents",
    purpose: "Scalable search rows for exercises, articles, videos, images, muscle groups, injuries, conditions, contributors, and blog posts."
  }
];

