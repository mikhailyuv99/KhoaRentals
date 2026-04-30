"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/cn";

type Img = { src: string; alt: string };

export function PropertyImageStrip({ images }: { images: Img[] }) {
  const safe = useMemo(() => images.filter(Boolean), [images]);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dx, behavior: "smooth" });
  };

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
        <div className="flex items-center gap-2 text-xs text-black/55">
          <button
            type="button"
            onClick={() => scrollBy(-520)}
            className="border border-black/10 bg-[var(--background)] px-3 py-2 hover:bg-black/5"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(520)}
            className="border border-black/10 bg-[var(--background)] px-3 py-2 hover:bg-black/5"
          >
            →
          </button>
          <span className="hidden sm:inline">{safe.length} images</span>
        </div>
      </div>

      <div className="relative mt-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[var(--background)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[var(--background)] to-transparent" />

        <div
          ref={scrollerRef}
          className={cn(
            "flex gap-4 overflow-x-auto border border-black/10 bg-[var(--background)] p-3",
            "snap-x snap-mandatory scroll-px-3",
            "cursor-grab active:cursor-grabbing",
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
    </div>
  );
}

