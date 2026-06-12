import type { FeatureCard } from "@/types/platform";
import type { ExpertReviewFields } from "@/types/content";

export type ReferencedEducationCard = FeatureCard & Partial<ExpertReviewFields> & {
  source: string;
  license: string;
  references: string[];
  mediaPlan?: {
    imageSlots: string[];
    videoSlots: string[];
    licensingNotes: string;
  };
};

export type InstructionalMediaRecord = ReferencedEducationCard & {
  mediaType: "movement photos" | "exercise videos" | "equipment photos" | "muscle diagrams" | "recovery guides";
  image: string;
  embedHref?: string;
};

export type EquipmentLibraryItem = ReferencedEducationCard & {
  equipment: string;
  bestFor: string[];
  coachingCues: string[];
  safetyNotes: string[];
};

export type AdaptiveEducationSection = ReferencedEducationCard & {
  audience: string;
  focusAreas: string[];
  trackingPrompts: string[];
};

export type SearchableContentRecord = ReferencedEducationCard & {
  recordType: "exercise" | "article" | "video" | "image" | "equipment" | "condition" | "muscle group";
  searchableFields: string[];
};

const generalReferences = [
  "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines",
  "https://medlineplus.gov/exerciseandphysicalfitness.html"
];

export const appCategoryPaths: FeatureCard[] = [
  { title: "Dashboard", description: "Daily plan, readiness, streaks, saved content, progress loops, and app tracking handoffs.", href: "/dashboard", meta: "app core" },
  { title: "Education", description: "Body education, training styles, adaptive fitness, injuries, nutrition, recovery, and habit systems.", href: "/education", meta: "knowledge base" },
  { title: "Training & Nutrition Principles", description: "Progressive overload, periodization, DC Training, muscle confusion, carb backloading, macros, and recovery basics.", href: "/training-nutrition-principles", meta: "principles" },
  { title: "Exercise Library", description: "Setup, execution, regressions, progressions, muscles, equipment, and app tracking cues.", href: "/exercises", meta: "exercise records" },
  { title: "Routine Library", description: "Trackable routine templates with block-by-block coaching notes and related education.", href: "/routines", meta: "program records" },
  { title: "Workouts", description: "Bodyweight Warrior, Iron Forge, Performance Lab, builder, saved routines, and training systems.", href: "/workouts", meta: "training" },
  { title: "Nutrition", description: "Bulk, lean bulk, cut, recomp, powerlifting, bodybuilding, endurance, tactical, and general fitness.", href: "/nutrition", meta: "nutrition" },
  { title: "Recovery", description: "Sleep, warmups, cooldowns, mobility, stretching, breathing, active recovery, and longevity.", href: "/recovery", meta: "recovery" },
  { title: "Injured Athlete", description: "Region-based injury education, return-to-training phases, recovery media, and safety reminders.", href: "/injured-athlete", meta: "safety" },
  { title: "Adaptive Fitness", description: "Wheelchair fitness, prosthetic users, amputees, MS, Parkinson's, arthritis, fibromyalgia, chronic pain, seniors, and limited mobility.", href: "/adaptive-fitness", meta: "inclusive" },
  { title: "Yoga", description: "Yoga education, beginner flows, mobility links, recovery days, breathing, and app tracking.", href: "/yoga", meta: "mind body" },
  { title: "Pilates", description: "Core control, posture, breath timing, mat routines, and recovery-friendly movement.", href: "/pilates", meta: "mind body" },
  { title: "Tai Chi", description: "Balance, breath, slow control, joint-friendly practice, and active aging education.", href: "/tai-chi", meta: "balance" },
  { title: "Community", description: "Groups, posts, comments, blogs, journals, chat channels, media sharing, and moderation.", href: "/community", meta: "connection" },
  { title: "Media", description: "Photos, videos, transformations, workout demos, nutrition media, recovery guides, and embeds.", href: "/media", meta: "media" },
  { title: "Search", description: "Unified discovery for exercises, articles, videos, images, equipment, conditions, and contributors.", href: "/search", meta: "discovery" }
];

