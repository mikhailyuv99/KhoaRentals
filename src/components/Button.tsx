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
  "u-motion u-press inline-flex items-center justify-center gap-2 font-semibold tracking-tight select-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "u-border bg-[color:var(--fg)] text-[color:var(--bg)] hover:bg-[color:var(--fg)]/92 shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_60px_rgba(0,0,0,0.42)]",
  secondary:
    "u-border bg-[color:var(--surface)] text-[color:var(--fg)] hover:bg-[color:var(--surface2)] hover:border-[color:var(--border)]",
  ghost:
    "border border-transparent bg-transparent text-[color:var(--muted)] hover:text-[color:var(--fg)] hover:bg-[color:var(--surface2)]",
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

