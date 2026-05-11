import { Award, Palette, ShieldCheck, Headphones } from "lucide-react";

const highlights = [
  { icon: Award, title: "Premium Quality", desc: "Curated selection of the finest materials and finishes" },
  { icon: Palette, title: "Modern Designs", desc: "Contemporary aesthetics for today's luxury spaces" },
  { icon: ShieldCheck, title: "Reliable Products", desc: "Durable, tested, and backed by trusted brands" },
  { icon: Headphones, title: "Expert Support", desc: "Professional guidance from start to finish" },
];

export default function TrustSection() {
  return (
    <section className="relative py-24 bg-gradient-dark">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-16 text-center text-sm uppercase tracking-[0.3em] text-primary">
          Trusted by homeowners, builders, and professionals
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="group rounded-2xl border border-border bg-card/50 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-gold"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.15}s both` }}
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                <h.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{h.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
