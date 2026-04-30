import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { listings } from "@/content/listings";
import { ListingCard } from "@/components/ListingCard";

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
    </>
  );
}
