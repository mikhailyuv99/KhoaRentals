import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { whatsappSendUrl } from "@/content/contact";

const nav = [
  { href: "/properties", label: "Properties" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border2)] bg-[color:var(--bg)]/72 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-display text-base font-semibold tracking-tight text-[color:var(--fg)]">
          Khoa Rentals
        </Link>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-[color:var(--muted)] hover:text-[color:var(--fg)]">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/properties" variant="secondary" size="sm" className="hidden sm:inline-flex">
            View properties
          </Button>
          <Button href={whatsappSendUrl("Hi Khoa Rentals — I’d like to ask about monthly rentals in Da Nang.")} variant="ghost" size="sm">
            WhatsApp
          </Button>
        </div>
      </Container>
    </header>
  );
}

