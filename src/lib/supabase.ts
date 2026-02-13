import { createClient } from "@supabase/supabase-js";
import type { Brand, Product } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** Lowercase a string and replace non-alphanumeric runs with hyphens. */
export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Map a Supabase category name to a site display category. */
const CATEGORY_MAP: Record<string, string> = {
  "Vitamins & Supplements": "supplements",
  "Fitness & Gym": "fitness",
  "Energy & Sports Drinks": "hydration",
  "Organic & Natural Foods": "nutrition",
  "Plant-Based Beverages": "hydration",
  "Protein Bars & Snacks": "nutrition",
};

/** Price ranges per display category [min, max]. */
const PRICE_RANGES: Record<string, [number, number]> = {
  supplements: [24.99, 64.99],
  fitness: [14.99, 89.99],
  hydration: [2.99, 34.99],
  nutrition: [3.99, 44.99],
};

/**
 * Deterministic hash from a string, used to generate reproducible
 * mock prices so they stay the same across page loads.
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/** Generate a seeded price within a category's range. */
function seededPrice(name: string, category: string): number {
  const [min, max] = PRICE_RANGES[category] ?? [9.99, 49.99];
  const hash = hashString(name);
  const normalized = (hash % 10000) / 10000; // 0..1
  const raw = min + normalized * (max - min);
  return Math.round(raw * 100) / 100;
}

const WELLNESS_CATEGORIES = [
  "Vitamins & Supplements",
  "Fitness & Gym",
  "Energy & Sports Drinks",
  "Organic & Natural Foods",
  "Plant-Based Beverages",
  "Protein Bars & Snacks",
];

/**
 * Fetch brands that belong to wellness-related categories from Supabase.
 * Each brand is returned with its primary category name.
 */
export async function fetchBrands(): Promise<Brand[]> {
  const { data, error } = await supabase
    .from("brands")
    .select(
      `
      id,
      name,
      slug,
      logo_url,
      description,
      tagline,
      hero_image_url,
      brand_categories!inner (
        is_primary,
        categories!inner (
          name
        )
      )
    `
    )
    .eq("brand_categories.is_primary", true)
    .in("brand_categories.categories.name", WELLNESS_CATEGORIES);

  if (error) {
    console.error("Error fetching brands:", error);
    return [];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data ?? []).map((row: any) => {
    const categoryName =
      row.brand_categories?.[0]?.categories?.name ?? "Vitamins & Supplements";
    return {
      id: row.id,
      name: row.name,
      slug: row.slug,
      logo_url: row.logo_url,
      description: row.description,
      tagline: row.tagline,
      hero_image_url: row.hero_image_url,
      category_name: categoryName,
    };
  });
}

/**
 * Convert an array of Brand objects to Product objects with mapped
 * display categories and deterministic mock prices.
 */
export function brandsToProducts(brands: Brand[]): Product[] {
  return brands.map((brand) => {
    const category = CATEGORY_MAP[brand.category_name] ?? "supplements";
    return {
      id: brand.id,
      name: brand.name,
      slug: brand.slug ?? toSlug(brand.name),
      brand: brand.name,
      price: seededPrice(brand.name, category),
      image: brand.logo_url ?? brand.hero_image_url,
      description: brand.description,
      category,
      displayCategory:
        brand.category_name ?? category.charAt(0).toUpperCase() + category.slice(1),
    };
  });
}
