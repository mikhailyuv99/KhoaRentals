import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { properties, formatUsd, formatVnd, toVndFromUsd, mapsDirectionsUrl, mapsEmbedUrl } from "@/content/properties";
import { Button } from "@/components/Button";
import { PropertyImageStrip } from "@/components/PropertyImageStrip";
import { propertyInquiryText, whatsappSendUrl } from "@/content/contact";
import { Reveal } from "@/components/Reveal";

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  if (!p) return notFound();

  const vnd = p.pricePerMonthVnd ?? toVndFromUsd(p.pricePerMonthUsd);
  const inquiry = whatsappSendUrl(
    propertyInquiryText({ propertyName: p.name, propertyPath: `/property/${p.slug}`, monthlyUsd: p.pricePerMonthUsd })
  );

  return (
    <Container className="py-10 sm:py-14">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link href="/properties" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--fg)]">
          ← Back to properties
        </Link>
        <Button href={inquiry} variant="primary" size="sm">
          Check availability on WhatsApp
        </Button>
      </div>

      <Reveal>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <PropertyImageStrip images={p.images} />
          </div>

          <div className="lg:col-span-5">
            <div className="u-border bg-[color:var(--surface)] p-5 sm:p-6">
              <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">
                {p.neighborhood}
              </div>
              <h1 className="mt-3 font-display text-3xl leading-tight">{p.name}</h1>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">{p.description}</p>

              <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                <div className="u-border2 bg-[color:var(--surface2)] p-3">
                  <div className="text-[color:var(--muted2)]">Beds</div>
                  <div className="mt-1 font-semibold">{p.bedrooms === 0 ? "Studio" : p.bedrooms}</div>
                </div>
                <div className="u-border2 bg-[color:var(--surface2)] p-3">
                  <div className="text-[color:var(--muted2)]">Baths</div>
                  <div className="mt-1 font-semibold">{p.bathrooms}</div>
                </div>
                <div className="u-border2 bg-[color:var(--surface2)] p-3">
                  <div className="text-[color:var(--muted2)]">Size</div>
                  <div className="mt-1 font-semibold">{p.sizeSqm ? `${p.sizeSqm}m²` : "—"}</div>
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between gap-6 border-t border-[color:var(--border2)] pt-5">
                <div>
                  <div className="text-xs text-[color:var(--muted2)]">Monthly price</div>
                  <div className="mt-1 text-lg font-semibold text-[color:var(--fg)]">{formatUsd(p.pricePerMonthUsd)}</div>
                  <div className="text-xs text-[color:var(--muted2)]">{formatVnd(vnd)}</div>
                </div>
                <Button href={inquiry} variant="secondary">
                  WhatsApp inquiry
                </Button>
              </div>
            </div>

            <div className="mt-5 u-border bg-[color:var(--surface)] p-5 sm:p-6">
              <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">HIGHLIGHTS</div>
              <ul className="mt-4 grid gap-2 text-sm text-[color:var(--muted)]">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-[0.35em] h-1.5 w-1.5 bg-[color:var(--accent)]" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="u-border bg-[color:var(--surface)] p-5 sm:p-6">
            <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">AMENITIES</div>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-[color:var(--muted)]">
              {p.amenities.map((a) => (
                <li key={a} className="u-border2 bg-[color:var(--surface2)] px-3 py-2">
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="u-border overflow-hidden bg-[color:var(--surface)]">
            <div className="flex items-center justify-between gap-4 border-b border-[color:var(--border2)] px-5 py-4">
              <div>
                <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">LOCATION</div>
                <div className="mt-1 text-sm text-[color:var(--muted)]">{p.addressLine}</div>
              </div>
              <Button href={mapsDirectionsUrl(p.map.lat, p.map.lng)} variant="ghost" size="sm">
                Open in Google Maps
              </Button>
            </div>
            <div className="relative aspect-[16/10] bg-black">
              <iframe
                title={`${p.name} map`}
                src={mapsEmbedUrl(p.map.lat, p.map.lng)}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

