import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PropertyImageStrip } from "@/components/PropertyImageStrip";
import { Reveal } from "@/components/Reveal";
import {
  formatUsd,
  formatVnd,
  getPropertyBySlug,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  properties,
  toVndFromUsd,
} from "@/content/properties";
import { propertyInquiryText, whatsappUrl } from "@/content/contact";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = true;

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="u-border bg-[var(--surface)] p-4 backdrop-blur">
      <div className="text-xs text-black/55">{label}</div>
      <div className="mt-1 text-sm font-semibold text-[var(--foreground)]">{value}</div>
    </div>
  );
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return notFound();

  const directions = mapsDirectionsUrl(property.map.lat, property.map.lng, property.map.label);
  const vnd = property.pricePerMonthVnd ?? toVndFromUsd(property.pricePerMonthUsd);
  const inquiry = whatsappUrl(
    propertyInquiryText({
      propertyName: property.name,
      propertyPath: `/properties/${property.slug}`,
      monthlyUsd: property.pricePerMonthUsd,
    })
  );

  return (
    <main className="bg-[var(--bg)]">
      <Container className="py-10 sm:py-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Link href="/properties" className="text-sm text-black/60 hover:text-black underline decoration-black/15 hover:decoration-black/30">
                ← Back to properties
              </Link>
              <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
                {property.name}
              </h1>
              <div className="mt-3 text-sm text-black/55">
                {property.neighborhood} • {property.type}
              </div>
              <div className="mt-2 text-sm text-black/55">
                Visits available • Message to schedule
              </div>
            </div>

            <div className="flex flex-col gap-2 u-border bg-[var(--surface)] p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between md:min-w-[360px]">
              <div>
                <div className="text-xs text-black/55">Monthly rent</div>
                <div className="mt-1 text-2xl font-semibold tracking-tight text-[var(--foreground)]">
                  {formatVnd(vnd)}
                </div>
                <div className="mt-1 text-sm text-black/55">
                  {formatUsd(property.pricePerMonthUsd)} / month (estimate)
                </div>
              </div>
              <div className="flex gap-2 sm:flex-col sm:items-stretch">
                <Button href={inquiry} variant="primary" size="sm" className="w-full">
                  Check availability
                </Button>
                <Button href={directions} variant="secondary" size="sm" className="w-full">
                  Open map
                </Button>
                <Button href="/properties" variant="ghost" size="sm" className="w-full">
                  Back to list
                </Button>
              </div>
            </div>
          </div>

          <section className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <PropertyImageStrip images={property.images} />
              </Reveal>

              <div className="mt-8">
                <h2 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  Overview
                </h2>
                <p className="mt-3 text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
                  {property.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {property.highlights.map((h) => (
                    <div
                      key={h}
                      className="border border-black/10 bg-[var(--background)] px-4 py-3 text-sm text-black/65"
                    >
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  <Stat label="Bedrooms" value={`${property.bedrooms}`} />
                  <Stat label="Bathrooms" value={`${property.bathrooms}`} />
                  <Stat label="Guests" value={`${property.guests}`} />
                  <Stat label="Size" value={property.sizeSqm ? `${property.sizeSqm} m²` : "—"} />
                </div>

                <div className="u-border bg-[var(--surface)] p-5 backdrop-blur">
                  <div className="text-sm font-semibold text-[var(--foreground)]">Address</div>
                  <div className="mt-2 text-sm leading-6 text-black/60">
                    {property.addressLine}
                  </div>

                  <div className="mt-4 overflow-hidden u-border2 bg-black/5">
                    <iframe
                      title={`Map: ${property.name}`}
                      src={mapsEmbedUrl(property.map.lat, property.map.lng)}
                      className="h-72 w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button href={directions} variant="secondary" size="sm" className="w-full">
                      Directions
                    </Button>
                    <Button href={inquiry} variant="primary" size="sm" className="w-full">
                      Message
                    </Button>
                  </div>
                </div>

                <div className="u-border bg-[var(--surface)] p-5 backdrop-blur">
                  <div className="text-sm font-semibold text-[var(--foreground)]">Amenities</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {property.amenities.map((a) => (
                      <span
                        key={a}
                        className="u-border2 bg-[var(--bg)] px-3 py-1 text-xs text-black/70"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </Container>
    </main>
  );
}

