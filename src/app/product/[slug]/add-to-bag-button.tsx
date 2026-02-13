"use client";

import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types";

export function AddToBagButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <Button variant="primary" fullWidth onClick={() => addItem(product)}>
      Add to Bag
    </Button>
  );
}
