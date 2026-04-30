import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <main className="bg-[var(--background)]">
      <Container className="py-20">
        <div className="mx-auto max-w-xl border border-black/10 bg-[var(--background)] p-10 text-center">
          <div className="text-xs font-medium tracking-wide text-black/55">404</div>
          <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)]">
            Page not found
          </h1>
          <p className="mt-3 text-sm leading-6 text-black/60">
            The page you’re looking for doesn’t exist. Browse the portfolio or return home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button href="/" variant="primary" size="md">
              Home
            </Button>
            <Button href="/properties" variant="secondary" size="md">
              Properties
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}

