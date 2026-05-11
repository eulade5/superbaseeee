import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS, type Category, type Product } from "@/lib/catalog";
import { fetchProducts } from "@/lib/products";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Products Catalog — Amazing Tools Company" },
      { name: "description", content: "Browse our full catalog of premium bathroom fixtures, lighting, kitchen fixtures, mirrors and accessories. Request a quote on WhatsApp." },
      { property: "og:title", content: "Products Catalog — Amazing Tools Company" },
      { property: "og:description", content: "Premium home fixtures and finishes. Add items to your basket and request a quote on WhatsApp." },
    ],
  }),
});

function ProductsPage() {
  const [filter, setFilter] = useState<Category | "All">("All");

  const { data: dbProducts, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const allProducts: Product[] = (dbProducts && dbProducts.length > 0) ? dbProducts : PRODUCTS;

  const grouped = useMemo(() => {
    const list = filter === "All" ? allProducts : allProducts.filter((p) => p.category === filter);
    const map = new Map<Category, Product[]>();
    for (const p of list) {
      const arr = map.get(p.category) ?? [];
      arr.push(p);
      map.set(p.category, arr);
    }
    return Array.from(map.entries());
  }, [filter, allProducts]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <header className="border-b border-border bg-gradient-dark pb-12 pt-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">Our Catalog</p>
          <h1 className="text-4xl font-bold md:text-6xl">
            Premium <span className="text-gradient-gold">Product Collection</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore over {allProducts.length} luxury fixtures and finishes. Add items to your basket and request a quote on WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {(["All", ...CATEGORIES] as const).map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 ${
                  filter === c
                    ? "border-transparent bg-gradient-gold text-primary-foreground shadow-gold"
                    : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16">
        {isLoading && (
          <p className="mb-6 text-center text-sm text-muted-foreground">Loading products…</p>
        )}
        {grouped.map(([cat, list]) => (
          <section key={cat} className="mb-16">
            <div className="mb-6 flex items-end justify-between border-b border-border pb-3">
              <h2 className="text-2xl font-bold md:text-3xl">{cat}</h2>
              <span className="text-xs text-muted-foreground">{list.length} products</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}