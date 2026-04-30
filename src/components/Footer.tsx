import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="bg-[var(--bg)]">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-tight text-[color:var(--fg)]">
              Khoa Rentals
            </div>
            <div className="mt-2 text-sm text-[color:var(--muted2)]">
              Apartments and houses across Đà Nẵng — monthly rentals.
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/properties" className="text-[color:var(--muted)] hover:text-[color:var(--fg)]">
              Properties
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-[color:var(--muted2)]">
          © {new Date().getFullYear()} Khoa Rentals. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

