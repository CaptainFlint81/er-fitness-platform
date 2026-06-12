-- RLS and storage policy foundation for the E.R. Fitness content platform.
-- Review and tighten before production. These policies are intentionally conservative.

alter table public.profiles enable row level security;
alter table public.pets enable row level security;
alter table public.content_posts enable row level security;
alter table public.blog_posts enable row level security;
alter table public.media_assets enable row level security;
alter table public.comments enable row level security;
alter table public.reactions enable row level security;
alter table public.follows enable row level security;
alter table public.saved_content enable row level security;
alter table public.reports enable row level security;
alter table public.moderation_queue enable row level security;
alter table public.chat_channels enable row level security;
alter table public.chat_messages enable row level security;
alter table public.workouts enable row level security;
alter table public.workout_blocks enable row level security;
alter table public.nutrition_plans enable row level security;
alter table public.food_library enable row level security;
alter table public.transformation_timelines enable row level security;
alter table public.transformation_milestones enable row level security;
alter table public.achievements enable row level security;
alter table public.profile_achievements enable row level security;
alter table public.leaderboard_scores enable row level security;

create or replace function public.is_platform_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role in ('moderator', 'admin')
  );
$$;

create policy "profiles are public unless private"
on public.profiles for select
using (not is_private or id = auth.uid() or public.is_platform_admin());

create policy "users manage own profile"
on public.profiles for update
using (id = auth.uid())
with check (id = auth.uid());

create policy "users create own profile"
on public.profiles for insert
with check (id = auth.uid());

create policy "selected public pets are visible"
on public.pets for select
using (is_selected or owner_id = auth.uid() or public.is_platform_admin());

create policy "users manage own pets"
on public.pets for all
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

create policy "published public posts are visible"
on public.content_posts for select
using (
  (status = 'published' and visibility = 'public')
  or author_id = auth.uid()
  or public.is_platform_admin()
);

create policy "authors manage own posts"
on public.content_posts for all
using (author_id = auth.uid())
with check (author_id = auth.uid());

create policy "published public blogs are visible"
on public.blog_posts for select
using (
  (status = 'published' and visibility = 'public')
  or author_id = auth.uid()
  or public.is_platform_admin()
);

create policy "authors manage own blogs"
on public.blog_posts for all
using (author_id = auth.uid())
with check (author_id = auth.uid());

create policy "published public media is visible"
on public.media_assets for select
using (
  (status = 'published' and visibility = 'public')
  or owner_id = auth.uid()
  or public.is_platform_admin()
);

create policy "owners manage own media"
on public.media_assets for all
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

create policy "visible comments can be read"
on public.comments for select
using (status = 'published' or author_id = auth.uid() or public.is_platform_admin());

create policy "users create own comments"
on public.comments for insert
with check (author_id = auth.uid());

create policy "users update own comments"
on public.comments for update
using (author_id = auth.uid())
with check (author_id = auth.uid());

create policy "users manage own reactions"
on public.reactions for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "users read reactions"
on public.reactions for select
using (true);

create policy "users manage own follows"
on public.follows for all
using (follower_id = auth.uid())
with check (follower_id = auth.uid());

create policy "users read follows"
on public.follows for select
using (true);

create policy "users manage own saved content"
on public.saved_content for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

create policy "users create reports"
on public.reports for insert
with check (reporter_id = auth.uid() or reporter_id is null);

create policy "users read own reports"
on public.reports for select
using (reporter_id = auth.uid() or public.is_platform_admin());

create policy "moderators manage reports"
on public.reports for update
using (public.is_platform_admin())
with check (public.is_platform_admin());

create policy "moderators read moderation queue"
on public.moderation_queue for select
using (public.is_platform_admin());

create policy "moderators manage moderation queue"
on public.moderation_queue for all
using (public.is_platform_admin())
with check (public.is_platform_admin());

create policy "public channels are visible"
on public.chat_channels for select
using (visibility = 'public' or public.is_platform_admin());

