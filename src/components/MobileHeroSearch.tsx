"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function MobileHeroSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initial = searchParams.get("q") || "";
  const [value, setValue] = useState(initial);

  useEffect(() => {
    setValue(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial]);

  const targetPath = useMemo(() => {
    if (pathname === "/listings") return "/listings";
    return "/";
  }, [pathname]);

  const apply = (scroll: boolean) => {
    const v = value.trim();
    const params = new URLSearchParams(searchParams.toString());
    if (v) params.set("q", v);
    else params.delete("q");
    const qs = params.toString();
    const href = qs ? `${targetPath}?${qs}` : targetPath;
    router.push(href, { scroll: false });
    if (scroll) window.setTimeout(() => document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" }), 60);
  };

  // Live update query param while typing (no scroll).
  useEffect(() => {
    const t = window.setTimeout(() => apply(false), 150);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="md:hidden">
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/75"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            e.preventDefault();
            apply(true);
          }}
          placeholder="Search: studio, 2 bedrooms, Son Tra..."
          className="u-motion w-full rounded-full border border-white/20 bg-black/20 px-10 py-3 text-[15px] text-white placeholder:text-white/65 backdrop-blur focus:border-white/40"
        />
        {value ? (
          <button
            type="button"
            onClick={() => setValue("")}
            aria-label="Clear search"
            className="u-motion absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        ) : null}
      </div>
    </div>
  );
}

