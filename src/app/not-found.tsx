import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Container className="py-24">
      <div className="max-w-xl">
        <div className="text-xs font-semibold tracking-[0.24em] text-[color:var(--muted2)]">404</div>
        <h1 className="mt-3 font-display text-3xl text-[color:var(--fg)]">Page not found</h1>
        <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
          The page you’re looking for doesn’t exist. Browse current listings instead.
        </p>
        <div className="mt-8 flex items-center gap-3">
          <Button href="/properties" variant="primary">
            View properties
          </Button>
          <Link href="/" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--fg)]">
            Back home
          </Link>
        </div>
      </div>
    </Container>
  );
}

