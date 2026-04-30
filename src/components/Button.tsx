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
  "u-motion u-press inline-flex items-center justify-center gap-2 font-medium select-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "rounded-full bg-[color:var(--accent)] text-white hover:brightness-[0.97] shadow-[0_12px_28px_rgba(120,175,207,0.35)]",
  secondary:
    "rounded-full u-border bg-white text-[color:var(--text)] hover:bg-[color:var(--ui2)]",
  ghost:
    "rounded-full border border-transparent bg-transparent text-[color:var(--text2)] hover:text-[color:var(--text)] hover:bg-[color:var(--ui2)]",
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-10 px-4 text-[15px]",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-[15px]",
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

