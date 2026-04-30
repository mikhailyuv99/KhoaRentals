import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border2)] bg-[color:var(--bg)]">
      <Container className="py-10 text-xs text-[color:var(--muted2)]">
        © {new Date().getFullYear()} Khoa Rentals. All rights reserved.
      </Container>
    </footer>
  );
}

