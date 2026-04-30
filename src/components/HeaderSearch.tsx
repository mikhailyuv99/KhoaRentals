"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type State = {
  q: string;
  beds: string;
  min: string;
  max: string;
};

function buildUrl(s: State) {
  const params = new URLSearchParams();
  if (s.q.trim()) params.set("q", s.q.trim());
  if (s.beds) params.set("beds", s.beds);
  if (s.min) params.set("min", s.min);
  if (s.max) params.set("max", s.max);
  const qs = params.toString();
  return qs ? `/properties?${qs}` : "/properties";
}

export function HeaderSearch() {
  const router = useRouter();
  const sp = useSearchParams();

  const initial = useMemo<State>(
    () => ({
      q: sp.get("q") ?? "",
      beds: sp.get("beds") ?? "",
      min: sp.get("min") ?? "",
      max: sp.get("max") ?? "",
    }),
    [sp]
  );

  const [state, setState] = useState<State>(initial);

  return (
    <form
      className="hidden w-full max-w-[680px] items-center gap-2 md:flex"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(buildUrl(state));
      }}
    >
      <input
        value={state.q}
        onChange={(e) => setState((p) => ({ ...p, q: e.target.value }))}
        placeholder='Search: "studio", "Son Tra", "2 bedroom", "An Thuong"...'
        className="h-10 w-full border border-black/15 bg-[var(--background)] px-3 text-sm text-[var(--foreground)] placeholder:text-black/40 outline-none focus:border-black/30"
      />
      <select
        value={state.beds}
        onChange={(e) => setState((p) => ({ ...p, beds: e.target.value }))}
        className="h-10 w-[120px] border border-black/15 bg-[var(--background)] px-2 text-sm text-[var(--foreground)] outline-none focus:border-black/30"
        aria-label="Bedrooms"
      >
        <option value="">Beds</option>
        <option value="0">Studio</option>
        <option value="1">1 bed</option>
        <option value="2">2 bed</option>
        <option value="3">3+ bed</option>
      </select>
      <input
        value={state.min}
        onChange={(e) => setState((p) => ({ ...p, min: e.target.value }))}
        inputMode="numeric"
        placeholder="Min $/mo"
        className="h-10 w-[92px] border border-black/15 bg-[var(--background)] px-3 text-sm text-[var(--foreground)] placeholder:text-black/40 outline-none focus:border-black/30"
      />
      <input
        value={state.max}
        onChange={(e) => setState((p) => ({ ...p, max: e.target.value }))}
        inputMode="numeric"
        placeholder="Max $/mo"
        className="h-10 w-[92px] border border-black/15 bg-[var(--background)] px-3 text-sm text-[var(--foreground)] placeholder:text-black/40 outline-none focus:border-black/30"
      />
      <button
        type="submit"
        className="h-10 whitespace-nowrap border border-black bg-black px-4 text-sm font-medium text-[var(--background)] hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
      >
        Search
      </button>
    </form>
  );
}

