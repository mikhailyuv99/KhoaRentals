"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { listings, type Listing, formatUsdCompact, formatVndCompact } from "@/content/listings";
import { cn } from "@/lib/cn";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { Button } from "@/components/Button";
import { propertyInquiryText, whatsappSendUrl } from "@/content/contact";
import { useSearchParams } from "next/navigation";

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex h-[15px] w-[15px] items-center justify-center">{children}</span>;
}

function ListingSummaryCard({
  listing,
  active,
  onClick,
}: {
  listing: Listing;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "u-motion block w-full overflow-hidden rounded-[var(--radius)] border bg-[color:var(--ui2)] text-left hover:shadow-sm",
        active ? "border-[color:var(--text)] shadow-sm" : "border-[color:var(--ui3)]"
      )}
    >
      <div className="relative h-[320px] w-full overflow-hidden">
        <Image src={listing.images[0]} alt={listing.title} fill sizes="(max-width: 1024px) 90vw, 434px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="font-display text-[18px] leading-[1.2] text-white">{listing.title}</div>
          <div className="mt-1 text-[14px] leading-[1.2] text-white/85">{listing.area}</div>
        </div>
      </div>

      <div className="p-[18px]">
        <div className="text-[20px] font-medium leading-[1.1] text-[color:var(--text)]">
          {formatUsdCompact(listing.monthlyUsd)} <span className="text-[14px] font-normal text-[color:var(--text2)]">/ month</span>
        </div>

        <div className="mt-4 flex items-center gap-6 text-[16px] text-[color:var(--text2)]">
          <div className="flex items-center gap-[6px]">
            <Icon>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 7h18" />
                <path d="M7 7v10" />
                <path d="M17 7v10" />
                <path d="M5 17h14" />
              </svg>
            </Icon>
            <span>{listing.beds === 0 ? "Studio" : listing.beds}</span>
          </div>

          <div className="h-5 w-px bg-[color:var(--ui3)]" />

          <div className="flex items-center gap-[6px]">
            <Icon>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 10V7a3 3 0 0 1 6 0v3" />
                <path d="M5 10h14" />
                <path d="M6 10v8" />
                <path d="M18 10v8" />
                <path d="M9 18h6" />
              </svg>
            </Icon>
            <span>{listing.baths}</span>
          </div>

          <div className="h-5 w-px bg-[color:var(--ui3)]" />

          <div className="flex items-center gap-[6px]">
            <Icon>
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 9V4h5" />
                <path d="M20 15v5h-5" />
                <path d="M20 9V4h-5" />
                <path d="M4 15v5h5" />
              </svg>
            </Icon>
            <span>{listing.sizeM2} m²</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function Carousel({ images, title }: { images: string[]; title: string }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  function scrollByAmount(dir: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(280, Math.round(el.clientWidth * 0.9)) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth rounded-[var(--radius)]"
      >
        {images.map((src, idx) => (
          <div key={src} className="relative h-[260px] min-w-full snap-center overflow-hidden rounded-[var(--radius)] sm:h-[360px] lg:h-[420px]">
            <Image
              src={src}
              alt={idx === 0 ? title : `${title} photo ${idx + 1}`}
              fill
              sizes="(max-width: 1024px) 92vw, 760px"
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          className="pointer-events-auto u-motion inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ui3)] bg-white/90 text-[color:var(--text)] shadow-sm hover:bg-white"
          aria-label="Previous photo"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          className="pointer-events-auto u-motion inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ui3)] bg-white/90 text-[color:var(--text)] shadow-sm hover:bg-white"
          aria-label="Next photo"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function ListingExpanded({ listing }: { listing: Listing }) {
  const inquiryUrl = whatsappSendUrl(
    propertyInquiryText({
      propertyName: listing.title,
      propertyPath: `/listings/${listing.slug}`,
      monthlyUsd: listing.monthlyUsd,
    })
  );

  return (
    <div className="overflow-hidden rounded-[24px] border border-[color:var(--ui3)] bg-white">
      <div className="flex flex-col gap-3 border-b border-[color:var(--ui3)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="font-display truncate text-[22px] tracking-tight text-[color:var(--text)]">{listing.title}</div>
          <div className="truncate text-[14px] text-[color:var(--text2)]">
            {listing.area} · {listing.address}
          </div>
        </div>
        <div className="shrink-0">
          <Button href={inquiryUrl} variant="primary">
            WhatsApp
          </Button>
        </div>
      </div>

      <div className="grid gap-8 p-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Carousel images={listing.images} title={listing.title} />
        </div>
        <div className="lg:col-span-5">
          <GoogleMapEmbed
            lat={listing.location.lat}
            lng={listing.location.lng}
            title={`${listing.area} — ${listing.address}`}
            googleMapsUrl={listing.googleMapsUrl}
          />
        </div>

        <div className="lg:col-span-12">
          <div className="rounded-[var(--radius)] border border-[color:var(--ui3)] bg-[color:var(--ui2)] p-5">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="font-display text-[34px] leading-[1.1] tracking-tight text-[color:var(--text)]">
                  {formatUsdCompact(listing.monthlyUsd)}
                  <span className="ml-2 text-[14px] font-normal text-[color:var(--text2)]">/ month</span>
                </div>
                <div className="mt-1 text-[15px] text-[color:var(--text2)]">{formatVndCompact(listing.monthlyVnd)} / month</div>
              </div>
              <div className="shrink-0">
                <Button href={inquiryUrl} variant="primary">
                  Contact on WhatsApp
                </Button>
              </div>
            </div>

            <div className="mt-6 text-[16px] leading-[1.7] text-[color:var(--text2)]">{listing.about}</div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-[15px] text-[color:var(--text2)] sm:grid-cols-3 lg:grid-cols-6">
              <div>
                <div className="text-[13px]">Beds</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.beds === 0 ? "Studio" : listing.beds}</div>
              </div>
              <div>
                <div className="text-[13px]">Baths</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.baths}</div>
              </div>
              <div>
                <div className="text-[13px]">Size</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.sizeM2} m²</div>
              </div>
              <div>
                <div className="text-[13px]">Area</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.area}</div>
              </div>
              <div>
                <div className="text-[13px]">Status</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.availability}</div>
              </div>
              <div>
                <div className="text-[13px]">Address</div>
                <div className="mt-1 font-medium text-[color:var(--text)]">{listing.address}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ListingsExplorer({
  initialLimit,
  className,
}: {
  initialLimit?: number;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const q = (searchParams.get("q") || "").trim().toLowerCase();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const filtered = useMemo(() => {
    if (!q) return listings;
    const tokens = q.split(/\s+/g).filter(Boolean);

    const haystackFor = (l: Listing) => {
      const beds = l.beds === 0 ? "studio" : `${l.beds} bed ${l.beds} bedroom ${l.beds} bedrooms`;
      return `${l.title} ${l.area} ${l.address} ${beds} ${l.baths} bath ${l.baths} baths`.toLowerCase();
    };

    return listings.filter((l) => tokens.every((t) => haystackFor(l).includes(t)));
  }, [q]);

  const items = useMemo(() => (initialLimit ? filtered.slice(0, initialLimit) : filtered), [filtered, initialLimit]);
  const selected = useMemo(() => items.find((l) => l.slug === selectedSlug) ?? null, [items, selectedSlug]);
  const expandedWrapRef = useRef<HTMLDivElement | null>(null);
  const [cols, setCols] = useState<1 | 2 | 3>(3);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setCols(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
    };
    compute();
    window.addEventListener("resize", compute, { passive: true });
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    const wrap = expandedWrapRef.current;
    if (!wrap || !selected) return;
    wrap.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [selected]);

  // Keep normal page scroll even when expanded.

  const selectedIndex = selectedSlug ? items.findIndex((l) => l.slug === selectedSlug) : -1;
  const insertAfterIndex =
    selectedIndex >= 0 ? Math.min(items.length - 1, Math.floor(selectedIndex / cols) * cols + (cols - 1)) : -1;
  const isMobile = cols === 1;

  return (
    <div className={className}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.flatMap((l, idx) => {
          const nodes: React.ReactNode[] = [
            <ListingSummaryCard
              key={l.slug}
              listing={l}
              active={l.slug === selectedSlug}
              onClick={() => setSelectedSlug((prev) => (prev === l.slug ? null : l.slug))}
            />,
          ];

          if (selected && idx === insertAfterIndex) {
            nodes.push(
              <div key={`${l.slug}__expanded`} className="col-span-full">
                <div ref={expandedWrapRef} className="pt-6">
                  {isMobile ? (
                    <ListingExpanded listing={selected} />
                  ) : (
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-400 [transition-timing-function:var(--ease-out)]",
                        selected ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <ListingExpanded listing={selected} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          }

          return nodes;
        })}
      </div>
    </div>
  );
}

