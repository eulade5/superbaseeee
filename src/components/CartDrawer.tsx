import { X, Trash2, MessageCircle, ShoppingBag, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import { WHATSAPP_NUMBER } from "@/lib/catalog";

export default function CartDrawer() {
  const { items, isOpen, setOpen, remove, setQty, clear, count } = useCart();
  const distinct = items.length;

  const buildWhatsAppUrl = () => {
    const lines = items.map(
      (i, idx) => `${idx + 1}. ${i.name} (${i.variant})  —  Qty: ${i.qty}`,
    );
    const msg =
      `Hello Amazing Tools Company,\n\nI'd like a quote for the following items:\n\n${lines.join("\n")}\n\n` +
      `Total items: ${count}\n\nPlease share pricing and availability. Thank you.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-gold bg-background shadow-luxury transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Basket {count > 0 && <span className="text-primary">({count})</span>}
            </h2>
          </div>
          <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-primary" aria-label="Close basket">
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
              <ShoppingBag className="mb-4 h-12 w-12 opacity-30" />
              <p>Your basket is empty.</p>
              <p className="mt-1 text-xs">Add products to request a quote.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((i) => (
                <li key={i.key} className="flex gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/40">
                  <img src={i.image} alt={i.name} className="h-20 w-20 flex-shrink-0 rounded-md object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-foreground">{i.name}</p>
                        <p className="text-[10px] uppercase tracking-wider text-primary/80">{i.category}</p>
                        <p className="mt-0.5 truncate text-xs text-muted-foreground">Option: {i.variant}</p>
                      </div>
                      <button onClick={() => remove(i.key)} className="text-muted-foreground transition-colors hover:text-destructive" aria-label={`Remove ${i.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-border bg-background/50 p-0.5">
                        <button
                          onClick={() => setQty(i.key, i.qty - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm font-semibold text-foreground">{i.qty}</span>
                        <button
                          onClick={() => setQty(i.key, i.qty + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-[10px] italic text-muted-foreground">Price on request</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="space-y-3 border-t border-border bg-card/50 px-6 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{distinct} {distinct === 1 ? "product" : "products"} · {count} total {count === 1 ? "item" : "items"}</span>
              <span className="font-semibold text-primary">Quote on request</span>
            </div>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Request Quote on WhatsApp
            </a>
            <button
              onClick={clear}
              className="w-full rounded-full border border-border px-6 py-2.5 text-xs text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
            >
              Clear basket
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
