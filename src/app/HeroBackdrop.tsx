"use client";

import { useEffect, useMemo, useState } from "react";

export function HeroBackdrop({ src, alt }: { src: string; alt: string }) {
  const [y, setY] = useState(0);
  const fallbacks = useMemo(
    () => [
      src,
      "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=2600&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2600&q=80",
    ],
    [src]
  );
  const [i, setI] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setY(Math.min(26, window.scrollY * 0.05));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        backgroundImage: `url(${fallbacks[i]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${y}px) scale(1.06)`,
          willChange: "transform",
        }}
      >
        <img
          src={fallbacks[i]}
          alt={alt}
          loading="eager"
          className="h-full w-full object-cover"
          onError={() => setI((p) => Math.min(p + 1, fallbacks.length - 1))}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,239,230,0.68),rgba(244,239,230,0.58),rgba(244,239,230,0.86))]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_20%,rgba(0,0,0,0.16),transparent_60%),radial-gradient(900px_circle_at_85%_55%,rgba(0,0,0,0.10),transparent_60%)]" />
    </div>
  );
}

