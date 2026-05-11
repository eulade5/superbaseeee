import logo from "@/assets/logo.jpeg";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Showroom", href: "#showroom" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Amazing Tools Company" className="h-14 w-auto" />
              <span className="text-xl font-bold tracking-wide text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                AMAZING TOOLS COMPANY
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Premium home finishes and fixtures for those who demand excellence.
              Kigali, Rwanda.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+250784909020" className="hover:text-primary transition-colors">+250 784 909 020</a>
              </li>
              <li>Kigali, Rwanda</li>
              <li>Mon – Sat: 8:00 AM – 7:30 PM</li>
            </ul>
            {/* Social placeholders */}
            <div className="mt-4 flex gap-3">
              {["Facebook", "Instagram", "Twitter"].map((s) => (
                <div
                  key={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary cursor-pointer"
                  title={s}
                >
                  {s[0]}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Amazing Tools Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
