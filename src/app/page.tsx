import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { properties } from "@/content/properties";
import { PropertyCard } from "@/components/PropertyCard";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[color:var(--border2)]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501459522532-9f67219c8a9b?auto=format&fit=crop&w=2600&q=80"
            alt="Da Nang skyline"
            className="h-full w-full object-cover opacity-55"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-[color:var(--bg)]" />
        </div>

        <Container className="relative py-20 sm:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">
                DA NANG • MONTHLY RENTALS
              </div>
              <h1 className="mt-4 font-display text-4xl leading-[1.02] sm:text-5xl">
                Find your place in Da Nang.
                <span className="block text-[color:var(--muted)]">Curated rentals across all budgets.</span>
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-[color:var(--muted)] sm:text-base">
                Browse apartments, studios, houses, and villas. Transparent monthly pricing in USD and VND, interactive
                maps, and instant WhatsApp inquiries.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/properties" variant="primary" size="lg">
                  Browse properties
                </Button>
                <Link href="/properties" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--fg)]">
                  Search & filters →
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-16">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <div>
                <h2 className="font-display text-2xl">Available rentals</h2>
                <p className="mt-2 text-sm text-[color:var(--muted)]">A small set of sample listings. Replace with real inventory.</p>
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <Button href="/properties" variant="secondary">
                View all
              </Button>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((p, idx) => (
              <Reveal key={p.slug} delayMs={idx * 70}>
                <PropertyCard p={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

