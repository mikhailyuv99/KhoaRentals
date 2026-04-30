import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ListingsExplorer } from "@/components/ListingsExplorer";

export default function Home() {
  return (
    <>
      <section id="hero" className="relative overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1723142282970-1fd415eec1ad?auto=format&fit=crop&w=2400&q=80"
              alt="Da Nang coastline"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-white" />
          </div>

          <Container className="relative max-w-[1440px] px-10">
            <div className="flex min-h-[86vh] flex-col justify-end pb-16 pt-32">
              <div className="max-w-[840px]">
                <h1 className="font-display text-[56px] leading-[1.05] tracking-[-0.02em] text-white sm:text-[68px] md:text-[76px]">
                  Discover the perfect place to call home in Da Nang
                </h1>
                <p className="mt-5 max-w-[560px] text-[18px] leading-[1.6] text-white/85">
                  Your trusted rental agent for monthly homes in Da Nang, offering curated places across budgets.
                </p>
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

          <div className="mt-12">
            <ListingsExplorer initialLimit={6} />
          </div>
        </Container>
      </section>
    </>
  );
}