export const instructionalMediaStructure: InstructionalMediaRecord[] = [
  {
    title: "Movement Photo Sequences",
    description: "Step-by-step image records for setup, start position, midpoint, finish position, regression, progression, and common error frames.",
    href: "/media#movement-photos",
    meta: "photo sequence",
    mediaType: "movement photos",
    image: "/knowledge/exercise-library.svg",
    source: "E.R. Fitness original education standard",
    license: "E.R. Fitness owned or contributor-licensed media only",
    references: generalReferences
  },
  {
    title: "Exercise Video Embeds",
    description: "Embeddable video records for demonstrations, form checks, coaching breakdowns, recovery flows, and public education videos without downloading video files.",
    href: "/media#video-embeds",
    meta: "embed ready",
    mediaType: "exercise videos",
    image: "/knowledge/video-embed-library.svg",
    embedHref: "https://www.youtube.com/embed/0i1lCNHaxhs",
    source: "ODPHP/HHS public education video links and E.R. Fitness original embed slots",
    license: "External videos remain hosted by the source provider; E.R. Fitness stores metadata and embed links only",
    references: ["https://odphp.health.gov/moveyourway", "https://www.youtube.com/watch?v=0i1lCNHaxhs"]
  },
  {
    title: "Equipment Photo Library",
    description: "Equipment records include clean image slots, setup notes, safe loading ranges, substitutions, storage rights, and search tags.",
    href: "/exercises#equipment-library",
    meta: "equipment media",
    mediaType: "equipment photos",
    image: "/knowledge/equipment-library.svg",
    source: "E.R. Fitness original equipment standards",
    license: "Owner-created, AI-generated, public-domain, Creative Commons, or purchased licensed images only",
    references: ["https://medlineplus.gov/exerciseandphysicalfitness.html"]
  },
  {
    title: "Muscle Diagram Library",
    description: "Diagram records connect body areas to exercises, injuries, recovery notes, media, and related app tracking prompts.",
    href: "/education#body-education",
    meta: "diagram index",
    mediaType: "muscle diagrams",
    image: "/knowledge/training-principles.svg",
    source: "E.R. Fitness original diagram summaries",
    license: "Owner-created or licensed diagram art only",
    references: ["https://www.acefitness.org/resources/everyone/exercise-library/"]
  },
  {
    title: "Recovery Movement Guides",
    description: "Guides show warmup, cooldown, mobility, breathing, active recovery, and return-to-training movements with safety callouts.",
    href: "/recovery",
    meta: "recovery media",
    mediaType: "recovery guides",
    image: "/knowledge/mobility-recovery.svg",
    source: "E.R. Fitness original recovery education",
    license: "E.R. Fitness owned or contributor-licensed media only",
    references: generalReferences
  }
];

export const videoEmbedLibrary: InstructionalMediaRecord[] = [
  {
    title: "Move Your Way: Tips for Getting Motivated",
    description: "Public-health activity motivation video embedded as an external provider resource with E.R. Fitness tracking context.",
    href: "https://www.youtube.com/watch?v=0i1lCNHaxhs",
    embedHref: "https://www.youtube.com/embed/0i1lCNHaxhs",
    meta: "ODPHP/HHS",
    mediaType: "exercise videos",
    image: "/knowledge/video-embed-library.svg",
    source: "ODPHP/HHS",
    license: "External YouTube embed; no local download",
    references: ["https://odphp.health.gov/moveyourway"]
  },
  {
    title: "Move Your Way: Tips for Busy Days",
    description: "External video embed for fitting movement into packed schedules and habit-building plans.",
    href: "https://www.youtube.com/watch?v=61p1OIO20wk",
    embedHref: "https://www.youtube.com/embed/61p1OIO20wk",
    meta: "ODPHP/HHS",
    mediaType: "exercise videos",
    image: "/knowledge/video-embed-library.svg",
    source: "ODPHP/HHS",
    license: "External YouTube embed; no local download",
    references: ["https://odphp.health.gov/moveyourway"]
  },
  {
    title: "ACE Exercise Library Demonstrations",
    description: "External demonstration library link used as a reference layer for exercise examples, photos, and form education.",
    href: "https://www.acefitness.org/resources/everyone/exercise-library/",
    meta: "ACE Fitness",
    mediaType: "exercise videos",
    image: "/knowledge/exercise-library.svg",
    source: "American Council on Exercise",
    license: "External reference link; do not copy media into E.R. Fitness without permission",
    references: ["https://www.acefitness.org/resources/everyone/exercise-library/"]
  }
];

