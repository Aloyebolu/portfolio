create extension if not exists pgcrypto;

create table public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone not null default now()
);

alter table public.contacts enable row level security;

grant insert on table public.contacts to anon;
grant select on table public.contacts to authenticated;

create policy "Anonymous visitors can submit contact messages"
on public.contacts
for insert
to anon
with check (true);

create policy "Authenticated users can read contact messages"
on public.contacts
for select
to authenticated
using (true);
