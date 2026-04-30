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

export function FiltersBar() {
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
      className="mt-8 grid gap-3 u-border bg-[var(--surface)] p-4 backdrop-blur md:grid-cols-12 md:items-end"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(buildUrl(state));
      }}
    >
      <label className="grid gap-2 md:col-span-6">
        <span className="text-xs font-medium text-[color:var(--muted2)]">Search</span>
        <input
          value={state.q}
          onChange={(e) => setState((p) => ({ ...p, q: e.target.value }))}
          placeholder='e.g. "studio", "My Khe", "Son Tra", "2 bedroom"'
          className="h-11 u-border2 bg-[var(--bg)] px-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted2)] outline-none"
        />
      </label>

      <label className="grid gap-2 md:col-span-2">
        <span className="text-xs font-medium text-[color:var(--muted2)]">Bedrooms</span>
        <select
          value={state.beds}
          onChange={(e) => setState((p) => ({ ...p, beds: e.target.value }))}
          className="h-11 u-border2 bg-[var(--bg)] px-2 text-sm text-[color:var(--fg)] outline-none"
        >
          <option value="">Any</option>
          <option value="0">Studio</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3+</option>
        </select>
      </label>

      <label className="grid gap-2 md:col-span-2">
        <span className="text-xs font-medium text-[color:var(--muted2)]">Min / month (USD)</span>
        <input
          value={state.min}
          onChange={(e) => setState((p) => ({ ...p, min: e.target.value }))}
          inputMode="numeric"
          placeholder="0"
          className="h-11 u-border2 bg-[var(--bg)] px-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted2)] outline-none"
        />
      </label>

      <label className="grid gap-2 md:col-span-2">
        <span className="text-xs font-medium text-[color:var(--muted2)]">Max / month (USD)</span>
        <input
          value={state.max}
          onChange={(e) => setState((p) => ({ ...p, max: e.target.value }))}
          inputMode="numeric"
          placeholder="500"
          className="h-11 u-border2 bg-[var(--bg)] px-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted2)] outline-none"
        />
      </label>

      <div className="md:col-span-12 flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-[color:var(--muted2)]">
          Tip: try <span className="font-medium">“studio”</span>,{" "}
          <span className="font-medium">“Son Trà”</span>, or{" "}
          <span className="font-medium">“2 bed”</span>.
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="h-10 u-border2 bg-[var(--bg)] px-4 text-sm text-[color:var(--fg)] hover:bg-[color:var(--surface2)]"
            onClick={() => {
              setState({ q: "", beds: "", min: "", max: "" });
              router.push("/properties");
            }}
          >
            Clear
          </button>
          <button
            type="submit"
            className="h-10 u-border bg-[var(--ink)] px-4 text-sm font-semibold text-[var(--bg)] hover:bg-[var(--ink)]/92"
          >
            Apply
          </button>
        </div>
      </div>
    </form>
  );
}