export const equipmentLibrary: EquipmentLibraryItem[] = [
  {
    title: "Dumbbells",
    equipment: "dumbbells",
    description: "Free-weight tools for unilateral work, presses, rows, hinges, carries, curls, squats, and accessible home training.",
    href: "/exercises?equipment=dumbbells",
    meta: "free weights",
    bestFor: ["home strength", "unilateral training", "hypertrophy", "beginner loading"],
    coachingCues: ["Control the path", "Keep wrists neutral", "Use range you can repeat"],
    safetyNotes: ["Start lighter than expected", "Avoid dropping near feet", "Use a stable bench when supported"],
    source: "E.R. Fitness equipment education",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Barbells",
    equipment: "barbells",
    description: "Loadable tools for squats, presses, deadlifts, rows, Olympic-lifting education, and measurable progressive overload.",
    href: "/exercises?equipment=barbells",
    meta: "strength loading",
    bestFor: ["strength training", "powerlifting", "progressive overload", "technical lifting"],
    coachingCues: ["Brace before the rep", "Use consistent setup", "Track load and RPE"],
    safetyNotes: ["Use safeties or spotters when needed", "Do not max without preparation", "Keep technique review conservative"],
    source: "E.R. Fitness equipment education",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Kettlebells",
    equipment: "kettlebells",
    description: "Compact tools for hinges, carries, goblet squats, presses, conditioning, grip, and rhythm-based training.",
    href: "/exercises?equipment=kettlebells",
    meta: "hinge and carry",
    bestFor: ["swings", "goblet squats", "loaded carries", "conditioning"],
    coachingCues: ["Own the hinge first", "Keep the bell close when cleaning", "Let the hips drive ballistic work"],
    safetyNotes: ["Learn hinges before swings", "Keep a clear space", "Avoid fatigue reps that change mechanics"],
    source: "E.R. Fitness equipment education",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Machines",
    equipment: "machines",
    description: "Guided resistance options for stable strength work, hypertrophy, beginners, and lower-skill accessory volume.",
    href: "/exercises?equipment=machines",
    meta: "guided strength",
    bestFor: ["hypertrophy", "accessory work", "beginners", "supported training"],
    coachingCues: ["Adjust the seat first", "Use controlled tempo", "Stop before joints feel crowded"],
    safetyNotes: ["Read machine instructions", "Avoid forced range", "Ask staff if setup is unclear"],
    source: "E.R. Fitness equipment education",
    license: "Original summary",
    references: ["https://medlineplus.gov/exerciseandphysicalfitness.html"]
  },
  {
    title: "Resistance Bands",
    equipment: "resistance bands",
    description: "Portable resistance for warmups, rotator cuff work, assisted bodyweight training, mobility, and travel routines.",
    href: "/exercises?equipment=bands",
    meta: "portable resistance",
    bestFor: ["warmups", "assistance", "rotator cuff", "travel workouts"],
    coachingCues: ["Anchor securely", "Control the return", "Use tension you can own"],
    safetyNotes: ["Inspect bands for cracks", "Protect eyes from snapback", "Avoid unstable anchors"],
    source: "E.R. Fitness equipment education",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Benches",
    equipment: "benches",
    description: "Support surfaces for pressing, rows, step-ups, split squats, hip thrusts, seated work, and adaptive modifications.",
    href: "/exercises?equipment=benches",
    meta: "support surface",
    bestFor: ["pressing", "rows", "step-ups", "supported modifications"],
    coachingCues: ["Confirm bench stability", "Set the angle before loading", "Keep contact points consistent"],
    safetyNotes: ["Do not stand on unstable benches", "Check pins and locks", "Use lower heights for new step-ups"],
    source: "E.R. Fitness equipment education",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Cable Machines",
    equipment: "cable machines",
    description: "Adjustable resistance for rows, pulldowns, presses, anti-rotation core, isolation work, and joint-friendly angles.",
    href: "/exercises?equipment=cables",
    meta: "adjustable resistance",
    bestFor: ["rows", "pulldowns", "isolation work", "anti-rotation core"],
    coachingCues: ["Set pulley height", "Keep the line of pull clean", "Use smooth reps"],
    safetyNotes: ["Clip attachments fully", "Control the stack", "Keep hands clear of pulleys"],
    source: "E.R. Fitness equipment education",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Smith Machines",
    equipment: "smith machines",
    description: "Guided barbell stations for supported squats, presses, rows, split squats, calf raises, and controlled hypertrophy work.",
    href: "/exercises?equipment=smith-machines",
    meta: "guided bar path",
    bestFor: ["hypertrophy", "supported squats", "pressing variations", "calf raises"],
    coachingCues: ["Set safeties first", "Match stance to the fixed bar path", "Use controlled tempo"],
    safetyNotes: ["Do not assume the fixed path fits every body", "Check hooks before loading", "Avoid forced joint positions"],
    source: "E.R. Fitness equipment education",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Cardio Equipment",
    equipment: "cardio equipment",
    description: "Treadmills, bikes, rowers, ellipticals, ski ergs, and stair climbers for aerobic base, intervals, warmups, and low-impact conditioning.",
    href: "/exercises?equipment=cardio-equipment",
    meta: "conditioning tools",
    bestFor: ["zone 2 cardio", "intervals", "warmups", "low-impact conditioning"],
    coachingCues: ["Start at conversational effort", "Use posture you can maintain", "Progress time before intensity"],
    safetyNotes: ["Use emergency stops where available", "Adjust setup before speed", "Stop for dizziness, chest pain, or unusual symptoms"],
    source: "E.R. Fitness equipment education",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Home Equipment",
    equipment: "home equipment",
    description: "Adjustable dumbbells, bands, mats, benches, pull-up bars, kettlebells, suspension trainers, and small-space tools for home training.",
    href: "/exercises?equipment=home-equipment",
    meta: "home gym",
    bestFor: ["small spaces", "beginner plans", "travel-friendly training", "budget setups"],
    coachingCues: ["Prioritize stable surfaces", "Choose versatile tools first", "Keep clear space around moving exercises"],
    safetyNotes: ["Anchor door tools correctly", "Store weights away from walk paths", "Do not use unstable furniture as a bench"],
    source: "E.R. Fitness equipment education",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Bodyweight",
    equipment: "bodyweight",
    description: "No-equipment training for foundational strength, calisthenics, mobility, balance, conditioning, and travel routines.",
    href: "/exercises?equipment=bodyweight",
    meta: "no equipment",
    bestFor: ["beginners", "calisthenics", "travel", "mobility"],
    coachingCues: ["Use leverage to scale", "Keep reps clean", "Progress with range, tempo, and density"],
    safetyNotes: ["Regress before form breaks", "Choose stable surfaces", "Stop if symptoms change"],
    source: "E.R. Fitness equipment education",
    license: "Original summary",
    references: generalReferences
  }
];

