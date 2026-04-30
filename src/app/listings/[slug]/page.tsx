import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { getListing, formatUsdCompact } from "@/content/listings";
import { propertyInquiryText, whatsappSendUrl } from "@/content/contact";

export default async function ListingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = getListing(slug);
  if (!listing) return notFound();

  const inquiry = whatsappSendUrl(
    propertyInquiryText({
      propertyName: listing.title,
      propertyPath: `/listings/${listing.slug}`,
      monthlyUsd: listing.priceUsdMonth,
    })
  );

  return (
    <Container className="max-w-[1200px] px-10 py-24">
      <div className="flex items-center justify-between gap-6">
        <Link href="/listings" className="u-motion text-[17px] text-[color:var(--text2)] hover:text-[color:var(--text)]">
          ← Back to listings
        </Link>
        <Button href={inquiry} variant="primary">
          WhatsApp
        </Button>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-[var(--radius)]">
            <div className="relative h-[520px] w-full">
              <Image src={listing.image} alt={listing.title} fill sizes="(max-width: 1024px) 92vw, 760px" className="object-cover" priority />
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <h1 className="text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">{listing.title}</h1>
          <div className="mt-4 text-[18px] leading-[1.4] text-[color:var(--text2)]">{listing.neighborhood}</div>
          <div className="mt-8 text-[22px] font-medium text-[color:var(--text)]">{formatUsdCompact(listing.priceUsdMonth)} / month</div>

          <div className="mt-8 rounded-[var(--radius)] border border-[color:var(--ui3)] bg-[color:var(--ui2)] p-6">
            <div className="text-[18px] leading-[1.4] text-[color:var(--text2)]">{listing.description}</div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-[17px] text-[color:var(--text2)]">
              <div>
                <div className="text-[14px]">Beds</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.beds === 0 ? "Studio" : listing.beds}</div>
              </div>
              <div>
                <div className="text-[14px]">Baths</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.baths}</div>
              </div>
              <div>
                <div className="text-[14px]">Size</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.sizeSqft.toLocaleString("en-US")} sq.ft</div>
              </div>
            </div>
            <div className="mt-8">
              <Button href={inquiry} variant="secondary">
                Ask about availability
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

