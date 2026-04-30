import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PropertyCard } from "@/components/PropertyCard";
import { featuredProperties } from "@/content/properties";
import { HeroBackdrop } from "@/app/HeroBackdrop";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--background)] min-h-[70vh]">
        <HeroBackdrop
          src="/hero-da-nang.png"
          alt="Da Nang city skyline"
        />

        <Container className="relative py-16 sm:py-20 lg:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 border border-black/10 bg-[var(--background)]/75 px-4 py-2 text-xs text-black/70 backdrop-blur">
                Apartments & houses across budgets • Monthly rentals • Visits available
              </div>

              <h1 className="font-display mt-7 text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
                Find a place in Da Nang —{" "}
                <span className="text-black/55">and move in with confidence.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
                Browse verified listings with monthly pricing in VND and USD, full photo
                galleries, and map locations. Schedule a visit and check availability on WhatsApp.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/properties" size="lg" variant="primary">
                  Browse listings
                </Button>
                <Button href="/contact" size="lg" variant="secondary">
                  Ask for options
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[var(--background)] py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-medium tracking-wide text-black/55">
                Featured rentals
              </div>
              <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                A curated selection
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-black/60 sm:text-base">
                Browse highlights below — or explore the full list with pricing and map locations.
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
            {featuredProperties.map((p) => (
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

      <section className="bg-[var(--background)] py-14 sm:py-16">
        <Container>
          <div className="grid gap-6 border border-black/10 bg-[var(--background)] p-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)]">
                Want the perfect fit?
              </h3>
              <p className="mt-2 text-sm leading-6 text-black/60 sm:text-base">
                Tell us your dates, budget, and preferred neighborhoods. We’ll share the best
                matches from the portfolio and confirm availability fast.
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <Button href="/properties" size="lg" variant="primary" className="w-full">
                Explore properties
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