export const learningPaths: ReferencedEducationCard[] = [
  {
    title: "Beginner Fitness Basics",
    description: "Learn movement types, weekly consistency, easy progression, warmups, cooldowns, basic safety, and how to start without overload.",
    href: "/education#additional-sections",
    meta: "foundation",
    source: "E.R. Fitness original curriculum",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Strength Training Basics",
    description: "Covers squat, hinge, push, pull, carry, core, sets, reps, rest, effort, progressive overload, and exercise substitutions.",
    href: "/training-nutrition-principles#training-principles",
    meta: "strength",
    source: "E.R. Fitness original curriculum",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Nutrition Basics",
    description: "Covers calories, protein, carbohydrates, fats, hydration, meal timing, training days, rest days, and sustainable meal structure.",
    href: "/nutrition",
    meta: "nutrition",
    source: "E.R. Fitness original curriculum",
    license: "Original summary",
    references: ["https://www.myplate.gov/eat-healthy/what-is-myplate"]
  },
  {
    title: "Recovery Basics",
    description: "Covers sleep, warmups, cooldowns, mobility, stretching, breathing, active recovery, deloads, and readiness checks.",
    href: "/recovery",
    meta: "recovery",
    source: "E.R. Fitness original curriculum",
    license: "Original summary",
    references: generalReferences
  },
  {
    title: "Adaptive Fitness Basics",
    description: "Covers seated, supported, prosthetic-aware, wheelchair-aware, fatigue-aware, senior-friendly, and limited-mobility training options.",
    href: "/adaptive-fitness",
    meta: "inclusive",
    source: "E.R. Fitness original adaptive education summary",
    license: "Original summary",
    references: ["https://medlineplus.gov/mobilityaids.html", "https://medlineplus.gov/exerciseandphysicalfitness.html"]
  },
  {
    title: "Trainer and Coach Education Resources",
    description: "A professional learning path for contributors to study E.R. Fitness writing standards, safety language, review workflow, sources, licenses, and publishing rules.",
    href: "/content#contributors",
    meta: "contributors",
    source: "E.R. Fitness contributor standard",
    license: "Original summary",
    references: ["https://www.acefitness.org/resources/everyone/exercise-library/"]
  }
];

