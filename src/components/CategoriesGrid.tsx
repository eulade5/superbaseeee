import { Link } from "@tanstack/react-router";
import categoryBathroom from "@/assets/category-bathroom.jpg";
import categoryPlumbing from "@/assets/category-plumbing.jpg";
import productKitchen from "@/assets/product-kitchen.jpg";
import productPlumbing from "@/assets/product-plumbing.jpg";

const tiles = [
  { title: "Tiles & Marbles", desc: "Porcelain, ceramic, polished and marble — sized for every space.", img: categoryBathroom },
  { title: "Bathroom", desc: "Showers, jacuzzis, basins, WCs and complete bath sets.", img: categoryPlumbing },
  { title: "Kitchen", desc: "Designer sinks, faucets and premium kitchen finishes.", img: productKitchen },
  { title: "Industrial", desc: "GI pipes, valves, fittings, water meters and manhole covers.", img: productPlumbing },
];

export default function CategoriesGrid() {
  return (
    <section id="categories" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">Browse By</p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Shop by <span className="text-gradient-gold">Category</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((c, i) => (
            <Link
              key={c.title}
              to="/products"
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-gold"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.08}s both` }}
            >
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>{c.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
                <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}