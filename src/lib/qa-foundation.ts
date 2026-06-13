export type QuestionAccessLevel = "public" | "member" | "subscriber";

export type QuestionModerationStatus =
  | "E.R. Fitness Draft"
  | "Source Linked"
  | "Awaiting Review"
  | "Reviewed";

export type QuestionAnswerItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  accessLevel: QuestionAccessLevel;
  moderationStatus: QuestionModerationStatus;
  contributorBadge: string;
  futureProfessionalBadge: string;
  relatedSections: string[];
};

export const qaCategories = [
  "Training",
  "Nutrition",
  "Recovery",
  "Adaptive Fitness",
  "Injured Athlete",
  "Community Safety",
  "App Companion"
];

export const qaAccessLevels = [
  {
    level: "public",
    title: "Public Preview",
    description: "Visitors can read limited preview answers and search sample categories."
  },
  {
    level: "member",
    title: "Future Member Questions",
    description: "Asking and replying are reserved for future authenticated accounts with moderation."
  },
  {
    level: "subscriber",
    title: "Future Subscriber Library",
    description: "Full Q&A history, saved answers, and deeper expert review filters are reserved for future app subscriber access."
  }
] as const;

export const qaFoundationItems: QuestionAnswerItem[] = [
  {
    id: "beginner-workout-choice",
    question: "How should a beginner choose a workout from the website preview?",
    answer:
      "Start with a simple routine that matches your current equipment, skill level, and recovery capacity. The website can teach the idea, but the app is where workout selection, reminders, progression, and personal records should be handled when account access is enabled.",
    category: "Training",
    tags: ["beginner", "workout selection", "progression", "app handoff"],
    accessLevel: "public",
    moderationStatus: "E.R. Fitness Draft",
    contributorBadge: "E.R. Fitness Foundation",
    futureProfessionalBadge: "Future coach review",
    relatedSections: ["/workouts", "/why-the-app"]
  },
  {
    id: "soreness-vs-pain",
    question: "What is the difference between normal soreness and a warning sign?",
    answer:
      "Mild muscle soreness after unfamiliar training can be common. Sharp pain, joint pain, numbness, tingling, dizziness, chest pain, or symptoms that worsen should be treated as a stop signal and reviewed by a qualified professional. This answer is educational only and not medical advice.",
    category: "Recovery",
    tags: ["soreness", "pain", "safety", "medical disclaimer"],
    accessLevel: "public",
    moderationStatus: "Awaiting Review",
    contributorBadge: "Safety Draft",
    futureProfessionalBadge: "Future clinical review",
    relatedSections: ["/recovery", "/legal/disclaimer"]
  },
  {
    id: "adaptive-exercise-preview",
    question: "How should adaptive athletes use exercise previews safely?",
    answer:
      "Use previews as education, not a prescription. Match the movement to your equipment, support needs, transfer safety, skin integrity, fatigue level, and professional guidance. Future member tools should let users save modifications and track what works.",
    category: "Adaptive Fitness",
    tags: ["adaptive fitness", "modifications", "equipment", "safety"],
    accessLevel: "public",
    moderationStatus: "Awaiting Review",
    contributorBadge: "Adaptive Fitness Draft",
    futureProfessionalBadge: "Future adaptive specialist review",
    relatedSections: ["/adaptive-fitness", "/education"]
  },
  {
    id: "nutrition-question-boundaries",
    question: "Can community answers give nutrition plans?",
    answer:
      "Community answers should explain general education such as protein, hydration, meal planning, and label reading. They should not diagnose, treat, prescribe medical diets, or replace individualized care from a qualified healthcare or nutrition professional.",
    category: "Nutrition",
    tags: ["nutrition", "scope", "community safety", "medical disclaimer"],
    accessLevel: "public",
    moderationStatus: "Source Linked",
    contributorBadge: "Nutrition Education Draft",
    futureProfessionalBadge: "Future dietitian review",
    relatedSections: ["/nutrition", "/legal/disclaimer"]
  },
  {
    id: "injury-return-to-training",
    question: "What should someone do before returning to training after an injury?",
    answer:
      "Return decisions should be based on professional clearance, symptom response, range of motion, strength, confidence, and gradual exposure. The website can outline concepts, but it should not replace rehab, diagnosis, or return-to-sport decisions from a qualified professional.",
    category: "Injured Athlete",
    tags: ["injury", "return to training", "professional review", "progression"],
    accessLevel: "member",
    moderationStatus: "Awaiting Review",
    contributorBadge: "Injury Education Draft",
    futureProfessionalBadge: "Future licensed professional review",
    relatedSections: ["/injured-athlete", "/recovery"]
  },
  {
    id: "community-answer-quality",
    question: "What makes a useful community answer?",
    answer:
      "A useful answer stays specific, cites the relevant source or section, avoids medical claims, explains safety limits, and points users toward the app for tracking and personalization. Answers that appear unsafe should be reported for moderation review when backend reporting is enabled.",
    category: "Community Safety",
    tags: ["answer quality", "sources", "moderation", "reports"],
    accessLevel: "member",
    moderationStatus: "E.R. Fitness Draft",
    contributorBadge: "Community Safety Draft",
    futureProfessionalBadge: "Future moderator review",
    relatedSections: ["/community", "/content"]
  },
  {
    id: "why-app-for-qa",
    question: "Why would Q&A need the app if the website has answers?",
    answer:
      "The website can preview education and answer common questions. The app is where a member should save answers, connect them to routines, receive reminders, track outcomes, and build a personal history once account access exists.",
    category: "App Companion",
    tags: ["app value", "bookmarks", "tracking", "subscriber access"],
    accessLevel: "subscriber",
    moderationStatus: "E.R. Fitness Draft",
    contributorBadge: "E.R. Fitness Foundation",
    futureProfessionalBadge: "Future product review",
    relatedSections: ["/why-the-app", "/dashboard"]
  }
];
