import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "cta";

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-olive-deep text-white hover:bg-olive-sage border border-olive-deep",
  secondary:
    "bg-transparent text-olive-deep border border-olive-deep hover:bg-olive-deep hover:text-white",
  cta: "bg-gold text-forest hover:bg-gold/90 border border-gold",
};

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  fullWidth = false,
  type = "button",
}: ButtonProps) {
  const base = `inline-flex items-center justify-center px-6 py-3 rounded-md font-inter text-sm tracking-wide transition-all duration-200 ${fullWidth ? "w-full" : ""} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
