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
    <div
      className={cn(
        "group overflow-hidden rounded-[var(--radius)] border border-[color:var(--ui3)] bg-[color:var(--ui2)] u-motion hover:bg-white",
        className
      )}
    >
      <button
        type="button"
        className="u-motion flex w-full items-center justify-between gap-6 p-4 text-left"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-[18px] font-medium leading-[1.2] text-[color:var(--text)]">{title}</span>
        <span className="u-motion shrink-0 rounded-full bg-[color:var(--ui3)] p-2 text-[color:var(--text)]" aria-hidden>
          <svg
            viewBox="0 0 24 24"
            className={cn("u-motion h-5 w-5", open ? "rotate-180" : "rotate-0")}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 [transition-timing-function:var(--ease-out)]",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="u-motion px-4 pb-4 text-[17px] leading-[1.4] text-[color:var(--text2)] group-hover:bg-white">{children}</div>
        </div>
      </div>
    </div>
  );
}

