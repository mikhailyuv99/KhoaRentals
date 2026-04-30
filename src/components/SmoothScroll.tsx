"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      // close to Framer SmoothScroll "intensity"
      lerp: 0.065,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // Expose for temporary scroll locks (e.g. expanded listings).
    (window as unknown as { __khoaLenis?: Lenis }).__khoaLenis = lenis;

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      (window as unknown as { __khoaLenis?: Lenis }).__khoaLenis = undefined;
    };
  }, []);

  return <>{children}</>;
}

