"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-light-sage py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="font-playfair text-3xl text-forest lowercase mb-3">
          join the cc wellness community
        </h2>
        <p className="font-inter text-sm text-olive-gray mb-8">
          Get early access to new arrivals, wellness tips, and exclusive offers
          delivered to your inbox.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            required
            className="flex-1 bg-warm-white border border-sage-mist rounded-md px-4 py-3 font-inter text-sm text-forest placeholder:text-olive-gray/50 focus:outline-none focus:ring-1 focus:ring-olive-sage"
          />
          <Button variant="cta" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
