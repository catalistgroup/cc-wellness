import Link from "next/link";
import { fetchBrands, brandsToProducts } from "@/lib/supabase";
import { PLACEHOLDER_ARTICLES } from "@/lib/mock-data";
import { HeroSection } from "@/components/hero-section";
import { ValueBar } from "@/components/value-bar";
import { ProductCard } from "@/components/product-card";
import { Newsletter } from "@/components/newsletter";

const FEATURED_BRANDS = [
  "ONNIT",
  "CELSIUS",
  "RXBAR",
  "Liquid I.V.",
  "Garden of Life",
  "Alani Nu",
  "GHOST",
  "Optimum Nutrition",
];

const CATEGORIES = [
  {
    name: "Supplements",
    slug: "supplements",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 15h3" />
      </svg>
    ),
  },
  {
    name: "Fitness",
    slug: "fitness",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.5 6.5h11M6.5 17.5h11M3.5 11h17M4 6.5v11M20 6.5v11M2 9v6M22 9v6" />
      </svg>
    ),
  },
  {
    name: "Nutrition",
    slug: "nutrition",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    name: "Hydration",
    slug: "hydration",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
  },
];

export default async function Home() {
  const brands = await fetchBrands();
  const products = brandsToProducts(brands);

  // Filter to featured brands
  const staffPicks = products.filter((p) =>
    FEATURED_BRANDS.some(
      (fb) => fb.toLowerCase() === p.brand.toLowerCase()
    )
  );

  const featuredArticle = PLACEHOLDER_ARTICLES[0];

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Value Bar */}
      <ValueBar />

      {/* Featured Categories */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl text-forest lowercase text-center mb-12">
            shop our top categories
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                className="group block bg-light-sage rounded-md p-8 sm:p-10 text-center hover:bg-sage-mist transition-colors duration-200"
              >
                <div className="flex justify-center mb-4 text-olive-sage group-hover:text-olive-deep transition-colors duration-200">
                  {cat.icon}
                </div>
                <h3 className="font-playfair text-lg text-forest lowercase mb-2">
                  {cat.name}
                </h3>
                <span className="inline-flex items-center font-inter text-sm text-olive-gray group-hover:text-olive-deep transition-colors duration-200">
                  shop now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Picks */}
      <section className="py-16 sm:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl text-forest lowercase italic text-center mb-12">
            our team loves
          </h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6">
              {staffPicks.map((product) => (
                <div key={product.id} className="min-w-[250px] flex-shrink-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Teaser */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-md overflow-hidden">
            {/* Left - Image */}
            <div className="aspect-[4/3] lg:aspect-auto">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Right - Content */}
            <div className="bg-olive-deep flex items-center p-8 sm:p-12 lg:p-16">
              <div>
                <p className="font-inter text-xs uppercase tracking-widest text-warm-white/60 mb-4">
                  {featuredArticle.category}
                </p>
                <h3 className="font-playfair text-3xl sm:text-4xl text-white lowercase mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="font-inter text-sm text-warm-white/70 mb-8 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <Link
                  href="/read"
                  className="inline-flex items-center font-inter text-sm text-gold hover:underline"
                >
                  read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </main>
  );
}
