import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/250784909020";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">Get In Touch</p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Phone / WhatsApp</h3>
                <a href="tel:+250784909020" className="text-muted-foreground hover:text-primary transition-colors">
                  +250 784 909 020
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">Kigali, Rwanda</p>
                <a
                  href="https://maps.google.com/?q=-1.923108,30.069483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-primary hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Working Hours</h3>
                <p className="text-muted-foreground">Monday – Saturday: 8:00 AM – 7:30 PM</p>
                <p className="text-muted-foreground">Sunday: By appointment</p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with Us on WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Amazing Tools Company Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1994.4!2d30.069483!3d-1.923108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwNTUnMjMuMiJTIDMwwrAwNCcxMC4xIkU!5e0!3m2!1sen!2srw!4v1700000000000!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
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
