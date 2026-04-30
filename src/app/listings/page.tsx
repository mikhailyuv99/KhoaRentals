import { listings } from "@/content/listings";
import { ListingCard } from "@/components/ListingCard";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function ListingsPage() {
  return (
    <Container className="max-w-[1300px] px-10 py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="inline-flex rounded-full border border-[color:var(--ui3)] bg-white px-4 py-2 text-[14px] font-medium text-[color:var(--text2)]">
            Listings
          </div>
          <h1 className="mt-6 max-w-[580px] text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">
            Find homes that perfectly match your lifestyle
          </h1>
        </div>
        <Button href="/" variant="secondary">
          Back home
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {listings.map((l) => (
          <ListingCard key={l.slug} listing={l} />
        ))}
      </div>
    </Container>
  );
}

