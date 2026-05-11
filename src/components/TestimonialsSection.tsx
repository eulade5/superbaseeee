import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Paul Mugisha",
    role: "Architect, Kigali",
    quote:
      "The quality of the bathroom fixtures and lighting we sourced from Amazing Tools is on par with anything I've specified in Europe. Outstanding service.",
  },
  {
    name: "Aline Uwase",
    role: "Homeowner, Nyarutarama",
    quote:
      "Their team helped us choose every finish for our new home. The showroom experience felt like walking into a luxury brand boutique.",
  },
  {
    name: "David Habimana",
    role: "Project Developer",
    quote:
      "We've equipped three apartment projects through them. Reliable supply, premium products, and pricing that respects the client's budget.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">Client Voices</p>
          <h2 className="text-3xl font-bold md:text-5xl">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="relative flex flex-col gap-5 rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-gold"
              style={{ animation: `fade-up 0.6s ease-out ${i * 0.12}s both` }}
            >
              <Quote className="h-8 w-8 text-primary/40" />
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <figcaption>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}