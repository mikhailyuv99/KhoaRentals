"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

export function PropertyImageStrip({
  images,
  className,
}: {
  images: { src: string; alt: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 5) return;
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div className={cn("relative u-border bg-[color:var(--surface)]", className)}>
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto p-3 [scrollbar-width:thin]"
      >
        {images.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative h-[240px] min-w-[78%] snap-start overflow-hidden sm:h-[340px] sm:min-w-[60%] lg:h-[420px] lg:min-w-[46%]"
          >
            <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[color:var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[color:var(--bg)] to-transparent" />
    </div>
  );
}

