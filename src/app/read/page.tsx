import { PLACEHOLDER_ARTICLES } from "@/lib/mock-data";
import { EditorialCard } from "@/components/editorial-card";

export default function ReadPage() {
  const featuredArticle = PLACEHOLDER_ARTICLES[0];
  const remainingArticles = PLACEHOLDER_ARTICLES.slice(1);

  return (
    <main className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl text-forest lowercase mb-3">
            read
          </h1>
          <p className="font-playfair text-lg text-olive-gray italic">
            wellness insights, curated for you
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <EditorialCard article={featuredArticle} featured />
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {remainingArticles.map((article) => (
            <EditorialCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}
