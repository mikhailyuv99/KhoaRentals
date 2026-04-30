"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/content/properties";
import { FiltersBar, FiltersValue } from "@/app/properties/FiltersBar";
import { Reveal } from "@/components/Reveal";

function matches(p: (typeof properties)[number], q: string) {
  const s = q.trim().toLowerCase();
  if (!s) return true;
  const hay = [
    p.name,
    p.neighborhood,
    p.type,
    p.addressLine,
    p.description,
    p.highlights.join(" "),
    p.amenities.join(" "),
    `${p.bedrooms} bedroom`,
    `${p.bedrooms}br`,
    p.bedrooms === 0 ? "studio" : "",
  ]
    .join(" ")
    .toLowerCase();
  return hay.includes(s);
}

function matchesBeds(p: (typeof properties)[number], beds: FiltersValue["beds"]) {
  if (beds === "any") return true;
  if (beds === "studio") return p.bedrooms === 0;
  if (beds === "3plus") return p.bedrooms >= 3;
  return p.bedrooms === Number(beds);
}

function matchesMaxUsd(p: (typeof properties)[number], maxUsd: FiltersValue["maxUsd"]) {
  if (maxUsd === "any") return true;
  return p.pricePerMonthUsd <= Number(maxUsd);
}

export default function PropertiesPage() {
  const [filters, setFilters] = useState<FiltersValue>({
    q: "",
    beds: "any",
    maxUsd: "any",
    shortStay: "any",
  });

  const filtered = useMemo(() => {
    return properties.filter(
      (p) =>
        matches(p, filters.q) &&
        matchesBeds(p, filters.beds) &&
        matchesMaxUsd(p, filters.maxUsd) &&
        (filters.shortStay === "any" ? true : Boolean(p.shortStayOk))
    );
  }, [filters]);

  return (
    <Container className="py-10 sm:py-14">
      <Reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">PROPERTIES</div>
            <h1 className="mt-3 font-display text-3xl">Browse rentals</h1>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Search by neighborhood, beds, monthly budget, and short-stay availability.
            </p>
          </div>
          <div className="text-xs text-[color:var(--muted2)]">{filtered.length} results</div>
        </div>
      </Reveal>

      <Reveal delayMs={90}>
        <div className="mt-7 u-border bg-[color:var(--surface)] p-4 sm:p-5">
          <FiltersBar initialValue={filters} onChange={setFilters} />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, idx) => (
          <Reveal key={p.slug} delayMs={idx * 50}>
            <PropertyCard p={p} />
          </Reveal>
        ))}
      </div>
    </Container>
  );
}

