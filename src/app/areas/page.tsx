import Link from "next/link";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

const areas = [
  {
    name: "Mỹ Khê",
    vibe: "Beach routine",
    copy: "Morning swim, cafés, gyms—walkable beach life.",
    bestFor: ["Studios", "1–2BR apartments", "Short stays sometimes"],
  },
  {
    name: "An Thượng",
    vibe: "Expat-friendly",
    copy: "Restaurants, co-working, and a laid-back neighborhood feel.",
    bestFor: ["Townhouses", "2–3BR", "Families / shared living"],
  },
  {
    name: "Hải Châu",
    vibe: "City center",
    copy: "Most convenient for shopping, offices, and city access.",
    bestFor: ["2BR apartments", "Longer leases", "Practical budgets"],
  },
];

export default function AreasPage() {
  return (
    <Container className="py-10 sm:py-14">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">AREAS</div>
          <h1 className="mt-3 font-display text-3xl">Choose the right neighborhood.</h1>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
            A quick guide to the most common areas renters ask for. If you’re unsure, browse listings and message your
            budget + lifestyle (beach vs city).
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {areas.map((a, idx) => (
          <Reveal key={a.name} delayMs={idx * 70}>
            <div className="u-border bg-[color:var(--surface)] p-5 sm:p-6">
              <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">{a.vibe}</div>
              <h2 className="mt-3 font-display text-2xl">{a.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)]">{a.copy}</p>
              <div className="mt-5 text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">BEST FOR</div>
              <ul className="mt-3 grid gap-2 text-sm text-[color:var(--muted)]">
                {a.bestFor.map((b) => (
                  <li key={b} className="u-border2 bg-[color:var(--surface2)] px-3 py-2">
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="/properties" className="text-sm text-[color:var(--muted)] hover:text-[color:var(--fg)]">
                  Browse listings →
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}

