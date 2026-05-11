import { Link } from "@tanstack/react-router";
import productBathroom from "@/assets/product-bathroom.jpg";
import productLighting from "@/assets/product-lighting.jpg";
import productPlumbing from "@/assets/product-plumbing.jpg";
import productKitchen from "@/assets/product-kitchen.jpg";
import productShower from "@/assets/product-shower.jpg";
import productSinks from "@/assets/product-sinks.jpg";
import productVanity from "@/assets/product-vanity.jpg";
import productShowercabin from "@/assets/product-showercabin.jpg";
import productAccessories from "@/assets/product-accessories.jpg";
import productShowroom from "@/assets/product-showroom.jpg";

const categories = [
  {
    title: "Bathroom Fixtures",
    desc: "Designer sinks, basins, mirrors, and premium bathroom accessories for refined spaces.",
    img: productBathroom,
  },
  {
    title: "Luxury Lighting",
    desc: "Chandeliers, ceiling lights, and wall fixtures that transform every room into a statement.",
    img: productLighting,
  },
  {
    title: "Plumbing Solutions",
    desc: "High-quality pumps, fittings, and connectors engineered for lasting performance.",
    img: productPlumbing,
  },
  {
    title: "Kitchen Fixtures",
    desc: "Premium kitchen sinks, faucets, and accessories for the modern culinary space.",
    img: productKitchen,
  },
  {
    title: "Shower Enclosures",
    desc: "Elegant glass shower cabins and enclosures for a spa-like bathroom experience.",
    img: productShower,
  },
  {
    title: "Designer Sinks",
    desc: "Handcrafted stone and artisan sinks with unique textures and natural beauty.",
    img: productSinks,
  },
  {
    title: "Bathroom Vanities",
    desc: "Modern vanity units with integrated storage and sleek mirror combinations.",
    img: productVanity,
  },
  {
    title: "Shower Cabins",
    desc: "Full-featured shower cabins with built-in jets and premium glass paneling.",
    img: productShowercabin,
  },
  {
    title: "Plumbing Accessories",
    desc: "Valves, connectors, and fittings in a wide range of sizes and specifications.",
    img: productAccessories,
  },
  {
    title: "Showroom Collection",
    desc: "Browse our full showroom featuring curated displays of premium home finishes.",
    img: productShowroom,
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">Our Collections</p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Premium Product <span className="text-gradient-gold">Categories</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-gold"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.08}s both` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="mb-2 text-2xl font-bold text-foreground">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-105"
          >
            View Full Catalog →
          </Link>
        </div>
      </div>
    </section>
  );
}