export const adaptiveEducationSections: AdaptiveEducationSection[] = [
  {
    title: "Wheelchair Fitness",
    audience: "Wheelchair users",
    description: "Education for seated strength, shoulder care, pushing volume awareness, transfer-friendly training, aerobic options, and recovery planning.",
    href: "/education/adaptive-wheelchair-users",
    meta: "seated training",
    focusAreas: ["seated pressing", "pulling balance", "shoulder recovery", "trunk control"],
    trackingPrompts: ["chair setup", "skin or pressure notes", "shoulder symptoms", "fatigue"],
    source: "E.R. Fitness adaptive education summary",
    license: "Original summary",
    references: ["https://medlineplus.gov/mobilityaids.html"]
  },
  {
    title: "Prosthetic Users",
    audience: "Prosthetic users",
    description: "Education for socket comfort, stance symmetry, supported strength, gait-aware conditioning, residual-limb response, and professional-fit boundaries.",
    href: "/education/adaptive-prosthetic-users",
    meta: "prosthetic aware",
    focusAreas: ["fit check", "stance control", "supported hinges", "volume tolerance"],
    trackingPrompts: ["socket comfort", "skin check", "balance confidence", "next-day response"],
    source: "E.R. Fitness adaptive education summary",
    license: "Original summary",
    references: ["https://medlineplus.gov/mobilityaids.html"]
  },
  {
    title: "Amputees",
    audience: "Amputees",
    description: "Education for unilateral strength, balance support, residual-limb considerations, conditioning choices, and careful progression.",
    href: "/education/adaptive-amputees",
    meta: "adaptive strength",
    focusAreas: ["single-side strength", "core control", "supported balance", "upper-body capacity"],
    trackingPrompts: ["support level", "comfort", "fatigue", "asymmetry notes"],
    source: "E.R. Fitness adaptive education summary",
    license: "Original summary",
    references: ["https://medlineplus.gov/mobilityaids.html"]
  },
  {
    title: "Multiple Sclerosis",
    audience: "Users with MS",
    description: "Education for fatigue-aware pacing, heat management, balance support, flexible intensity, and professional-care coordination.",
    href: "/education/condition-multiple-sclerosis",
    meta: "fatigue aware",
    focusAreas: ["pacing", "cooling", "balance", "low-impact conditioning"],
    trackingPrompts: ["fatigue", "temperature", "balance", "symptom response"],
    source: "MedlinePlus condition reference plus E.R. Fitness education summary",
    license: "Original summary with external reference link",
    references: ["https://medlineplus.gov/multiplesclerosis.html"]
  },
  {
    title: "Parkinson's",
    audience: "Users with Parkinson's",
    description: "Education for balance-aware movement, rhythm, coordination, supported strength, fall-risk awareness, and clinical-team coordination.",
    href: "/education/condition-parkinsons",
    meta: "balance aware",
    focusAreas: ["balance", "rhythm", "coordination", "supported strength"],
    trackingPrompts: ["balance confidence", "freezing or hesitation notes", "support used", "fatigue"],
    source: "MedlinePlus condition reference plus E.R. Fitness education summary",
    license: "Original summary with external reference link",
    references: ["https://medlineplus.gov/parkinsonsdisease.html", "https://medlineplus.gov/falls.html"]
  },
  {
    title: "Arthritis",
    audience: "Users with arthritis",
    description: "Education for joint-friendly range, warmups, low-impact conditioning, strength at tolerable loads, and flare-aware planning.",
    href: "/education/condition-arthritis",
    meta: "joint friendly",
    focusAreas: ["warmups", "range control", "low impact", "flare planning"],
    trackingPrompts: ["joint comfort", "morning stiffness", "range", "next-day response"],
    source: "MedlinePlus condition reference plus E.R. Fitness education summary",
    license: "Original summary with external reference link",
    references: ["https://medlineplus.gov/arthritis.html"]
  },
  {
    title: "Fibromyalgia",
    audience: "Users with fibromyalgia",
    description: "Education for gentle progression, pacing, recovery spacing, symptom-aware volume, and conservative intensity choices.",
    href: "/education/condition-fibromyalgia",
    meta: "pacing",
    focusAreas: ["gentle strength", "low-impact cardio", "recovery spacing", "symptom tracking"],
    trackingPrompts: ["pain", "fatigue", "sleep", "flare response"],
    source: "MedlinePlus condition reference plus E.R. Fitness education summary",
    license: "Original summary with external reference link",
    references: ["https://medlineplus.gov/fibromyalgia.html"]
  },
  {
    title: "Chronic Pain",
    audience: "Users managing chronic pain",
    description: "Education for professional-guided activity, pacing, tolerable range, baseline building, flare notes, and non-judgmental consistency.",
    href: "/education/condition-chronic-pain",
    meta: "pain aware",
    focusAreas: ["baseline building", "range tolerance", "breathing", "low-impact options"],
    trackingPrompts: ["pain range", "sleep", "stress", "flare triggers"],
    source: "MedlinePlus condition reference plus E.R. Fitness education summary",
    license: "Original summary with external reference link",
    references: ["https://medlineplus.gov/chronicpain.html"]
  },
  {
    title: "Senior Fitness",
    audience: "Older adults",
    description: "Education for strength, balance, mobility, walking, low-impact cardio, fall-risk awareness, and recovery pacing.",
    href: "/education/adaptive-seniors",
    meta: "active aging",
    focusAreas: ["balance", "strength", "walking", "mobility"],
    trackingPrompts: ["balance confidence", "support used", "walking time", "readiness"],
    source: "MedlinePlus older adult and falls references plus E.R. Fitness education summary",
    license: "Original summary with external reference link",
    references: ["https://medlineplus.gov/olderadults.html", "https://medlineplus.gov/falls.html"]
  },
  {
    title: "Limited Mobility",
    audience: "Users with limited mobility",
    description: "Education for seated, supported, range-limited, fatigue-aware, and home-friendly movement with adaptable goals.",
    href: "/education/adaptive-limited-mobility",
    meta: "supported options",
    focusAreas: ["seated training", "supported standing", "range control", "daily function"],
    trackingPrompts: ["support level", "range", "fatigue", "confidence"],
    source: "MedlinePlus mobility aids and exercise references plus E.R. Fitness education summary",
    license: "Original summary with external reference link",
    references: ["https://medlineplus.gov/mobilityaids.html", "https://medlineplus.gov/exerciseandphysicalfitness.html"]
  }
];

