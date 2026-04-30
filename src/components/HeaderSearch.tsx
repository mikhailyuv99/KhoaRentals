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
        className="h-10 w-full u-border2 bg-[var(--bg)] px-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted2)] outline-none"
      />
      <select
        value={state.beds}
        onChange={(e) => setState((p) => ({ ...p, beds: e.target.value }))}
        className="h-10 w-[120px] u-border2 bg-[var(--bg)] px-2 text-sm text-[color:var(--fg)] outline-none"
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
        className="h-10 w-[92px] u-border2 bg-[var(--bg)] px-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted2)] outline-none"
      />
      <input
        value={state.max}
        onChange={(e) => setState((p) => ({ ...p, max: e.target.value }))}
        inputMode="numeric"
        placeholder="Max $/mo"
        className="h-10 w-[92px] u-border2 bg-[var(--bg)] px-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted2)] outline-none"
      />
      <button
        type="submit"
        className="h-10 whitespace-nowrap u-border bg-[var(--ink)] px-4 text-sm font-semibold text-[var(--bg)] hover:bg-[var(--ink)]/92"
      >
        Search
      </button>
    </form>
  );
}

