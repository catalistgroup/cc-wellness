import Link from "next/link";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      {/* Image container */}
      <div className="relative aspect-square bg-light-sage rounded-md overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-8 transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-6">
            <span className="font-playfair text-lg text-olive-gray text-center lowercase">
              {product.name}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-all duration-300 flex items-end justify-center pb-4">
          <span className="font-inter text-xs uppercase tracking-widest bg-warm-white text-forest px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Quick Shop
          </span>
        </div>
      </div>

      {/* Product info */}
      <div className="mt-3 space-y-1">
        <p className="font-inter text-xs uppercase tracking-widest text-olive-gray">
          {product.brand}
        </p>
        <h3 className="font-playfair italic text-base text-forest lowercase">
          {product.name}
        </h3>
        <p className="font-inter text-sm text-olive-gray">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
