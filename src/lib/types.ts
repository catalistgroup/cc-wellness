export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  description: string | null;
  tagline: string | null;
  hero_image_url: string | null;
  category_name: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  price: number;
  image: string | null;
  description: string | null;
  category: string;
  displayCategory: string;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
