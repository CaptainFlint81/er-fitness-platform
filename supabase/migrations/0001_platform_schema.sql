-- Every Routine Fitness companion platform schema foundation.
-- Apply in Supabase SQL editor or via the Supabase CLI after creating a project.

create extension if not exists pgcrypto;

create type public.profile_role as enum ('athlete', 'coach', 'creator', 'moderator', 'admin');
create type public.publish_status as enum ('draft', 'scheduled', 'published', 'flagged', 'archived');
create type public.visibility as enum ('public', 'followers', 'group', 'private');
create type public.content_kind as enum (
  'transformation-story',
  'workout-tip',
  'nutrition-tip',
  'recovery-tip',
  'question',
  'progress-update',
  'instructional-article',
  'uploaded-workout-video',
  'uploaded-progress-photo',
  'external-social-link'
);
create type public.media_type as enum ('photo', 'video', 'embed');
create type public.moderation_status as enum ('queued', 'reviewing', 'resolved', 'dismissed');

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null unique check (username ~ '^[a-z0-9][a-z0-9_-]{2,29}$'),
  display_name text not null,
  role public.profile_role not null default 'athlete',
  avatar_url text,
  banner_url text,
  collage jsonb not null default '[]'::jsonb,
  bio text not null default '',
  current_goal text not null default '',
  total_xp integer not null default 0 check (total_xp >= 0),
  streak_count integer not null default 0 check (streak_count >= 0),
  leaderboard_rank integer,
  is_private boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.pets (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  name text not null,
  species text not null default 'companion',
  level integer not null default 1 check (level >= 1),
  xp integer not null default 0 check (xp >= 0),
  is_selected boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.content_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  kind public.content_kind not null,
  title text not null,
  body text not null default '',
  category text not null,
  tags text[] not null default '{}',
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  embedded_workout_id uuid,
  embedded_nutrition_plan_id uuid,
  external_embed_url text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  kind public.content_kind not null,
  title text not null,
  excerpt text not null default '',
  body text not null default '',
  category text not null,
  tags text[] not null default '{}',
  read_time text not null default '1 min',
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint blog_kind_check check (kind in ('instructional-article', 'transformation-story', 'workout-tip', 'nutrition-tip', 'recovery-tip'))
);

