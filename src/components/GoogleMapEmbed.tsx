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
    <div className="max-w-full min-w-0 overflow-hidden rounded-[var(--radius)] border border-[color:var(--ui3)] bg-white">
      <div className="flex flex-col gap-2 border-b border-[color:var(--ui3)] px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-4 sm:py-3">
        <div className="min-w-0">
          <div className="text-[15px] font-medium text-[color:var(--text)] sm:text-[16px]">Location</div>
          <div className="break-words text-[13px] leading-snug text-[color:var(--text2)] sm:text-[14px]">{title}</div>
        </div>
        <Link
          href={googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="u-motion inline-flex shrink-0 items-center justify-center rounded-full border border-[color:var(--ui3)] bg-[color:var(--ui2)] px-3 py-2 text-center text-[13px] font-medium text-[color:var(--text)] hover:bg-white sm:px-4 sm:text-[14px]"
        >
          Open in Maps
        </Link>
      </div>
      <iframe
        title={`Google Map: ${title}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[200px] w-full max-w-full border-0 sm:h-[260px] md:h-[300px] lg:h-[340px]"
      />
    </div>
  );
}

