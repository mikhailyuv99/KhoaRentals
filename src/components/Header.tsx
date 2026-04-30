"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/#listings", label: "Listings" },
  { href: "/contact#hero", label: "Contact" },
];

export function Header() {
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
    // We keep the search on either the homepage or /listings.
    if (pathname === "/listings") return "/listings";
    return "/";
  }, [pathname]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      const v = value.trim();
      const params = new URLSearchParams(searchParams.toString());
      if (v) params.set("q", v);
      else params.delete("q");

      const qs = params.toString();
      const href = qs ? `${targetPath}?${qs}` : targetPath;
      // Keep focus/scroll stable while typing.
      router.replace(href, { scroll: false });
    }, 120);

    return () => window.clearTimeout(t);
  }, [router, searchParams, targetPath, value]);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur">
      <Container className="max-w-[1200px]">
        <div className="grid items-center gap-6 py-5 [grid-template-columns:auto_1fr_auto]">
          <Link href="/" className="font-display text-lg tracking-tight text-[color:var(--text)]">
            Khoa Rentals
          </Link>

          <div className="hidden justify-center md:flex">
            <div className="relative w-[min(520px,42vw)]">
              <svg
                viewBox="0 0 24 24"
                className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[color:var(--text2)]"
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
                placeholder="Search listings (studio, 2 bedrooms, My An...)"
                className="u-motion w-full rounded-full border border-[color:var(--ui3)] bg-white px-10 py-2.5 text-[15px] text-[color:var(--text)] placeholder:text-[color:var(--text2)] focus:border-[color:var(--text)] focus:ring-0"
              />
              {value ? (
                <button
                  type="button"
                  onClick={() => setValue("")}
                  aria-label="Clear search"
                  className="u-motion absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--ui2)] text-[color:var(--text)] hover:bg-white"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              ) : null}
            </div>
          </div>

          <nav className="hidden items-center justify-end gap-6 text-[17px] text-[color:var(--text2)] md:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className={cn("u-motion hover:text-[color:var(--text)]")}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