create table public.media_assets (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  target_table text,
  target_id uuid,
  type public.media_type not null,
  title text not null,
  category text not null,
  muscle_group text,
  tags text[] not null default '{}',
  bucket text,
  storage_path text,
  external_url text,
  thumbnail_url text,
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.comments (
  id uuid primary key default gen_random_uuid(),
  target_table text not null,
  target_id uuid not null,
  author_id uuid not null references public.profiles(id) on delete cascade,
  parent_id uuid references public.comments(id) on delete cascade,
  body text not null,
  status public.publish_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.reactions (
  id uuid primary key default gen_random_uuid(),
  target_table text not null,
  target_id uuid not null,
  user_id uuid not null references public.profiles(id) on delete cascade,
  reaction_type text not null default 'like',
  created_at timestamptz not null default now(),
  unique (target_table, target_id, user_id, reaction_type)
);

create table public.follows (
  follower_id uuid not null references public.profiles(id) on delete cascade,
  followee_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, followee_id),
  constraint no_self_follow check (follower_id <> followee_id)
);

create table public.saved_content (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  target_table text not null,
  target_id uuid not null,
  collection text not null default 'default',
  created_at timestamptz not null default now(),
  unique (user_id, target_table, target_id)
);

create table public.reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid references public.profiles(id) on delete set null,
  target_table text not null,
  target_id uuid not null,
  reason text not null,
  notes text not null default '',
  status public.moderation_status not null default 'queued',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.moderation_queue (
  id uuid primary key default gen_random_uuid(),
  report_id uuid references public.reports(id) on delete cascade,
  target_table text not null,
  target_id uuid not null,
  reason text not null,
  priority text not null default 'medium' check (priority in ('low', 'medium', 'high')),
  status public.moderation_status not null default 'queued',
  assigned_to uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.chat_channels (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null default '',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now()
);

create table public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  channel_id uuid not null references public.chat_channels(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  status public.publish_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.workouts (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles(id) on delete set null,
  title text not null,
  system text not null,
  category text not null,
  muscle_groups text[] not null default '{}',
  difficulty text not null default 'all levels',
  equipment text[] not null default '{}',
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.workout_blocks (
  id uuid primary key default gen_random_uuid(),
  workout_id uuid not null references public.workouts(id) on delete cascade,
  block_type text not null,
  exercise_name text not null,
  sets text,
  reps text,
  notes text,
  sort_order integer not null default 0
);

create table public.nutrition_plans (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles(id) on delete set null,
  title text not null,
  goal text not null,
  calories integer,
  protein_g integer,
  carbs_g integer,
  fats_g integer,
  hydration_notes text not null default '',
  grocery_list jsonb not null default '[]'::jsonb,
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.food_library (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  serving_label text not null default '100g',
  calories integer,
  protein_g numeric(8, 2),
  carbs_g numeric(8, 2),
  fats_g numeric(8, 2),
  tags text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table public.transformation_timelines (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  story text not null default '',
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.transformation_milestones (
  id uuid primary key default gen_random_uuid(),
  timeline_id uuid not null references public.transformation_timelines(id) on delete cascade,
  label text not null,
  notes text not null default '',
  media_asset_ids uuid[] not null default '{}',
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table public.achievements (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  title text not null,
  description text not null default '',
  category text not null,
  xp_value integer not null default 0
);

create table public.profile_achievements (
  profile_id uuid not null references public.profiles(id) on delete cascade,
  achievement_id uuid not null references public.achievements(id) on delete cascade,
  awarded_at timestamptz not null default now(),
  primary key (profile_id, achievement_id)
);

create table public.leaderboard_scores (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  category text not null,
  scope text not null default 'global',
  score integer not null default 0,
  period_start date,
  period_end date,
  updated_at timestamptz not null default now(),
  unique (profile_id, category, scope, period_start, period_end)
);

create index content_posts_author_idx on public.content_posts(author_id);
create index content_posts_discovery_idx on public.content_posts(status, visibility, category, created_at desc);
create index content_posts_tags_idx on public.content_posts using gin(tags);
create index blog_posts_discovery_idx on public.blog_posts(status, visibility, category, created_at desc);
create index blog_posts_tags_idx on public.blog_posts using gin(tags);
create index media_assets_discovery_idx on public.media_assets(status, visibility, category, type, created_at desc);
create index comments_target_idx on public.comments(target_table, target_id, created_at);
create index reactions_target_idx on public.reactions(target_table, target_id);
create index reports_target_idx on public.reports(target_table, target_id, status);
create index workouts_search_idx on public.workouts(system, category, status, visibility);
create index food_library_tags_idx on public.food_library using gin(tags);

create trigger profiles_updated_at before update on public.profiles for each row execute function public.set_updated_at();
create trigger pets_updated_at before update on public.pets for each row execute function public.set_updated_at();
create trigger content_posts_updated_at before update on public.content_posts for each row execute function public.set_updated_at();
create trigger blog_posts_updated_at before update on public.blog_posts for each row execute function public.set_updated_at();
create trigger media_assets_updated_at before update on public.media_assets for each row execute function public.set_updated_at();
create trigger comments_updated_at before update on public.comments for each row execute function public.set_updated_at();
create trigger reports_updated_at before update on public.reports for each row execute function public.set_updated_at();
create trigger moderation_queue_updated_at before update on public.moderation_queue for each row execute function public.set_updated_at();
create trigger chat_messages_updated_at before update on public.chat_messages for each row execute function public.set_updated_at();
create trigger workouts_updated_at before update on public.workouts for each row execute function public.set_updated_at();
create trigger nutrition_plans_updated_at before update on public.nutrition_plans for each row execute function public.set_updated_at();
create trigger transformation_timelines_updated_at before update on public.transformation_timelines for each row execute function public.set_updated_at();
create trigger leaderboard_scores_updated_at before update on public.leaderboard_scores for each row execute function public.set_updated_at();
