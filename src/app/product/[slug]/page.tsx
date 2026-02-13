import Link from "next/link";
import { fetchBrands, brandsToProducts } from "@/lib/supabase";
import {
  PLACEHOLDER_PRODUCTS_PERSONAL_CARE,
  PLACEHOLDER_PRODUCTS_HOME_HEALTH,
} from "@/lib/mock-data";
import { ProductCard } from "@/components/product-card";
import { AddToBagButton } from "./add-to-bag-button";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const brands = await fetchBrands();
  const brandProducts = brandsToProducts(brands);
  const allProducts = [
    ...brandProducts,
    ...PLACEHOLDER_PRODUCTS_PERSONAL_CARE,
    ...PLACEHOLDER_PRODUCTS_HOME_HEALTH,
  ];

  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-3xl text-forest lowercase mb-4">
            product not found
          </h1>
          <p className="font-inter text-sm text-olive-gray mb-8">
            We couldn&apos;t find the product you&apos;re looking for.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-inter text-sm tracking-wide transition-all duration-200 bg-olive-deep text-white hover:bg-olive-sage border border-olive-deep"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  // Related products: same displayCategory, excluding current
  const relatedProducts = allProducts
    .filter(
      (p) =>
        p.displayCategory === product.displayCategory && p.id !== product.id
    )
    .slice(0, 4);

  return (
    <main className="py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="font-inter text-sm text-olive-gray mb-8">
          <Link href="/shop" className="hover:text-forest transition-colors">
            shop
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/shop?category=${product.displayCategory.toLowerCase()}`}
            className="hover:text-forest transition-colors"
          >
            {product.displayCategory.toLowerCase()}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-forest">{product.name.toLowerCase()}</span>
        </nav>

        {/* Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Left - Image */}
          <div className="aspect-square bg-light-sage rounded-md overflow-hidden flex items-center justify-center">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-12"
              />
            ) : (
              <span className="font-playfair text-2xl text-olive-gray text-center lowercase px-8">
                {product.name}
              </span>
            )}
          </div>

          {/* Right - Details */}
          <div className="flex flex-col justify-center">
            <p className="font-inter text-xs uppercase tracking-widest text-olive-gray mb-2">
              {product.brand}
            </p>
            <h1 className="font-playfair text-3xl sm:text-4xl text-forest lowercase mb-4">
              {product.name}
            </h1>
            <p className="font-inter text-xl text-forest mb-2">
              ${product.price.toFixed(2)}
            </p>
            <p className="font-inter text-sm text-olive-gray mb-6">
              Free shipping on orders over $75
            </p>
            {product.description && (
              <p className="font-inter text-sm text-olive-gray leading-relaxed mb-8">
                {product.description}
              </p>
            )}
            <AddToBagButton product={product} />
          </div>
        </div>

        {/* Details Accordion */}
        <div className="border-t border-sage-mist mb-16">
          <details className="border-b border-sage-mist group">
            <summary className="flex items-center justify-between py-5 cursor-pointer">
              <h3 className="font-playfair text-lg text-forest">Ingredients</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-olive-gray transition-transform duration-200 group-open:rotate-180"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <div className="pb-5">
              <p className="font-inter text-sm text-olive-gray leading-relaxed">
                Premium ingredients sourced from trusted suppliers. Each batch is
                third-party tested for purity and potency. Full ingredient list
                available on the product packaging. We believe in complete
                transparency with our customers.
              </p>
            </div>
          </details>

          <details className="border-b border-sage-mist group">
            <summary className="flex items-center justify-between py-5 cursor-pointer">
              <h3 className="font-playfair text-lg text-forest">How to Use</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-olive-gray transition-transform duration-200 group-open:rotate-180"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <div className="pb-5">
              <p className="font-inter text-sm text-olive-gray leading-relaxed">
                Follow the recommended dosage on the product label. For best
                results, incorporate into your daily routine. Consult with a
                healthcare professional before starting any new supplement
                regimen, especially if you have existing health conditions.
              </p>
            </div>
          </details>

          <details className="border-b border-sage-mist group">
            <summary className="flex items-center justify-between py-5 cursor-pointer">
              <h3 className="font-playfair text-lg text-forest">
                About {product.brand}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-olive-gray transition-transform duration-200 group-open:rotate-180"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <div className="pb-5">
              <p className="font-inter text-sm text-olive-gray leading-relaxed">
                {product.brand} is committed to quality and innovation in the
                wellness space. With a focus on science-backed formulations and
                sustainable practices, they&apos;ve built a trusted name among
                health-conscious consumers. Available exclusively through select
                wellness retailers including cc wellness.
              </p>
            </div>
          </details>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-16">
            <h2 className="font-playfair text-2xl sm:text-3xl text-forest lowercase italic text-center mb-12">
              you might also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
