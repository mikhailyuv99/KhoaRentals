"use client";

import { useMemo } from "react";

export function Ticker({
  direction = "left",
  height = 223,
  gap = 16,
  speed = 20,
  children,
}: {
  direction?: "left" | "right";
  height?: number;
  gap?: number;
  speed?: number; // seconds
  children: React.ReactNode;
}) {
  const anim = useMemo(() => {
    const name = direction === "left" ? "ticker-left" : "ticker-right";
    return { animation: `${name} ${speed}s linear infinite` } as const;
  }, [direction, speed]);

  return (
    <div className="w-full overflow-hidden group" style={{ height }}>
      <div className="flex w-max items-stretch" style={{ gap }}>
        <div className="flex w-max group-hover:[animation-play-state:paused]" style={{ gap, ...anim }}>
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

