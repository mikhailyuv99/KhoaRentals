import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { whatsappSendUrl } from "@/content/contact";
import { AccordionItem } from "@/components/Accordion";

const faqs = [
  {
    q: "What’s included in the monthly price?",
    a: "It depends on the building. Some listings include Wi‑Fi or cleaning; utilities are often separate. Ask on WhatsApp and we’ll confirm the exact terms.",
  },
  {
    q: "How long are leases?",
    a: "Most are monthly-first (1–12 months). Some units accept shorter stays when available.",
  },
  {
    q: "Deposit & upfront payments?",
    a: "Commonly 1 month deposit. Terms vary by landlord/building; we’ll clarify before you commit.",
  },
  {
    q: "Can I schedule a viewing?",
    a: "Yes—send your budget + move-in date, and 2–3 properties you like.",
  },
];

export default function FAQPage() {
  return (
    <Container className="py-10 sm:py-14">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">FAQ</div>
          <h1 className="mt-3 font-display text-3xl">The basics, answered.</h1>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
            If you have a specific question, WhatsApp is fastest.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5">
        {faqs.map((f, idx) => (
          <Reveal key={f.q} delayMs={idx * 60}>
            <AccordionItem title={f.q} defaultOpen={idx === 0}>
              {f.a}
            </AccordionItem>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <Button href={whatsappSendUrl("Hi Khoa Rentals — I have a question about renting in Da Nang.")} variant="secondary">
          Ask on WhatsApp
        </Button>
      </div>
    </Container>
  );
}

