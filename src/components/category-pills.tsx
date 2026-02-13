"use client";

interface CategoryPillsProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export function CategoryPills({
  categories,
  active,
  onChange,
}: CategoryPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`rounded-full px-5 py-2 font-playfair text-sm transition-all duration-200 ${
              isActive
                ? "bg-olive-deep text-white border border-olive-deep"
                : "bg-transparent text-forest border border-sage-mist hover:border-olive-sage"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
