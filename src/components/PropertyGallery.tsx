"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Img = { src: string; alt: string };

function Chevron({ dir }: { dir: "l" | "r" }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path
        fill="currentColor"
        d={
          dir === "l"
            ? "M15.5 4.5 8 12l7.5 7.5-1.6 1.6L4.8 12l9.1-9.1 1.6 1.6Z"
            : "M8.5 19.5 16 12 8.5 4.5l1.6-1.6 9.1 9.1-9.1 9.1-1.6-1.6Z"
        }
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4Z"
      />
    </svg>
  );
}

export function PropertyGallery({ images }: { images: Img[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const startX = useRef<number | null>(null);

  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const current = safeImages[idx] ?? safeImages[0];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") setIdx((p) => (p - 1 + safeImages.length) % safeImages.length);
      if (e.key === "ArrowRight") setIdx((p) => (p + 1) % safeImages.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, safeImages.length]);

  const go = (next: number) => setIdx((next + safeImages.length) % safeImages.length);

  return (
    <div>
      <button
        type="button"
        className="group relative block w-full overflow-hidden border border-black/10 bg-[var(--background)]"
        onClick={() => {
          setIdx(0);
          setOpen(true);
        }}
        aria-label="Open photo gallery"
      >
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={safeImages[0].src}
            alt={safeImages[0].alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition duration-700 group-hover:scale-[1.02]"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/45 px-4 py-3 text-xs text-white backdrop-blur">
          <span className="font-medium">View photos</span>
          <span className="text-white/80">{safeImages.length} images</span>
        </div>
      </button>

      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {safeImages.slice(1, 4).map((img, i) => (
          <button
            key={img.src}
            type="button"
            className="group relative aspect-[16/11] overflow-hidden border border-black/10 bg-[var(--background)]"
            onClick={() => {
              setIdx(i + 1);
              setOpen(true);
            }}
            aria-label={`Open photo ${i + 2}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {open && current ? (
        <div
          className="fixed inset-0 z-[60] bg-black/80"
          role="dialog"
          aria-modal="true"
          onMouseDown={() => setOpen(false)}
        >
          <div className="absolute inset-0" onMouseDown={(e) => e.stopPropagation()}>
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-4 text-xs text-white/80">
              <div className="backdrop-blur">
                Photo <span className="text-white">{idx + 1}</span> / {safeImages.length}
              </div>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center border border-white/15 bg-black/35 text-white hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            <div
              className="absolute inset-0 grid place-items-center px-4 py-16 select-none"
              onTouchStart={(e) => (startX.current = e.touches[0]?.clientX ?? null)}
              onTouchEnd={(e) => {
                const end = e.changedTouches[0]?.clientX ?? null;
                const start = startX.current;
                startX.current = null;
                if (start == null || end == null) return;
                const dx = end - start;
                if (Math.abs(dx) < 40) return;
                if (dx > 0) go(idx - 1);
                else go(idx + 1);
              }}
            >
              <div className="relative h-[78vh] w-full max-w-6xl">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                className={cn(
                  "absolute left-4 top-1/2 -translate-y-1/2 border border-white/15 bg-black/35 p-3 text-white",
                  "hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                )}
                onClick={() => go(idx - 1)}
                aria-label="Previous image"
              >
                <Chevron dir="l" />
              </button>
              <button
                type="button"
                className={cn(
                  "absolute right-4 top-1/2 -translate-y-1/2 border border-white/15 bg-black/35 p-3 text-white",
                  "hover:bg-black/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                )}
                onClick={() => go(idx + 1)}
                aria-label="Next image"
              >
                <Chevron dir="r" />
              </button>
            </div>

            <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
              <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto border border-white/10 bg-black/25 p-2 backdrop-blur">
                {safeImages.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    className={cn(
                      "relative h-14 w-20 shrink-0 border border-white/10",
                      i === idx ? "ring-2 ring-white/40" : "opacity-80 hover:opacity-100"
                    )}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to photo ${i + 1}`}
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="120px" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

