import Link from "next/link";

const navLinks = [
  { href: "/shop", label: "shop" },
  { href: "/read", label: "read" },
  { href: "/locations", label: "locations" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://tiktok.com", label: "TikTok" },
  { href: "https://x.com", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-olive-deep text-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-playfair text-2xl lowercase mb-2">
              cc wellness
            </h3>
            <p className="font-playfair text-sm italic text-warm-white/70 mb-6">
              live better.
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-sm text-warm-white/70 hover:text-warm-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Stores Column */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest mb-6">
              our stores
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-inter text-sm font-medium">Brooklyn</p>
                <p className="font-inter text-sm text-warm-white/70">
                  169 Livonia Ave
                </p>
                <p className="font-inter text-sm text-warm-white/70">
                  Brooklyn, NY 11212
                </p>
              </div>
              <div>
                <p className="font-inter text-sm font-medium">Miami</p>
                <p className="font-inter text-sm text-warm-white/70 italic">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest mb-6">
              connect
            </h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter text-sm text-warm-white/70 hover:text-warm-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:hello@ccwellness.com"
                className="font-inter text-sm text-warm-white/70 hover:text-warm-white transition-colors mt-2"
              >
                hello@ccwellness.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="font-inter text-xs text-warm-white/50 text-center">
            &copy; 2026 cc health &amp; wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
