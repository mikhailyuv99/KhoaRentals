import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { whatsappSendUrl } from "@/content/contact";
import { Reveal } from "@/components/Reveal";

export default function AboutPage() {
  return (
    <Container className="py-10 sm:py-14">
      <Reveal>
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">ABOUT</div>
          <h1 className="mt-3 font-display text-3xl">A simpler way to rent in Da Nang.</h1>
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
            Khoa Rentals helps you shortlist places that match your budget and lifestyle—beach routine, city convenience,
            or quieter neighborhoods. Availability changes fast, so the best next step is a WhatsApp message with your
            dates and budget.
          </p>

          <div className="mt-7 u-border bg-[color:var(--surface)] p-5 sm:p-6">
            <div className="text-xs font-semibold tracking-[0.26em] text-[color:var(--muted2)]">HOW IT WORKS</div>
            <ol className="mt-4 grid gap-3 text-sm text-[color:var(--muted)]">
              <li>
                <span className="font-semibold text-[color:var(--fg)]">1.</span> Browse listings and save a few favorites.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--fg)]">2.</span> Message on WhatsApp with budget + move-in date.
              </li>
              <li>
                <span className="font-semibold text-[color:var(--fg)]">3.</span> We schedule a viewing and confirm terms.
              </li>
            </ol>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/properties" variant="primary">
              View properties
            </Button>
            <Button
              href={whatsappSendUrl("Hi Khoa Rentals — my budget is $____/month. I want to move in around _____.")}
              variant="secondary"
            >
              WhatsApp inquiry
            </Button>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}

