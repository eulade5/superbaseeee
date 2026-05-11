import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useAuth } from "@/lib/auth";
import { ADMIN_EMAIL } from "@/lib/supabase";
import {
  fetchProductsRaw,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadProductImage,
  type DbProductRow,
} from "@/lib/products";
import { CATEGORIES, type Category } from "@/lib/catalog";
import { Pencil, Trash2, Plus, LogOut, Upload, X } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
  head: () => ({ meta: [{ title: "Admin — Amazing Tools Company" }] }),
});

interface FormState {
  id?: string;
  name: string;
  description: string;
  category: Category;
  variant_label: string;
  variants: string;
  image: string;
}

const emptyForm: FormState = {
  name: "",
  description: "",
  category: CATEGORIES[0],
  variant_label: "",
  variants: "",
  image: "",
};

function AdminDashboard() {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const qc = useQueryClient();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate({ to: "/admin/login" });
    }
  }, [user, isAdmin, loading, navigate]);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", "admin"],
    queryFn: fetchProductsRaw,
    enabled: !!user && isAdmin,
  });

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [uploading, setUploading] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const startCreate = () => {
    setForm(emptyForm);
    setSaveError(null);
    setShowForm(true);
  };

  const startEdit = (p: DbProductRow) => {
    setForm({
      id: p.id,
      name: p.name,
      description: p.description ?? "",
      category: (p.category as Category) ?? CATEGORIES[0],
      variant_label: p.variant_label ?? "",
      variants: (p.variants ?? []).join(", "),
      image: p.image ?? "",
    });
    setSaveError(null);
    setShowForm(true);
  };

  const saveMut = useMutation({
    mutationFn: async (f: FormState) => {
      const variants = f.variants.split(",").map((v) => v.trim()).filter(Boolean);
      const payload = {
        name: f.name,
        description: f.description,
        category: f.category,
        variant_label: f.variant_label || (variants.length > 1 ? "Option" : ""),
        variants,
        image: f.image,
      };
      if (f.id) return updateProduct(f.id, payload);
      return createProduct(payload);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
      qc.invalidateQueries({ queryKey: ["products", "admin"] });
      setShowForm(false);
      setForm(emptyForm);
    },
    onError: (e) => setSaveError((e as Error).message),
  });

  const deleteMut = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
      qc.invalidateQueries({ queryKey: ["products", "admin"] });
    },
  });

  const handleFile = async (file: File) => {
    setUploading(true);
    setSaveError(null);
    try {
      const url = await uploadProductImage(file);
      setForm((f) => ({ ...f, image: url }));
    } catch (e) {
      setSaveError((e as Error).message);
    } finally {
      setUploading(false);
      if (fileInput.current) fileInput.current.value = "";
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSaveError(null);
    saveMut.mutate(form);
  };

  const grouped = useMemo(() => {
    const m = new Map<string, DbProductRow[]>();
    for (const p of products) {
      const arr = m.get(p.category) ?? [];
      arr.push(p);
      m.set(p.category, arr);
    }
    return Array.from(m.entries());
  }, [products]);

  if (loading || !user || !isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
        Checking access…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-gradient-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Admin</p>
            <h1 className="text-xl font-bold md:text-2xl">Product Management</h1>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">View site</Link>
            <span className="hidden md:inline">{user.email}</span>
            <button
              onClick={() => signOut().then(() => navigate({ to: "/admin/login" }))}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 hover:border-primary/40 hover:text-primary"
            >
              <LogOut className="h-3.5 w-3.5" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {isLoading ? "Loading…" : `${products.length} products`}
          </p>
          <button
            onClick={startCreate}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold text-primary-foreground shadow-gold hover:scale-[1.02] transition-transform"
          >
            <Plus className="h-4 w-4" /> Add Product
          </button>
        </div>

        {grouped.length === 0 && !isLoading && (
          <div className="rounded-xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            No products yet. Click <strong>Add Product</strong> to create the first one.
          </div>
        )}

        {grouped.map(([cat, list]) => (
          <section key={cat} className="mb-10">
            <h2 className="mb-3 border-b border-border pb-2 text-lg font-semibold">{cat}</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {list.map((p) => (
                <div key={p.id} className="overflow-hidden rounded-xl border border-border bg-card">
                  <div className="aspect-square overflow-hidden bg-secondary/30">
                    {p.image ? (
                      <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-xs text-muted-foreground">No image</div>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] uppercase tracking-wider text-primary/80">{p.category}</p>
                    <h3 className="mt-1 line-clamp-1 text-sm font-semibold">{p.name}</h3>
                    {p.description && (
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{p.description}</p>
                    )}
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => startEdit(p)}
                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-md border border-border px-2 py-1.5 text-xs hover:border-primary/40 hover:text-primary"
                      >
                        <Pencil className="h-3 w-3" /> Edit
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete "${p.name}"?`)) deleteMut.mutate(p.id);
                        }}
                        className="inline-flex items-center justify-center rounded-md border border-destructive/40 px-2 py-1.5 text-xs text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">{form.id ? "Edit Product" : "Add Product"}</h3>
              <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Description</label>
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value as Category })}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Variant label <span className="text-muted-foreground/60">(optional)</span>
                  </label>
                  <input
                    placeholder="e.g. Size, Finish, Capacity"
                    value={form.variant_label}
                    onChange={(e) => setForm({ ...form, variant_label: e.target.value })}
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Variants <span className="text-muted-foreground/60">(comma separated)</span>
                  </label>
                  <input
                    placeholder="60×120, 75×150, 80×80"
                    value={form.variants}
                    onChange={(e) => setForm({ ...form, variants: e.target.value })}
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Product Image</label>
                <div className="mt-1 flex items-start gap-3">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-border bg-secondary/30">
                    {form.image ? (
                      <img src={form.image} alt="preview" className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center text-[10px] text-muted-foreground">No image</div>
                    )}
                  </div>
                  <div className="flex-1 space-y-2">
                    <input
                      ref={fileInput}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const f = e.target.files?.[0];
                        if (f) handleFile(f);
                      }}
                      className="hidden"
                    />
                    <button
                      type="button"
                      disabled={uploading}
                      onClick={() => fileInput.current?.click()}
                      className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-xs hover:border-primary/40 hover:text-primary disabled:opacity-50"
                    >
                      <Upload className="h-3.5 w-3.5" /> {uploading ? "Uploading…" : "Upload image"}
                    </button>
                    <input
                      placeholder="…or paste an image URL"
                      value={form.image}
                      onChange={(e) => setForm({ ...form, image: e.target.value })}
                      className="w-full rounded-md border border-border bg-background px-3 py-1.5 text-xs outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {saveError && <p className="text-xs text-destructive">{saveError}</p>}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-full border border-border px-4 py-2 text-xs hover:border-primary/40"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saveMut.isPending}
                  className="rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold text-primary-foreground shadow-gold disabled:opacity-50"
                >
                  {saveMut.isPending ? "Saving…" : form.id ? "Save changes" : "Create product"}
                </button>
              </div>
            </form>

            {!ADMIN_EMAIL && (
              <p className="mt-4 rounded-md border border-yellow-500/30 bg-yellow-500/10 p-2 text-[10px] text-yellow-200/90">
                Note: <code>VITE_ADMIN_EMAIL</code> is not set, so any signed-in user can manage products.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}