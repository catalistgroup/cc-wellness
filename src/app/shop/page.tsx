import { Suspense } from "react";
import { fetchBrands, brandsToProducts } from "@/lib/supabase";
import {
  PLACEHOLDER_PRODUCTS_PERSONAL_CARE,
  PLACEHOLDER_PRODUCTS_HOME_HEALTH,
} from "@/lib/mock-data";
import { ShopContent } from "./shop-content";

export default async function ShopPage() {
  const brands = await fetchBrands();
  const brandProducts = brandsToProducts(brands);

  const allProducts = [
    ...brandProducts,
    ...PLACEHOLDER_PRODUCTS_PERSONAL_CARE,
    ...PLACEHOLDER_PRODUCTS_HOME_HEALTH,
  ];

  return (
    <main>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <p className="font-playfair text-lg text-olive-gray italic">
              Loading...
            </p>
          </div>
        }
      >
        <ShopContent products={allProducts} />
      </Suspense>
    </main>
  );
}
