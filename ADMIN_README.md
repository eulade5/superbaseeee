# Amazing Tools Company — Admin & Supabase Setup

## 1. Run the SQL setup

Open your Supabase project → **SQL Editor** → paste the contents of
[`SUPABASE_SETUP.sql`](./SUPABASE_SETUP.sql) → **Run**.

This creates:
- `public.products` table (id, name, description, image, category, variant_label, variants[])
- Row Level Security policies (public read, authenticated write)
- Storage bucket `product-images` (public)

## 2. Create the admin user

In Supabase: **Authentication → Users → Add user**
- Email: your admin email
- Password: choose a strong password
- ✅ Auto Confirm User

## 3. Configure environment variables

Set these in **Vercel → Project → Settings → Environment Variables**
(also in a local `.env` for `npm run dev`):

```
VITE_SUPABASE_URL=https://vzjodnuhzoibfzupftyj.supabase.co
VITE_SUPABASE_ANON_KEY=<your anon key>
VITE_ADMIN_EMAIL=admin@yourdomain.com
```

> The Supabase URL/anon key are already hardcoded as fallback so the site
> works without env vars, but `VITE_ADMIN_EMAIL` is required to lock the
> dashboard to a single account.

## 4. Use the admin dashboard

- Go to **`/admin/login`**
- Sign in with the admin email & password you created
- You will be redirected to **`/admin`**
- Click **Add Product**, upload an image, fill in the fields, save
- The product instantly appears at **`/products`**

## 5. Deploy on Vercel

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- Add the env vars from step 3
- Deploy

`vercel.json` is included to handle SPA routing fallback.