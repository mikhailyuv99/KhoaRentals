"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroBackdrop({ src, alt }: { src: string; alt: string }) {
  const [y, setY] = useState(0);

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
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${y}px) scale(1.06)`,
          willChange: "transform",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,239,230,0.68),rgba(244,239,230,0.58),rgba(244,239,230,0.86))]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_10%_20%,rgba(0,0,0,0.16),transparent_60%),radial-gradient(900px_circle_at_85%_55%,rgba(0,0,0,0.10),transparent_60%)]" />
    </div>
  );
}

