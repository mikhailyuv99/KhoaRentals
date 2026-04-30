import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/content/properties";
import { HeroBackdrop } from "@/app/HeroBackdrop";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--bg)] min-h-[78dvh]">
        <HeroBackdrop
          src="/hero-da-nang.png"
          alt="Da Nang city skyline"
        />

        <Container className="relative py-16 sm:py-20 lg:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 u-border bg-[var(--surface)] px-4 py-2 text-xs text-[color:var(--muted)] backdrop-blur">
                Apartments & houses across budgets • Monthly rentals • Visits available
              </div>

              <h1 className="font-display mt-7 text-4xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-5xl">
                Find a place in Da Nang —{" "}
                <span className="text-[color:var(--muted)]">and move in with confidence.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[color:var(--muted)] sm:text-lg sm:leading-8">
                Browse verified listings with monthly pricing in VND and USD, photo galleries, and
                map locations. Book a visit and check availability in minutes.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/properties" size="lg" variant="primary">
                  Browse listings
                </Button>
                <Button href="/contact" size="lg" variant="secondary">
                  Request options
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[var(--bg)] py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-medium tracking-wide text-[color:var(--muted2)]">
                Properties
              </div>
              <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-3xl">
                Browse all listings
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-[color:var(--muted)] sm:text-base">
                Monthly pricing in VND and USD, photos, and map locations — tap a listing to view details.
              </p>
            </div>
            <div className="hidden sm:block">
              <Button href="/properties" variant="secondary" size="sm">
                View all
              </Button>
            </div>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <Reveal key={p.slug} delayMs={60}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 sm:hidden">
            <Button href="/properties" variant="secondary" size="md" className="w-full">
              View all properties
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
