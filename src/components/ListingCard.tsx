import Link from "next/link";
import Image from "next/image";
import { Listing, formatUsdCompact } from "@/content/listings";
import { cn } from "@/lib/cn";

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex h-[15px] w-[15px] items-center justify-center">{children}</span>;
}

export function ListingCard({ listing, className }: { listing: Listing; className?: string }) {
  return (
    <Link
      href={`/listings/${listing.slug}`}
      className={cn("u-motion block overflow-hidden rounded-[var(--radius)] border border-[color:var(--ui3)] bg-[color:var(--ui2)] hover:shadow-sm", className)}
    >
      <div className="relative h-[370px] w-full overflow-hidden">
        <Image src={listing.images[0]} alt={listing.title} fill sizes="(max-width: 1024px) 90vw, 434px" className="object-cover" />
      </div>

      <div className="p-[18px]">
        <div className="text-[18px] leading-[1.2] text-[color:var(--text)]">{listing.title}</div>
        <div className="mt-3 text-[22px] font-medium leading-[1.1] text-[color:var(--text)]">
          {formatUsdCompact(listing.price)}
        </div>

        <div className="mt-4 flex items-center gap-6 text-[17px] text-[color:var(--text2)]">
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
            <span>{listing.size}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