export const searchableContentRecords: SearchableContentRecord[] = [
  {
    title: "Exercises",
    recordType: "exercise",
    description: "Exercise records include name, slug, system, muscles, equipment, level, cues, regressions, progressions, media, reviewer, source, and license.",
    href: "/exercises",
    meta: "exercise index",
    searchableFields: ["name", "muscles", "equipment", "level", "system", "cues", "review status"],
    source: "E.R. Fitness exercise library",
    license: "Original summaries with licensed media slots",
    references: ["https://www.acefitness.org/resources/everyone/exercise-library/"]
  },
  {
    title: "Articles",
    recordType: "article",
    description: "Article records include author, reviewedBy, credentials, reviewDate, source, license, references, body, summary, tags, and publish status.",
    href: "/education",
    meta: "article index",
    searchableFields: ["title", "category", "body area", "author", "reviewer", "references", "tags"],
    source: "E.R. Fitness education platform",
    license: "Original summaries",
    references: generalReferences
  },
  {
    title: "Videos",
    recordType: "video",
    description: "Video records store provider, embed URL, thumbnail, transcript tags, source link, license note, category, and review status.",
    href: "/media#video-embeds",
    meta: "video index",
    searchableFields: ["title", "provider", "embed", "category", "muscles", "equipment", "license"],
    source: "External embeds and E.R. Fitness original video slots",
    license: "Metadata-only embed records unless owner-created media is uploaded",
    references: ["https://odphp.health.gov/moveyourway"]
  },
  {
    title: "Images",
    recordType: "image",
    description: "Image records support progress photos, movement photos, equipment photos, diagrams, thumbnails, alt text, rights, and moderation status.",
    href: "/media#movement-photos",
    meta: "image index",
    searchableFields: ["title", "alt text", "category", "subject", "license", "owner", "review status"],
    source: "E.R. Fitness media library",
    license: "Owner-created, AI-generated, public-domain, Creative Commons, or purchased licensed images only",
    references: ["https://medlineplus.gov/exerciseandphysicalfitness.html"]
  },
  {
    title: "Equipment",
    recordType: "equipment",
    description: "Equipment records include tool category, setup notes, exercise links, safety notes, substitutions, media rights, and accessible modifications.",
    href: "/exercises#equipment-library",
    meta: "equipment index",
    searchableFields: ["equipment", "best for", "exercise links", "safety notes", "modifications"],
    source: "E.R. Fitness equipment education",
    license: "Original summaries",
    references: generalReferences
  },
  {
    title: "Conditions",
    recordType: "condition",
    description: "Condition records index educational summaries, caution flags, adaptive options, professional-care reminders, references, and related routines.",
    href: "/adaptive-fitness",
    meta: "condition index",
    searchableFields: ["condition", "audience", "focus areas", "tracking prompts", "references"],
    source: "E.R. Fitness adaptive education plus MedlinePlus references",
    license: "Original summaries with external reference links",
    references: ["https://medlineplus.gov/multiplesclerosis.html", "https://medlineplus.gov/parkinsonsdisease.html", "https://medlineplus.gov/arthritis.html"]
  },
  {
    title: "Muscle Groups",
    recordType: "muscle group",
    description: "Muscle group records connect body education, exercises, diagrams, recovery notes, injury education, and routine recommendations.",
    href: "/education#body-education",
    meta: "muscle index",
    searchableFields: ["muscle", "body region", "exercises", "injuries", "media", "routines"],
    source: "E.R. Fitness body education",
    license: "Original summaries and owned/licensed diagrams",
    references: ["https://www.acefitness.org/resources/everyone/exercise-library/"]
  }
];

