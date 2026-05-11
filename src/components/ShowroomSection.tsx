import { MapPin, Clock, Phone } from "lucide-react";

export default function ShowroomSection() {
  return (
    <section id="showroom" className="bg-gradient-dark py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">Our Location</p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Visit Our <span className="text-gradient-gold">Showroom</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Step into our elegantly designed showroom in Kigali and experience the
            full collection in person.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Info cards */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Address</h3>
                <p className="mt-1 text-sm text-muted-foreground">Kigali, Rwanda</p>
                <a
                  href="https://maps.google.com/?q=-1.923108,30.069483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Opening Hours</h3>
                <p className="mt-1 text-sm text-muted-foreground">Mon – Sat: 8:00 AM – 7:30 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: By appointment</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Call or WhatsApp</h3>
                <a href="tel:+250784909020" className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary">
                  +250 784 909 020
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-border shadow-luxury lg:col-span-2">
            <iframe
              title="Amazing Tools Company — Kigali showroom location"
              src="https://www.google.com/maps?q=-1.923108,30.069483&hl=en&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 460, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
