import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-showroom.jpg";

const WHATSAPP_URL = "https://wa.me/250784909020";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury bathroom showroom with premium fixtures"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center md:text-left">
        <div className="max-w-3xl" style={{ animation: "fade-up 1s ease-out" }}>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">
            Premium Home Finishes
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl" style={{ fontFamily: "'Playfair Display', serif" }}>
            Luxury Home Fixtures,{" "}
            <span className="text-gradient-gold">Reimagined</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Tiles, bathrooms, kitchens, lighting and industrial finishes —
            curated for homeowners, builders and architects who refuse to
            compromise.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-105"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-8 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ animation: "float 3s ease-in-out infinite" }}>
        <div className="h-14 w-8 rounded-full border-2 border-primary/30 p-1">
          <div className="mx-auto h-3 w-1 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