export const professionalContributorPath: ReferencedEducationCard[] = [
  {
    title: "Contact Owner",
    description: "Prospective contributors start by contacting the E.R. Fitness owner with role, specialty, proposed topic, and intended audience.",
    href: "/content#contributors",
    meta: "step 1",
    source: "E.R. Fitness contributor workflow",
    license: "Original workflow",
    references: []
  },
  {
    title: "Submit Credentials",
    description: "Contributors submit credentials, scope, license rights, source standards, conflict notes, and professional boundaries for review.",
    href: "/admin#contributors",
    meta: "step 2",
    source: "E.R. Fitness contributor workflow",
    license: "Original workflow",
    references: []
  },
  {
    title: "Submit Article or Media",
    description: "Submissions include title, body, category, tags, images, video embed links, source, license, references, and intended review level.",
    href: "/community/blog#write",
    meta: "step 3",
    source: "E.R. Fitness contributor workflow",
    license: "Original workflow",
    references: []
  },
  {
    title: "Review Required",
    description: "Owner and reviewer check accuracy, safety wording, medical boundaries, credentials, citations, media rights, and category fit.",
    href: "/admin#review-workflow",
    meta: "step 4",
    source: "E.R. Fitness contributor workflow",
    license: "Original workflow",
    references: []
  },
  {
    title: "Publish Approval Required",
    description: "Only approved submissions receive publish status, search indexing, media display, contributor attribution, and public discovery.",
    href: "/content#review-workflow",
    meta: "step 5",
    source: "E.R. Fitness contributor workflow",
    license: "Original workflow",
    references: []
  }
];

