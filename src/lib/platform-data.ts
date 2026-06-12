import type { FeatureCard, MediaItem, RouteLink } from "@/types/platform";

export const brand = {
  name: "Every Routine Fitness",
  shortName: "E.R. Fitness",
  logo: "/brand/er-fitness-full-logo.svg",
  heroImage: "/brand/fitness-ecosystem-hero.png"
};

export const medicalDisclaimer =
  "This content is educational only and is not medical advice. Consult a qualified healthcare professional before beginning any exercise, nutrition, recovery, or wellness program. E.R. Fitness content is not diagnosis, treatment, physical therapy, medical nutrition therapy, or a substitute for care from a qualified professional. Stop any activity that causes pain, dizziness, shortness of breath, numbness, tingling, or unusual symptoms, and consult a licensed medical professional before starting or changing training, nutrition, recovery, or injury-related routines.";

export const primaryNav: RouteLink[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Education", href: "/education" },
  { label: "Principles", href: "/training-nutrition-principles" },
  { label: "Workouts", href: "/workouts" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Recovery", href: "/recovery" },
  { label: "Community", href: "/community" },
  { label: "Media", href: "/media" },
  { label: "Discover", href: "/discover" }
];

export const appMirrorNav: RouteLink[] = [
  { label: "Education", href: "/education" },
  { label: "Training Principles", href: "/training-nutrition-principles" },
  { label: "Adaptive Fitness", href: "/adaptive-fitness" },
  { label: "Exercises", href: "/exercises" },
  { label: "Routines", href: "/routines" },
  { label: "Groups", href: "/community/groups" },
  { label: "Workout Builder", href: "/workouts/builder" },
  { label: "Injured Athlete", href: "/injured-athlete" },
  { label: "Yoga", href: "/yoga" },
  { label: "Pilates", href: "/pilates" },
  { label: "Tai Chi", href: "/tai-chi" },
  { label: "Transformations", href: "/transformations" },
  { label: "Leaderboards", href: "/leaderboards" },
  { label: "Profile", href: "/profile/er-athlete" },
  { label: "Pets", href: "/pets" },
  { label: "Challenges", href: "/challenges" },
  { label: "Achievements", href: "/achievements" }
];

export const homeSections: FeatureCard[] = [
  {
    title: "Education Knowledge Base",
    description: "Body education, training styles, adaptive fitness, injury education, nutrition, recovery, and consistency systems.",
    href: "/education",
    meta: "Website teaches"
  },
  {
    title: "Training & Nutrition Principles",
    description: "DC Training, muscle confusion, carb backloading, overload, periodization, calories, macros, hydration, and recovery education.",
    href: "/training-nutrition-principles",
    meta: "Learn the rules"
  },
  {
    title: "Member Dashboard",
    description: "A daily command center for readiness, today's plan, streaks, XP, saved routines, and the content queue.",
    href: "/dashboard",
    meta: "Today view"
  },
  {
    title: "Workout Systems",
    description: "Structured Bodyweight Warrior, Iron Forge, and Performance Lab training libraries.",
    href: "/workouts",
    meta: "Programs, exercises, saved routines"
  },
  {
    title: "Nutrition Systems",
    description: "Goal-based calories, macros, hydration, grocery lists, meal plans, and a searchable food library.",
    href: "/nutrition",
    meta: "Bulk, cut, recomp, tactical"
  },
  {
    title: "Recovery Systems",
    description: "Mobility, stretching, warmups, cooldowns, posture, balance, breathing, and long-term recovery planning.",
    href: "/recovery",
    meta: "Longevity and readiness"
  },
  {
    title: "Community",
    description: "Profiles, posts, blogs, chat channels, creator tips, moderation, social follows, and saved content.",
    href: "/community",
    meta: "Teach, learn, share"
  },
  {
    title: "Transformation Center",
    description: "Progress photos, videos, timelines, milestone stories, transformation wall, and user accolades.",
    href: "/transformations",
    meta: "Day 1 to final"
  },
  {
    title: "Mobile App Mirror",
    description: "Website sections cover every app feature: pets, XP, badges, titles, streaks, challenges, saved routines, and leaderboards.",
    href: "/profile/er-athlete",
    meta: "App <-> website"
  }
];

export const platformStats = [
  { label: "Workout Systems", value: "3", detail: "Bodyweight Warrior, Iron Forge, and Performance Lab paths" },
  { label: "Community Areas", value: "11", detail: "Posts, journals, chat channels, media, creators, and moderation" },
  { label: "Progress Loops", value: "7", detail: "XP, streaks, pets, badges, titles, challenges, and leaderboards" },
  { label: "Safety Sections", value: "4", detail: "Disclaimer, injured athlete education, recovery, and admin review" }
];

export const accountArchitecture: FeatureCard[] = [
  {
    title: "Profiles",
    description: "Public and private account records for username, display name, role, banner, avatar, bio, goals, XP, streaks, and privacy.",
    meta: "profiles"
  },
  {
    title: "Achievements",
    description: "Unlockable progress records for workouts, nutrition, recovery, transformations, community teaching, and challenge completion.",
    meta: "achievements"
  },
  {
    title: "Badges",
    description: "Profile-visible collectible awards with category, rarity, icon key, XP value, and award history.",
    meta: "badges"
  },
  {
    title: "Titles",
    description: "Selectable profile titles earned from milestones, streaks, creator activity, and completed programs.",
    meta: "titles"
  },
  {
    title: "Transformation Walls",
    description: "Timeline galleries for milestone photos, videos, notes, visibility, comments, and profile showcase placement.",
    meta: "transformation walls"
  },
  {
    title: "Media Uploads",
    description: "Account-owned photos, videos, thumbnails, galleries, storage paths, review status, tags, and visibility controls.",
    meta: "media assets"
  },
  {
    title: "Community Profiles",
    description: "Followers, following, favorite creators, saved content, report-user controls, public posts, blogs, and journals.",
    meta: "social graph"
  },
  {
    title: "Pet Companions",
    description: "Selected pet, level, XP, streak boosts, challenge rewards, profile display, and activity history.",
    meta: "pet companions"
  }
];

export const communityArchitecture: FeatureCard[] = [
  {
    title: "Posts",
    description: "Community updates with author, content type, title, body, category, tags, media, embeds, status, and visibility.",
    meta: "content_posts"
  },
  {
    title: "Comments",
    description: "Threaded replies for posts, blogs, media, transformations, and workout or nutrition objects.",
    meta: "comments"
  },
  {
    title: "Likes",
    description: "Generic reaction records for posts, comments, blogs, media, profiles, and transformation milestones.",
    meta: "reactions"
  },
  {
    title: "Follows",
    description: "Follower graph for community profiles, creators, coaches, and private group access.",
    meta: "follows"
  },
  {
    title: "Reports",
    description: "Report records for users, posts, comments, media, galleries, profiles, and external embeds.",
    meta: "reports"
  },
  {
    title: "Moderation",
    description: "Admin queue, review assignments, actions, notes, audit trail, content status changes, and safety outcomes.",
    meta: "moderation"
  }
];

export const mediaArchitecture: FeatureCard[] = [
  {
    title: "Photos",
    description: "Profile, progress, workout, nutrition, recovery, and community image uploads with thumbnails and review state.",
    meta: "photo"
  },
  {
    title: "Videos",
    description: "Workout demos, form checks, transformation clips, recovery flows, nutrition walkthroughs, and creator uploads.",
    meta: "video"
  },
  {
    title: "Transformation Galleries",
    description: "Milestone galleries for Day 1 through final progress with profile-wall placement and visibility controls.",
    meta: "transformations"
  },
  {
    title: "Workout Galleries",
    description: "Exercise demonstrations, form checks, program media, saved routine attachments, and workout posts.",
    meta: "workouts"
  },
  {
    title: "Nutrition Galleries",
    description: "Meal prep photos, grocery walkthroughs, food library media, macro examples, and nutrition journals.",
    meta: "nutrition"
  },
  {
    title: "Recovery Galleries",
    description: "Mobility flows, injured athlete education, yoga, pilates, tai chi, cooldowns, and protocol videos.",
    meta: "recovery"
  }
];

export const searchArchitecture: FeatureCard[] = [
  {
    title: "Users",
    description: "Search profiles by username, display name, role, goals, badges, titles, pet companion, and creator metadata.",
    href: "/profile",
    meta: "profiles"
  },
  {
    title: "Workouts",
    description: "Search workout plans, systems, saved routines, completed programs, muscle groups, difficulty, and equipment.",
    href: "/workouts",
    meta: "workouts"
  },
  {
    title: "Exercises",
    description: "Search exercise names, muscles, patterns, equipment, form media, and workout-builder block usage.",
    href: "/workouts",
    meta: "exercises"
  },
  {
    title: "Articles",
    description: "Search blogs, journals, creator guides, recovery education, nutrition notes, and instructional content.",
    href: "/community/blog",
    meta: "articles"
  },
  {
    title: "Videos",
    description: "Search workout videos, transformation clips, nutrition walkthroughs, recovery flows, and creator embeds.",
    href: "/media",
    meta: "videos"
  },
  {
    title: "Photos",
    description: "Search profile photos, progress photos, galleries, workout uploads, nutrition photos, and recovery images.",
    href: "/media",
    meta: "photos"
  },
  {
    title: "Nutrition",
    description: "Search food library rows, meal plans, grocery lists, macros, hydration prompts, and nutrition journals.",
    href: "/nutrition",
    meta: "nutrition"
  },
  {
    title: "Recovery",
    description: "Search injured athlete education, mobility, yoga, pilates, tai chi, warmups, cooldowns, and protocols.",
    href: "/recovery",
    meta: "recovery"
  }
];

export const adminArchitecture: FeatureCard[] = [
  {
    title: "Moderation",
    description: "Queue, assign, review, resolve, dismiss, archive, escalate, and audit community safety decisions.",
    meta: "moderation queue"
  },
  {
    title: "Reports",
    description: "Report intake for users, posts, comments, media, galleries, profiles, and external embeds.",
    meta: "reports"
  },
  {
    title: "Content Review",
    description: "Review posts, blogs, journals, transformations, tips, questions, progress updates, and embedded media.",
    meta: "content review"
  },
  {
    title: "User Review",
    description: "Review public profiles, role changes, banners, avatars, badges, titles, pets, and safety notes.",
    meta: "user review"
  },
  {
    title: "Community Safety",
    description: "Safety notes, blocked relationships, report outcomes, hidden content, admin actions, and audit trail.",
    meta: "safety"
  }
];

export const databaseModelGroups: FeatureCard[] = [
  {
    title: "Account Models",
    description: "profiles, profile_settings, achievements, badges, titles, profile_badges, profile_titles, pets, and pet_events.",
    meta: "account"
  },
  {
    title: "Community Models",
    description: "content_posts, blog_posts, comments, reactions, follows, saved_content, reports, and moderation_queue.",
    meta: "community"
  },
  {
    title: "Media Models",
    description: "media_assets, media_galleries, media_gallery_items, transformation_timelines, and transformation_milestones.",
    meta: "media"
  },
  {
    title: "Search Models",
    description: "search_documents with target type, category, tags, owner, status, visibility, and weighted search vector.",
    meta: "search"
  },
  {
    title: "Content Category Models",
    description: "content_categories and content_category_assignments for workout, recovery, nutrition, media, and community taxonomy.",
    meta: "taxonomy"
  },
  {
    title: "Admin Models",
    description: "reports, moderation_queue, moderation_actions, user_review_notes, and blocked_users.",
    meta: "admin"
  }
];

export const dashboardStats = [
  { label: "Readiness", value: "82%", detail: "Strength work is green with shoulder prep before pressing." },
  { label: "Current Streak", value: "18", detail: "Training, recovery, and nutrition logs are active this week." },
  { label: "Weekly XP", value: "2,430", detail: "Workout completion, saves, comments, and pet XP boosts." },
  { label: "Challenge Rank", value: "#18", detail: "Weekly volume builder leaderboard among friends." }
];

export const dashboardTodayPlan: FeatureCard[] = [
  {
    title: "Upper Strength A",
    description: "Bench setup, horizontal pressing, row volume, triceps support, and shoulder-friendly cooldown.",
    href: "/workouts/builder",
    meta: "60 min | workout"
  },
  {
    title: "Recomp Nutrition Check",
    description: "Hit protein target, add workout carbs, confirm hydration, and keep the meal prep note updated.",
    href: "/nutrition",
    meta: "2,650 kcal"
  },
  {
    title: "Shoulder Prep Protocol",
    description: "Scapular control, rotator cuff activation, low-load range checks, and pressing tolerance notes.",
    href: "/recovery",
    meta: "10 min | recovery"
  },
  {
    title: "Day 90 Progress Follow-up",
    description: "Review transformation photos, write a short milestone note, and choose profile visibility.",
    href: "/transformations",
    meta: "Progress wall"
  }
];

export const dashboardProgressTracks = [
  { label: "Weekly training", value: "4/5 sessions", progress: 80, detail: "One strength session remains." },
  { label: "Nutrition consistency", value: "5/7 days", progress: 71, detail: "Two meal logs to finish the week." },
  { label: "Recovery completion", value: "3/4 protocols", progress: 75, detail: "Shoulder prep is queued for today." },
  { label: "Pet XP", value: "6,400 / 7,000", progress: 91, detail: "Complete a challenge to level Volt Lynx." }
];

export const dashboardFocusTags = [
  "Shoulder prep",
  "Bench setup",
  "Protein target",
  "Hydration",
  "Mobility",
  "Transformation note",
  "Friend leaderboard",
  "Pet XP"
];

export const dashboardQuickActions: FeatureCard[] = [
  {
    title: "Build Routine",
    description: "Open the workout builder with warmup, main work, accessories, conditioning, and cooldown blocks.",
    href: "/workouts/builder",
    meta: "Workout"
  },
  {
    title: "Post Progress",
    description: "Add a transformation update with media, milestone text, comments, saves, and visibility controls.",
    href: "/transformations",
    meta: "Profile"
  },
  {
    title: "Ask the Community",
    description: "Compose a training question, pick a channel, and keep it tied to profile identity and moderation.",
    href: "/community/chat",
    meta: "Chat"
  },
  {
    title: "Review Safety",
    description: "Open the injured athlete education area before changing training around pain or symptoms.",
    href: "/injured-athlete",
    meta: "Education"
  }
];

export const dashboardSavedQueue: FeatureCard[] = [
  {
    title: "Bench setup form check",
    description: "Saved coaching video from Coach Maya with cues for shoulder position and grip width.",
    href: "/media",
    meta: "Video"
  },
  {
    title: "Recovery Week Reset",
    description: "Deload plan with reduced loading, mobility, range, readiness, and easy conditioning.",
    href: "/workouts",
    meta: "Program"
  },
  {
    title: "Lean bulk grocery walkthrough",
    description: "Food library item with protein anchors, carb bases, grocery structure, and prep notes.",
    href: "/nutrition",
    meta: "Nutrition"
  },
  {
    title: "Return-to-training checklist",
    description: "Recovery article covering pain-free range, load tolerance, fatigue, and professional-care prompts.",
    href: "/community/blog",
    meta: "Article"
  }
];

export const appToWebsiteLinks: FeatureCard[] = [
  {
    title: "App Dashboard -> Website Education",
    description: "A dashboard tap can open the knowledge-base index for body education, training styles, adaptive fitness, injuries, nutrition, recovery, and habits.",
    href: "/education",
    meta: "app://education"
  },
  {
    title: "Builder Notes -> Training & Nutrition Principles",
    description: "Training and nutrition notes can open education for DC Training, muscle confusion, carb backloading, overload, periodization, calories, macros, and recovery.",
    href: "/training-nutrition-principles",
    meta: "app://principles"
  },
  {
    title: "Workout Log -> Exercise Library",
    description: "Logged exercises can open teaching cues, setup, execution, common mistakes, regressions, and progressions on the website.",
    href: "/exercises",
    meta: "app://exercises"
  },
  {
    title: "Program Tracker -> Routine Library",
    description: "Tracked programs can open routine templates with block-by-block coaching notes and related education pages.",
    href: "/routines",
    meta: "app://routines"
  },
  {
    title: "Pain or Symptoms -> Injured Athlete",
    description: "Symptom notes can route to safety-first injury education, return-to-training phases, and professional-care prompts.",
    href: "/injured-athlete",
    meta: "app://recovery/injured-athlete"
  },
  {
    title: "Nutrition Log -> Nutrition Education",
    description: "Meal logs can open goal education for bulk, lean bulk, cut, recomp, powerlifting, bodybuilding, endurance, tactical, and general fitness.",
    href: "/nutrition",
    meta: "app://nutrition"
  },
  {
    title: "Recovery Check-in -> Recovery Education",
    description: "Readiness, sleep, warmup, cooldown, mobility, stretching, breathing, and active recovery notes can open the matching website guides.",
    href: "/recovery",
    meta: "app://recovery"
  },
  {
    title: "Media Upload -> Media Galleries",
    description: "Photos and videos can open transformation, workout, nutrition, and recovery gallery education and moderation-aware media pages.",
    href: "/media",
    meta: "app://media"
  },
  {
    title: "Search -> Unified Website Search",
    description: "App search can open the website search surface for users, workouts, exercises, articles, videos, photos, nutrition, and recovery.",
    href: "/search",
    meta: "app://search"
  }
];

export const dashboardActivityFeed = [
  {
    title: "Coach Maya replied",
    description: "Keep the first sets submaximal while the bench setup becomes automatic.",
    meta: "Community"
  },
  {
    title: "Volt Lynx gained XP",
    description: "Recovery completion added pet XP and kept the 18-day streak active.",
    meta: "Pet"
  },
  {
    title: "Transformation wall updated",
    description: "Day 90 progress media is visible to followers with comments and saves enabled.",
    meta: "Profile"
  }
];

export const workoutSystems = [
  "Bodyweight Warrior",
  "Iron Forge",
  "Performance Lab"
];

export const workoutSystemCards: FeatureCard[] = [
  {
    title: "Bodyweight Warrior",
    description: "No-equipment and minimal-equipment training for calisthenics, travel routines, core control, mobility, and consistency.",
    href: "/workouts",
    meta: "bodyweight"
  },
  {
    title: "Iron Forge",
    description: "Strength, hypertrophy, bodybuilding, and powerlifting plans built around progressive loading and gym-based routines.",
    href: "/workouts",
    meta: "iron"
  },
  {
    title: "Performance Lab",
    description: "Athletic, tactical, endurance, conditioning, movement quality, and readiness-focused programming.",
    href: "/workouts",
    meta: "performance"
  }
];

export const muscleGroups = [
  "Chest",
  "Back",
  "Shoulders",
  "Traps",
  "Biceps",
  "Triceps",
  "Forearms",
  "Grip",
  "Hands",
  "Legs",
  "Glutes",
  "Quads",
  "Hamstrings",
  "Adductors",
  "Abductors",
  "Calves",
  "Soleus",
  "Tibialis Anterior",
  "Core",
  "Obliques",
  "Transverse Abdominis",
  "Neck",
  "Feet",
  "Cardio",
  "Mobility",
  "Recovery"
];

export const workoutBuilderBlocks: FeatureCard[] = [
  {
    title: "Session Builder",
    description: "Assemble warmup, primary lifts, accessory work, conditioning, cooldown, and recovery notes.",
    status: "live-ready-ui"
  },
  {
    title: "Saved Routines",
    description: "Reusable weekly templates with favorite workouts, equipment notes, and visibility controls.",
    status: "supabase-ready"
  },
  {
    title: "Workout History",
    description: "Completed workouts, volume, reps, streaks, XP awards, and program completion summaries.",
    status: "supabase-ready"
  },
  {
    title: "Uploaded Media",
    description: "Attach workout photos, videos, form checks, exercise demonstrations, and progress notes.",
    status: "supabase-ready"
  }
];

export const featuredWorkoutPlans: FeatureCard[] = [
  {
    title: "Iron Forge Upper Strength",
    description: "Bench-focused session with scap prep, horizontal pressing, row volume, triceps support, and a short cooldown.",
    meta: "Iron Forge"
  },
  {
    title: "Iron Forge Lower Hypertrophy",
    description: "Quad and glute volume day with squat patterning, unilateral work, hamstring accessories, calves, and core.",
    meta: "Iron Forge"
  },
  {
    title: "Performance Lab Tactical Conditioning",
    description: "Carry intervals, sled or incline work, trunk endurance, aerobic capacity, and post-session mobility.",
    meta: "Performance Lab"
  },
  {
    title: "Bodyweight Warrior Travel Circuit",
    description: "No-equipment push, pull, squat, hinge, and core circuit with tempo options and low-impact regressions.",
    meta: "Bodyweight Warrior"
  },
  {
    title: "Performance Lab Zone 2 Engine",
    description: "Steady endurance session with breathing targets, effort checkpoints, warmup, and recovery notes.",
    meta: "Performance Lab"
  },
  {
    title: "Bodyweight Warrior Recovery Reset",
    description: "Reduced-load sessions that preserve movement quality while emphasizing mobility, range, and readiness.",
    meta: "Bodyweight Warrior"
  }
];

export const builderTemplates: FeatureCard[] = [
  {
    title: "Strength Template",
    description: "Warmup, main lift, secondary lift, two accessories, trunk work, and cooldown.",
    meta: "5 blocks"
  },
  {
    title: "Hypertrophy Template",
    description: "Activation, two compound patterns, muscle-specific accessories, pump finisher, and stretch notes.",
    meta: "6 blocks"
  },
  {
    title: "Conditioning Template",
    description: "Prep, skill primer, intervals, loaded carry or engine work, breathing cooldown, and log notes.",
    meta: "5 blocks"
  },
  {
    title: "Rehab-Friendly Template",
    description: "Tolerance check, range work, controlled strengthening, easy conditioning, and symptoms notes.",
    meta: "Safety first"
  }
];

export const injuryCategories = [
  "Lower Back",
  "Neck",
  "Shoulder",
  "Rotator Cuff",
  "Elbow",
  "Wrist",
  "Hand",
  "Upper Back",
  "Core",
  "Hip",
  "Glutes",
  "Hamstring",
  "Quad",
  "Knee",
  "ACL",
  "MCL",
  "PCL",
  "Meniscus",
  "Calf",
  "Achilles",
  "Ankle",
  "Foot"
];

export const injuredAthleteGuidance: FeatureCard[] = [
  {
    title: "Education",
    description: "Plain-language anatomy, common training triggers, warning signs, and professional-care prompts."
  },
  {
    title: "Recovery Exercises",
    description: "Phase-based movement libraries for early tolerance, control, strength, and conditioning return."
  },
  {
    title: "Mobility and Stretching",
    description: "Gentle mobility, range-of-motion drills, tissue prep, and position-specific cooldown guidance."
  },
  {
    title: "Return to Training",
    description: "Readiness checks, progression rules, regression options, and sport or lift re-entry templates."
  }
];

export const recoverySystems = [
  "Injured Athlete",
  "Adaptive Fitness",
  "Mobility",
  "Yoga",
  "Pilates",
  "Tai Chi"
];

export const recoverySystemCards: FeatureCard[] = [
  {
    title: "Injured Athlete",
    description: "Education, symptom-aware training notes, return-to-training phases, professional-care prompts, and safety-first content.",
    href: "/injured-athlete",
    meta: "education"
  },
  {
    title: "Adaptive Fitness",
    description: "Educational considerations for amputees, prosthetic users, wheelchair users, limited mobility, neurological conditions, seniors, adaptive athletes, and special conditions.",
    href: "/adaptive-fitness",
    meta: "inclusive education"
  },
  {
    title: "Mobility",
    description: "Warmups, cooldowns, posture, breathing, range work, balance, and recovery protocol libraries.",
    href: "/recovery",
    meta: "mobility"
  },
  {
    title: "Yoga",
    description: "Beginner through advanced flows, breath practice, mobility sequences, and recovery-friendly routines.",
    href: "/yoga",
    meta: "yoga"
  },
  {
    title: "Pilates",
    description: "Core control, mat routines, posture, breathing, recovery pilates, and athlete movement quality.",
    href: "/pilates",
    meta: "pilates"
  },
  {
    title: "Tai Chi",
    description: "Foundational forms, balance movement, slow flows, breathing, and joint-friendly recovery practice.",
    href: "/tai-chi",
    meta: "tai chi"
  }
];

export const yogaLevels = [
  "Beginner Yoga",
  "Intermediate Yoga",
  "Advanced Yoga"
];

export const pilatesSystems = [
  "Core Control",
  "Mat Routines",
  "Athlete Pilates",
  "Mobility Pilates",
  "Recovery Pilates",
  "Posture and Breathing"
];

export const taiChiSystems = [
  "Foundational Forms",
  "Balance Movements",
  "Breathing Practice",
  "Slow Flow Sequences",
  "Joint-Friendly Recovery",
  "Mindful Conditioning"
];

export const nutritionGoals = [
  "Bulk",
  "Lean Bulk",
  "Cut",
  "Recomp",
  "Powerlifting",
  "Tactical",
  "Endurance"
];

export const nutritionSystemCards: FeatureCard[] = [
  {
    title: "Bulk",
    description: "Calorie surplus plans, high-protein meals, grocery lists, snack structure, and progressive bodyweight tracking.",
    href: "/nutrition",
    meta: "surplus"
  },
  {
    title: "Lean Bulk",
    description: "Controlled surplus templates with workout carbs, protein anchors, hydration, and weekly adjustment notes.",
    href: "/nutrition",
    meta: "controlled surplus"
  },
  {
    title: "Cut",
    description: "High-satiety meals, protein targets, flexible carbs, adherence checkpoints, and strength-preserving guidance.",
    href: "/nutrition",
    meta: "deficit"
  },
  {
    title: "Recomp",
    description: "Protein-forward planning, body-measurement history, workout fuel, and consistency-focused habit tracking.",
    href: "/nutrition",
    meta: "recomp"
  },
  {
    title: "Powerlifting",
    description: "Meet-prep fueling, training-day carbohydrates, hydration, sodium notes, and weight-class planning.",
    href: "/nutrition",
    meta: "strength"
  },
  {
    title: "Tactical",
    description: "Portable meals, durable carbs, readiness hydration, field-friendly prep, and long-shift fueling.",
    href: "/nutrition",
    meta: "readiness"
  },
  {
    title: "Endurance",
    description: "Carb timing, long-session fuel, electrolyte prompts, recovery meals, and aerobic training support.",
    href: "/nutrition",
    meta: "endurance"
  }
];

export const nutritionBlocks: FeatureCard[] = [
  {
    title: "Calories",
    description: "Goal-based intake planning with maintenance, surplus, deficit, and activity-adjustment guidance."
  },
  {
    title: "Protein",
    description: "Daily targets, meal spacing, training-day emphasis, and recovery support."
  },
  {
    title: "Carbs",
    description: "Performance fuel, endurance loading, tactical readiness, and workout timing."
  },
  {
    title: "Fats",
    description: "Hormonal support, satiety, food quality, and meal-plan balance."
  },
  {
    title: "Hydration",
    description: "Daily fluid targets, electrolyte prompts, hot-weather training notes, and recovery checkpoints."
  },
  {
    title: "Meal Plans",
    description: "Grocery lists, meal templates, macro splits, and saved nutrition plans."
  }
];

export const mealPlanTemplates: FeatureCard[] = [
  {
    title: "Recomp Training Day",
    description: "Protein-forward meals, workout carbs, vegetables at two meals, and hydration reminders.",
    meta: "2,650 kcal"
  },
  {
    title: "Lean Bulk Week",
    description: "Higher-carb training meals, simple prep anchors, calorie-dense add-ons, and snack options.",
    meta: "3,150 kcal"
  },
  {
    title: "Cut With Strength",
    description: "Lean proteins, high-satiety carbs, planned fats, flexible meals, and adherence checkpoints.",
    meta: "2,100 kcal"
  },
  {
    title: "Endurance Fuel",
    description: "Carb timing, electrolyte prompts, pre-session snacks, recovery meals, and long-session notes.",
    meta: "Performance"
  },
  {
    title: "Tactical Readiness",
    description: "Portable proteins, durable carbs, hydration targets, and field-friendly meal prep.",
    meta: "Readiness"
  },
  {
    title: "General Fitness",
    description: "Balanced plate templates, simple grocery structure, habit tracking, and weekend flexibility.",
    meta: "Sustainable"
  }
];

export const foodLibrary = [
  { food: "Chicken breast", protein: 31, carbs: 0, fats: 3.6, category: "Lean protein" },
  { food: "Greek yogurt", protein: 10, carbs: 4, fats: 0.4, category: "Protein snack" },
  { food: "Oats", protein: 13, carbs: 68, fats: 7, category: "Carb base" },
  { food: "Salmon", protein: 25, carbs: 0, fats: 13, category: "Protein and fats" },
  { food: "Rice", protein: 2.7, carbs: 28, fats: 0.3, category: "Carb base" },
  { food: "Black beans", protein: 9, carbs: 24, fats: 0.5, category: "Plant protein" }
];

export const mediaCategories = [
  "Photos",
  "Videos",
  "Transformation Galleries",
  "Workout Galleries",
  "Nutrition Galleries",
  "Recovery Galleries"
];

export const mediaLibrary: MediaItem[] = [
  { title: "Bench setup form check", type: "video", category: "Workout Galleries", tags: ["chest", "powerlifting", "form"] },
  { title: "Day 90 transformation collage", type: "photo", category: "Transformation Galleries", tags: ["progress", "recomp", "profile"] },
  { title: "Hip mobility sequence", type: "video", category: "Recovery Galleries", tags: ["hip", "mobility", "warmup"] },
  { title: "Lean bulk grocery walkthrough", type: "article", category: "Nutrition Galleries", tags: ["meal plan", "protein", "bulk"] },
  { title: "Beginner yoga flow", type: "video", category: "Recovery Galleries", tags: ["beginner", "breathing", "mobility"] },
  { title: "Mat pilates core control", type: "video", category: "Recovery Galleries", tags: ["core", "control", "posture"] },
  { title: "Tai chi balance flow", type: "video", category: "Recovery Galleries", tags: ["balance", "breathing", "joint-friendly"] },
  { title: "Tactical conditioning finisher", type: "program", category: "Workout Galleries", tags: ["tactical", "endurance", "conditioning"] }
];

export const recoveryProtocols: FeatureCard[] = [
  {
    title: "Desk Posture Reset",
    description: "Breathing, thoracic extension, hip flexor mobility, neck control, and easy walk finish.",
    meta: "12 min"
  },
  {
    title: "Lower-Body Cooldown",
    description: "Calf, quad, hamstring, glute, and hip mobility sequence after lifting or running.",
    meta: "15 min"
  },
  {
    title: "Shoulder Prep",
    description: "Scapular control, rotator cuff activation, pressing warmup, and load-readiness checks.",
    meta: "10 min"
  },
  {
    title: "Breathing Downshift",
    description: "Low-intensity breathing practice for post-training recovery and sleep preparation.",
    meta: "8 min"
  }
];

export const injuredAthletePhases: FeatureCard[] = [
  {
    title: "Phase 1: Calm",
    description: "Reduce aggravating work, log symptoms, use gentle range of motion, and identify professional-care triggers.",
    meta: "Tolerance"
  },
  {
    title: "Phase 2: Control",
    description: "Rebuild pain-free positions, tempo control, balance, light isometrics, and confidence in daily movement.",
    meta: "Movement quality"
  },
  {
    title: "Phase 3: Strength",
    description: "Progress load gradually, track next-day response, add unilateral work, and restore capacity.",
    meta: "Progressive"
  },
  {
    title: "Phase 4: Return",
    description: "Reintroduce sport or lift demands with readiness checks, regressions, and conservative volume.",
    meta: "Training re-entry"
  }
];

export const mindBodyHighlights: FeatureCard[] = [
  {
    title: "Morning Mobility Flow",
    description: "Yoga-inspired sequence for spine, hips, shoulders, breathing, and a low-friction start.",
    meta: "Beginner"
  },
  {
    title: "Core Control Mat Set",
    description: "Pilates sequence for trunk control, posture, breath timing, and athletic carryover.",
    meta: "Intermediate"
  },
  {
    title: "Balance and Breath Form",
    description: "Tai chi practice for joint-friendly movement, balance, breathing, and recovery days.",
    meta: "All levels"
  }
];

export const transformationMilestones = [
  "Day 1",
  "Day 30",
  "Day 60",
  "Day 90",
  "Day 120",
  "Day 180",
  "Final"
];

export const communityChannels = [
  "General Fitness",
  "Bodybuilding",
  "Powerlifting",
  "Tactical Fitness",
  "Endurance",
  "Nutrition",
  "Recovery",
  "Injured Athlete",
  "Adaptive Fitness",
  "Special Conditions",
  "Yoga",
  "Pilates",
  "Tai Chi"
];

export const blogSystems: FeatureCard[] = [
  {
    title: "Blog Posts",
    description: "Long-form creator education, guides, lessons, reflections, and embedded platform content."
  },
  {
    title: "Workout Journals",
    description: "Training notes, program logs, PR attempts, favorite workouts, and completed routines."
  },
  {
    title: "Transformation Journals",
    description: "Progress narratives with photos, videos, timelines, milestones, and story updates."
  },
  {
    title: "Nutrition Journals",
    description: "Meal-plan notes, grocery lists, hydration logs, macro reflections, and saved nutrition plans."
  },
  {
    title: "Injury Recovery Journals",
    description: "Return-to-training logs, mobility work, strengthening phases, and professional-care reminders."
  }
];

export const communityPostTypes = [
  "Blogs",
  "Journals",
  "Transformations",
  "Tips",
  "Questions",
  "Progress Updates"
];

export const socialFeatures = [
  "Follow users",
  "Followers",
  "Following",
  "Saved content",
  "Favorite creators",
  "Likes",
  "Comments",
  "Shares",
  "Saves"
];

export const moderationFeatures = [
  "Report content",
  "Report users",
  "Moderation queue",
  "Admin controls",
  "Creator tip review",
  "Media review",
  "Comment review",
  "Profile safety review",
  "User review",
  "Content review",
  "Community safety"
];

export const discoverTargets = [
  "Users",
  "Workouts",
  "Exercises",
  "Articles",
  "Videos",
  "Photos",
  "Images",
  "Muscle Groups",
  "Injuries",
  "Conditions",
  "Contributors",
  "Nutrition",
  "Recovery",
  "Adaptive Fitness"
];

export const searchFilters = [
  "Target type",
  "Category",
  "Keyword",
  "Media type",
  "User",
  "Contributor",
  "Review status",
  "Credentials",
  "Source",
  "License",
  "Workout system",
  "Training principles",
  "Recovery system",
  "Nutrition system",
  "Nutrition principles",
  "Adaptive fitness",
  "Special condition",
  "Difficulty",
  "Equipment",
  "Visibility"
];

export const leaderboardCategories = [
  "XP",
  "Reps",
  "Challenges",
  "Streaks",
  "Pet XP"
];

export const leaderboardScopes = [
  "Global",
  "Friends",
  "Groups"
];

export const challengeTypes = [
  "Daily streaks",
  "Weekly volume",
  "Transformation milestones",
  "Nutrition consistency",
  "Recovery completion",
  "Community teaching",
  "Pet XP boosts"
];

export const challengeCatalog: FeatureCard[] = [
  {
    title: "7-Day Training Streak",
    description: "Complete any logged workout for seven consecutive days and earn XP plus a streak badge.",
    meta: "500 XP"
  },
  {
    title: "Weekly Volume Builder",
    description: "Hit four strength sessions, record top sets, and post one training note to the community.",
    meta: "900 XP"
  },
  {
    title: "Mobility Reset",
    description: "Finish five recovery sessions, save a protocol, and log readiness at the end of the week.",
    meta: "Pet XP boost"
  },
  {
    title: "Meal Prep Consistency",
    description: "Create a grocery list, follow three planned meals, and add one nutrition journal note.",
    meta: "Nutrition badge"
  },
  {
    title: "Transformation Milestone",
    description: "Add a progress photo or video, write a milestone note, and choose profile visibility.",
    meta: "Timeline"
  },
  {
    title: "Community Coach",
    description: "Publish a helpful tip, answer a question, and receive saves or likes from members.",
    meta: "Creator award"
  }
];

export const achievementSystems = [
  "Badges",
  "Titles",
  "User accolades",
  "Completed programs",
  "Workout streaks",
  "Nutrition streaks",
  "Recovery milestones",
  "Creator contributions"
];

export const achievementCatalog: FeatureCard[] = [
  {
    title: "Routine Architect",
    description: "Create and save four complete workout routines with warmup, main work, accessories, and cooldowns.",
    meta: "Title"
  },
  {
    title: "90 Day Builder",
    description: "Add Day 1, Day 30, Day 60, and Day 90 transformation milestones to the profile wall.",
    meta: "Badge"
  },
  {
    title: "Recovery Reset",
    description: "Complete five recovery protocols and keep a seven-day readiness log.",
    meta: "Badge"
  },
  {
    title: "Coach Tip Pro",
    description: "Publish three creator tips that receive saves from the community.",
    meta: "Accolade"
  },
  {
    title: "Volt Streaker",
    description: "Maintain a training, nutrition, or recovery streak while earning pet XP.",
    meta: "Title"
  },
  {
    title: "Form Check",
    description: "Upload a workout video, attach tags, and keep it visible on the media library.",
    meta: "Badge"
  }
];

export const petSystems: FeatureCard[] = [
  {
    title: "Selected Pet",
    description: "Profile-visible companion with level, XP, active streak bonuses, and challenge boosts."
  },
  {
    title: "Pet XP",
    description: "Earned through workouts, recovery, nutrition consistency, creator posts, and challenges."
  },
  {
    title: "Pet Showcase",
    description: "Web mirror for mobile pet collection, evolution states, titles, and profile display."
  }
];

export const petShowcase: FeatureCard[] = [
  {
    title: "Volt Lynx",
    description: "Fast streak-focused companion for hybrid athletes and consistency challenges.",
    meta: "Level 12"
  },
  {
    title: "Ember Hawk",
    description: "Creator-focused companion that levels through helpful tips, saved posts, and community coaching.",
    meta: "Level 22"
  },
  {
    title: "Green Bolt",
    description: "Beginner-friendly companion that rewards workouts, meal prep, and recovery sessions.",
    meta: "Level 7"
  }
];

export const premiumFoundation: FeatureCard[] = [
  {
    title: "Advanced Profiles",
    description: "Creator pages, transformation wall controls, analytics panels, and expanded badges.",
    status: "billing-disabled"
  },
  {
    title: "Advanced Analytics",
    description: "Training, nutrition, recovery, streak, XP, pet XP, and leaderboard trend dashboards.",
    status: "billing-disabled"
  },
  {
    title: "Expanded Storage",
    description: "Higher limits for transformation photos, videos, journals, media posts, and creator libraries.",
    status: "billing-disabled"
  },
  {
    title: "Private Groups",
    description: "Private training groups, coaching chats, member-only content channels, and group leaderboards.",
    status: "billing-disabled"
  }
];

export const premiumTiers: FeatureCard[] = [
  {
    title: "Free Companion",
    description: "Access workouts, nutrition, recovery, profiles, media, community, search, pets, achievements, and leaderboards.",
    meta: "Available"
  },
  {
    title: "Creator Plus",
    description: "Expanded profile controls, larger media limits, creator analytics, and premium channel tools.",
    status: "billing-disabled"
  },
  {
    title: "Coach Groups",
    description: "Private groups, coaching chats, shared challenge spaces, group leaderboards, and member management.",
    status: "billing-disabled"
  }
];

export const adminSummaryCards: FeatureCard[] = [
  {
    title: "3 Items in Review",
    description: "External embed, user report, and profile media review are visible in the moderation queue.",
    meta: "Moderation"
  },
  {
    title: "10 Data Areas",
    description: "Profiles, posts, blogs, media, comments, reactions, follows, saves, reports, and review queue.",
    meta: "Schema"
  },
  {
    title: "4 Safety Controls",
    description: "Approve, hide, escalate, and archive workflows are represented as review controls.",
    meta: "Admin UI"
  }
];

export const profileDemo = {
  username: "er-athlete",
  displayName: "ER Athlete",
  bio: "Hybrid strength athlete building a leaner, stronger, more resilient routine.",
  currentGoal: "Recomp with tactical conditioning",
  selectedPet: "Volt Lynx",
  petLevel: 12,
  totalXp: "42,850",
  streak: "18 days",
  leaderboardRank: "#128 global XP",
  achievements: ["90 Day Builder", "Nutrition Streak", "Recovery Reset", "Community Coach"],
  badges: ["Chest Specialist", "Mobility Builder", "Lean Bulk", "Form Check"],
  titles: ["Routine Architect", "Volt Streaker"],
  completedWorkouts: ["Upper Strength A", "Zone 2 Engine", "Mobility Reset", "Leg Hypertrophy"],
  accolades: ["Top tip: bench setup", "Transformation story featured", "Challenge finisher"],
  favoriteWorkouts: ["Push Hypertrophy", "Tactical Conditioning", "Core Stability"],
  savedRoutines: ["4 Day Split", "Travel Bodyweight", "Recovery Week"]
};

export const appMirrorFeatures: FeatureCard[] = [
  { title: "Education", description: "Knowledge-base pages teach body areas, training styles, injuries, nutrition, recovery, adaptive fitness, and habits.", href: "/education" },
  { title: "Training & Nutrition Principles", description: "DC Training, muscle confusion, carb backloading, overload, periodization, volume, intensity, calories, macros, hydration, and recovery education.", href: "/training-nutrition-principles" },
  { title: "Adaptive Fitness", description: "Adaptive and special-condition education for modified movement, equipment considerations, safety reminders, and app tracking handoffs.", href: "/adaptive-fitness" },
  { title: "Exercise Library", description: "Exercise teaching cues, setup, regressions, progressions, body areas, and app tracking prompts.", href: "/exercises" },
  { title: "Routine Library", description: "Trackable routine templates that connect education pages to workouts, recovery, adaptive movement, and nutrition.", href: "/routines" },
  { title: "Community Groups", description: "Join spaces for training styles, nutrition goals, adaptive fitness, sports, transformations, challenges, and support.", href: "/community/groups" },
  { title: "Dashboard", description: "Today plan, readiness, streaks, XP, saved content, quick actions, and recent activity.", href: "/dashboard" },
  { title: "Workouts", description: "Library, builder, saved routines, favorite workouts, completed programs, workout history.", href: "/workouts" },
  { title: "Nutrition", description: "Meal plans, food library, macros, grocery lists, hydration, nutrition history.", href: "/nutrition" },
  { title: "Recovery", description: "Mobility, stretching, warmups, cooldowns, posture, balance, breathing, recovery protocols.", href: "/recovery" },
  { title: "Injured Athlete", description: "Injury categories, education, recovery exercises, media galleries, return-to-training guidance.", href: "/injured-athlete" },
  { title: "Mind Body", description: "Yoga, pilates, and tai chi sections with routines, articles, images, and instructional video slots.", href: "/yoga" },
  { title: "Pets", description: "Selected pet, pet level, pet XP, profile display, challenge boosts, and pet showcase.", href: "/pets" },
  { title: "Challenges", description: "Challenge library, streaks, XP, badges, pet XP, and group challenge structure.", href: "/challenges" },
  { title: "Achievements", description: "Badges, titles, accolades, completed programs, streak awards, creator contribution awards.", href: "/achievements" },
  { title: "Transformations", description: "Photo uploads, video uploads, progress timeline, story journal, milestone wall.", href: "/transformations" },
  { title: "Community", description: "Profiles, follows, posts, blogs, chat, creator tips, moderation, reports, saved content.", href: "/community" },
  { title: "Leaderboards", description: "XP, reps, challenges, streaks, pet XP, and global, friends, and group scopes.", href: "/leaderboards" },
  { title: "Profiles", description: "Picture, banner, bio, collage, transformation wall, accolades, achievements, badges, titles.", href: "/profile/er-athlete" }
];

export const footerGroups = [
  {
    title: "Train",
    links: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Education", href: "/education" },
      { label: "Training & Nutrition Principles", href: "/training-nutrition-principles" },
      { label: "Exercise Library", href: "/exercises" },
      { label: "Routine Library", href: "/routines" },
      { label: "Workout Library", href: "/workouts" },
      { label: "Workout Builder", href: "/workouts/builder" },
      { label: "Challenges", href: "/challenges" },
      { label: "Leaderboards", href: "/leaderboards" }
    ]
  },
  {
    title: "Recover",
    links: [
      { label: "Recovery", href: "/recovery" },
      { label: "Injured Athlete", href: "/injured-athlete" },
      { label: "Adaptive Fitness", href: "/adaptive-fitness" },
      { label: "Yoga", href: "/yoga" },
      { label: "Pilates", href: "/pilates" },
      { label: "Tai Chi", href: "/tai-chi" }
    ]
  },
  {
    title: "Community",
    links: [
      { label: "Community Hub", href: "/community" },
      { label: "Groups", href: "/community/groups" },
      { label: "Blog", href: "/community/blog" },
      { label: "Chat", href: "/community/chat" },
      { label: "Media", href: "/media" },
      { label: "Discover", href: "/discover" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Disclaimer", href: "/legal/disclaimer" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Service", href: "/legal/terms" }
    ]
  }
];

