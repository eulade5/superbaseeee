import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/250784909020";

export default function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          Ready to <span className="text-gradient-gold">Transform</span> Your Space?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Visit our showroom in Kigali or chat with us on WhatsApp to discover the
          perfect finishes for your home or project.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://maps.google.com/?q=-1.923108,30.069483"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-105"
          >
            Visit Our Showroom
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
    </section>
  );
}
