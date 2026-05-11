import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useAuth } from "@/lib/auth";
import { ADMIN_EMAIL } from "@/lib/supabase";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
  head: () => ({ meta: [{ title: "Admin Login — Amazing Tools Company" }] }),
});

function AdminLogin() {
  const { signIn, user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await signIn(email, password);
      navigate({ to: "/admin" });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-dark px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-gold">
        <div className="mb-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Restricted Area</p>
          <h1 className="mt-2 text-2xl font-bold">Admin Sign In</h1>
          <p className="mt-2 text-xs text-muted-foreground">
            Manage the product catalog for Amazing Tools Company.
          </p>
        </div>

        {user && !isAdmin && (
          <div className="mb-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
            Signed in as <strong>{user.email}</strong> but this account is not authorised.
            <button onClick={signOut} className="ml-2 underline">Sign out</button>
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>

          {error && <p className="text-xs text-destructive">{error}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-full bg-gradient-gold px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02] disabled:opacity-50"
          >
            {busy ? "Signing in…" : "Sign In"}
          </button>
        </form>

        {ADMIN_EMAIL && (
          <p className="mt-4 text-center text-[10px] text-muted-foreground">
            Authorised admin: {ADMIN_EMAIL}
          </p>
        )}
        <Link to="/" className="mt-6 block text-center text-xs text-muted-foreground hover:text-primary">
          ← Back to website
        </Link>
      </div>
    </div>
  );
}