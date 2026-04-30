"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";

export type FiltersValue = {
  q: string;
  beds: "any" | "studio" | "1" | "2" | "3plus";
  maxUsd: "any" | "800" | "1200" | "1800" | "2500";
  shortStay: "any" | "ok";
};

export function FiltersBar({
  initialValue,
  onChange,
  className,
}: {
  initialValue: FiltersValue;
  onChange: (value: FiltersValue) => void;
  className?: string;
}) {
  const [value, setValue] = useState<FiltersValue>(initialValue);

  const inputCls =
    "h-11 w-full u-border bg-[color:var(--surface2)] px-3 text-sm text-[color:var(--fg)] placeholder:text-[color:var(--muted2)] focus:bg-[color:var(--surface)]";

  const selectCls = cn(inputCls, "appearance-none");

  const bedsOptions = useMemo(
    () => [
      { id: "any", label: "Beds: Any" },
      { id: "studio", label: "Studio" },
      { id: "1", label: "1 bedroom" },
      { id: "2", label: "2 bedrooms" },
      { id: "3plus", label: "3+ bedrooms" },
    ],
    []
  );

  const priceOptions = useMemo(
    () => [
      { id: "any", label: "Max: Any" },
      { id: "800", label: "≤ $800" },
      { id: "1200", label: "≤ $1,200" },
      { id: "1800", label: "≤ $1,800" },
      { id: "2500", label: "≤ $2,500" },
    ],
    []
  );

  const stayOptions = useMemo(
    () => [
      { id: "any", label: "Stay: Any" },
      { id: "ok", label: "Short stay possible" },
    ],
    []
  );

  function patch(next: Partial<FiltersValue>) {
    const v = { ...value, ...next };
    setValue(v);
    onChange(v);
  }

  return (
    <div className={cn("grid gap-3 md:grid-cols-12", className)}>
      <div className="md:col-span-6">
        <input
          value={value.q}
          onChange={(e) => patch({ q: e.target.value })}
          placeholder='Search: "studio", "My Khe", "Hai Chau", "2BR"...'
          className={inputCls}
        />
      </div>
      <div className="md:col-span-2">
        <select value={value.beds} onChange={(e) => patch({ beds: e.target.value as FiltersValue["beds"] })} className={selectCls}>
          {bedsOptions.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <select
          value={value.maxUsd}
          onChange={(e) => patch({ maxUsd: e.target.value as FiltersValue["maxUsd"] })}
          className={selectCls}
        >
          {priceOptions.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <select
          value={value.shortStay}
          onChange={(e) => patch({ shortStay: e.target.value as FiltersValue["shortStay"] })}
          className={selectCls}
        >
          {stayOptions.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

