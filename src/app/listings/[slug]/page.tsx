import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { formatUsdCompact, formatVndCompact, getListing } from "@/content/listings";
import { propertyInquiryText, whatsappSendUrl } from "@/content/contact";

export default async function ListingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = getListing(slug);
  if (!listing) return notFound();

  const inquiry = whatsappSendUrl(
    propertyInquiryText({
      propertyName: listing.title,
      propertyPath: `/listings/${listing.slug}`,
      monthlyUsd: listing.monthlyUsd,
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
              <Image src={listing.images[0]} alt={listing.title} fill sizes="(max-width: 1024px) 92vw, 760px" className="object-cover" priority />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="relative h-[220px] overflow-hidden rounded-[var(--radius)]">
              <Image src={listing.images[1]} alt="" fill sizes="(max-width: 1024px) 45vw, 360px" className="object-cover" />
            </div>
            <div className="relative h-[220px] overflow-hidden rounded-[var(--radius)]">
              <Image src={listing.images[2]} alt="" fill sizes="(max-width: 1024px) 45vw, 360px" className="object-cover" />
            </div>
          </div>

          <div className="mt-6">
            <GoogleMapEmbed
              lat={listing.location.lat}
              lng={listing.location.lng}
              title={`${listing.area} — ${listing.address}`}
              googleMapsUrl={listing.googleMapsUrl}
            />
          </div>
        </div>
        <div className="lg:col-span-5">
          <h1 className="text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">{listing.title}</h1>
          <div className="mt-4 text-[18px] leading-[1.4] text-[color:var(--text2)]">
            {listing.area} · {listing.address}
          </div>
          <div className="mt-8 text-[22px] font-medium text-[color:var(--text)]">
            {formatUsdCompact(listing.monthlyUsd)} <span className="text-[15px] font-normal text-[color:var(--text2)]">/ month</span>
          </div>
          <div className="mt-2 text-[16px] text-[color:var(--text2)]">{formatVndCompact(listing.monthlyVnd)} / month</div>

          <div className="mt-8 rounded-[var(--radius)] border border-[color:var(--ui3)] bg-[color:var(--ui2)] p-6">
            <div className="text-[18px] leading-[1.4] text-[color:var(--text2)]">{listing.about}</div>
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
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.sizeM2} m²</div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-[17px] text-[color:var(--text2)]">
              <div>
                <div className="text-[14px]">Area</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.area}</div>
              </div>
              <div>
                <div className="text-[14px]">Monthly</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{formatUsdCompact(listing.monthlyUsd)}</div>
              </div>
              <div>
                <div className="text-[14px]">Availability</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.availability}</div>
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

