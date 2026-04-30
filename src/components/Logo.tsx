import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-baseline gap-2", className)}>
      <span className="font-display text-base font-semibold tracking-tight text-[var(--fg)]">
        Khoa Rentals
      </span>
      <span className="hidden text-xs text-black/45 sm:inline">Da Nang</span>
    </Link>
  );
}

