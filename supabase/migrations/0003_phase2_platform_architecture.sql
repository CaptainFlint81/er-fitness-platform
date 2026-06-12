-- Phase 2 E.R. Fitness platform architecture.
-- Schema-only expansion for accounts, community, media, search, content categories, and admin safety.
-- Billing and subscription models are intentionally excluded.

do $$
begin
  create type public.search_target_type as enum (
    'user',
    'workout',
    'exercise',
    'article',
    'video',
    'photo',
    'nutrition',
    'recovery'
  );
exception
  when duplicate_object then null;
end $$;

do $$
begin
  create type public.category_group as enum (
    'workout_system',
    'recovery_system',
    'nutrition_system',
    'community_content',
    'media_gallery',
    'search_target'
  );
exception
  when duplicate_object then null;
end $$;

create table public.profile_settings (
  profile_id uuid primary key references public.profiles(id) on delete cascade,
  default_post_visibility public.visibility not null default 'public',
  default_media_visibility public.visibility not null default 'public',
  allow_follow_requests boolean not null default true,
  allow_messages boolean not null default true,
  show_pet_on_profile boolean not null default true,
  show_transformation_wall boolean not null default true,
  safety_status text not null default 'clear' check (safety_status in ('clear', 'under_review', 'restricted')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.profile_collages (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  title text not null default 'Profile collage',
  description text not null default '',
  visibility public.visibility not null default 'public',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.badges (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  title text not null,
  description text not null default '',
  category text not null,
  rarity text not null default 'standard' check (rarity in ('standard', 'rare', 'elite', 'legendary')),
  icon_key text not null default 'award',
  xp_value integer not null default 0 check (xp_value >= 0),
  created_at timestamptz not null default now()
);

create table public.titles (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  title text not null,
  description text not null default '',
  category text not null,
  rarity text not null default 'standard' check (rarity in ('standard', 'rare', 'elite', 'legendary')),
  created_at timestamptz not null default now()
);

create table public.profile_badges (
  profile_id uuid not null references public.profiles(id) on delete cascade,
  badge_id uuid not null references public.badges(id) on delete cascade,
  awarded_at timestamptz not null default now(),
  is_featured boolean not null default false,
  primary key (profile_id, badge_id)
);

create table public.profile_titles (
  profile_id uuid not null references public.profiles(id) on delete cascade,
  title_id uuid not null references public.titles(id) on delete cascade,
  awarded_at timestamptz not null default now(),
  is_selected boolean not null default false,
  primary key (profile_id, title_id)
);

create table public.pet_events (
  id uuid primary key default gen_random_uuid(),
  pet_id uuid not null references public.pets(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  event_type text not null,
  xp_delta integer not null default 0,
  source_table text,
  source_id uuid,
  notes text not null default '',
  created_at timestamptz not null default now()
);

create table public.exercises (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid references public.profiles(id) on delete set null,
  name text not null,
  workout_system text not null check (workout_system in ('Bodyweight Warrior', 'Iron Forge', 'Performance Lab')),
  movement_pattern text not null default '',
  muscle_groups text[] not null default '{}',
  equipment text[] not null default '{}',
  difficulty text not null default 'all levels',
  instructions text not null default '',
  media_asset_id uuid references public.media_assets(id) on delete set null,
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (name, workout_system)
);

create table public.workout_exercises (
  id uuid primary key default gen_random_uuid(),
  workout_id uuid not null references public.workouts(id) on delete cascade,
  exercise_id uuid references public.exercises(id) on delete set null,
  block_type text not null,
  sets text,
  reps text,
  tempo text,
  rest_seconds integer,
  notes text not null default '',
  sort_order integer not null default 0
);

create table public.saved_routines (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  workout_id uuid references public.workouts(id) on delete cascade,
  title text not null,
  notes text not null default '',
  visibility public.visibility not null default 'private',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.favorite_workouts (
  profile_id uuid not null references public.profiles(id) on delete cascade,
  workout_id uuid not null references public.workouts(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (profile_id, workout_id)
);

create table public.completed_programs (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  workout_id uuid references public.workouts(id) on delete set null,
  title text not null,
  completed_at timestamptz not null default now(),
  total_volume numeric(12, 2),
  xp_awarded integer not null default 0 check (xp_awarded >= 0),
  notes text not null default ''
);

create table public.recovery_protocols (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles(id) on delete set null,
  system text not null check (system in ('Injured Athlete', 'Mobility', 'Yoga', 'Pilates', 'Tai Chi')),
  title text not null,
  description text not null default '',
  duration_minutes integer,
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (system, title)
);

create table public.recovery_protocol_steps (
  id uuid primary key default gen_random_uuid(),
  protocol_id uuid not null references public.recovery_protocols(id) on delete cascade,
  title text not null,
  instructions text not null default '',
  duration_seconds integer,
  media_asset_id uuid references public.media_assets(id) on delete set null,
  sort_order integer not null default 0
);

create table public.injury_protocols (
  id uuid primary key default gen_random_uuid(),
  protocol_id uuid references public.recovery_protocols(id) on delete cascade,
  injury_category text not null,
  phase text not null check (phase in ('calm', 'control', 'strength', 'return')),
  warning_signs text[] not null default '{}',
  professional_care_prompt text not null default '',
  created_at timestamptz not null default now()
);

create table public.media_galleries (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  gallery_type text not null check (gallery_type in ('transformation', 'workout', 'nutrition', 'recovery', 'profile')),
  title text not null,
  description text not null default '',
  category text not null,
  cover_media_id uuid references public.media_assets(id) on delete set null,
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.media_gallery_items (
  id uuid primary key default gen_random_uuid(),
  gallery_id uuid not null references public.media_galleries(id) on delete cascade,
  media_asset_id uuid references public.media_assets(id) on delete cascade,
  transformation_milestone_id uuid references public.transformation_milestones(id) on delete set null,
  caption text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  constraint gallery_item_target_check check (media_asset_id is not null or transformation_milestone_id is not null)
);

create table public.content_categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  group_name public.category_group not null,
  description text not null default '',
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.content_category_assignments (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.content_categories(id) on delete cascade,
  target_table text not null,
  target_id uuid not null,
  created_at timestamptz not null default now(),
  unique (category_id, target_table, target_id)
);

create table public.search_documents (
  id uuid primary key default gen_random_uuid(),
  target_table text not null,
  target_id uuid not null,
  target_type public.search_target_type not null,
  owner_id uuid references public.profiles(id) on delete set null,
  title text not null,
  body text not null default '',
  category text not null default '',
  tags text[] not null default '{}',
  status public.publish_status not null default 'published',
  visibility public.visibility not null default 'public',
  search_vector tsvector generated always as (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(category, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(array_to_string(tags, ' '), '')), 'B') ||
    setweight(to_tsvector('english', coalesce(body, '')), 'C')
  ) stored,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (target_table, target_id)
);

create table public.blocked_users (
  blocker_id uuid not null references public.profiles(id) on delete cascade,
  blocked_profile_id uuid not null references public.profiles(id) on delete cascade,
  reason text not null default '',
  created_at timestamptz not null default now(),
  primary key (blocker_id, blocked_profile_id),
  constraint no_self_block check (blocker_id <> blocked_profile_id)
);

create table public.user_review_notes (
  id uuid primary key default gen_random_uuid(),
  subject_profile_id uuid not null references public.profiles(id) on delete cascade,
  reviewer_id uuid references public.profiles(id) on delete set null,
  note text not null,
  status public.moderation_status not null default 'queued',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.moderation_actions (
  id uuid primary key default gen_random_uuid(),
  moderation_queue_id uuid references public.moderation_queue(id) on delete set null,
  report_id uuid references public.reports(id) on delete set null,
  actor_id uuid references public.profiles(id) on delete set null,
  action_type text not null check (action_type in ('approve', 'hide', 'escalate', 'archive', 'dismiss', 'restrict_user', 'restore')),
  target_table text not null,
  target_id uuid not null,
  notes text not null default '',
  previous_status text,
  next_status text,
  created_at timestamptz not null default now()
);

create table public.education_topics (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null,
  summary text not null,
  focus text not null default '',
  essentials text[] not null default '{}',
  safety text not null default '',
  related_workout_category text not null default '',
  related_program text not null default '',
  related_href text not null default '',
  tracking_prompt text not null default '',
  tags text[] not null default '{}',
  status public.publish_status not null default 'published',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.routine_templates (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  system text not null,
  goal text not null,
  duration text not null default '',
  level text not null default 'All Levels',
  related_education_slugs text[] not null default '{}',
  app_tracking text not null default '',
  status public.publish_status not null default 'published',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.routine_template_blocks (
  id uuid primary key default gen_random_uuid(),
  routine_template_id uuid not null references public.routine_templates(id) on delete cascade,
  name text not null,
  prescription text not null,
  coaching_note text not null default '',
  sort_order integer not null default 0
);

create table public.app_handoff_links (
  id uuid primary key default gen_random_uuid(),
  source_table text not null,
  source_id uuid,
  source_slug text,
  label text not null,
  action_type text not null check (action_type in ('open', 'track', 'start_program', 'related_category')),
  website_href text not null,
  app_route text not null default '',
  created_at timestamptz not null default now(),
  unique (source_table, source_slug, action_type)
);

create index profile_collages_profile_idx on public.profile_collages(profile_id);
create index pet_events_profile_idx on public.pet_events(profile_id, created_at desc);
create index exercises_search_idx on public.exercises(workout_system, status, visibility);
create index exercises_muscle_groups_idx on public.exercises using gin(muscle_groups);
create index workout_exercises_workout_idx on public.workout_exercises(workout_id, sort_order);
create index saved_routines_profile_idx on public.saved_routines(profile_id, created_at desc);
create index completed_programs_profile_idx on public.completed_programs(profile_id, completed_at desc);
create index recovery_protocols_system_idx on public.recovery_protocols(system, status, visibility);
create index media_galleries_owner_idx on public.media_galleries(owner_id, gallery_type, created_at desc);
create index media_gallery_items_gallery_idx on public.media_gallery_items(gallery_id, sort_order);
create index content_categories_group_idx on public.content_categories(group_name, sort_order);
create index content_category_assignments_target_idx on public.content_category_assignments(target_table, target_id);
create index search_documents_target_type_idx on public.search_documents(target_type, status, visibility);
create index search_documents_vector_idx on public.search_documents using gin(search_vector);
create index user_review_notes_subject_idx on public.user_review_notes(subject_profile_id, status);
create index moderation_actions_target_idx on public.moderation_actions(target_table, target_id, created_at desc);
create index education_topics_category_idx on public.education_topics(category, status, visibility);
create index education_topics_tags_idx on public.education_topics using gin(tags);
create index routine_templates_system_idx on public.routine_templates(system, status, visibility);
create index routine_template_blocks_template_idx on public.routine_template_blocks(routine_template_id, sort_order);
create index app_handoff_links_source_idx on public.app_handoff_links(source_table, source_slug);

create trigger profile_settings_updated_at before update on public.profile_settings for each row execute function public.set_updated_at();
create trigger profile_collages_updated_at before update on public.profile_collages for each row execute function public.set_updated_at();
create trigger exercises_updated_at before update on public.exercises for each row execute function public.set_updated_at();
create trigger saved_routines_updated_at before update on public.saved_routines for each row execute function public.set_updated_at();
create trigger recovery_protocols_updated_at before update on public.recovery_protocols for each row execute function public.set_updated_at();
create trigger media_galleries_updated_at before update on public.media_galleries for each row execute function public.set_updated_at();
create trigger search_documents_updated_at before update on public.search_documents for each row execute function public.set_updated_at();
create trigger user_review_notes_updated_at before update on public.user_review_notes for each row execute function public.set_updated_at();
create trigger education_topics_updated_at before update on public.education_topics for each row execute function public.set_updated_at();
create trigger routine_templates_updated_at before update on public.routine_templates for each row execute function public.set_updated_at();

alter table public.profile_settings enable row level security;
alter table public.profile_collages enable row level security;
alter table public.badges enable row level security;
alter table public.titles enable row level security;
alter table public.profile_badges enable row level security;
alter table public.profile_titles enable row level security;
alter table public.pet_events enable row level security;
alter table public.exercises enable row level security;
alter table public.workout_exercises enable row level security;
alter table public.saved_routines enable row level security;
alter table public.favorite_workouts enable row level security;
alter table public.completed_programs enable row level security;
alter table public.recovery_protocols enable row level security;
alter table public.recovery_protocol_steps enable row level security;
alter table public.injury_protocols enable row level security;
alter table public.media_galleries enable row level security;
alter table public.media_gallery_items enable row level security;
alter table public.content_categories enable row level security;
alter table public.content_category_assignments enable row level security;
alter table public.search_documents enable row level security;
alter table public.blocked_users enable row level security;
alter table public.user_review_notes enable row level security;
alter table public.moderation_actions enable row level security;
alter table public.education_topics enable row level security;
alter table public.routine_templates enable row level security;
alter table public.routine_template_blocks enable row level security;
alter table public.app_handoff_links enable row level security;

create policy "users manage own profile settings"
on public.profile_settings for all
using (profile_id = auth.uid())
with check (profile_id = auth.uid());

create policy "visible profile collages can be read"
on public.profile_collages for select
using (visibility = 'public' or profile_id = auth.uid() or public.is_platform_admin());

create policy "users manage own profile collages"
on public.profile_collages for all
using (profile_id = auth.uid())
with check (profile_id = auth.uid());

create policy "badge catalog is visible"
on public.badges for select
using (true);

create policy "title catalog is visible"
on public.titles for select
using (true);

create policy "profile badges are visible"
on public.profile_badges for select
using (true);

create policy "profile titles are visible"
on public.profile_titles for select
using (true);

create policy "pet events are owner visible"
on public.pet_events for select
using (profile_id = auth.uid() or public.is_platform_admin());

create policy "published public exercises are visible"
on public.exercises for select
using ((status = 'published' and visibility = 'public') or creator_id = auth.uid() or public.is_platform_admin());

create policy "creators manage own exercises"
on public.exercises for all
using (creator_id = auth.uid())
with check (creator_id = auth.uid());

create policy "workout exercises follow workout visibility"
on public.workout_exercises for select
using (
  exists (
    select 1 from public.workouts w
    where w.id = workout_id
      and ((w.status = 'published' and w.visibility = 'public') or w.owner_id = auth.uid() or public.is_platform_admin())
  )
);

create policy "users manage own saved routines"
on public.saved_routines for all
using (profile_id = auth.uid())
with check (profile_id = auth.uid());

create policy "users manage own favorite workouts"
on public.favorite_workouts for all
using (profile_id = auth.uid())
with check (profile_id = auth.uid());

create policy "users read own completed programs"
on public.completed_programs for select
using (profile_id = auth.uid() or public.is_platform_admin());

create policy "published recovery protocols are visible"
on public.recovery_protocols for select
using ((status = 'published' and visibility = 'public') or owner_id = auth.uid() or public.is_platform_admin());

create policy "owners manage own recovery protocols"
on public.recovery_protocols for all
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

create policy "recovery steps follow protocol visibility"
on public.recovery_protocol_steps for select
using (
  exists (
    select 1 from public.recovery_protocols p
    where p.id = protocol_id
      and ((p.status = 'published' and p.visibility = 'public') or p.owner_id = auth.uid() or public.is_platform_admin())
  )
);

create policy "injury protocols follow protocol visibility"
on public.injury_protocols for select
using (
  exists (
    select 1 from public.recovery_protocols p
    where p.id = protocol_id
      and ((p.status = 'published' and p.visibility = 'public') or p.owner_id = auth.uid() or public.is_platform_admin())
  )
);

create policy "published public galleries are visible"
on public.media_galleries for select
using ((status = 'published' and visibility = 'public') or owner_id = auth.uid() or public.is_platform_admin());

create policy "owners manage own galleries"
on public.media_galleries for all
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

create policy "gallery items follow gallery visibility"
on public.media_gallery_items for select
using (
  exists (
    select 1 from public.media_galleries g
    where g.id = gallery_id
      and ((g.status = 'published' and g.visibility = 'public') or g.owner_id = auth.uid() or public.is_platform_admin())
  )
);

create policy "content categories are visible"
on public.content_categories for select
using (is_active);

create policy "category assignments are visible"
on public.content_category_assignments for select
using (true);

create policy "public search documents are visible"
on public.search_documents for select
using ((status = 'published' and visibility = 'public') or owner_id = auth.uid() or public.is_platform_admin());

create policy "users manage own block list"
on public.blocked_users for all
using (blocker_id = auth.uid())
with check (blocker_id = auth.uid());

create policy "moderators read user review notes"
on public.user_review_notes for select
using (public.is_platform_admin());

create policy "moderators manage user review notes"
on public.user_review_notes for all
using (public.is_platform_admin())
with check (public.is_platform_admin());

create policy "moderators read moderation actions"
on public.moderation_actions for select
using (public.is_platform_admin());

create policy "moderators create moderation actions"
on public.moderation_actions for insert
with check (public.is_platform_admin());

create policy "published education topics are visible"
on public.education_topics for select
using (status = 'published' and visibility = 'public');

create policy "moderators manage education topics"
on public.education_topics for all
using (public.is_platform_admin())
with check (public.is_platform_admin());

create policy "published routine templates are visible"
on public.routine_templates for select
using (status = 'published' and visibility = 'public');

create policy "routine blocks follow routine visibility"
on public.routine_template_blocks for select
using (
  exists (
    select 1 from public.routine_templates r
    where r.id = routine_template_id
      and r.status = 'published'
      and r.visibility = 'public'
  )
);

create policy "app handoff links are visible"
on public.app_handoff_links for select
using (true);

create policy "moderators manage app handoff links"
on public.app_handoff_links for all
using (public.is_platform_admin())
with check (public.is_platform_admin());
