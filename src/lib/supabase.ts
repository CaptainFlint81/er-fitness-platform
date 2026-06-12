import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export function createSupabaseBrowserClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

export const plannedSupabaseTables = [
  "profiles",
  "profile_settings",
  "profile_collages",
  "profile_badges",
  "profile_titles",
  "pets",
  "pet_events",
  "education_topics",
  "app_handoff_links",
  "content_submissions",
  "content_reviews",
  "content_references",
  "content_licenses",
  "professional_contributors",
  "contributor_credentials",
  "contributor_approvals",
  "groups",
  "group_members",
  "group_moderators",
  "workouts",
  "exercises",
  "workout_exercises",
  "routine_templates",
  "routine_template_blocks",
  "saved_routines",
  "favorite_workouts",
  "completed_programs",
  "nutrition_plans",
  "food_library",
  "recovery_protocols",
  "recovery_protocol_steps",
  "injury_protocols",
  "transformation_timelines",
  "transformation_milestones",
  "media_assets",
  "media_galleries",
  "media_gallery_items",
  "media_uploads",
  "posts",
  "content_posts",
  "blogs",
  "blog_posts",
  "comments",
  "likes",
  "reactions",
  "chat_channels",
  "chat_rooms",
  "chat_messages",
  "follows",
  "blocked_users",
  "saved_posts",
  "saved_content",
  "leaderboard_scores",
  "achievements",
  "badges",
  "titles",
  "content_categories",
  "content_category_assignments",
  "search_documents",
  "content_search_documents",
  "exercise_search_documents",
  "article_search_documents",
  "video_search_documents",
  "image_search_documents",
  "muscle_group_terms",
  "injury_terms",
  "condition_terms",
  "reports",
  "moderation_queue",
  "moderation_actions",
  "user_review_notes"
] as const;
