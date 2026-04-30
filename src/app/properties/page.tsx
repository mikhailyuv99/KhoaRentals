import { Container } from "@/components/Container";
import { PropertyCard } from "@/components/PropertyCard";
import { properties } from "@/content/properties";
import { FiltersBar } from "@/app/properties/FiltersBar";
import { Suspense } from "react";

export const metadata = {
  title: "Properties — KHOA Rentals",
  description: "Browse all available rentals across Da Nang.",
};

function toInt(value: string | undefined | null) {
  if (!value) return undefined;
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) ? n : undefined;
}

function matchesQuery(q: string, haystack: string) {
  const parts = q
    .toLowerCase()
    .split(/\s+/)
    .map((p) => p.trim())
    .filter(Boolean);
  return parts.every((p) => haystack.includes(p));
}

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; beds?: string; min?: string; max?: string }>;
}) {
  const sp = (await searchParams) ?? {};

  const q = sp.q?.trim() ?? "";
  const beds = toInt(sp.beds);
  const min = toInt(sp.min);
  const max = toInt(sp.max);

  const filtered = properties.filter((p) => {
    const haystack = [
      p.name,
      p.neighborhood,
      p.type,
      p.addressLine,
      p.description,
      p.highlights.join(" "),
      p.amenities.join(" "),
      `${p.bedrooms} bedroom`,
      `${p.bedrooms} bed`,
      p.bedrooms === 0 ? "studio" : "",
    ]
      .join(" ")
      .toLowerCase();
    if (q && !matchesQuery(q, haystack)) return false;
    if (typeof beds === "number") {
      if (beds === 3) {
        if (p.bedrooms < 3) return false;
      } else if (p.bedrooms !== beds) {
        return false;
      }
    }
    if (typeof min === "number" && p.pricePerMonthUsd < min) return false;
    if (typeof max === "number" && p.pricePerMonthUsd > max) return false;
    return true;
  });

  return (
    <main className="bg-[var(--bg)]">
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <div className="text-xs font-medium tracking-wide text-[color:var(--muted2)]">
            Properties in Da Nang
          </div>
          <h1 className="font-display mt-2 text-3xl font-semibold tracking-tight text-[color:var(--fg)] sm:text-4xl">
            Browse rentals
          </h1>
          <p className="mt-4 text-sm leading-6 text-[color:var(--muted)] sm:text-base">
            Apartments and houses across budgets — mostly monthly rentals. Listings include
            photos, monthly pricing in VND and USD, address details, and a live map location.
          </p>
        </div>

        <Suspense
          fallback={<div className="mt-8 u-border bg-[var(--surface)] p-4" />}
        >
          <FiltersBar />
        </Suspense>

        <div className="mt-6 text-sm text-[color:var(--muted)]">
          Showing <span className="font-semibold text-[color:var(--fg)]">{filtered.length}</span>{" "}
          of <span className="font-semibold text-[color:var(--fg)]">{properties.length}</span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      </Container>
    </main>
  );
}

