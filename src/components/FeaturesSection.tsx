"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { TagPill } from "@/components/TagPill";

type Feature = { title: string; body: string; image: string };

export function FeaturesSection() {
  const items = useMemo<Feature[]>(
    () => [
      {
        title: "Shortlisting",
        body: "We narrow options by area, budget, and move-in timeline—so you only see listings that make sense.",
        image: "https://framerusercontent.com/images/mzG9mY1hpjdpPHRe6vLVQvuzks.jpg",
      },
      {
        title: "Availability checks",
        body: "We confirm what’s actually available right now and suggest close alternatives if needed.",
        image: "https://framerusercontent.com/images/FkhjX26V6r6w2kErRFNozTE1oY.jpg",
      },
      {
        title: "Viewings",
        body: "We schedule viewings efficiently—clustered by location and time to avoid wasted trips.",
        image: "https://framerusercontent.com/images/Uwbhg9JQk3rtWTXEywOZmi3W8vc.png",
      },
      {
        title: "Negotiation",
        body: "We help you confirm terms, deposits, and inclusions clearly before you commit.",
        image: "https://framerusercontent.com/images/oEE6UImbMYP4sS2e6InJtPHDaS0.png",
      },
      {
        title: "Move-in support",
        body: "Utilities, keys, and handover—handled with clear communication.",
        image: "https://framerusercontent.com/images/YEql8pCUZKpRBGSZmVsFSYItUqA.png",
      },
      {
        title: "After move-in",
        body: "We stay reachable for practical follow-ups and building coordination.",
        image: "https://framerusercontent.com/images/e4mBB5MGVE5ckmtmYMSzqUsx3c.jpg",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  return (
    <section className="overflow-hidden rounded-[24px] border-y border-[color:var(--ui3)] bg-[color:var(--ui2)] px-10 py-[100px]">
      <div className="mx-auto max-w-[1220px] text-center">
        <TagPill>Features</TagPill>
        <h2 className="mt-6 max-w-[580px] mx-auto text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">
          A smooth and stressfree journey
        </h2>
        <p className="mt-4 max-w-[400px] mx-auto text-[18px] leading-[1.2] text-[color:var(--text2)]">
          We handle every detail with care and expertise from beginning to end.
        </p>
      </div>

      <div className="mx-auto mt-[42px] grid max-w-[1220px] gap-[42px] lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="w-full">
            {items.map((f, idx) => {
              const open = idx === active;
              return (
                <button
                  key={f.title}
                  type="button"
                  onClick={() => setActive(idx)}
                  className="w-full border-b border-[color:var(--ui3)] py-6 text-left"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="text-[22px] font-medium leading-[1.1] text-[color:var(--text)]">{f.title}</div>
                    <span className="rounded-full bg-[color:var(--ui3)] p-2 text-[color:var(--text)]">
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 [transition-timing-function:var(--ease-out)] ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-4 pr-6 text-[17px] leading-[1.4] text-[color:var(--text2)]">{f.body}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative h-[620px] w-full">
            {items.map((f, idx) => (
              <div
                key={f.image}
                className="absolute inset-0 overflow-hidden rounded-[18px]"
                style={{ opacity: idx === active ? 1 : 0, transition: "opacity 320ms var(--ease-out)" }}
              >
                <Image src={f.image} alt={f.title} fill sizes="(max-width: 1024px) 92vw, 560px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

