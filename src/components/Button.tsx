import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex items-center justify-center gap-2 border font-medium tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "border-black bg-black text-[var(--background)] hover:bg-black/90 shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
  secondary:
    "border-black/20 bg-transparent text-[var(--foreground)] hover:bg-black/5",
  ghost: "border-transparent bg-transparent text-[var(--foreground)] hover:bg-black/5",
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (href) {
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");

    if (isExternal) {
      const isHttp = href.startsWith("http://") || href.startsWith("https://");
      return (
        <a
          href={href}
          className={cls}
          {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

