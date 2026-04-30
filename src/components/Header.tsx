import Link from "next/link";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/#listings", label: "Listings" },
  { href: "/contact#hero", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur">
      <Container className="max-w-[1200px]">
        <div className="flex items-center justify-between gap-6 py-6 px-0 sm:px-0">
          <Link href="/" className="font-display text-lg tracking-tight text-[color:var(--text)]">
            Khoa Rentals
          </Link>

          <nav className="hidden items-center gap-6 text-[17px] text-[color:var(--text2)] md:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={cn("u-motion hover:text-[color:var(--text)]")}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

