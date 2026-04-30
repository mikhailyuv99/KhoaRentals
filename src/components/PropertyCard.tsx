import Image from "next/image";
import Link from "next/link";
import { Property, formatUsd, formatVnd, toVndFromUsd } from "@/content/properties";
import { cn } from "@/lib/cn";

export function PropertyCard({ property }: { property: Property }) {
  const cover = property.images[0];
  const vnd = property.pricePerMonthVnd ?? toVndFromUsd(property.pricePerMonthUsd);

  return (
    <Link
      href={`/property/${property.slug}`}
      className={cn(
        "group overflow-hidden u-border bg-[var(--surface2)] backdrop-blur transition",
        "hover:bg-[var(--surface)]"
      )}
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 to-transparent" />
        <div className="absolute left-4 bottom-4 right-4">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-semibold text-white">{property.type}</div>
            <div className="text-right text-sm text-white">
              <div className="font-medium">{formatVnd(vnd)}</div>
              <div className="text-white/75">{formatUsd(property.pricePerMonthUsd)} / month</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-base font-semibold tracking-tight text-[var(--fg)]">
              {property.name}
            </div>
            <div className="mt-1 text-sm text-[color:var(--muted2)]">{property.neighborhood}</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
          <span className="u-border2 bg-[var(--bg)] px-3 py-1">
            {property.bedrooms} bd
          </span>
          <span className="u-border2 bg-[var(--bg)] px-3 py-1">
            {property.bathrooms} ba
          </span>
          <span className="u-border2 bg-[var(--bg)] px-3 py-1">
            {property.guests} guests
          </span>
        </div>
      </div>
    </Link>
  );
}

