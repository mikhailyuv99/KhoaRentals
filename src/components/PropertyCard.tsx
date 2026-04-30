import Link from "next/link";
import Image from "next/image";
import { Property, formatUsd, formatVnd, toVndFromUsd } from "@/content/properties";
import { cn } from "@/lib/cn";

export function PropertyCard({ p, className }: { p: Property; className?: string }) {
  const vnd = p.pricePerMonthVnd ?? toVndFromUsd(p.pricePerMonthUsd);
  const bedsLabel = p.bedrooms === 0 ? "Studio" : `${p.bedrooms}BR`;

  return (
    <Link
      href={`/property/${p.slug}`}
      className={cn(
        "group block u-border bg-[color:var(--surface)] hover:bg-[color:var(--surface2)] transition",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.images[0]?.src || "data:image/gif;base64,R0lGODlhAQABAAAAACw="}
          alt={p.images[0]?.alt || p.name}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 360px"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-3 top-3 u-border bg-black/35 px-2 py-1 text-[11px] font-semibold tracking-wide text-[color:var(--fg)]">
          {bedsLabel} • {p.type}
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="font-display text-lg leading-tight text-white">{p.name}</div>
          <div className="mt-1 text-xs text-white/80">{p.neighborhood}</div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-end justify-between gap-4">
          <div className="text-xs text-[color:var(--muted2)]">Monthly</div>
          <div className="text-right">
            <div className="text-sm font-semibold text-[color:var(--fg)]">{formatUsd(p.pricePerMonthUsd)}</div>
            <div className="text-xs text-[color:var(--muted2)]">{formatVnd(vnd)}</div>
          </div>
        </div>
        <p className="mt-3 max-h-[3.4em] overflow-hidden text-sm leading-relaxed text-[color:var(--muted)]">
          {p.description}
        </p>
      </div>
    </Link>
  );
}

