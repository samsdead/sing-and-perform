import Link from "next/link";
import { cn } from "@/src/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:opacity-90 shadow-soft",
  secondary:
    "bg-ink text-white hover:opacity-90 shadow-soft",
  ghost:
    "bg-transparent text-ink hover:bg-black/5"
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-base"
};

export function Button(props: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
}) {
  const {
    children,
    href,
    onClick,
    type = "button",
    variant = "primary",
    size = "md",
    className,
    ariaLabel
  } = props;

  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        className={cls}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} onClick={onClick} type={type} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
