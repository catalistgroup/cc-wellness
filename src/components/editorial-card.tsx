import Link from "next/link";
import type { Article } from "@/lib/types";

interface EditorialCardProps {
  article: Article;
  featured?: boolean;
}

export function EditorialCard({ article, featured = false }: EditorialCardProps) {
  return (
    <Link href={`/read#${article.slug}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-md">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <p className="font-inter text-xs uppercase tracking-widest text-olive-gray">
          {article.category}
        </p>
        <h3
          className={`font-playfair lowercase text-forest ${
            featured ? "text-3xl" : "text-xl"
          }`}
        >
          {article.title}
        </h3>
        <p className="font-inter text-sm text-olive-gray line-clamp-2">
          {article.excerpt}
        </p>
        <span className="inline-block font-inter text-sm text-gold group-hover:underline">
          read more
        </span>
      </div>
    </Link>
  );
}
