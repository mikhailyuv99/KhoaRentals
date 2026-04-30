"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/cn";

type Img = { src: string; alt: string };

export function PropertyImageStrip({ images }: { images: Img[] }) {
  const safe = useMemo(() => images.filter(Boolean), [images]);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      // Convert vertical mousewheel into horizontal scrolling (Windows/trackpad friendly).
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as EventListener);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-[var(--foreground)]">Photos</div>
        <div className="text-xs text-black/55">{safe.length} images • scroll →</div>
      </div>

      <div
        ref={scrollerRef}
        className={cn(
          "mt-3 flex gap-4 overflow-x-auto border border-black/10 bg-[var(--background)] p-3",
          "snap-x snap-mandatory scroll-px-3",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        )}
      >
        {safe.map((img) => (
          <div
            key={img.src}
            className="relative h-[340px] w-[min(86vw,720px)] shrink-0 snap-start border border-black/10 bg-black/5"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 86vw, 720px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

