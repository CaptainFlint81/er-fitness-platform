import type { ExpertReviewFields, ExpertReviewStatus, ExpertReviewerType } from "@/types/content";

export type VisualResource = {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

export type VideoResource = {
  title: string;
  description: string;
  provider: string;
  href: string;
  category: string;
  tags: string[];
};

export type ReferenceResource = {
  title: string;
  description: string;
  source: string;
  href: string;
  category: string;
};

export type ResourceReviewStatus = ExpertReviewStatus;

export type SourceLink = {
  title: string;
  href: string;
};

export type SuggestedMediaNeeded = {
  demoImageNeeded: string;
  demoVideoNeeded: string;
  anatomyImageNeeded: string;
  infographicNeeded: string;
  routineChartNeeded: string;
  safetyGraphicNeeded: string;
  progressionGraphicNeeded: string;
};

export type LevelNotes = {
  beginner: string;
  intermediate: string;
  advanced: string;
};

export type ResourceHubCard = ExpertReviewFields & {
  title: string;
  shortSummary: string;
  whatItIs: string;
  whoItIsFor: string;
  benefits: string[];
  safetyConsiderations: string[];
  levelNotes: LevelNotes;
  commonMistakes: string[];
  relatedRoutines: string[];
  relatedAppSections: string[];
  freeSourceLinks: SourceLink[];
  suggestedMedia: SuggestedMediaNeeded;
  disclaimerHref: string;
  tags: string[];
};

export type SourceDirectoryCard = ResourceHubCard & {
  sourceName: string;
  sourceType: string;
  category: string;
  url: string;
};

export type MediaSourceDirectoryItem = {
  sourceName: string;
  url: string;
  mediaType: string;
  licenseNotes: string;
  attributionRequired: string;
  commercialUseAllowed: string;
  modificationAllowed: string;
  downloadAllowed: string;
  embedOrLinkPreferred: string;
  reviewStatus: ResourceReviewStatus;
  reviewerType: ExpertReviewerType;
  reviewDate: string;
  reviewedBy: string;
  reviewNotes: string;
};

const educationalDisclaimerLink = "/legal/disclaimer";

const defaultSuggestedMedia: SuggestedMediaNeeded = {
  demoImageNeeded: "Demo image needed",
  demoVideoNeeded: "Demo video needed",
  anatomyImageNeeded: "Anatomy or structure image needed",
  infographicNeeded: "Infographic needed",
  routineChartNeeded: "Routine chart needed",
  safetyGraphicNeeded: "Safety graphic needed",
  progressionGraphicNeeded: "Progression graphic needed"
};

const defaultLevelNotes: LevelNotes = {
  beginner: "Start with definitions, low-risk examples, and simple tracking prompts.",
  intermediate: "Add progression choices, volume management, and comparison between methods.",
  advanced: "Add deeper programming context, review notes, and professional-source cross-checks."
};

function resourceCard(seed: Omit<ResourceHubCard, "disclaimerHref" | "reviewStatus" | "reviewerType" | "reviewDate" | "reviewedBy" | "reviewNotes" | "suggestedMedia" | "levelNotes"> & Partial<Pick<ResourceHubCard, "disclaimerHref" | "reviewStatus" | "reviewerType" | "reviewDate" | "reviewedBy" | "reviewNotes" | "suggestedMedia" | "levelNotes">>): ResourceHubCard {
  return {
    ...seed,
    disclaimerHref: seed.disclaimerHref ?? educationalDisclaimerLink,
    reviewStatus: seed.reviewStatus ?? "Source Linked",
    reviewerType: seed.reviewerType ?? "editorial reviewer",
    reviewDate: seed.reviewDate ?? "Pending",
    reviewedBy: seed.reviewedBy ?? "Unassigned",
    reviewNotes: seed.reviewNotes ?? "Source-linked resource card is ready for editorial or professional review routing.",
    suggestedMedia: seed.suggestedMedia ?? defaultSuggestedMedia,
    levelNotes: seed.levelNotes ?? defaultLevelNotes
  };
}

function sourceCard(seed: Omit<SourceDirectoryCard, "disclaimerHref" | "reviewStatus" | "reviewerType" | "reviewDate" | "reviewedBy" | "reviewNotes" | "suggestedMedia" | "levelNotes" | "shortSummary" | "relatedRoutines" | "relatedAppSections" | "commonMistakes" | "safetyConsiderations" | "benefits" | "freeSourceLinks"> & {
  shortSummary?: string;
  benefits?: string[];
  safetyConsiderations?: string[];
  commonMistakes?: string[];
  relatedRoutines?: string[];
  relatedAppSections?: string[];
  freeSourceLinks?: SourceLink[];
  reviewStatus?: ResourceReviewStatus;
  reviewerType?: ExpertReviewerType;
  reviewDate?: string;
  reviewedBy?: string;
  reviewNotes?: string;
}): SourceDirectoryCard {
  return {
    ...resourceCard({
      title: seed.title,
      shortSummary: seed.shortSummary ?? `${seed.sourceName} is a source-tracked reference for ${seed.category.toLowerCase()} education inside E.R. Fitness.`,
      whatItIs: seed.whatItIs,
      whoItIsFor: seed.whoItIsFor,
      benefits: seed.benefits ?? [
        "Adds a credible free source link to the knowledge hub.",
        "Supports original E.R. Fitness summaries without copying protected material.",
        "Gives editors a place to verify claims, media rights, and review status."
      ],
      safetyConsiderations: seed.safetyConsiderations ?? [
        "Use as education only, not medical advice or individualized programming.",
        "Confirm the source page still supports the claim before publishing new lessons.",
        "Route medical-adjacent, youth, adaptive, injury, or nutrition guidance through professional review."
      ],
      commonMistakes: seed.commonMistakes ?? [
        "Copying source text instead of writing original summaries.",
        "Treating a general public resource as a personalized plan.",
        "Using images, videos, or PDFs without checking license and attribution requirements."
      ],
      relatedRoutines: seed.relatedRoutines ?? ["Beginner Foundation", "Mobility Reset", "Training Principles"],
      relatedAppSections: seed.relatedAppSections ?? ["Education", "Workouts", "Search", "Media"],
      freeSourceLinks: seed.freeSourceLinks ?? [{ title: seed.sourceName, href: seed.url }],
      tags: seed.tags,
      reviewStatus: seed.reviewStatus,
      reviewerType: seed.reviewerType,
      reviewDate: seed.reviewDate,
      reviewedBy: seed.reviewedBy,
      reviewNotes: seed.reviewNotes
    }),
    sourceName: seed.sourceName,
    sourceType: seed.sourceType,
    category: seed.category,
    url: seed.url
  };
}

export const visualLearningResources: VisualResource[] = [
  {
    title: "Training Principles Map",
    description: "A quick visual model for progressive overload, volume, intensity, frequency, and recovery.",
    image: "/knowledge/training-principles.svg",
    href: "/training-nutrition-principles#training-principles",
    tags: ["overload", "volume", "intensity", "frequency", "recovery"]
  },
  {
    title: "Nutrition Plate Map",
    description: "A visual breakdown of calories, protein, carbohydrates, fats, hydration, and timing.",
    image: "/knowledge/nutrition-map.svg",
    href: "/training-nutrition-principles#nutrition-principles",
    tags: ["calories", "protein", "carbs", "fats", "hydration"]
  },
  {
    title: "Mobility and Recovery Flow",
    description: "Warmup, mobility, cooldown, sleep, and readiness arranged as one recovery loop.",
    image: "/knowledge/mobility-recovery.svg",
    href: "/recovery",
    tags: ["warmup", "cooldown", "mobility", "sleep", "readiness"]
  },
  {
    title: "Exercise Library Teaching Card",
    description: "How each exercise should teach setup, execution, cues, mistakes, regressions, and progressions.",
    image: "/knowledge/exercise-library.svg",
    href: "/exercises",
    tags: ["setup", "execution", "cues", "progressions"]
  },
  {
    title: "Injury-Aware Training Ladder",
    description: "A conservative return-to-training model: calm, control, strength, and return.",
    image: "/knowledge/injury-aware.svg",
    href: "/injured-athlete",
    tags: ["injury education", "return to training", "recovery"]
  },
  {
    title: "Community Learning Network",
    description: "How groups, media, blogs, posts, and review workflows connect into the knowledge platform.",
    image: "/knowledge/community-learning.svg",
    href: "/community",
    tags: ["groups", "media", "blogs", "posts", "review"]
  },
  {
    title: "Equipment Library Map",
    description: "A visual map for dumbbells, barbells, kettlebells, machines, bands, benches, cables, and bodyweight tools.",
    image: "/knowledge/equipment-library.svg",
    href: "/exercises#equipment-library",
    tags: ["equipment", "dumbbells", "barbells", "bodyweight"]
  },
  {
    title: "Adaptive Training Access",
    description: "Inclusive training paths for wheelchair users, prosthetic users, amputees, seniors, and limited-mobility athletes.",
    image: "/knowledge/adaptive-training.svg",
    href: "/adaptive-fitness#adaptive-education",
    tags: ["adaptive fitness", "wheelchair", "prosthetic", "limited mobility"]
  },
  {
    title: "Learning Path System",
    description: "Beginner fitness, strength, nutrition, recovery, adaptive fitness, and contributor education paths.",
    image: "/knowledge/learning-paths.svg",
    href: "/education#learning-paths",
    tags: ["learning paths", "certifications", "contributors"]
  },
  {
    title: "Video Embed Library",
    description: "Instructional video records store external embeds, provider metadata, licenses, and review status without downloading videos.",
    image: "/knowledge/video-embed-library.svg",
    href: "/media#video-embeds",
    tags: ["videos", "embeds", "license", "review"]
  }
];

export const instructionalVideoResources: VideoResource[] = [
  {
    title: "Move Your Way: Tips for Getting Motivated",
    description: "Short public-health video from ODPHP/HHS with practical activity motivation prompts.",
    provider: "ODPHP / HHS",
    href: "https://www.youtube.com/watch?v=0i1lCNHaxhs",
    category: "Consistency",
    tags: ["motivation", "activity habit", "beginner friendly"]
  },
  {
    title: "Move Your Way: Tips for Busy Days",
    description: "Short public-health video on fitting movement into a packed schedule.",
    provider: "ODPHP / HHS",
    href: "https://www.youtube.com/watch?v=61p1OIO20wk",
    category: "Habit Building",
    tags: ["busy schedule", "daily movement", "consistency"]
  },
  {
    title: "Move Your Way: Make a Pledge",
    description: "Short public-health video for older adults and anyone building activity accountability.",
    provider: "ODPHP / HHS",
    href: "https://www.youtube.com/watch?v=uLLo9w4dbPA",
    category: "Active Aging",
    tags: ["older adults", "accountability", "walking"]
  },
  {
    title: "Move Your Way: Get Active as a Family",
    description: "Short public-health video with family-oriented activity ideas.",
    provider: "ODPHP / HHS",
    href: "https://www.youtube.com/watch?v=zNs8srnJ95U",
    category: "Youth and Family Fitness",
    tags: ["family fitness", "youth fitness", "daily activity"]
  },
  {
    title: "ACE Exercise Library",
    description: "Exercise demonstrations and movement filters for strength, mobility, bodyweight, and equipment-based training.",
    provider: "American Council on Exercise",
    href: "https://www.acefitness.org/resources/everyone/exercise-library/",
    category: "Exercise Demonstrations",
    tags: ["exercise demos", "form", "library"]
  },
  {
    title: "MedlinePlus Exercise Videos and Tutorials",
    description: "Government health-topic page with exercise basics, videos, tutorials, and safety reminders.",
    provider: "NIH / MedlinePlus",
    href: "https://medlineplus.gov/exerciseandphysicalfitness.html",
    category: "General Fitness",
    tags: ["exercise basics", "tutorials", "safety"]
  }
];

export const referenceResources: ReferenceResource[] = [
  {
    title: "Physical Activity Guidelines for Americans",
    description: "Evidence-based federal guidance for physical activity, movement types, and public-health recommendations.",
    source: "ODPHP / HHS",
    href: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines",
    category: "Training"
  },
  {
    title: "Move Your Way Tools, Videos, and Fact Sheets",
    description: "Public-health tools, activity planning resources, fact sheets, and videos for adults, older adults, parents, and pregnancy.",
    source: "ODPHP / HHS",
    href: "https://odphp.health.gov/moveyourway",
    category: "Training"
  },
  {
    title: "Exercise and Physical Fitness",
    description: "MedlinePlus overview covering exercise types, safety reminders, tutorials, and beginner considerations.",
    source: "NIH / MedlinePlus",
    href: "https://medlineplus.gov/exerciseandphysicalfitness.html",
    category: "Fitness Basics"
  },
  {
    title: "MyPlate Healthy Eating Framework",
    description: "USDA framework for food groups, balanced meals, and general nutrition education.",
    source: "USDA MyPlate",
    href: "https://www.myplate.gov/eat-healthy/what-is-myplate",
    category: "Nutrition"
  },
  {
    title: "ACE Exercise Library",
    description: "Movement demonstration library for exercise selection and form education.",
    source: "ACE Fitness",
    href: "https://www.acefitness.org/resources/everyone/exercise-library/",
    category: "Exercise Library"
  }
];

export const resourceHubSeoKeywords = [
  "E.R. Fitness",
  "Every Routine Fitness",
  "free fitness resources",
  "exercise library",
  "workout library",
  "adaptive fitness",
  "youth fitness",
  "women's fitness",
  "injury recovery fitness",
  "mobility training",
  "yoga",
  "Pilates",
  "Tai Chi",
  "strength training",
  "bodyweight training",
  "nutrition education",
  "exercise science"
];

export const freeFitnessResourceLibrary: ResourceHubCard[] = [
  resourceCard({
    title: "Government Health Sources",
    shortSummary: "Federal and public health references for activity, nutrition, aging, disease education, and safety boundaries.",
    whatItIs: "A source shelf for CDC, HHS, NIH, MedlinePlus, Nutrition.gov, NIA, USDA, NIDDK, and NINDS links.",
    whoItIsFor: "Editors, beginners, older adults, families, adaptive athletes, and anyone who needs plain-language health context.",
    benefits: ["Keeps public-health claims source-linked.", "Supports original summaries without copying government pages.", "Helps separate education from medical advice."],
    safetyConsiderations: ["Do not turn population guidance into a personal diagnosis or treatment plan.", "Use professional review for injury, medical, youth, pregnancy, disability, and nutrition content."],
    commonMistakes: ["Overstating public guidance as individual prescription.", "Ignoring publication date or page scope.", "Forgetting to link the medical disclaimer."],
    relatedRoutines: ["Move Your Way Starter", "Active Aging Base", "Mobility Reset"],
    relatedAppSections: ["Education", "Recovery", "Nutrition", "Adaptive Fitness"],
    freeSourceLinks: [
      { title: "HHS Physical Activity Guidelines", href: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines" },
      { title: "MedlinePlus Exercise and Physical Fitness", href: "https://medlineplus.gov/exerciseandphysicalfitness.html" },
      { title: "Nutrition.gov", href: "https://www.nutrition.gov/" }
    ],
    tags: ["government", "public health", "fitness basics", "nutrition"]
  }),
  resourceCard({
    title: "Exercise Databases",
    shortSummary: "Exercise demonstration and movement-reference sources for building original E.R. Fitness teaching cards.",
    whatItIs: "A directory of exercise libraries and reference databases used for discovery, terminology, and form verification.",
    whoItIsFor: "Users learning exercises, editors building records, trainers reviewing cues, and contributors planning media.",
    benefits: ["Improves exercise coverage.", "Supports consistent terminology.", "Creates a trail from movement summary to source link."],
    safetyConsiderations: ["Check each exercise against user ability, symptoms, equipment, and training age.", "Do not download or rehost protected media unless the license allows it."],
    commonMistakes: ["Copying demo text verbatim.", "Assuming one demo fits every body.", "Skipping regressions and safety notes."],
    relatedRoutines: ["Bodyweight Warrior Foundation", "Iron Forge Strength", "Mobility Reset"],
    relatedAppSections: ["Exercises", "Workouts", "Media", "Search"],
    freeSourceLinks: [
      { title: "ACE Exercise Library", href: "https://www.acefitness.org/resources/everyone/exercise-library/" },
      { title: "ExRx Exercise and Muscle Directory", href: "https://exrx.net/" },
      { title: "CalisTree Exercise Library", href: "https://calistree.com/" }
    ],
    tags: ["exercise database", "demos", "movement library"]
  }),
  resourceCard({
    title: "Workout Routine Libraries",
    shortSummary: "Free routine references and template ideas that can be summarized into original E.R. Fitness plans.",
    whatItIs: "A planning shelf for public routine examples, bodyweight systems, beginner plans, and printable workout structures.",
    whoItIsFor: "Beginners, home users, bodyweight athletes, strength users, and editors building routine cards.",
    benefits: ["Helps fill routine gaps legally.", "Supports beginner, intermediate, and advanced versions.", "Connects routine charts to sources and review notes."],
    safetyConsiderations: ["Scale intensity, volume, and movement complexity.", "Avoid claiming a routine treats injury, disease, or body composition outcomes."],
    commonMistakes: ["Publishing copied routines as original.", "Leaving no progression or regression.", "Missing warmup and recovery context."],
    relatedRoutines: ["Beginner Foundation", "Calisthenics Skill Builder", "Conditioning Template"],
    relatedAppSections: ["Routines", "Workouts", "Dashboard"],
    freeSourceLinks: [
      { title: "DAREBEE Workouts", href: "https://darebee.com/workouts.html" },
      { title: "Move Your Way Activity Planner", href: "https://odphp.health.gov/moveyourway" },
      { title: "ExRx Workout Templates", href: "https://exrx.net/" }
    ],
    tags: ["workout routines", "templates", "bodyweight"]
  }),
  resourceCard({
    title: "Video Learning Sources",
    shortSummary: "Public video hubs and embeddable or linkable learning resources for demonstrations and health education.",
    whatItIs: "A rights-aware video planning directory. E.R. Fitness links or embeds where allowed and stores license notes.",
    whoItIsFor: "Users who learn visually, editors building video slots, and contributors planning original demos.",
    benefits: ["Adds video learning without downloading protected media.", "Supports provider, license, and review metadata.", "Creates source-backed context for future original videos."],
    safetyConsiderations: ["Do not download, edit, or rehost third-party videos unless terms allow it.", "Check embed settings and platform terms before embedding."],
    commonMistakes: ["Treating public viewability as a license to reuse.", "Embedding medical or high-risk content without review.", "Not recording provider and URL."],
    relatedRoutines: ["Move Your Way Starter", "Exercise Demo Queue", "Recovery Reset"],
    relatedAppSections: ["Media", "Education", "Workouts"],
    freeSourceLinks: [
      { title: "Move Your Way", href: "https://odphp.health.gov/moveyourway" },
      { title: "NHS Better Health Home Workout Videos", href: "https://www.nhs.uk/better-health/get-active/home-workout-videos/" },
      { title: "MedlinePlus Exercise", href: "https://medlineplus.gov/exerciseandphysicalfitness.html" }
    ],
    tags: ["video", "embeds", "public health"]
  }),
  resourceCard({
    title: "Adaptive Fitness",
    shortSummary: "Accessible activity, disability sport, wheelchair fitness, prosthetic-user, amputee, senior, and limited-mobility resources.",
    whatItIs: "A source-tracked hub for inclusive movement education and adaptive setup planning.",
    whoItIsFor: "Adaptive athletes, wheelchair users, prosthetic users, amputees, seniors, caregivers, coaches, and contributors.",
    benefits: ["Improves accessibility coverage.", "Keeps setup and modification notes visible.", "Flags content for professional and lived-experience review."],
    safetyConsiderations: ["Coordinate with qualified healthcare, rehab, or adaptive sport professionals when medical status or equipment fit matters.", "Use pressure, skin, fatigue, balance, and symptom checks."],
    commonMistakes: ["Assuming one modification fits all users.", "Ignoring equipment fit or transfer demands.", "Publishing adaptive guidance without review."],
    relatedRoutines: ["Adaptive Movement Session", "Seated Strength Base", "Mobility Reset"],
    relatedAppSections: ["Adaptive Fitness", "Recovery", "Exercises"],
    freeSourceLinks: [
      { title: "Move United", href: "https://moveunitedsport.org/" },
      { title: "US Olympic and Paralympic Committee", href: "https://www.teamusa.com/us-paralympics" },
      { title: "NCHPAD", href: "https://www.nchpad.org/" }
    ],
    tags: ["adaptive fitness", "disability", "accessibility"],
    reviewStatus: "Awaiting Review"
  }),
  resourceCard({
    title: "Youth Fitness",
    shortSummary: "Youth and family activity references for age-appropriate movement, play, strength basics, and safety.",
    whatItIs: "A source shelf for family movement, school-age activity, youth strength basics, and healthy habit education.",
    whoItIsFor: "Parents, guardians, coaches, youth program editors, and families building activity routines.",
    benefits: ["Supports family-friendly movement education.", "Keeps age and supervision visible.", "Separates youth activity from adult performance programming."],
    safetyConsiderations: ["Youth content needs age, supervision, maturity, equipment, heat, and sport context.", "Avoid body-shaming, unsafe weight-loss claims, and adult training loads."],
    commonMistakes: ["Using adult routines for children.", "Overemphasizing intensity over skill and play.", "Missing guardian and coach supervision notes."],
    relatedRoutines: ["Family Activity Starter", "Youth Movement Skills", "Bodyweight Basics"],
    relatedAppSections: ["Education", "Community", "Workouts"],
    freeSourceLinks: [
      { title: "CDC Physical Activity Basics", href: "https://www.cdc.gov/physical-activity-basics/" },
      { title: "Move Your Way Parents", href: "https://odphp.health.gov/moveyourway" },
      { title: "MedlinePlus Exercise", href: "https://medlineplus.gov/exerciseandphysicalfitness.html" }
    ],
    tags: ["youth fitness", "family", "public health"],
    reviewStatus: "Awaiting Review"
  }),
  resourceCard({
    title: "Women's Fitness",
    shortSummary: "Women's fitness education for strength, activity, nutrition basics, recovery, pregnancy/postpartum boundaries, and bone health context.",
    whatItIs: "A source-linked planning hub for women's health-adjacent fitness topics with professional review flags.",
    whoItIsFor: "Women, coaches, editors, contributors, and users seeking strength, nutrition, recovery, and life-stage context.",
    benefits: ["Adds inclusive topic coverage.", "Flags pregnancy and medical-adjacent content for review.", "Connects strength, bone health, and general wellness education."],
    safetyConsiderations: ["Pregnancy, postpartum, pelvic health, eating disorders, amenorrhea, osteoporosis, and medical conditions require qualified professional guidance."],
    commonMistakes: ["Making gendered claims without evidence.", "Treating pregnancy or pelvic health as generic fitness.", "Using appearance-focused messaging."],
    relatedRoutines: ["Strength Foundation", "Mobility Reset", "Nutrition Basics"],
    relatedAppSections: ["Education", "Nutrition", "Recovery"],
    freeSourceLinks: [
      { title: "NIH Office of Research on Women's Health", href: "https://orwh.od.nih.gov/" },
      { title: "MedlinePlus Women's Health", href: "https://medlineplus.gov/womenshealth.html" },
      { title: "Nutrition.gov", href: "https://www.nutrition.gov/" }
    ],
    tags: ["women's fitness", "strength", "nutrition"],
    reviewStatus: "Awaiting Review"
  }),
  resourceCard({
    title: "Injured Athlete and Recovery",
    shortSummary: "Educational references for conservative return-to-training, mobility, sleep, pain boundaries, and injury-region learning.",
    whatItIs: "A recovery and injured-athlete source hub for original summaries, disclaimers, and professional review handoff.",
    whoItIsFor: "Injured athletes, returning exercisers, coaches, editors, and users tracking symptoms or readiness.",
    benefits: ["Keeps injury content conservative.", "Connects training notes to symptoms and readiness.", "Separates education from diagnosis or treatment."],
    safetyConsiderations: ["Pain, trauma, neurological symptoms, chest symptoms, infection signs, or worsening function require medical care.", "Do not present recovery content as physical therapy."],
    commonMistakes: ["Promising recovery outcomes.", "Ignoring red flags.", "Progressing load before pain and function are stable."],
    relatedRoutines: ["Mobility Reset", "Return-to-Training Ladder", "Active Recovery Walk"],
    relatedAppSections: ["Injured Athlete", "Recovery", "Dashboard"],
    freeSourceLinks: [
      { title: "MedlinePlus Sports Injuries", href: "https://medlineplus.gov/sportsinjuries.html" },
      { title: "NINDS", href: "https://www.ninds.nih.gov/" },
      { title: "AAOS OrthoInfo", href: "https://orthoinfo.aaos.org/" }
    ],
    tags: ["injury education", "recovery", "return to training"],
    reviewStatus: "Awaiting Review"
  }),
  resourceCard({
    title: "Nutrition Education",
    shortSummary: "Public nutrition sources for MyPlate, food groups, hydration, meal planning, diabetes education, and healthy eating basics.",
    whatItIs: "A nutrition source directory for original lessons, meal-planning references, and review-ready nutrition cards.",
    whoItIsFor: "Users, editors, coaches, and contributors building general nutrition education.",
    benefits: ["Supports source-linked nutrition basics.", "Avoids copying diet plans.", "Flags medical nutrition content for qualified review."],
    safetyConsiderations: ["Medical nutrition therapy, eating disorders, diabetes, kidney disease, pregnancy, and weight-loss interventions need qualified care."],
    commonMistakes: ["Making disease-treatment claims.", "Publishing rigid meal plans without context.", "Copying handouts instead of linking."],
    relatedRoutines: ["Nutrition Basics", "Training Day Plate", "Hydration Education"],
    relatedAppSections: ["Nutrition", "Education", "Dashboard"],
    freeSourceLinks: [
      { title: "Nutrition.gov", href: "https://www.nutrition.gov/" },
      { title: "USDA MyPlate", href: "https://www.myplate.gov/" },
      { title: "NIDDK", href: "https://www.niddk.nih.gov/health-information" }
    ],
    tags: ["nutrition", "hydration", "meal planning"],
    reviewStatus: "Awaiting Review"
  }),
  resourceCard({
    title: "Research Databases",
    shortSummary: "Research discovery links for PubMed, PubMed Central, Google Scholar, and evidence review workflows.",
    whatItIs: "A research-navigation hub for source discovery, abstract review, full-text public articles, and citation tracking.",
    whoItIsFor: "Editors, researchers, professional reviewers, contributors, and advanced users.",
    benefits: ["Supports evidence discovery.", "Improves source metadata.", "Helps identify when claims need stronger review."],
    safetyConsiderations: ["Do not overstate one study.", "Prefer systematic reviews, guidelines, and consensus where possible.", "Make clear when evidence is limited."],
    commonMistakes: ["Using abstracts as proof without reading methods.", "Cherry-picking studies.", "Confusing correlation with causation."],
    relatedRoutines: ["Evidence Review Queue", "Professional Contributor Path"],
    relatedAppSections: ["Content", "Admin", "Education"],
    freeSourceLinks: [
      { title: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/" },
      { title: "PubMed Central", href: "https://pmc.ncbi.nlm.nih.gov/" },
      { title: "Google Scholar", href: "https://scholar.google.com/" }
    ],
    tags: ["research", "citations", "evidence"]
  }),
  resourceCard({
    title: "Certification and Education Paths",
    shortSummary: "Professional education and certification-source links for contributor vetting and continuing education discovery.",
    whatItIs: "A directory for ACSM, NSCA, NASM, ACE, ISSA, and similar professional education paths.",
    whoItIsFor: "Future contributors, editors verifying credentials, coaches, trainers, and advanced learners.",
    benefits: ["Supports credential review.", "Helps route professional contributors.", "Gives users paths for deeper learning."],
    safetyConsiderations: ["Certification status should be verified directly with the issuing organization.", "Credentials do not replace medical scope limitations."],
    commonMistakes: ["Listing unverified credentials.", "Treating all credentials as the same scope.", "Publishing advice beyond contributor qualifications."],
    relatedRoutines: ["Professional Contributor Path", "Review Workflow"],
    relatedAppSections: ["Content", "Admin", "Community"],
    freeSourceLinks: [
      { title: "ACSM", href: "https://www.acsm.org/" },
      { title: "NSCA", href: "https://www.nsca.com/" },
      { title: "ACE", href: "https://www.acefitness.org/" }
    ],
    tags: ["certifications", "contributors", "education"]
  }),
  resourceCard({
    title: "Sports Performance",
    shortSummary: "Source-linked performance education for strength, speed, agility, conditioning, mobility, and sport-specific demands.",
    whatItIs: "A topic hub for football, wrestling, combat sports, endurance, sprinting, explosive training, and athlete development.",
    whoItIsFor: "Athletes, coaches, editors, and contributors building sport-performance lessons.",
    benefits: ["Connects training qualities to sport demands.", "Supports position-specific pages.", "Keeps safety and recovery visible."],
    safetyConsiderations: ["Contact, sprinting, plyometrics, weight cutting, heat, and youth sport content need conservative progression and review."],
    commonMistakes: ["Confusing fatigue with performance transfer.", "Skipping landing and deceleration skill.", "Ignoring sport practice load."],
    relatedRoutines: ["Field Athlete Session", "Combat Conditioning", "Sprint Prep Session"],
    relatedAppSections: ["Workouts", "Education", "Recovery"],
    freeSourceLinks: [
      { title: "NSCA", href: "https://www.nsca.com/" },
      { title: "ACSM", href: "https://www.acsm.org/" },
      { title: "US Olympic and Paralympic Resources", href: "https://www.teamusa.com/" }
    ],
    tags: ["sports performance", "speed", "agility", "conditioning"]
  })
];

export const sourceDirectoryResources: SourceDirectoryCard[] = [
  sourceCard({ title: "CDC Physical Activity Basics", sourceName: "CDC", sourceType: "Government public health", category: "Public Health", url: "https://www.cdc.gov/physical-activity-basics/", whatItIs: "Public health guidance and topic pages for physical activity basics.", whoItIsFor: "General users, youth/family editors, and public health education.", tags: ["cdc", "public health", "activity basics"] }),
  sourceCard({ title: "HHS Physical Activity Guidelines", sourceName: "HHS / ODPHP", sourceType: "Government guideline", category: "Training Foundations", url: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines", whatItIs: "Federal physical activity guidelines and related Move Your Way resources.", whoItIsFor: "Users, editors, coaches, and public-health education pages.", tags: ["hhs", "guidelines", "move your way"] }),
  sourceCard({ title: "NIH Health Information", sourceName: "NIH", sourceType: "Government health research", category: "Public Health", url: "https://www.nih.gov/health-information", whatItIs: "NIH health information and research entry point.", whoItIsFor: "Editors, professional reviewers, and research-backed topic planning.", tags: ["nih", "health information", "research"] }),
  sourceCard({ title: "MedlinePlus Exercise and Physical Fitness", sourceName: "MedlinePlus", sourceType: "Government health encyclopedia", category: "Fitness Basics", url: "https://medlineplus.gov/exerciseandphysicalfitness.html", whatItIs: "Plain-language NIH health education for exercise, safety, and tutorials.", whoItIsFor: "Beginners, editors, and safety-review workflows.", tags: ["medlineplus", "exercise", "fitness basics"] }),
  sourceCard({ title: "Nutrition.gov", sourceName: "Nutrition.gov", sourceType: "Government nutrition portal", category: "Nutrition", url: "https://www.nutrition.gov/", whatItIs: "Federal nutrition information portal linking to food, diet, and healthy eating resources.", whoItIsFor: "Nutrition education, meal-planning pages, and source tracking.", tags: ["nutrition.gov", "nutrition", "materials"], reviewStatus: "Awaiting Review" }),
  sourceCard({ title: "National Institute on Aging", sourceName: "NIA", sourceType: "Government aging resource", category: "Active Aging", url: "https://www.nia.nih.gov/health", whatItIs: "NIH aging information including exercise, balance, and healthy aging topics.", whoItIsFor: "Older adults, caregivers, active aging pages, and adaptive programming.", tags: ["nia", "older adults", "active aging"], reviewStatus: "Awaiting Review" }),
  sourceCard({ title: "USDA MyPlate", sourceName: "USDA", sourceType: "Government nutrition framework", category: "Nutrition", url: "https://www.myplate.gov/", whatItIs: "USDA healthy eating framework, food groups, and consumer nutrition materials.", whoItIsFor: "General nutrition education and meal planning lessons.", tags: ["usda", "myplate", "nutrition"], reviewStatus: "Awaiting Review" }),
  sourceCard({ title: "NIDDK Health Information", sourceName: "NIDDK", sourceType: "Government health institute", category: "Nutrition and Conditions", url: "https://www.niddk.nih.gov/health-information", whatItIs: "NIH institute resource for diabetes, digestion, kidney disease, weight, and related health topics.", whoItIsFor: "Nutrition and medical-adjacent source discovery with professional review.", tags: ["niddk", "diabetes", "nutrition"], reviewStatus: "Awaiting Review" }),
  sourceCard({ title: "NINDS Health Information", sourceName: "NINDS", sourceType: "Government health institute", category: "Neurological Conditions", url: "https://www.ninds.nih.gov/health-information", whatItIs: "NIH neurological disorder and stroke information source.", whoItIsFor: "Neurological condition education and adaptive-fitness review queues.", tags: ["ninds", "neurological", "adaptive fitness"], reviewStatus: "Awaiting Review" }),
  sourceCard({ title: "American College of Sports Medicine", sourceName: "ACSM", sourceType: "Professional organization", category: "Exercise Science", url: "https://www.acsm.org/", whatItIs: "Exercise science, certification, research, and professional education organization.", whoItIsFor: "Contributor education, professional review, and exercise science references.", tags: ["acsm", "exercise science", "certification"] }),
  sourceCard({ title: "National Strength and Conditioning Association", sourceName: "NSCA", sourceType: "Professional organization", category: "Strength and Performance", url: "https://www.nsca.com/", whatItIs: "Strength and conditioning organization for coaching, education, research, and certification.", whoItIsFor: "Sports performance, strength programming, and contributor path references.", tags: ["nsca", "strength", "sports performance"] }),
  sourceCard({ title: "NASM", sourceName: "NASM", sourceType: "Certification and education", category: "Certification", url: "https://www.nasm.org/", whatItIs: "Personal training and fitness education provider.", whoItIsFor: "Contributor credential planning and general education-path discovery.", tags: ["nasm", "certification", "training education"] }),
  sourceCard({ title: "ACE Fitness", sourceName: "ACE", sourceType: "Certification and exercise library", category: "Exercise Library", url: "https://www.acefitness.org/", whatItIs: "Fitness certification provider with public exercise library and education resources.", whoItIsFor: "Exercise demo discovery, contributor education, and public fitness education.", tags: ["ace", "exercise library", "certification"] }),
  sourceCard({ title: "ISSA", sourceName: "ISSA", sourceType: "Certification and education", category: "Certification", url: "https://www.issaonline.com/", whatItIs: "Fitness education and certification provider.", whoItIsFor: "Contributor education-path discovery and credential review.", tags: ["issa", "certification", "fitness education"] }),
  sourceCard({ title: "ExRx", sourceName: "ExRx", sourceType: "Exercise reference database", category: "Exercise Database", url: "https://exrx.net/", whatItIs: "Exercise, muscle, biomechanics, and training reference site.", whoItIsFor: "Exercise library expansion, anatomy references, and movement terminology.", tags: ["exrx", "exercise database", "anatomy"] }),
  sourceCard({ title: "DAREBEE Workouts", sourceName: "DAREBEE", sourceType: "Free workout library", category: "Workout Routines", url: "https://darebee.com/workouts.html", whatItIs: "Free public workout collection and fitness programs.", whoItIsFor: "Routine discovery, bodyweight inspiration, and legal linking.", tags: ["darebee", "workouts", "bodyweight"] }),
  sourceCard({ title: "CalisTree", sourceName: "CalisTree", sourceType: "Calisthenics exercise library", category: "Exercise Database", url: "https://calistree.com/", whatItIs: "Calisthenics exercise library and progression graph.", whoItIsFor: "Bodyweight progression planning and terminology discovery.", tags: ["calistree", "calisthenics", "progressions"] }),
  sourceCard({ title: "StrengthLevel", sourceName: "StrengthLevel", sourceType: "Strength standards and calculators", category: "Strength Benchmarks", url: "https://strengthlevel.com/", whatItIs: "Strength standards, calculators, and exercise benchmarks.", whoItIsFor: "Benchmark education and careful context for strength comparisons.", tags: ["strengthlevel", "standards", "benchmarks"] }),
  sourceCard({ title: "Move United", sourceName: "Move United", sourceType: "Adaptive sports organization", category: "Adaptive Fitness", url: "https://moveunitedsport.org/", whatItIs: "Adaptive sport and recreation organization.", whoItIsFor: "Adaptive fitness source discovery and community resource linking.", tags: ["move united", "adaptive sports", "disability"], reviewStatus: "Awaiting Review" }),
  sourceCard({ title: "US Olympic and Paralympic Resources", sourceName: "USOPC / Team USA", sourceType: "Sports organization", category: "Sports Performance", url: "https://www.teamusa.com/", whatItIs: "Olympic and Paralympic sport information and athlete resource entry point.", whoItIsFor: "Sports performance, adaptive sport, and athlete education references.", tags: ["olympic", "paralympic", "sports"] }),
  sourceCard({ title: "PubMed", sourceName: "PubMed", sourceType: "Research database", category: "Research", url: "https://pubmed.ncbi.nlm.nih.gov/", whatItIs: "Biomedical and life science literature search database.", whoItIsFor: "Research discovery, citations, and professional review queues.", tags: ["pubmed", "research", "citations"] }),
  sourceCard({ title: "PubMed Central", sourceName: "PubMed Central", sourceType: "Open full-text research archive", category: "Research", url: "https://pmc.ncbi.nlm.nih.gov/", whatItIs: "Free full-text archive of biomedical and life sciences journal literature.", whoItIsFor: "Open-access article review and source-linked education.", tags: ["pmc", "open access", "research"] }),
  sourceCard({ title: "Google Scholar", sourceName: "Google Scholar", sourceType: "Research discovery helper", category: "Research", url: "https://scholar.google.com/", whatItIs: "Research search helper for finding papers, citations, and related literature.", whoItIsFor: "Source discovery before verifying full-text availability and publication quality.", tags: ["google scholar", "research", "discovery"] }),
  sourceCard({ title: "NHS Better Health", sourceName: "NHS", sourceType: "Public health resource", category: "Public Health", url: "https://www.nhs.uk/better-health/get-active/home-workout-videos/", whatItIs: "Public health home workout and activity video resource.", whoItIsFor: "Beginner-friendly movement education, Pilates support, and video source links.", tags: ["nhs", "videos", "public health"] }),
  sourceCard({ title: "Public and Embeddable YouTube Fitness Channels", sourceName: "YouTube", sourceType: "External video platform", category: "Video Learning", url: "https://www.youtube.com/", whatItIs: "External video platform for public fitness channels and official public-health videos where embed/link settings allow.", whoItIsFor: "Video learning shelves, not rehosted media libraries.", tags: ["youtube", "video", "embeds"], reviewStatus: "Awaiting Review", reviewerType: "license reviewer" })
];

export const topicHubResources: ResourceHubCard[] = [
  resourceCard({ title: "Training Foundations", shortSummary: "Progressive overload, volume, intensity, frequency, recovery, warmups, and safe exercise selection.", whatItIs: "The beginner-to-advanced foundation for strength, bodyweight, mobility, and conditioning lessons.", whoItIsFor: "New users, returning users, and editors building beginner education.", benefits: ["Defines the training language.", "Reduces random workouts.", "Connects every workout to a purpose."], safetyConsiderations: ["Progress one variable at a time.", "Respect symptoms and recovery."], commonMistakes: ["Adding intensity too early.", "Ignoring technique notes.", "Skipping recovery."], relatedRoutines: ["Beginner Foundation", "Iron Forge Strength"], relatedAppSections: ["Workouts", "Exercises", "Education"], freeSourceLinks: [{ title: "HHS Guidelines", href: "https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines" }], tags: ["training foundations", "strength", "bodyweight"] }),
  resourceCard({ title: "Training Systems", shortSummary: "Bodyweight, strength, endurance, mobility, hypertrophy, tactical, sport, yoga, Pilates, and Tai Chi education.", whatItIs: "A system map for choosing training styles and matching them to routines.", whoItIsFor: "Users comparing methods and editors organizing workout categories.", benefits: ["Clarifies style differences.", "Improves program selection.", "Supports progression paths."], safetyConsiderations: ["Match the system to ability and goals.", "Avoid mixing too many hard methods at once."], commonMistakes: ["Changing systems weekly.", "Copying advanced templates.", "Missing recovery costs."], relatedRoutines: ["Bodyweight Warrior", "Performance Lab"], relatedAppSections: ["Workouts", "Routines"], freeSourceLinks: [{ title: "ACE Exercise Library", href: "https://www.acefitness.org/resources/everyone/exercise-library/" }], tags: ["training systems", "programming", "routines"] }),
  resourceCard({ title: "Nutrition", shortSummary: "Calories, protein, carbohydrates, fats, hydration, meal timing, MyPlate, and general nutrition education.", whatItIs: "A source-linked nutrition hub for general education and app tracking.", whoItIsFor: "Users learning food basics and editors building nutrition pages.", benefits: ["Connects food choices to training context.", "Supports source-linked lessons.", "Avoids copied diet plans."], safetyConsiderations: ["Medical nutrition requires qualified care.", "Avoid rigid or shame-based guidance."], commonMistakes: ["Making disease claims.", "Overprescribing macros.", "Ignoring eating disorder risk."], relatedRoutines: ["Training Day Plate"], relatedAppSections: ["Nutrition", "Dashboard"], freeSourceLinks: [{ title: "Nutrition.gov", href: "https://www.nutrition.gov/" }, { title: "USDA MyPlate", href: "https://www.myplate.gov/" }], tags: ["nutrition", "hydration", "meal planning"], reviewStatus: "Awaiting Review", reviewerType: "nutrition professional" }),
  resourceCard({ title: "Women's Fitness", shortSummary: "Strength, recovery, nutrition, bone health, life-stage context, pregnancy/postpartum boundaries, and pelvic-health review flags.", whatItIs: "A professional-review hub for women-focused fitness education.", whoItIsFor: "Users, contributors, and reviewers building inclusive women's fitness lessons.", benefits: ["Adds needed topic coverage.", "Keeps health boundaries visible.", "Supports respectful education."], safetyConsiderations: ["Pregnancy, postpartum, pelvic pain, eating disorders, and medical conditions require qualified care."], commonMistakes: ["Using appearance-focused claims.", "Making unsupported gender claims.", "Skipping review."], relatedRoutines: ["Strength Foundation", "Mobility Reset"], relatedAppSections: ["Education", "Nutrition", "Recovery"], freeSourceLinks: [{ title: "MedlinePlus Women's Health", href: "https://medlineplus.gov/womenshealth.html" }], tags: ["women's fitness", "strength", "recovery"], reviewStatus: "Awaiting Review", reviewerType: "women's fitness specialist" }),
  resourceCard({ title: "Youth Fitness", shortSummary: "Family activity, youth movement skills, age-appropriate strength, play, sport preparation, and supervision.", whatItIs: "A youth and family education hub with safety and guardian context.", whoItIsFor: "Families, coaches, youth editors, and community programs.", benefits: ["Supports active families.", "Keeps youth training age-appropriate.", "Adds supervision notes."], safetyConsiderations: ["Youth training must consider age, maturity, coaching, heat, sport load, and equipment."], commonMistakes: ["Using adult routines.", "Chasing intensity over skill.", "Ignoring supervision."], relatedRoutines: ["Family Activity Starter"], relatedAppSections: ["Education", "Community"], freeSourceLinks: [{ title: "CDC Physical Activity Basics", href: "https://www.cdc.gov/physical-activity-basics/" }], tags: ["youth fitness", "family", "activity"], reviewStatus: "Awaiting Review", reviewerType: "youth fitness specialist" }),
  resourceCard({ title: "Injured Athlete and Recovery", shortSummary: "Return-to-training education, mobility, sleep, cooldowns, active recovery, and symptom-aware progression.", whatItIs: "A conservative education hub for users returning from pain, injury, fatigue, or training breaks.", whoItIsFor: "Injured athletes, returning users, coaches, and reviewers.", benefits: ["Adds red-flag boundaries.", "Supports safer progressions.", "Connects notes to recovery."], safetyConsiderations: ["Do not treat, diagnose, or replace physical therapy.", "Refer red flags to medical care."], commonMistakes: ["Training through warning signs.", "Promising recovery.", "Skipping professional review."], relatedRoutines: ["Return-to-Training Ladder"], relatedAppSections: ["Injured Athlete", "Recovery"], freeSourceLinks: [{ title: "MedlinePlus Sports Injuries", href: "https://medlineplus.gov/sportsinjuries.html" }], tags: ["injury education", "recovery", "mobility"], reviewStatus: "Awaiting Review", reviewerType: "healthcare professional" }),
  resourceCard({ title: "Adaptive Fitness and Disabilities", shortSummary: "Wheelchair fitness, prosthetic users, amputees, seniors, neurological conditions, limited mobility, and accessible setup planning.", whatItIs: "An inclusive movement hub with adaptive equipment and review-status fields.", whoItIsFor: "Adaptive athletes, caregivers, coaches, contributors, and reviewers.", benefits: ["Improves accessibility.", "Stores modification notes.", "Plans media with inclusive representation."], safetyConsiderations: ["Medical status, equipment fit, skin, pressure, fatigue, and balance require individualized care."], commonMistakes: ["One-size-fits-all modifications.", "No equipment setup notes.", "No professional or lived-experience review."], relatedRoutines: ["Adaptive Movement Session"], relatedAppSections: ["Adaptive Fitness", "Recovery"], freeSourceLinks: [{ title: "Move United", href: "https://moveunitedsport.org/" }], tags: ["adaptive fitness", "disability", "accessibility"], reviewStatus: "Awaiting Review", reviewerType: "adaptive fitness specialist" }),
  resourceCard({ title: "Breathing, Recovery, and Mindset", shortSummary: "Breathing practice, active recovery, sleep, cooldowns, stress awareness, habit design, and consistency systems.", whatItIs: "A behavior and recovery hub supporting sustainable routines.", whoItIsFor: "Users managing stress, readiness, sleep, and long-term consistency.", benefits: ["Supports recovery literacy.", "Connects habits to training.", "Helps avoid all-or-nothing plans."], safetyConsiderations: ["Breathing or mental health content should not replace medical or mental health care."], commonMistakes: ["Using recovery work to justify overtraining.", "Treating breathing as medical treatment.", "Skipping sleep basics."], relatedRoutines: ["Recovery Reset", "Sleep Routine"], relatedAppSections: ["Recovery", "Dashboard"], freeSourceLinks: [{ title: "MedlinePlus Sleep Disorders", href: "https://medlineplus.gov/sleepdisorders.html" }], tags: ["breathing", "recovery", "mindset"] }),
  resourceCard({ title: "Body Areas and Anatomy", shortSummary: "Neck, shoulders, chest, back, arms, grip, core, hips, legs, calves, tibialis, feet, and ankles.", whatItIs: "A body-area hub for exercise selection, media planning, and anatomy education.", whoItIsFor: "Users learning muscles, editors building anatomy pages, and contributors planning diagrams.", benefits: ["Connects muscles to exercises.", "Improves search and filtering.", "Plans anatomy graphics legally."], safetyConsiderations: ["Anatomy education is not diagnosis.", "Pain or neurological symptoms require professional care."], commonMistakes: ["Reducing movement to one muscle.", "Ignoring joints and tissues.", "Using unlabeled anatomy images without license."], relatedRoutines: ["Exercise Library", "Mobility Reset"], relatedAppSections: ["Exercises", "Education"], freeSourceLinks: [{ title: "ExRx", href: "https://exrx.net/" }], tags: ["anatomy", "body areas", "muscle groups"] }),
  resourceCard({ title: "Sports Performance", shortSummary: "Football, wrestling, combat sports, running, sprinting, agility, conditioning, jumps, and power development.", whatItIs: "A performance hub that connects physical qualities to sport demands.", whoItIsFor: "Athletes, coaches, editors, and contributors building sport pages.", benefits: ["Supports sport-specific pages.", "Keeps quality and recovery visible.", "Connects strength to speed and agility."], safetyConsiderations: ["Contact, sprinting, jumping, cutting, and weight-management topics need careful progression and review."], commonMistakes: ["Confusing tired with trained.", "Skipping deceleration.", "Ignoring sport practice load."], relatedRoutines: ["Field Athlete Session", "Combat Conditioning"], relatedAppSections: ["Workouts", "Education"], freeSourceLinks: [{ title: "NSCA", href: "https://www.nsca.com/" }], tags: ["sports performance", "speed", "agility", "conditioning"] })
];

export const mediaSourceDirectory: MediaSourceDirectoryItem[] = [
  {
    sourceName: "Pixabay",
    url: "https://pixabay.com/service/license-summary/",
    mediaType: "Images, video, music, sound effects, GIFs",
    licenseNotes: "Pixabay content can generally be used for free for many commercial and noncommercial uses, but restricted uses still apply. Verify the current license and item page before publishing.",
    attributionRequired: "Generally no, but attribution is appreciated; verify item-specific terms.",
    commercialUseAllowed: "Generally yes, subject to restrictions.",
    modificationAllowed: "Generally yes, subject to restrictions.",
    downloadAllowed: "Yes, from Pixabay under its terms.",
    embedOrLinkPreferred: "Download only after recording license and item URL; otherwise link preferred.",
    reviewStatus: "Awaiting Review",
    reviewerType: "license reviewer",
    reviewDate: "Pending",
    reviewedBy: "Unassigned",
    reviewNotes: "License terms must be reviewed for the exact asset before download, modification, or commercial use."
  },
  {
    sourceName: "Pexels",
    url: "https://www.pexels.com/license/",
    mediaType: "Photos and videos",
    licenseNotes: "Pexels allows free use of photos and videos with restrictions on identifiable people, trademarks, resale, and misleading use. Verify the current license and item page.",
    attributionRequired: "Generally no, but attribution is appreciated.",
    commercialUseAllowed: "Generally yes, subject to restrictions.",
    modificationAllowed: "Generally yes, subject to restrictions.",
    downloadAllowed: "Yes, from Pexels under its terms.",
    embedOrLinkPreferred: "Download only after recording license and item URL; otherwise link preferred.",
    reviewStatus: "Awaiting Review",
    reviewerType: "license reviewer",
    reviewDate: "Pending",
    reviewedBy: "Unassigned",
    reviewNotes: "License terms must be reviewed for the exact asset before download, modification, or commercial use."
  },
  {
    sourceName: "Mixkit",
    url: "https://mixkit.co/license/",
    mediaType: "Stock video, music, sound effects, templates",
    licenseNotes: "Mixkit has multiple license categories. Free stock video may be usable for commercial projects, while templates and audio can have different rules. Verify the license attached to the exact item.",
    attributionRequired: "Usually no for free video, but verify the item license.",
    commercialUseAllowed: "Item-specific; often yes for free stock video.",
    modificationAllowed: "Item-specific.",
    downloadAllowed: "Yes when the item license allows download and use.",
    embedOrLinkPreferred: "Link preferred until item-specific license is recorded.",
    reviewStatus: "Awaiting Review",
    reviewerType: "license reviewer",
    reviewDate: "Pending",
    reviewedBy: "Unassigned",
    reviewNotes: "License terms must be reviewed for the exact asset before download, modification, or commercial use."
  },
  {
    sourceName: "Coverr",
    url: "https://coverr.co/license",
    mediaType: "Stock video and visual media",
    licenseNotes: "Coverr license terms can differ between free downloads and paid plans. Verify whether attribution, redistribution, AI training, or commercial restrictions apply to the exact asset.",
    attributionRequired: "Item/plan-specific; verify before publishing.",
    commercialUseAllowed: "Generally allowed under license terms, but verify asset and plan.",
    modificationAllowed: "Generally allowed under license terms, but verify asset and plan.",
    downloadAllowed: "Yes when downloaded under Coverr terms.",
    embedOrLinkPreferred: "Link preferred until exact license, plan, and attribution status are recorded.",
    reviewStatus: "Awaiting Review",
    reviewerType: "license reviewer",
    reviewDate: "Pending",
    reviewedBy: "Unassigned",
    reviewNotes: "License terms must be reviewed for the exact asset before download, modification, or commercial use."
  },
  {
    sourceName: "Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/Commons:Licensing",
    mediaType: "Images, video, audio, diagrams",
    licenseNotes: "Every file has its own license. Many require attribution and share-alike terms; public-domain files may have fewer restrictions. Verify the exact file page.",
    attributionRequired: "Often yes unless public domain or license states otherwise.",
    commercialUseAllowed: "License-specific.",
    modificationAllowed: "License-specific; share-alike may apply.",
    downloadAllowed: "Yes, but reuse must follow the exact file license.",
    embedOrLinkPreferred: "Link preferred until file license and attribution are captured.",
    reviewStatus: "Awaiting Review",
    reviewerType: "license reviewer",
    reviewDate: "Pending",
    reviewedBy: "Unassigned",
    reviewNotes: "License terms must be reviewed for the exact asset before download, modification, or commercial use."
  },
  {
    sourceName: "Internet Archive",
    url: "https://archive.org/",
    mediaType: "Books, video, audio, images, archived media",
    licenseNotes: "Rights vary by item. Some materials are public domain or Creative Commons; others are protected or lending-only. Verify the exact item rights before any reuse.",
    attributionRequired: "Item-specific.",
    commercialUseAllowed: "Item-specific.",
    modificationAllowed: "Item-specific.",
    downloadAllowed: "Item-specific; do not rehost protected or lending-only materials.",
    embedOrLinkPreferred: "Link preferred unless public-domain or licensed reuse is confirmed.",
    reviewStatus: "Awaiting Review",
    reviewerType: "license reviewer",
    reviewDate: "Pending",
    reviewedBy: "Unassigned",
    reviewNotes: "Item rights must be reviewed before reuse, download, modification, or commercial use."
  },
  {
    sourceName: "Nutrition.gov Videos and Materials",
    url: "https://www.nutrition.gov/",
    mediaType: "Nutrition videos, printable materials, handouts, federal and partner links",
    licenseNotes: "Federal materials may be public, but Nutrition.gov also links to partner or third-party resources. Link to the original and verify each material before reuse or modification.",
    attributionRequired: "Recommended; item-specific for partner materials.",
    commercialUseAllowed: "Item-specific; avoid implying government endorsement.",
    modificationAllowed: "Avoid modifying official health materials; create original summaries instead.",
    downloadAllowed: "Only when the material is provided for download and rights permit reuse.",
    embedOrLinkPreferred: "Link preferred for health materials.",
    reviewStatus: "Awaiting Review",
    reviewerType: "nutrition professional",
    reviewDate: "Pending",
    reviewedBy: "Unassigned",
    reviewNotes: "Nutrition materials need professional review before reuse, modification, or publication as guidance."
  }
];
