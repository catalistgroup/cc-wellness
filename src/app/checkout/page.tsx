"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <main className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-3xl text-forest lowercase mb-4">
            your bag is empty
          </h1>
          <p className="font-inter text-sm text-olive-gray mb-8">
            Add some items to your bag before checking out.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-inter text-sm tracking-wide transition-all duration-200 bg-olive-deep text-white hover:bg-olive-sage border border-olive-deep"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const handlePlaceOrder = () => {
    alert("This is a concept site. Orders are not processed.");
  };

  const inputClasses =
    "w-full bg-warm-white border border-sage-mist rounded-md px-4 py-3 font-inter text-sm text-forest placeholder:text-olive-gray/50 focus:outline-none focus:ring-1 focus:ring-olive-sage";

  return (
    <main className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-4xl text-forest lowercase text-center mb-12">
          checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Forms */}
          <div className="space-y-10">
            {/* Shipping */}
            <div>
              <h2 className="font-playfair text-2xl text-forest lowercase mb-6">
                shipping
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="font-inter text-sm text-olive-gray block mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="font-inter text-sm text-olive-gray block mb-1.5">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="jane@example.com"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="font-inter text-sm text-olive-gray block mb-1.5">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Wellness Ave"
                    className={inputClasses}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-sm text-olive-gray block mb-1.5">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Brooklyn"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="font-inter text-sm text-olive-gray block mb-1.5">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="NY"
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="font-inter text-sm text-olive-gray block mb-1.5">
                    Zip
                  </label>
                  <input
                    type="text"
                    placeholder="11211"
                    className={inputClasses}
                  />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div>
              <h2 className="font-playfair text-2xl text-forest lowercase mb-6">
                payment
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="font-inter text-sm text-olive-gray block mb-1.5">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="4242 4242 4242 4242"
                    className={inputClasses}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-inter text-sm text-olive-gray block mb-1.5">
                      Expiry
                    </label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="font-inter text-sm text-olive-gray block mb-1.5">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className={inputClasses}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Order Summary */}
          <div>
            <div className="bg-light-sage rounded-md p-6 sm:p-8 sticky top-24">
              <h2 className="font-playfair text-2xl text-forest lowercase mb-6">
                order summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-inter text-sm text-forest truncate">
                        {item.product.name}
                      </p>
                      <p className="font-inter text-xs text-olive-gray">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-inter text-sm text-forest ml-4">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-sage-mist pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm text-olive-gray">
                    Subtotal
                  </span>
                  <span className="font-inter text-sm text-forest">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm text-olive-gray">
                    Shipping
                  </span>
                  <span className="font-inter text-sm text-forest">Free</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-sage-mist">
                  <span className="font-inter text-base font-medium text-forest">
                    Total
                  </span>
                  <span className="font-inter text-lg font-medium text-forest">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Place Order */}
              <div className="mt-8">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
