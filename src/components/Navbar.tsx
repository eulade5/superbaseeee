import { useState, useEffect } from "react";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg";
import { useCart } from "@/lib/cart";

const WHATSAPP_URL = "https://wa.me/250784909020";

const navLinks = [
  { label: "Home", href: "/#home", type: "anchor" as const },
  { label: "Products", href: "/products", type: "route" as const },
  { label: "Showroom", href: "/#showroom", type: "anchor" as const },
  { label: "About", href: "/#about", type: "anchor" as const },
  { label: "Contact", href: "/#contact", type: "anchor" as const },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, setOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-luxury border-b border-gold"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Amazing Tools Company" className="h-12 w-auto" />
          <span className="hidden text-xl font-bold tracking-wide text-primary sm:inline" style={{ fontFamily: "'Playfair Display', serif" }}>
            AMAZING TOOLS COMPANY
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) =>
            l.type === "route" ? (
              <Link
                key={l.href}
                to={l.href}
                className="text-sm tracking-wide text-muted-foreground transition-colors duration-300 hover:text-primary"
                activeProps={{ className: "text-sm tracking-wide text-primary" }}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                {l.label}
              </a>
            ),
          )}
          <button
            onClick={() => setOpen(true)}
            className="relative text-muted-foreground transition-colors hover:text-primary"
            aria-label="Open basket"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-gold px-1 text-[10px] font-bold text-primary-foreground shadow-gold">
                {count}
              </span>
            )}
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105 shadow-gold"
          >
            <Phone className="h-4 w-4" />
            Contact Us
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="relative text-foreground"
            aria-label="Open basket"
          >
            <ShoppingBag className="h-6 w-6" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-gold px-1 text-[10px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground" aria-label="Toggle menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gold bg-background/98 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((l) =>
              l.type === "route" ? (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {l.label}
                </a>
              ),
            )}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
