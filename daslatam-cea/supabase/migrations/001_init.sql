create extension if not exists pgcrypto;

create table if not exists public.items (
  id text primary key,
  title text not null,
  category_id text,
  category_name text,
  permalink text not null,
  thumbnail text,
  last_seen_at timestamptz default now()
);

create table if not exists public.search_runs (
  id uuid primary key default gen_random_uuid(),
  query text,
  created_at timestamptz default now()
);

alter table public.search_runs
  add column if not exists session_id text,
  add column if not exists result_count integer not null default 0,
  add column if not exists median_price numeric(14,2) default 0,
  add column if not exists avg_score numeric(6,2) default 0,
  add column if not exists top_score integer default 0,
  add column if not exists warning_count integer default 0,
  add column if not exists summary jsonb default '{}'::jsonb;

update public.search_runs
set session_id = coalesce(session_id, 'legacy-' || id::text)
where session_id is null;

alter table public.search_runs
  alter column session_id set not null,
  alter column query set not null;

create table if not exists public.item_snapshots (
  id uuid primary key default gen_random_uuid(),
  search_run_id uuid not null references public.search_runs(id) on delete cascade,
  item_id text not null references public.items(id) on delete cascade,
  price numeric(14,2) default 0,
  sold integer default 0,
  stock integer default 0,
  reviews integer default 0,
  score integer default 0,
  flags text[] default '{}',
  insights jsonb default '[]'::jsonb,
  raw jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  unique (search_run_id, item_id)
);

create table if not exists public.saved_items (
  id uuid primary key default gen_random_uuid(),
  item_id text not null references public.items(id) on delete cascade,
  created_at timestamptz default now()
);

alter table public.saved_items
  add column if not exists session_id text;

update public.saved_items
set session_id = coalesce(session_id, 'legacy-' || id::text)
where session_id is null;

alter table public.saved_items
  alter column session_id set not null;

create unique index if not exists uq_saved_items_session_item
  on public.saved_items(session_id, item_id);

create index if not exists idx_search_runs_session_created
  on public.search_runs(session_id, created_at desc);

create index if not exists idx_item_snapshots_item_created
  on public.item_snapshots(item_id, created_at desc);

create index if not exists idx_saved_items_session_created
  on public.saved_items(session_id, created_at desc);

alter table public.items enable row level security;
alter table public.search_runs enable row level security;
alter table public.item_snapshots enable row level security;
alter table public.saved_items enable row level security;

-- Sin políticas públicas.
-- La app usa SUPABASE_SERVICE_ROLE_KEY desde el backend para leer y escribir.
