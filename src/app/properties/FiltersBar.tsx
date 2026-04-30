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
      className="mt-8 grid gap-3 border border-black/10 bg-[var(--background)] p-4 md:grid-cols-12 md:items-end"
      onSubmit={(e) => {
        e.preventDefault();
        router.push(buildUrl(state));
      }}
    >
      <label className="grid gap-2 md:col-span-6">
        <span className="text-xs font-medium text-black/55">Search</span>
        <input
          value={state.q}
          onChange={(e) => setState((p) => ({ ...p, q: e.target.value }))}
          placeholder='e.g. "studio", "My Khe", "Son Tra", "2 bedroom"'
          className="h-11 border border-black/15 bg-[var(--background)] px-3 text-sm outline-none focus:border-black/30"
        />
      </label>

      <label className="grid gap-2 md:col-span-2">
        <span className="text-xs font-medium text-black/55">Bedrooms</span>
        <select
          value={state.beds}
          onChange={(e) => setState((p) => ({ ...p, beds: e.target.value }))}
          className="h-11 border border-black/15 bg-[var(--background)] px-2 text-sm outline-none focus:border-black/30"
        >
          <option value="">Any</option>
          <option value="0">Studio</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3+</option>
        </select>
      </label>

      <label className="grid gap-2 md:col-span-2">
        <span className="text-xs font-medium text-black/55">Min / month (USD)</span>
        <input
          value={state.min}
          onChange={(e) => setState((p) => ({ ...p, min: e.target.value }))}
          inputMode="numeric"
          placeholder="0"
          className="h-11 border border-black/15 bg-[var(--background)] px-3 text-sm outline-none focus:border-black/30"
        />
      </label>

      <label className="grid gap-2 md:col-span-2">
        <span className="text-xs font-medium text-black/55">Max / month (USD)</span>
        <input
          value={state.max}
          onChange={(e) => setState((p) => ({ ...p, max: e.target.value }))}
          inputMode="numeric"
          placeholder="500"
          className="h-11 border border-black/15 bg-[var(--background)] px-3 text-sm outline-none focus:border-black/30"
        />
      </label>

      <div className="md:col-span-12 flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-black/50">
          Tip: try <span className="font-medium">“studio”</span>,{" "}
          <span className="font-medium">“Son Trà”</span>, or{" "}
          <span className="font-medium">“2 bed”</span>.
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="h-10 border border-black/15 px-4 text-sm hover:bg-black/5"
            onClick={() => {
              setState({ q: "", beds: "", min: "", max: "" });
              router.push("/properties");
            }}
          >
            Clear
          </button>
          <button
            type="submit"
            className="h-10 border border-black bg-black px-4 text-sm font-medium text-[var(--background)] hover:bg-black/90"
          >
            Apply
          </button>
        </div>
      </div>
    </form>
  );
}

