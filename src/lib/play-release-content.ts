import type { FeatureCard } from "@/types/platform";

export const playReleaseContact = {
  appName: "E.R. Fitness",
  platformName: "Every Routine Fitness",
  developerName: "Bamboozled Labs",
  supportEmail: "flint@bamboozledlabs.dev",
  packageId: "com.bamboozledlabs.erfitness"
};

export const playSupportLinks: FeatureCard[] = [
  {
    title: "Privacy Policy",
    description: "How the website and app handle account, profile, community, media, support, and analytics data.",
    href: "/legal/privacy",
    meta: "Play required"
  },
  {
    title: "Terms of Use",
    description: "Rules for app use, public education content, community activity, moderation, and account responsibility.",
    href: "/legal/terms",
    meta: "Public terms"
  },
  {
    title: "Data Deletion",
    description: "Instructions for requesting deletion of app account data, profile data, uploaded media, and support records.",
    href: "/data-deletion",
    meta: "User request flow"
  },
  {
    title: "Support / Contact",
    description: "Public support path for account help, safety concerns, privacy questions, and Play listing support.",
    href: "/support",
    meta: "Contact"
  }
];

export const appStoreSupportCards: FeatureCard[] = [
  {
    title: "App Identity",
    description: `${playReleaseContact.appName} is the mobile tracking app for the Every Routine Fitness education platform.`,
    meta: playReleaseContact.packageId
  },
  {
    title: "Website Relationship",
    description: "The website teaches exercise, routines, nutrition, recovery, adaptive fitness, and safety concepts. The app is the tracking and habit layer.",
    href: "/app",
    meta: "App landing"
  },
  {
    title: "Education Boundary",
    description: "Fitness, nutrition, recovery, and injury-related content is educational only and is not medical advice, diagnosis, treatment, or physical therapy.",
    href: "/legal/medical-educational-disclaimer",
    meta: "Safety"
  },
  {
    title: "Billing Status",
    description: "Billing and subscriptions are not active in this website phase. Premium foundations stay inactive until entitlement, legal, and support workflows are reviewed.",
    href: "/legal/terms",
    meta: "No active billing"
  }
];

export const dataDeletionSteps: FeatureCard[] = [
  {
    title: "Send Request",
    description: `Email ${playReleaseContact.supportEmail} from the email address associated with your E.R. Fitness account and include "Data Deletion Request" in the subject line.`,
    meta: "Step 1"
  },
  {
    title: "Identify Data",
    description: "Include your username, account email, and whether you want profile, media, community posts, support records, or all eligible account data deleted.",
    meta: "Step 2"
  },
  {
    title: "Verify Ownership",
    description: "The support team may ask for reasonable confirmation before deleting account data so another person cannot remove your data without authorization.",
    meta: "Step 3"
  },
  {
    title: "Deletion Window",
    description: "Eligible production data should be deleted or de-identified after verification. Some records may be retained only when required for security, legal, fraud-prevention, or transaction obligations.",
    meta: "Step 4"
  }
];

export const supportTopics: FeatureCard[] = [
  {
    title: "Account Help",
    description: "Profile access, username concerns, deletion requests, login questions, and app-to-website account questions.",
    href: "/data-deletion"
  },
  {
    title: "Privacy Questions",
    description: "Questions about personal data, media uploads, community content, visibility, deletion, and future Supabase-backed storage.",
    href: "/legal/privacy"
  },
  {
    title: "Safety or Medical Concern",
    description: "Questions about educational boundaries, pain or symptom warnings, injured-athlete content, and professional-care prompts.",
    href: "/legal/medical-educational-disclaimer"
  },
  {
    title: "Google Play Listing",
    description: "Public support links for Google Play review, including privacy, data deletion, disclaimer, and app identity pages.",
    href: "/google-play-support"
  }
];

export const disclaimerSummaryCards: FeatureCard[] = [
  {
    title: "Educational Only",
    description: "Content explains fitness, nutrition, recovery, mobility, routines, and habits. It does not prescribe care or replace a qualified professional.",
    meta: "Fitness education"
  },
  {
    title: "Not Medical Advice",
    description: "The platform does not diagnose, treat, prevent, or cure disease, injury, pain, disability, or any medical or mental health condition.",
    meta: "Medical boundary"
  },
  {
    title: "Stop for Symptoms",
    description: "Stop activity and seek qualified help for pain, dizziness, shortness of breath, numbness, tingling, unusual symptoms, or worsening symptoms.",
    meta: "Safety rule"
  },
  {
    title: "Professional Review",
    description: "Users should consult a qualified healthcare, fitness, nutrition, or rehabilitation professional before starting or changing a program.",
    meta: "User responsibility"
  }
];
