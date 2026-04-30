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
    "group rounded-[12px] bg-white text-[color:var(--text)]",
  secondary:
    "rounded-[12px] bg-[color:var(--text)] text-white",
  ghost:
    "rounded-[12px] border border-transparent bg-transparent text-[color:var(--text2)] hover:text-[color:var(--text)] hover:bg-[color:var(--ui2)]",
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-10 px-4 text-[17px]",
  md: "h-11 px-6 text-[17px]",
  lg: "h-11 px-6 text-[17px]",
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

    const content = variant === "primary" ? <PrimaryContent>{children}</PrimaryContent> : children;

    if (isExternal) {
      const isHttp = href.startsWith("http://") || href.startsWith("https://");
      return (
        <a
          href={href}
          className={cls}
          {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {variant === "primary" ? <PrimaryContent>{children}</PrimaryContent> : children}
    </button>
  );
}

function PrimaryContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="font-medium">{children}</span>
      <span className="relative inline-flex h-5 w-5 overflow-hidden px-[6px]">
        <span className="u-motion absolute inset-0 translate-x-0 opacity-100 group-hover:translate-x-6 group-hover:opacity-0">
          <Arrow />
        </span>
        <span className="u-motion absolute inset-0 translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
          <Arrow />
        </span>
      </span>
    </>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

