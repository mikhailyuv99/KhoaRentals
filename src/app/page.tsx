import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ListingsExplorer } from "@/components/ListingsExplorer";
import { AccordionItem } from "@/components/Accordion";
import { Reveal } from "@/components/Reveal";
import { Suspense } from "react";
import { MobileHeroSearch } from "@/components/MobileHeroSearch";

export default function Home() {
  return (
    <>
      <section id="hero" className="relative overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              src="/images/da-nang-hero-night.png"
              alt="Da Nang skyline at night"
              fill
              priority
              sizes="100vw"
              quality={100}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-white" />
          </div>

          <Container className="relative max-w-[1440px] px-10">
            <div className="flex min-h-[86vh] flex-col justify-end pb-16 pt-32">
              <div className="max-w-[840px] page-in">
                <h1 className="font-display text-[56px] leading-[1.05] tracking-[-0.02em] text-white sm:text-[68px] md:text-[76px]">
                  Discover the perfect place to call home in{" "}
                  <span>Da Nang</span>
                </h1>
                <p className="mt-5 max-w-[560px] text-[18px] leading-[1.6] text-white/85">
                  Your trusted rental agent for monthly homes in Da Nang, offering curated places across budgets.
                </p>
                <div className="mt-6 max-w-[520px]">
                  <Suspense fallback={null}>
                    <MobileHeroSearch />
                  </Suspense>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="#listings" variant="primary">
                    Browse listings
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Talk to Khoa
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section id="listings">
        <Container className="max-w-[1300px] px-10 pb-[100px] pt-[140px]">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="inline-flex rounded-full border border-[color:var(--ui3)] bg-white px-4 py-2 text-[14px] font-medium text-[color:var(--text2)]">
                  Listings
                </div>
                <h2 className="font-display mt-6 max-w-[680px] text-[44px] leading-[1.1] tracking-[-0.01em] text-[color:var(--text)] sm:text-[48px]">
                  Handpicked monthly rentals across Da Nang
                </h2>
              </div>
              <Button href="/listings" variant="secondary">
                View all
              </Button>
            </div>
          </Reveal>

          <div className="mt-12">
            <Suspense fallback={null}>
              <ListingsExplorer initialLimit={6} />
            </Suspense>
          </div>
        </Container>
      </section>

      <section className="border-y border-[color:var(--ui3)] bg-[color:var(--ui2)] py-[100px]">
        <Container className="max-w-[1220px] px-10">
          <Reveal>
            <div className="grid gap-[42px] lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="inline-flex rounded-full border border-[color:var(--ui3)] bg-white px-4 py-2 text-[14px] font-medium text-[color:var(--text2)]">
                FAQs
              </div>
              <h2 className="font-display mt-6 max-w-[520px] text-[44px] leading-[1.1] tracking-[-0.01em] text-[color:var(--text)] sm:text-[48px]">
                Quick answers before you book a viewing
              </h2>
              <p className="mt-4 max-w-[360px] text-[17px] leading-[1.6] text-[color:var(--text2)]">
                Monthly rentals in Da Nang—how it works, what to expect, and how fast we can help.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary">
                  Contact Khoa
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4">
                <AccordionItem title="Do you charge a fee?">
                  It depends on the property and the landlord. We’ll confirm clearly before any commitment.
                </AccordionItem>
                <AccordionItem title="How fast can I view a place?">
                  Usually same day or next day, depending on availability and the building rules.
                </AccordionItem>
                <AccordionItem title="What’s typically included in monthly rentals?">
                  Many apartments include Wi‑Fi and basic services. Cleaning, utilities, and management vary—ask and we’ll verify.
                </AccordionItem>
                <AccordionItem title="Can you help with contracts and deposits?">
                  Yes—translation support, deposit guidance, and lease paperwork are part of the service.
                </AccordionItem>
              </div>
            </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
