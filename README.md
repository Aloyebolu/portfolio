# Personal Portfolio

A responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS. It uses a dark, minimal engineering aesthetic and includes an ISR-powered GitHub projects page plus a Supabase-backed contact form.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Supabase
- Sonner

## Getting started

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GITHUB_TOKEN=your_github_personal_access_token
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Personalize the portfolio

Update your personal copy, email address, location, capabilities, and placeholder case studies in:

```text
lib/content.ts
```

Update the GitHub username in:

```text
lib/github.ts
```

## GitHub projects

The `/projects` page fetches public repositories from the GitHub API.

- Results are revalidated every hour.
- Forked repositories are excluded.
- Repositories are sorted by star count.
- A `GITHUB_TOKEN` is recommended to avoid API rate limits.

## Contact form and Supabase

The contact form validates name, email, and message fields before inserting submissions into the `contacts` table.

Run this in the Supabase SQL Editor:

```sql
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
```

The form includes a hidden honeypot field to reduce basic automated spam submissions.

## Scripts

```bash
npm run dev
npm run build
npm run start
```

## Project structure

```text
app/
  page.tsx              Landing page
  projects/page.tsx     GitHub repositories page
  globals.css           Shared global styles
  projects.css          Projects page styles
  contact-form.css      Contact form styles

components/
  contact-form.tsx      Supabase-powered form
  header.tsx            Shared navigation
  project-card.tsx      Landing-page project card
  section-heading.tsx   Reusable section heading

lib/
  content.ts            Portfolio content and placeholders
  github.ts             GitHub API data fetching
  supabase.ts           Supabase browser client

supabase/
  contacts.sql          Database schema and RLS policies
```

## Deployment

Set the environment variables from `.env.local` in your hosting provider before deploying. Use the production build command:

```bash
npm run build
```