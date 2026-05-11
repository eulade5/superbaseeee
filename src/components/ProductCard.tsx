import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/catalog";

export default function ProductCard({ product }: { product: Product }) {
  const { add, setOpen } = useCart();
  const [variant, setVariant] = useState(product.variants[0]);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    add(product, variant);
    setAdded(true);
    setOpen(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const hasMultiple = product.variants.length > 1;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-gold">
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={600}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {hasMultiple && (
          <span className="absolute left-2 top-2 rounded-full bg-background/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
            {product.variants.length} options
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary/80">{product.category}</p>
          <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-foreground">{product.name}</h3>
          <p className="mt-1 text-xs italic text-muted-foreground">Price available on request</p>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            {product.variantLabel}
          </label>
          <select
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            className="w-full cursor-pointer rounded-md border border-border bg-background/60 px-2.5 py-2 text-xs font-medium text-foreground outline-none transition-colors hover:border-primary/40 focus:border-primary"
          >
            {product.variants.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleAdd}
          className={`flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
            added
              ? "bg-primary text-primary-foreground scale-[0.98]"
              : "border border-primary/40 text-primary hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent"
          }`}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" /> Added to basket
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" /> Add to Basket
            </>
          )}
        </button>
      </div>
    </div>
  );
}
