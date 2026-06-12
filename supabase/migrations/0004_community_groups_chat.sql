-- E.R. Fitness community groups and chat foundation.
-- Schema-only. No live backend, payments, or subscriptions are activated.

create table public.groups (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text not null default '',
  category text not null,
  visibility public.visibility not null default 'public',
  rules text[] not null default '{}',
  cover_image_url text,
  tags text[] not null default '{}',
  member_count integer not null default 0 check (member_count >= 0),
  created_by uuid references public.profiles(id) on delete set null,
  status public.publish_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.group_members (
  group_id uuid not null references public.groups(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  role text not null default 'member' check (role in ('member', 'moderator', 'owner')),
  status text not null default 'active' check (status in ('active', 'pending', 'muted', 'blocked', 'removed')),
  joined_at timestamptz not null default now(),
  primary key (group_id, profile_id)
);

create table public.group_moderators (
  group_id uuid not null references public.groups(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  permissions text[] not null default array['review_reports', 'hide_posts', 'mute_users'],
  assigned_at timestamptz not null default now(),
  primary key (group_id, profile_id)
);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  group_id uuid references public.groups(id) on delete set null,
  author_id uuid references public.profiles(id) on delete set null,
  kind public.content_kind not null,
  title text not null,
  body text not null default '',
  tags text[] not null default '{}',
  external_url text,
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  pinned boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.blogs (
  id uuid primary key default gen_random_uuid(),
  group_id uuid references public.groups(id) on delete set null,
  author_id uuid references public.profiles(id) on delete set null,
  journal_type text not null default 'blog_post' check (journal_type in ('blog_post', 'workout_journal', 'nutrition_journal', 'transformation_journal', 'recovery_journal')),
  title text not null,
  body text not null default '',
  excerpt text not null default '',
  tags text[] not null default '{}',
  external_links text[] not null default '{}',
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.likes (
  id uuid primary key default gen_random_uuid(),
  target_table text not null,
  target_id uuid not null,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (target_table, target_id, profile_id)
);

create table public.saved_posts (
  profile_id uuid not null references public.profiles(id) on delete cascade,
  post_id uuid not null references public.posts(id) on delete cascade,
  collection text not null default 'default',
  created_at timestamptz not null default now(),
  primary key (profile_id, post_id)
);

create table public.chat_rooms (
  id uuid primary key default gen_random_uuid(),
  group_id uuid references public.groups(id) on delete cascade,
  slug text not null,
  name text not null,
  room_type text not null default 'group' check (room_type in ('group', 'topic', 'direct', 'coaching')),
  visibility public.visibility not null default 'public',
  status public.publish_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (group_id, slug)
);

alter table public.chat_messages
add column if not exists room_id uuid references public.chat_rooms(id) on delete cascade;

create table public.media_uploads (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.profiles(id) on delete set null,
  group_id uuid references public.groups(id) on delete set null,
  post_id uuid references public.posts(id) on delete set null,
  blog_id uuid references public.blogs(id) on delete set null,
  media_asset_id uuid references public.media_assets(id) on delete set null,
  media_type public.media_type not null,
  title text not null,
  storage_path text,
  external_url text,
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'public',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index groups_category_idx on public.groups(category, status, visibility);
create index groups_tags_idx on public.groups using gin(tags);
create index group_members_profile_idx on public.group_members(profile_id, status);
create index posts_group_idx on public.posts(group_id, status, visibility, created_at desc);
create index posts_tags_idx on public.posts using gin(tags);
create index blogs_group_idx on public.blogs(group_id, status, visibility, created_at desc);
create index blogs_tags_idx on public.blogs using gin(tags);
create index likes_target_idx on public.likes(target_table, target_id);
create index chat_rooms_group_idx on public.chat_rooms(group_id, room_type, status);
create index chat_messages_room_idx on public.chat_messages(room_id, created_at);
create index media_uploads_group_idx on public.media_uploads(group_id, status, visibility);

create trigger groups_updated_at before update on public.groups for each row execute function public.set_updated_at();
create trigger posts_updated_at before update on public.posts for each row execute function public.set_updated_at();
create trigger blogs_updated_at before update on public.blogs for each row execute function public.set_updated_at();
create trigger chat_rooms_updated_at before update on public.chat_rooms for each row execute function public.set_updated_at();
create trigger media_uploads_updated_at before update on public.media_uploads for each row execute function public.set_updated_at();

alter table public.groups enable row level security;
alter table public.group_members enable row level security;
alter table public.group_moderators enable row level security;
alter table public.posts enable row level security;
alter table public.blogs enable row level security;
alter table public.likes enable row level security;
alter table public.saved_posts enable row level security;
alter table public.chat_rooms enable row level security;
alter table public.media_uploads enable row level security;

create policy "public groups are visible"
on public.groups for select
using ((status = 'published' and visibility = 'public') or public.is_platform_admin());

create policy "members read visible group memberships"
on public.group_members for select
using (
  profile_id = auth.uid()
  or public.is_platform_admin()
  or exists (
    select 1 from public.groups g
    where g.id = group_id
      and g.status = 'published'
      and g.visibility = 'public'
  )
);

create policy "users manage own group membership"
on public.group_members for all
using (profile_id = auth.uid())
with check (profile_id = auth.uid());

create policy "group moderators visible to members"
on public.group_moderators for select
using (
  public.is_platform_admin()
  or exists (
    select 1 from public.group_members gm
    where gm.group_id = group_moderators.group_id
      and gm.profile_id = auth.uid()
      and gm.status = 'active'
  )
);

create policy "published group posts are visible"
on public.posts for select
using ((status = 'published' and visibility = 'public') or author_id = auth.uid() or public.is_platform_admin());

create policy "authors manage own group posts"
on public.posts for all
using (author_id = auth.uid())
with check (author_id = auth.uid());

create policy "published blogs are visible"
on public.blogs for select
using ((status = 'published' and visibility = 'public') or author_id = auth.uid() or public.is_platform_admin());

create policy "authors manage own blogs"
on public.blogs for all
using (author_id = auth.uid())
with check (author_id = auth.uid());

create policy "users manage own likes"
on public.likes for all
using (profile_id = auth.uid())
with check (profile_id = auth.uid());

create policy "likes are visible"
on public.likes for select
using (true);

create policy "users manage saved posts"
on public.saved_posts for all
using (profile_id = auth.uid())
with check (profile_id = auth.uid());

create policy "public chat rooms are visible"
on public.chat_rooms for select
using ((status = 'published' and visibility = 'public') or public.is_platform_admin());

create policy "visible media uploads are readable"
on public.media_uploads for select
using ((status = 'published' and visibility = 'public') or owner_id = auth.uid() or public.is_platform_admin());

create policy "owners manage media uploads"
on public.media_uploads for all
using (owner_id = auth.uid())
with check (owner_id = auth.uid());
