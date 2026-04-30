import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ListingsExplorer } from "@/components/ListingsExplorer";
import { Suspense } from "react";

export default function ListingsPage() {
  return (
    <Container className="max-w-[1300px] min-w-0 px-5 py-16 sm:px-10 sm:py-24">
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <div className="inline-flex rounded-full border border-[color:var(--ui3)] bg-white px-4 py-2 text-[14px] font-medium text-[color:var(--text2)]">
            Listings
          </div>
          <h1 className="mt-6 max-w-[580px] break-words text-[34px] font-medium leading-[1.1] text-[color:var(--text)] sm:text-[42px] md:text-[48px]">
            Find homes that perfectly match your lifestyle
          </h1>
        </div>
        <Button href="/" variant="secondary" className="h-11 w-full shrink-0 whitespace-nowrap sm:w-auto">
          Back home
        </Button>
      </div>

      <div id="results" className="mt-10 min-w-0 max-w-full sm:mt-12">
        <Suspense fallback={null}>
          <ListingsExplorer />
        </Suspense>
      </div>
    </Container>
  );
}

