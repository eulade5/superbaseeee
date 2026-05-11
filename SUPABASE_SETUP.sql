-- =====================================================================
-- Amazing Tools Company — Supabase setup
-- Run this once in your Supabase project SQL editor
-- (Dashboard → SQL Editor → New query → paste → Run)
-- =====================================================================

-- 1) Products table -----------------------------------------------------
create table if not exists public.products (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  description   text,
  image         text,
  category      text not null,
  variant_label text,
  variants      text[] default '{}',
  created_at    timestamptz not null default now()
);

create index if not exists products_category_idx on public.products (category);
create index if not exists products_created_at_idx on public.products (created_at desc);

-- 2) Row Level Security -------------------------------------------------
alter table public.products enable row level security;

-- Public can read all products
drop policy if exists "Products are publicly readable" on public.products;
create policy "Products are publicly readable"
  on public.products for select
  using (true);

-- Any authenticated user can write.
-- The single-admin restriction is enforced in the app via VITE_ADMIN_EMAIL.
-- For DB-level enforcement, replace the policies below with an email match,
-- e.g.  using ((auth.jwt() ->> 'email') = 'you@example.com')
drop policy if exists "Authenticated can insert products" on public.products;
create policy "Authenticated can insert products"
  on public.products for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated can update products" on public.products;
create policy "Authenticated can update products"
  on public.products for update
  to authenticated
  using (true) with check (true);

drop policy if exists "Authenticated can delete products" on public.products;
create policy "Authenticated can delete products"
  on public.products for delete
  to authenticated
  using (true);

-- 3) Storage bucket for product images ---------------------------------
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do update set public = true;

-- Public read on the bucket
drop policy if exists "Product images public read" on storage.objects;
create policy "Product images public read"
  on storage.objects for select
  using (bucket_id = 'product-images');

-- Authenticated users can upload / update / delete
drop policy if exists "Authenticated can upload product images" on storage.objects;
create policy "Authenticated can upload product images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'product-images');

drop policy if exists "Authenticated can update product images" on storage.objects;
create policy "Authenticated can update product images"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'product-images')
  with check (bucket_id = 'product-images');

drop policy if exists "Authenticated can delete product images" on storage.objects;
create policy "Authenticated can delete product images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'product-images');

-- 4) Create your admin user --------------------------------------------
-- Go to:  Authentication → Users → Add user (email + password)
-- Then put that email into your Vercel env var VITE_ADMIN_EMAIL.