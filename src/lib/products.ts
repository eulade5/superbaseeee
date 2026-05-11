import { supabase, PRODUCT_BUCKET } from "./supabase";
import type { Product, Category } from "./catalog";

export interface DbProductRow {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  category: string;
  variant_label: string | null;
  variants: string[] | null;
  created_at?: string;
}

export interface ProductInput {
  name: string;
  description?: string;
  image?: string;
  category: Category;
  variant_label?: string;
  variants?: string[];
}

export function rowToProduct(r: DbProductRow): Product {
  return {
    id: r.id,
    name: r.name,
    category: r.category as Category,
    image: r.image || "",
    variantLabel: r.variant_label || "Option",
    variants: r.variants && r.variants.length > 0 ? r.variants : ["Standard"],
  };
}

export async function fetchProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data as DbProductRow[]).map(rowToProduct);
}

export async function fetchProductsRaw(): Promise<DbProductRow[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data as DbProductRow[];
}

export async function createProduct(input: ProductInput) {
  const { data, error } = await supabase
    .from("products")
    .insert({
      name: input.name,
      description: input.description ?? null,
      image: input.image ?? null,
      category: input.category,
      variant_label: input.variant_label ?? null,
      variants: input.variants ?? [],
    })
    .select()
    .single();
  if (error) throw error;
  return data as DbProductRow;
}

export async function updateProduct(id: string, input: Partial<ProductInput>) {
  const patch: Record<string, unknown> = {};
  if (input.name !== undefined) patch.name = input.name;
  if (input.description !== undefined) patch.description = input.description;
  if (input.image !== undefined) patch.image = input.image;
  if (input.category !== undefined) patch.category = input.category;
  if (input.variant_label !== undefined) patch.variant_label = input.variant_label;
  if (input.variants !== undefined) patch.variants = input.variants;
  const { data, error } = await supabase
    .from("products")
    .update(patch)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data as DbProductRow;
}

export async function deleteProduct(id: string) {
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw error;
}

export async function uploadProductImage(file: File): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const path = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage
    .from(PRODUCT_BUCKET)
    .upload(path, file, { cacheControl: "3600", upsert: false, contentType: file.type });
  if (error) throw error;
  const { data } = supabase.storage.from(PRODUCT_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}