export const legalVerificationChecklist: FeatureCard[] = [
  { title: "Disclaimer", description: "Medical disclaimer is linked from legal center, footer, training principles, adaptive fitness, and safety callouts.", href: "/legal/disclaimer", meta: "verified route" },
  { title: "Privacy", description: "Privacy page covers profile, media, community, saved content, reports, search, and backend data boundaries.", href: "/legal/privacy", meta: "verified route" },
  { title: "Terms", description: "Terms page covers user content, uploads, embeds, moderation, community behavior, and no active billing.", href: "/legal/terms", meta: "verified route" },
  { title: "Footer Links", description: "Footer routes users to disclaimer, privacy, terms, community, media, discovery, workouts, routines, and recovery.", href: "/legal", meta: "linked" },
  { title: "Medical Disclaimer Callouts", description: "DisclaimerNotice is reusable and appears on safety-sensitive education areas with direct legal links.", href: "/legal/disclaimer", meta: "callout" }
];

export const launchReadinessGaps: FeatureCard[] = [
  {
    title: "Professional Review",
    description: "Condition-specific, injury-specific, nutrition, and adaptive-fitness articles still need qualified reviewer signoff before being treated as production guidance.",
    href: "/admin#review-workflow",
    meta: "review queue"
  },
  {
    title: "Legal Review",
    description: "Privacy and terms are structured for launch but should be reviewed by qualified counsel before collecting real user data.",
    href: "/legal",
    meta: "review queue"
  },
  {
    title: "Media Rights",
    description: "Production photos, diagrams, and videos must be owner-created, AI-generated with rights, public-domain, Creative Commons, or purchased/licensed before upload.",
    href: "/media",
    meta: "rights review"
  },
  {
    title: "Live Backend Wiring",
    description: "Supabase tables, storage policies, auth, moderation actions, and search indexing are modeled but not connected to live services.",
    href: "/admin#schema",
    meta: "backend"
  }
];
