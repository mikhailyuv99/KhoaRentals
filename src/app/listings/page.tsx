import Link from "next/link";
import { Container } from "@/components/Container";
import { ListingsExplorer } from "@/components/ListingsExplorer";
import { Suspense } from "react";

export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-16">
      <div className="border-b border-white/10 px-5 py-4 sm:px-10">
        <Link
          href="/"
          className="text-[0.7rem] uppercase tracking-[2px] text-[color:var(--luxe-gold)] transition-colors hover:text-[color:var(--luxe-gold-light)]"
        >
          ← Back to home
        </Link>
      </div>
      <Container className="max-w-[1300px] min-w-0 px-5 py-12 sm:px-10 sm:py-16">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <div className="inline-flex rounded-full border border-[color:var(--luxe-gold)]/35 bg-white/5 px-4 py-2 text-[14px] font-medium text-white/80">
              Listings
            </div>
            <h1 className="mt-6 max-w-[580px] break-words font-display text-[34px] font-normal leading-[1.1] text-white sm:text-[42px] md:text-[48px]">
              Find homes that perfectly match your lifestyle
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex h-11 w-full shrink-0 items-center justify-center whitespace-nowrap rounded-xl border border-[color:var(--luxe-gold)] px-6 text-[0.75rem] font-medium uppercase tracking-[2px] text-[color:var(--luxe-gold)] transition-colors hover:bg-[color:var(--luxe-gold)] hover:text-[color:var(--luxe-dark)] sm:w-auto"
          >
            Back home
          </Link>
        </div>

        <div id="results" className="mt-10 min-w-0 max-w-full sm:mt-12">
          <Suspense fallback={null}>
            <ListingsExplorer />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}
