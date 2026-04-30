import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { listings } from "@/content/listings";
import { ListingCard } from "@/components/ListingCard";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TagPill } from "@/components/TagPill";
import { Ticker } from "@/components/Ticker";
import { AccordionItem } from "@/components/Accordion";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pt-[200px]">
          <Container className="max-w-[1440px]">
            <div className="mx-auto flex max-w-[700px] flex-col items-center gap-4 px-10 text-center">
              <h1 className="text-[72px] font-semibold leading-[1.1] text-[color:var(--text)]">
                Discover the perfect place to call home
              </h1>
              <p className="max-w-[400px] text-[18px] leading-[1.2] text-[color:var(--text2)]">
                Your trusted rental agent for monthly homes in Da Nang, offering curated places across budgets.
              </p>
              <Button href="/contact" variant="primary">
                Work with us
              </Button>
            </div>

            <div className="relative mx-auto mt-10 h-[440px] max-w-[1200px] overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/0xRyovYW1MyJtHWWrMvJemqp6E.png"
                alt="Hero image"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </Container>
        </div>
      </section>

      <section>
        <Container className="max-w-[1300px] px-10 pb-[100px] pt-[140px]">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="inline-flex rounded-full border border-[color:var(--ui3)] bg-white px-4 py-2 text-[14px] font-medium text-[color:var(--text2)]">
                Listings
              </div>
              <h2 className="mt-6 max-w-[580px] text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">
                Find homes that perfectly match your lifestyle
              </h2>
            </div>
            <Button href="/listings" variant="secondary">
              View all
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((l) => (
              <ListingCard key={l.slug} listing={l} />
            ))}
          </div>
        </Container>
      </section>

      <FeaturesSection />

      <section className="py-[100px]">
        <Container className="max-w-[1220px] px-10">
          <div className="flex items-end justify-between gap-10">
            <div className="max-w-[580px]">
              <TagPill>Testimonials</TagPill>
              <h2 className="mt-6 text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">
                In our clients’ words, real estate done right
              </h2>
            </div>
            <p className="max-w-[400px] text-[18px] leading-[1.2] text-[color:var(--text2)]">
              What our clients say about the quality, service, and results we deliver.
            </p>
          </div>

          <div className="mt-[42px] grid gap-4">
            <Ticker direction="left">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={`t1-${i}`}
                  className="w-[260px] rounded-[14px] border border-[color:var(--ui3)] bg-[color:var(--ui2)] p-4"
                >
                  <div className="flex gap-1 text-[color:var(--accent)]">
                    {Array.from({ length: 5 }).map((__, s) => (
                      <svg key={s} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M12 17.27l5.18 3.05-1.64-5.81L20 9.24l-5.9-.5L12 3.5 9.9 8.74 4 9.24l4.46 5.27-1.64 5.81L12 17.27z" />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-4 text-[17px] font-medium leading-[1.4] text-[color:var(--text)]">
                    The experience was smooth and fast — we found a place without stress.
                  </div>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-[42px] w-[42px] rounded-full bg-[color:var(--ui3)]" />
                    <div className="text-[18px] leading-[1.2] text-[color:var(--text)]">Client</div>
                  </div>
                </div>
              ))}
            </Ticker>
            <Ticker direction="right">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={`t2-${i}`}
                  className="w-[260px] rounded-[14px] border border-[color:var(--ui3)] bg-[color:var(--ui2)] p-4"
                >
                  <div className="flex gap-1 text-[color:var(--accent)]">
                    {Array.from({ length: 5 }).map((__, s) => (
                      <svg key={s} viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                        <path d="M12 17.27l5.18 3.05-1.64-5.81L20 9.24l-5.9-.5L12 3.5 9.9 8.74 4 9.24l4.46 5.27-1.64 5.81L12 17.27z" />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-4 text-[17px] font-medium leading-[1.4] text-[color:var(--text)]">
                    Clear communication and great listings — highly recommended.
                  </div>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="h-[42px] w-[42px] rounded-full bg-[color:var(--ui3)]" />
                    <div className="text-[18px] leading-[1.2] text-[color:var(--text)]">Client</div>
                  </div>
                </div>
              ))}
            </Ticker>
          </div>
        </Container>
      </section>

      <section className="overflow-hidden rounded-[24px] border-y border-[color:var(--ui3)] bg-[color:var(--ui2)] px-10 py-[100px]">
        <div className="mx-auto max-w-[1220px] text-center">
          <TagPill>Process</TagPill>
          <h2 className="mt-6 max-w-[580px] mx-auto text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">
            A smooth and stressfree journey
          </h2>
          <p className="mt-4 max-w-[400px] mx-auto text-[18px] leading-[1.2] text-[color:var(--text2)]">
            We handle every detail with care and expertise from beginning to end.
          </p>
        </div>

        <div className="mx-auto mt-[42px] grid max-w-[1220px] gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Initial Consultation", "We begin by understanding your goals, needs, and preferences."],
            ["Market analysis & strategy", "We provide market insights to help you decide with confidence."],
            ["Property Search or Listing", "We help you find the right place and guide you through options."],
            ["Home preparation & staging", "We help maximize appeal and presentation where needed."],
            ["Negotiation and Closing", "We handle negotiation and support paperwork for a seamless close."],
            ["Post-sale support", "We stay available to help with next steps after move-in."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-[18px] border border-[color:var(--ui3)] bg-white p-6">
              <div className="text-[22px] font-medium leading-[1.1] text-[color:var(--text)]">{t}</div>
              <div className="mt-3 text-[17px] leading-[1.6] text-[color:var(--text2)]">{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[100px]">
        <Container className="max-w-[1220px] px-10">
          <div className="grid gap-[42px] lg:grid-cols-12">
            <div className="lg:col-span-5">
              <TagPill>FAQs</TagPill>
              <h2 className="mt-6 max-w-[580px] text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">
                Your questions answered
              </h2>
              <p className="mt-4 max-w-[240px] text-[18px] leading-[1.2] text-[color:var(--text2)]">
                Here are the most common questions.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary">
                  Get in touch
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4">
                <AccordionItem title="What services does your agency provide?" defaultOpen>
                  We focus on monthly rentals across Da Nang: shortlisting, availability checks, viewings, and lease support.
                </AccordionItem>
                <AccordionItem title="How do you determine the value of a property?">
                  We compare similar units in the same area/building and account for furniture, amenities, and lease length.
                </AccordionItem>
                <AccordionItem title="What are the fees for your services?">
                  Fees vary by listing and landlord. We’ll confirm clearly before you commit.
                </AccordionItem>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
