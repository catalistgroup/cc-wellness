"use client";

import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    subtotal,
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-forest/30 z-50"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-warm-white z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-sage-mist">
          <h2 className="font-playfair text-xl text-forest lowercase">
            your bag
          </h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-8 h-8 text-forest hover:text-olive-sage transition-colors"
            aria-label="Close cart"
          >
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
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <p className="font-playfair text-lg text-olive-gray italic">
                your bag is empty
              </p>
              <Button variant="primary" onClick={() => setIsOpen(false)} href="/shop">
                Shop Now
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 pb-6 border-b border-sage-mist last:border-b-0"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 flex-shrink-0 bg-light-sage rounded-md overflow-hidden flex items-center justify-center">
                    {item.product.image ? (
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-contain p-2"
                      />
                    ) : (
                      <span className="font-playfair text-xs text-olive-gray text-center px-1">
                        {item.product.name}
                      </span>
                    )}
                  </div>

                  {/* Item details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-inter text-xs uppercase tracking-widest text-olive-gray">
                      {item.product.brand}
                    </p>
                    <p className="font-playfair text-sm text-forest lowercase truncate">
                      {item.product.name}
                    </p>
                    <p className="font-inter text-sm text-olive-gray mt-1">
                      ${item.product.price.toFixed(2)}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center border border-sage-mist rounded text-forest hover:bg-light-sage transition-colors font-inter text-sm"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="font-inter text-sm text-forest w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center border border-sage-mist rounded text-forest hover:bg-light-sage transition-colors font-inter text-sm"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => removeItem(item.product.id)}
                    className="flex-shrink-0 self-start text-olive-gray hover:text-forest transition-colors"
                    aria-label="Remove item"
                  >
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
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-t border-sage-mist space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-inter text-sm text-olive-gray">
                Subtotal
              </span>
              <span className="font-inter text-lg text-forest">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <Button variant="primary" fullWidth href="/checkout">
              Checkout
            </Button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full text-center font-inter text-sm text-olive-gray hover:text-forest transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
