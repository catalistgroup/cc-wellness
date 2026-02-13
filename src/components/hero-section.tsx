import Link from "next/link";

export function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[80vh]">
      {/* Left half - Deep olive */}
      <div className="flex-1 bg-olive-deep flex items-center justify-center px-8 sm:px-12 lg:px-16 py-20 lg:py-0">
        <div className="max-w-lg">
          <p className="font-inter text-xs uppercase tracking-[0.2em] text-warm-white/60 mb-6">
            cc health &amp; wellness
          </p>
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl text-white lowercase leading-tight mb-8">
            live better.
          </h1>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-3 rounded-md font-inter text-sm tracking-wide transition-all duration-200 bg-transparent text-white border border-white hover:bg-white hover:text-olive-deep"
          >
            Shop all
          </Link>
        </div>
      </div>

      {/* Right half - Lifestyle image */}
      <div className="flex-1 relative min-h-[50vh] lg:min-h-0">
        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=900&fit=crop"
          alt="Wellness lifestyle"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
