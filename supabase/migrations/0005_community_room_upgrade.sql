-- E.R. Fitness community room upgrade.
-- Schema-only foundation for Reddit/Discord-style group rooms.
-- No live backend, billing, subscriptions, or payment logic is activated.

create table public.group_posts (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  author_id uuid references public.profiles(id) on delete set null,
  kind public.content_kind not null,
  title text not null,
  body text not null default '',
  tags text[] not null default '{}',
  external_url text,
  pinned boolean not null default false,
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'group',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.group_chat_messages (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  room_id uuid references public.chat_rooms(id) on delete set null,
  channel text not null default 'General',
  author_id uuid references public.profiles(id) on delete set null,
  body text not null,
  emoji_reactions jsonb not null default '{}'::jsonb,
  status public.publish_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.group_media (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  post_id uuid references public.group_posts(id) on delete cascade,
  uploaded_by uuid references public.profiles(id) on delete set null,
  media_asset_id uuid references public.media_assets(id) on delete set null,
  media_type public.media_type not null,
  title text not null,
  storage_path text,
  external_url text,
  status public.publish_status not null default 'draft',
  visibility public.visibility not null default 'group',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index group_posts_group_idx on public.group_posts(group_id, status, visibility, created_at desc);
create index group_posts_tags_idx on public.group_posts using gin(tags);
create index group_chat_messages_group_idx on public.group_chat_messages(group_id, channel, created_at desc);
create index group_chat_messages_room_idx on public.group_chat_messages(room_id, created_at desc);
create index group_chat_messages_reactions_idx on public.group_chat_messages using gin(emoji_reactions);
create index group_media_group_idx on public.group_media(group_id, status, visibility, created_at desc);
create index group_media_post_idx on public.group_media(post_id);

create trigger group_posts_updated_at before update on public.group_posts for each row execute function public.set_updated_at();
create trigger group_chat_messages_updated_at before update on public.group_chat_messages for each row execute function public.set_updated_at();
create trigger group_media_updated_at before update on public.group_media for each row execute function public.set_updated_at();

alter table public.group_posts enable row level security;
alter table public.group_chat_messages enable row level security;
alter table public.group_media enable row level security;

create policy "visible group posts are readable"
on public.group_posts for select
using (
  status = 'published'
  and (
    visibility = 'public'
    or public.is_platform_admin()
    or exists (
      select 1 from public.group_members gm
      where gm.group_id = group_posts.group_id
        and gm.profile_id = auth.uid()
        and gm.status = 'active'
    )
  )
);

create policy "authors create and manage own group posts"
on public.group_posts for all
using (author_id = auth.uid())
with check (author_id = auth.uid());

create policy "visible group chat messages are readable"
on public.group_chat_messages for select
using (
  status = 'published'
  and (
    public.is_platform_admin()
    or exists (
      select 1 from public.groups g
      where g.id = group_chat_messages.group_id
        and g.visibility = 'public'
        and g.status = 'published'
    )
    or exists (
      select 1 from public.group_members gm
      where gm.group_id = group_chat_messages.group_id
        and gm.profile_id = auth.uid()
        and gm.status = 'active'
    )
  )
);

create policy "members create group chat messages"
on public.group_chat_messages for insert
with check (
  author_id = auth.uid()
  and exists (
    select 1 from public.group_members gm
    where gm.group_id = group_chat_messages.group_id
      and gm.profile_id = auth.uid()
      and gm.status = 'active'
  )
);

create policy "authors manage own group chat messages"
on public.group_chat_messages for update
using (author_id = auth.uid())
with check (author_id = auth.uid());

create policy "visible group media is readable"
on public.group_media for select
using (
  status = 'published'
  and (
    visibility = 'public'
    or uploaded_by = auth.uid()
    or public.is_platform_admin()
    or exists (
      select 1 from public.group_members gm
      where gm.group_id = group_media.group_id
        and gm.profile_id = auth.uid()
        and gm.status = 'active'
    )
  )
);

create policy "uploaders manage own group media"
on public.group_media for all
using (uploaded_by = auth.uid())
with check (uploaded_by = auth.uid());
