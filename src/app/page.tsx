import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { properties } from "@/content/properties";
import { PropertyCard } from "@/components/PropertyCard";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[color:var(--border2)]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1501459522532-9f67219c8a9b?auto=format&fit=crop&w=2600&q=80"
            alt="Da Nang skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
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
                Apartments, houses, and villas. Transparent monthly pricing in USD and VND, interactive maps, and fast
                WhatsApp response.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/properties" variant="primary" size="lg">
                  View properties
                </Button>
                <Link href="/areas" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--fg)]">
                  Explore areas →
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
                <h2 className="font-display text-2xl">Featured listings</h2>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Sample inventory for now. We can connect Google Sheets / a CMS next.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <Button href="/properties" variant="secondary">
                Browse all
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

      <section className="border-y border-[color:var(--border2)]">
        <Container className="py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-5">
              <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">FEATURES</div>
              <h2 className="mt-3 font-display text-3xl leading-tight">A smooth, stress‑free rental process.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
                We help you shortlist, confirm availability, and schedule viewings fast—so you can move without chaos.
              </p>
              <div className="mt-7">
                <Button href="/about" variant="secondary">
                  How it works
                </Button>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    t: "Shortlist that makes sense",
                    d: "Neighborhood + budget first. No endless scrolling.",
                  },
                  {
                    t: "Transparent monthly pricing",
                    d: "USD primary + VND reference so you can compare quickly.",
                  },
                  {
                    t: "Interactive maps",
                    d: "See beach distance, city access, and the vibe immediately.",
                  },
                  {
                    t: "Fast WhatsApp response",
                    d: "Availability changes quickly—message to confirm.",
                  },
                ].map((x, idx) => (
                  <Reveal key={x.t} delayMs={idx * 60}>
                    <div className="u-motion u-border bg-[color:var(--surface)] p-5 hover:bg-[color:var(--surface2)]">
                      <div className="font-display text-xl">{x.t}</div>
                      <div className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">{x.d}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-14 sm:py-16">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">TESTIMONIALS</div>
                <h2 className="mt-3 font-display text-3xl leading-tight">In renters’ words.</h2>
              </div>
              <Link href="/faq" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--fg)]">
                Common questions →
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              {
                q: "“We found a place in 48 hours. Clear options, no wasted time.”",
                n: "Ethan W.",
              },
              {
                q: "“The map + neighborhood guidance made the decision easy.”",
                n: "Lucas B.",
              },
              {
                q: "“Fast replies, honest pricing, and a smooth viewing.”",
                n: "Nathan B.",
              },
            ].map((t, idx) => (
              <Reveal key={t.n} delayMs={idx * 70}>
                <div className="u-motion u-border bg-[color:var(--surface)] p-6 hover:bg-[color:var(--surface2)]">
                  <div className="text-sm leading-relaxed text-[color:var(--fg)]">{t.q}</div>
                  <div className="mt-4 text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">{t.n}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[color:var(--border2)]">
        <Container className="py-14 sm:py-16">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">PROCESS</div>
                <h2 className="mt-3 font-display text-3xl leading-tight">From shortlist to keys.</h2>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
                  Keep it simple: choose a few, confirm availability, then view.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid gap-4">
                  {[
                    ["01", "Tell us your budget + move-in date"],
                    ["02", "We shortlist matches and confirm availability"],
                    ["03", "Schedule viewings and pick the right fit"],
                    ["04", "Confirm terms and move in"],
                  ].map(([k, v], idx) => (
                    <Reveal key={k} delayMs={idx * 60}>
                      <div className="u-motion u-border bg-[color:var(--surface)] p-5 hover:bg-[color:var(--surface2)]">
                        <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">{k}</div>
                        <div className="mt-2 font-display text-xl">{v}</div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
