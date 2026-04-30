import Link from "next/link";
import { Container } from "@/components/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border2)] bg-[color:var(--bg)]/72 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-base font-semibold tracking-tight text-[color:var(--fg)]">
          Khoa Rentals
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <Link href="/properties" className="text-[color:var(--muted)] hover:text-[color:var(--fg)]">
            Properties
          </Link>
        </nav>
      </Container>
    </header>
  );
}

