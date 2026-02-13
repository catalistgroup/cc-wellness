import type { Article, Product } from "./types";

// ---------------------------------------------------------------------------
// Placeholder Articles
// ---------------------------------------------------------------------------

export const PLACEHOLDER_ARTICLES: Article[] = [
  {
    slug: "the-science-of-electrolytes",
    title: "the science of electrolytes",
    category: "wellness",
    excerpt:
      "Why sodium, potassium, and magnesium matter more than you think — especially if you actually move your body.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop",
    readTime: "5 min read",
  },
  {
    slug: "adaptogens-101-what-you-need-to-know",
    title: "adaptogens 101: what you need to know",
    category: "ingredients",
    excerpt:
      "Ashwagandha, reishi, rhodiola — separating the science from the hype on the herbs everyone's talking about.",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=450&fit=crop",
    readTime: "7 min read",
  },
  {
    slug: "our-founders-morning-routine",
    title: "our founder's morning routine",
    category: "staff picks",
    excerpt:
      "Cold plunge optional. Here's how our founder actually starts the day — no wellness theater required.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=450&fit=crop",
    readTime: "4 min read",
  },
  {
    slug: "plant-protein-vs-whey-the-honest-breakdown",
    title: "plant protein vs whey: the honest breakdown",
    category: "guides",
    excerpt:
      "We tested both for taste, mixability, amino profile, and how your stomach actually feels after. Here's what we found.",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800&h=450&fit=crop",
    readTime: "8 min read",
  },
  {
    slug: "5-supplements-our-team-actually-takes",
    title: "5 supplements our team actually takes",
    category: "staff picks",
    excerpt:
      "No sponsorships, no affiliate links — just the stuff that's actually in our medicine cabinets.",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=450&fit=crop",
    readTime: "6 min read",
  },
  {
    slug: "the-brooklyn-wellness-scene",
    title: "the brooklyn wellness scene",
    category: "guides",
    excerpt:
      "From Bushwick juice bars to Williamsburg recovery studios — a hyper-local guide to feeling good in BK.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop",
    readTime: "10 min read",
  },
];

// ---------------------------------------------------------------------------
// Placeholder Products — Personal Care
// ---------------------------------------------------------------------------

export const PLACEHOLDER_PRODUCTS_PERSONAL_CARE: Product[] = [
  {
    id: "pc-1",
    name: "Daily Cleansing Ritual",
    slug: "daily-cleansing-ritual",
    brand: "cc wellness",
    price: 28,
    image: null,
    description:
      "A gentle gel-to-foam cleanser with green tea and chamomile. Removes everything without stripping your skin.",
    category: "personal care",
    displayCategory: "Personal Care",
  },
  {
    id: "pc-2",
    name: "Botanical Body Oil",
    slug: "botanical-body-oil",
    brand: "cc wellness",
    price: 42,
    image: null,
    description:
      "Lightweight body oil with jojoba, rosehip, and vitamin E. Absorbs fast, never greasy.",
    category: "personal care",
    displayCategory: "Personal Care",
  },
  {
    id: "pc-3",
    name: "Mineral Deodorant",
    slug: "mineral-deodorant",
    brand: "cc wellness",
    price: 16,
    image: null,
    description:
      "Aluminum-free deodorant powered by magnesium and arrowroot. Actually works.",
    category: "personal care",
    displayCategory: "Personal Care",
  },
];

// ---------------------------------------------------------------------------
// Placeholder Products — Home Health
// ---------------------------------------------------------------------------

export const PLACEHOLDER_PRODUCTS_HOME_HEALTH: Product[] = [
  {
    id: "hh-1",
    name: "Aromatherapy Diffuser",
    slug: "aromatherapy-diffuser",
    brand: "cc wellness",
    price: 68,
    image: null,
    description:
      "Ceramic ultrasonic diffuser with warm ambient lighting. Whisper-quiet for sleep or work.",
    category: "home health",
    displayCategory: "Home Health",
  },
  {
    id: "hh-2",
    name: "Recovery Ice Pack Set",
    slug: "recovery-ice-pack-set",
    brand: "cc wellness",
    price: 34,
    image: null,
    description:
      "Set of 3 flexible gel ice packs sized for knees, shoulders, and lower back. Stays cold for 30+ minutes.",
    category: "home health",
    displayCategory: "Home Health",
  },
  {
    id: "hh-3",
    name: "Sleep Sound Machine",
    slug: "sleep-sound-machine",
    brand: "cc wellness",
    price: 52,
    image: null,
    description:
      "Compact white-noise machine with 12 natural soundscapes. Timer, memory, and travel-friendly.",
    category: "home health",
    displayCategory: "Home Health",
  },
];

// ---------------------------------------------------------------------------
// Display Categories for the shop filter pills
// ---------------------------------------------------------------------------

export const DISPLAY_CATEGORIES = [
  "all",
  "supplements",
  "fitness",
  "nutrition",
  "hydration",
  "personal care",
  "home health",
];

// ---------------------------------------------------------------------------
// Store Locations
// ---------------------------------------------------------------------------

export const STORE_LOCATIONS = [
  {
    name: "Brooklyn",
    address: "169 Livonia Ave",
    city: "Brooklyn",
    state: "NY",
    zip: "11212",
    hours: "Mon–Sat 9am–8pm, Sun 10am–6pm",
    status: "open" as const,
  },
  {
    name: "Miami",
    address: "Coming Soon",
    city: "Miami",
    state: "FL",
    zip: "",
    hours: "",
    status: "coming soon" as const,
  },
];