create policy "public messages are visible"
on public.chat_messages for select
using (status = 'published' or author_id = auth.uid() or public.is_platform_admin());

create policy "users create own chat messages"
on public.chat_messages for insert
with check (author_id = auth.uid());

create policy "published public workouts are visible"
on public.workouts for select
using ((status = 'published' and visibility = 'public') or owner_id = auth.uid() or public.is_platform_admin());

create policy "owners manage own workouts"
on public.workouts for all
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

create policy "workout blocks follow workout visibility"
on public.workout_blocks for select
using (
  exists (
    select 1 from public.workouts w
    where w.id = workout_id
      and ((w.status = 'published' and w.visibility = 'public') or w.owner_id = auth.uid() or public.is_platform_admin())
  )
);

create policy "published public nutrition plans are visible"
on public.nutrition_plans for select
using ((status = 'published' and visibility = 'public') or owner_id = auth.uid() or public.is_platform_admin());

create policy "owners manage own nutrition plans"
on public.nutrition_plans for all
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

create policy "food library is visible"
on public.food_library for select
using (true);

create policy "public timelines are visible"
on public.transformation_timelines for select
using ((status = 'published' and visibility = 'public') or owner_id = auth.uid() or public.is_platform_admin());

create policy "owners manage own timelines"
on public.transformation_timelines for all
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

create policy "milestones follow timeline visibility"
on public.transformation_milestones for select
using (
  exists (
    select 1 from public.transformation_timelines t
    where t.id = timeline_id
      and ((t.status = 'published' and t.visibility = 'public') or t.owner_id = auth.uid() or public.is_platform_admin())
  )
);

create policy "achievements are visible"
on public.achievements for select
using (true);

create policy "profile achievements are visible"
on public.profile_achievements for select
using (true);

create policy "leaderboards are visible"
on public.leaderboard_scores for select
using (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('profile-media', 'profile-media', true, 10485760, array['image/png', 'image/jpeg', 'image/webp']),
  ('workout-media', 'workout-media', true, 104857600, array['image/png', 'image/jpeg', 'image/webp', 'video/mp4', 'video/webm']),
  ('transformation-media', 'transformation-media', true, 209715200, array['image/png', 'image/jpeg', 'image/webp', 'video/mp4', 'video/webm']),
  ('nutrition-media', 'nutrition-media', true, 104857600, array['image/png', 'image/jpeg', 'image/webp', 'video/mp4', 'video/webm']),
  ('recovery-media', 'recovery-media', true, 104857600, array['image/png', 'image/jpeg', 'image/webp', 'video/mp4', 'video/webm']),
  ('creator-media', 'creator-media', true, 209715200, array['image/png', 'image/jpeg', 'image/webp', 'video/mp4', 'video/webm'])
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

create policy "public media buckets are readable"
on storage.objects for select
using (bucket_id in ('profile-media', 'workout-media', 'transformation-media', 'nutrition-media', 'recovery-media', 'creator-media'));

create policy "users upload to own folder"
on storage.objects for insert
with check (
  bucket_id in ('profile-media', 'workout-media', 'transformation-media', 'nutrition-media', 'recovery-media', 'creator-media')
  and auth.uid()::text = (storage.foldername(name))[1]
);

create policy "users update own uploaded files"
on storage.objects for update
using (
  bucket_id in ('profile-media', 'workout-media', 'transformation-media', 'nutrition-media', 'recovery-media', 'creator-media')
  and auth.uid()::text = (storage.foldername(name))[1]
)
with check (
  bucket_id in ('profile-media', 'workout-media', 'transformation-media', 'nutrition-media', 'recovery-media', 'creator-media')
  and auth.uid()::text = (storage.foldername(name))[1]
);

create policy "users delete own uploaded files"
on storage.objects for delete
using (
  bucket_id in ('profile-media', 'workout-media', 'transformation-media', 'nutrition-media', 'recovery-media', 'creator-media')
  and auth.uid()::text = (storage.foldername(name))[1]
);
