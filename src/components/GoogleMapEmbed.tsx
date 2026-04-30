import Link from "next/link";

export function GoogleMapEmbed({
  lat,
  lng,
  title,
  googleMapsUrl,
}: {
  lat: number;
  lng: number;
  title: string;
  googleMapsUrl: string;
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(`${lat},${lng}`)}&z=15&output=embed`;

  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-[color:var(--ui3)] bg-white">
      <div className="flex items-center justify-between gap-4 border-b border-[color:var(--ui3)] px-4 py-3">
        <div className="min-w-0">
          <div className="truncate text-[16px] font-medium text-[color:var(--text)]">Location</div>
          <div className="truncate text-[14px] text-[color:var(--text2)]">{title}</div>
        </div>
        <Link
          href={googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="u-motion shrink-0 rounded-full border border-[color:var(--ui3)] bg-[color:var(--ui2)] px-4 py-2 text-[14px] font-medium text-[color:var(--text)] hover:bg-white"
        >
          Open in Google Maps
        </Link>
      </div>
      <iframe
        title={`Google Map: ${title}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[260px] w-full sm:h-[320px] lg:h-[360px]"
      />
    </div>
  );
}

