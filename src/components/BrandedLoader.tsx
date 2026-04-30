"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function BrandedLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Ensure loader shows at least briefly to feel intentional.
    const minMs = 650;
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minMs - elapsed);
      window.setTimeout(() => {
        document.documentElement.dataset.loaded = "true";
        setDone(true);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => window.removeEventListener("load", finish);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-[80] grid place-items-center bg-white transition-opacity duration-500 [transition-timing-function:var(--ease-out)]",
        done ? "opacity-0" : "opacity-100"
      )}
      aria-hidden={done}
    >
      <div className="pointer-events-none text-center">
        <div className="font-display text-[26px] tracking-tight text-[color:var(--text)]">Khoa Rentals</div>
        <div className="mt-2 text-[14px] text-[color:var(--text2)]">Monthly rentals in Da Nang</div>
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)]" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)] [animation-delay:120ms]" />
          <span className="h-2 w-2 animate-pulse rounded-full bg-[color:var(--accent)] [animation-delay:240ms]" />
        </div>
      </div>
    </div>
  );
}

