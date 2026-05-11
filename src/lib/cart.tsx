import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "./catalog";

export interface CartItem {
  id: string;          // product id
  key: string;         // product id + variant
  productId: string;
  name: string;
  category: string;
  image: string;
  variant: string;
  qty: number;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  add: (p: Product, variant: string) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
  isOpen: boolean;
  setOpen: (v: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "atc_basket_v2";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items, hydrated]);

  const add = (p: Product, variant: string) => {
    const key = `${p.id}::${variant}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i));
      return [
        ...prev,
        {
          id: p.id,
          key,
          productId: p.id,
          name: p.name,
          category: p.category,
          image: p.image,
          variant,
          qty: 1,
        },
      ];
    });
  };
  const remove = (key: string) => setItems((prev) => prev.filter((i) => i.key !== key));
  const setQty = (key: string, qty: number) =>
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.key !== key)
        : prev.map((i) => (i.key === key ? { ...i, qty } : i)),
    );
  const clear = () => setItems([]);

  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, count, add, remove, setQty, clear, isOpen, setOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
