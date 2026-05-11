import { Gem, Layers, BadgeDollarSign, Users } from "lucide-react";

const reasons = [
  { icon: Gem, title: "High-Quality & Durable", desc: "Every product meets the highest standards of craftsmanship and longevity." },
  { icon: Layers, title: "Wide Variety of Designs", desc: "From classic elegance to bold contemporary — find your perfect match." },
  { icon: BadgeDollarSign, title: "Competitive Pricing", desc: "Premium quality doesn't have to be unaffordable. Great value, always." },
  { icon: Users, title: "Trusted by Professionals", desc: "Builders, architects, and homeowners choose us for reliability." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">The Difference</p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Why Choose <span className="text-gradient-gold">Amazing Tools Company</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="flex items-start gap-5 rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-gold"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.12}s both` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <r.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
