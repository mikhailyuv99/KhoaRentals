"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  className,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={cn("u-border bg-[color:var(--surface)]", className)}>
      <button
        type="button"
        className="u-motion flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[color:var(--surface2)]"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-display text-lg">{title}</span>
        <span
          className={cn(
            "u-motion h-6 w-6 shrink-0 border border-[color:var(--border)] text-[color:var(--muted)]",
            open ? "rotate-45" : "rotate-0"
          )}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 [transition-timing-function:var(--ease-out)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-sm leading-relaxed text-[color:var(--muted)]">{children}</div>
        </div>
      </div>
    </div>
  );
}

