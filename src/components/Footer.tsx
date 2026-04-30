import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="bg-[var(--background)]">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
              KHOA Rentals
            </div>
            <div className="mt-2 text-sm text-black/60">
              Apartments and houses across Đà Nẵng — focused on monthly rentals.
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/properties" className="text-black/65 hover:text-black">
              Properties
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 pt-6 text-xs text-black/55 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} KHOA Rentals. All rights reserved.</div>
          <div className="text-black/45">
            Map embeds powered by Google Maps. Photos are sample placeholders.
          </div>
        </div>
      </Container>
    </footer>
  );
}

