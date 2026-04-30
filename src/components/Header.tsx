import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { whatsappUrl } from "@/content/contact";

const nav = [
  { href: "/properties", label: "Properties" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 u-border2 bg-[var(--bg)]/92 backdrop-blur">
      <Container className="flex h-16 items-center gap-4">
        <Logo className="shrink-0" />

        <nav className="hidden shrink-0 items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-black/70 transition hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button
            href={whatsappUrl("Hi KHOA Rentals — I’d like to check availability.")}
            variant="secondary"
            size="sm"
            className="shrink-0"
          >
            Contact
          </Button>
        </div>
      </Container>
    </header>
  );
}

