import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[color:var(--border2)] bg-[color:var(--bg)]">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-display text-base text-[color:var(--fg)]">Khoa Rentals</div>
            <div className="mt-2 max-w-md text-xs leading-relaxed text-[color:var(--muted2)]">
              Monthly-first rentals across Da Nang. Listings, pricing, and availability change quickly—message on WhatsApp
              for the fastest response.
            </div>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[color:var(--muted2)]">
            <Link href="/properties" className="hover:text-[color:var(--fg)]">
              Properties
            </Link>
            <Link href="/areas" className="hover:text-[color:var(--fg)]">
              Areas
            </Link>
            <Link href="/about" className="hover:text-[color:var(--fg)]">
              About
            </Link>
            <Link href="/faq" className="hover:text-[color:var(--fg)]">
              FAQ
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-[color:var(--muted2)]">© {new Date().getFullYear()} Khoa Rentals</div>
      </Container>
    </footer>
  );
}

