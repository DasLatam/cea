create table if not exists public.meli_oauth_accounts (
  id uuid primary key default gen_random_uuid(),
  meli_user_id bigint not null unique,
  nickname text,
  site_id text default 'MLA',
  access_token text not null,
  refresh_token text not null,
  scope text,
  token_type text default 'Bearer',
  expires_at timestamptz,
  access_token_expires_at timestamptz,
  refresh_token_expires_at timestamptz,
  connected boolean not null default true,
  last_refresh_at timestamptz,
  last_error text,
  last_error_code text,
  last_error_message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_meli_oauth_accounts_connected_updated
  on public.meli_oauth_accounts(connected, updated_at desc);

create index if not exists idx_meli_oauth_accounts_user
  on public.meli_oauth_accounts(meli_user_id);

alter table public.meli_oauth_accounts enable row level security;

-- Sin políticas públicas. Solo backend con service role.
