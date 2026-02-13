"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CategoryPills } from "@/components/category-pills";
import { ProductCard } from "@/components/product-card";
import { DISPLAY_CATEGORIES } from "@/lib/mock-data";
import type { Product } from "@/lib/types";

interface ShopContentProps {
  products: Product[];
}

export function ShopContent({ products }: ShopContentProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<string>(
    categoryParam && DISPLAY_CATEGORIES.includes(categoryParam)
      ? categoryParam
      : "all"
  );

  // Sync with URL changes
  useEffect(() => {
    if (categoryParam && DISPLAY_CATEGORIES.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter(
          (p) => p.displayCategory.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl text-forest lowercase mb-3">
            shop
          </h1>
          <p className="font-playfair text-lg text-olive-gray italic">
            curated wellness, elevated.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex justify-center mb-8">
          <CategoryPills
            categories={DISPLAY_CATEGORIES}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* Results Count */}
        <p className="font-inter text-sm text-olive-gray mb-8">
          showing {filteredProducts.length} products
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-playfair text-lg text-olive-gray italic">
              no products found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
