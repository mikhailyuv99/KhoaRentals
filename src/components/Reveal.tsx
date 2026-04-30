"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export function Reveal({
  children,
  className,
  delayMs = 0,
  repeat = true,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  repeat?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) setShown(true);
        else if (repeat) setShown(false);
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [repeat]);

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform",
        shown ? "animate-reveal" : "opacity-0 translate-y-2",
        className
      )}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

