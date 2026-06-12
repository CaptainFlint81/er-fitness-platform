export type ContentKind =
  | "transformation-story"
  | "workout-tip"
  | "nutrition-tip"
  | "recovery-tip"
  | "question"
  | "progress-update"
  | "instructional-article"
  | "uploaded-workout-video"
  | "uploaded-progress-photo"
  | "external-social-link";

export type PublishStatus = "draft" | "scheduled" | "published" | "flagged" | "archived";

export type Visibility = "public" | "followers" | "private" | "group";

export type ContentReviewStatus =
  | "draft"
  | "submitted"
  | "owner-review"
  | "professional-review"
  | "changes-requested"
  | "publish-approved"
  | "published"
  | "archived";

export type ExpertReviewStatus = "E.R. Fitness Draft" | "Source Linked" | "Awaiting Review" | "Reviewed";

export type ExpertReviewerType =
  | "editorial reviewer"
  | "trainer or coach"
  | "healthcare professional"
  | "nutrition professional"
  | "adaptive fitness specialist"
  | "youth fitness specialist"
  | "women's fitness specialist"
  | "license reviewer";

export type ExpertReviewFields = {
  reviewStatus: ExpertReviewStatus;
  reviewerType: ExpertReviewerType;
  reviewDate: string;
  reviewedBy: string;
  reviewNotes: string;
};

export type ContentPlatformCategory =
  | "Training"
  | "Nutrition"
  | "Recovery"
  | "Adaptive Fitness"
  | "Injured Athlete"
  | "Yoga"
  | "Pilates"
  | "Tai Chi"
  | "Mobility"
  | "Longevity"
  | "Athletic Performance"
  | "Bodybuilding"
  | "Powerlifting"
  | "HIIT"
  | "Sports Performance";

export type ContributorDiscipline =
  | "physical therapist"
  | "trainer"
  | "coach"
  | "nutrition professional"
  | "adaptive fitness specialist"
  | "recovery specialist";

export type SearchDocumentType =
  | "exercise"
  | "article"
  | "video"
  | "image"
  | "blog"
  | "muscle-group"
  | "injury"
  | "condition"
  | "contributor";

export type ContentReviewMetadata = {
  author: string;
  reviewedBy: string;
  credentials: string;
  reviewDate: string;
  source: string;
  license: string;
  references: string[];
};

export type ContentWorkflow = {
  status: ContentReviewStatus;
  ownerApprovalRequired: boolean;
  professionalReviewRequired: boolean;
  publishApprovalRequired: boolean;
  lastAction: string;
};

export type ReactionSummary = {
  likes: number;
  comments: number;
  shares: number;
  saves: number;
};

export type ContentMedia = {
  id: string;
  type: "photo" | "video" | "embed";
  title: string;
  category: string;
  muscleGroup?: string;
  url?: string;
  thumbnail?: string;
};

export type CreatorProfile = {
  id: string;
  username: string;
  displayName: string;
  role: "athlete" | "coach" | "creator" | "moderator" | "admin";
  avatar: string;
  banner: string;
  bio: string;
  goal: string;
  followers: number;
  following: number;
  xp: number;
  streak: number;
  pet: {
    name: string;
    level: number;
    xp: number;
  };
  badges: string[];
  titles: string[];
};

export type CommunityPost = {
  id: string;
  kind: ContentKind;
  title: string;
  body: string;
  authorId: string;
  category: string;
  tags: string[];
  media: ContentMedia[];
  status: PublishStatus;
  visibility: Visibility;
  reactions: ReactionSummary;
  createdAt: string;
  updatedAt: string;
  embeddedWorkout?: string;
  embeddedNutritionPlan?: string;
  externalEmbed?: string;
  review?: ContentReviewMetadata;
  workflow?: ContentWorkflow;
};

export type BlogPost = {
  id: string;
  kind: "instructional-article" | "transformation-story" | "workout-tip" | "nutrition-tip" | "recovery-tip";
  title: string;
  excerpt: string;
  authorId: string;
  category: string;
  tags: string[];
  readTime: string;
  status: PublishStatus;
  visibility: Visibility;
  cover: ContentMedia;
  reactions: ReactionSummary;
  createdAt: string;
  review?: ContentReviewMetadata;
  workflow?: ContentWorkflow;
};

export type Comment = {
  id: string;
  postId: string;
  authorId: string;
  body: string;
  status: "visible" | "flagged" | "hidden";
  reactions: Pick<ReactionSummary, "likes">;
  createdAt: string;
  replies?: Comment[];
};

export type ModerationItem = {
  id: string;
  targetType: "post" | "blog" | "comment" | "media" | "profile" | "user";
  targetId: string;
  reason: string;
  status: "queued" | "reviewing" | "resolved";
  priority: "low" | "medium" | "high";
  reportedBy: string;
};

export type CommunityGroupVisibility = "public" | "private";

export type CommunityGroup = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  visibility: CommunityGroupVisibility;
  coverGradient: string;
  members: number;
  moderators: string[];
  rules: string[];
  channels: string[];
  tags: string[];
  featured?: boolean;
};

export type GroupMember = {
  id: string;
  groupId: string;
  profileId: string;
  role: "member" | "moderator" | "owner";
  joinedAt: string;
};

export type GroupChatMessage = {
  id: string;
  groupId: string;
  channel: string;
  authorId: string;
  body: string;
  createdAt: string;
};

export type GroupPostRecord = {
  id: string;
  groupId: string;
  postId: string;
  pinned: boolean;
  channel: "Feed" | "Questions" | "Guides";
  createdAt: string;
};

export type GroupMediaRecord = {
  id: string;
  groupId: string;
  postId?: string;
  mediaId: string;
  uploadedBy: string;
  status: PublishStatus;
  visibility: Visibility;
  createdAt: string;
};

export type GroupReactionRecord = {
  id: string;
  groupId: string;
  targetType: "post" | "comment" | "chat_message" | "media";
  targetId: string;
  profileId: string;
  reactionType: "like" | "fire" | "strong" | "helpful" | "volt";
  createdAt: string;
};

export type ProfessionalContributor = {
  id: string;
  displayName: string;
  discipline: ContributorDiscipline;
  credentials: string;
  specialties: ContentPlatformCategory[];
  approvalStatus: "pending-owner-review" | "approved" | "needs-more-info";
  submissionCount: number;
};

export type ContentSubmission = {
  id: string;
  title: string;
  type: SearchDocumentType;
  category: ContentPlatformCategory;
  contributorId: string;
  workflow: ContentWorkflow;
  review: ContentReviewMetadata;
};

export type SearchDocument = {
  id: string;
  type: SearchDocumentType;
  title: string;
  category: ContentPlatformCategory;
  description: string;
  tags: string[];
  href: string;
  author: string;
  reviewedBy: string;
  status: ContentReviewStatus;
};
