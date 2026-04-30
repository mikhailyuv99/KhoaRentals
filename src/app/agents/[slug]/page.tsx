import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { whatsappSendUrl } from "@/content/contact";

export default async function AgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <Container className="max-w-[1200px] px-10 py-24">
      <Link href="/" className="u-motion text-[17px] text-[color:var(--text2)] hover:text-[color:var(--text)]">
        ← Back home
      </Link>

      <div className="mt-10 rounded-[var(--radius)] border border-[color:var(--ui3)] bg-[color:var(--ui2)] p-10">
        <div className="inline-flex rounded-full border border-[color:var(--ui3)] bg-white px-4 py-2 text-[14px] font-medium text-[color:var(--text2)]">
          Agent
        </div>
        <h1 className="mt-6 text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">
          {slug === "khoa" ? "Khoa" : slug.replace(/-/g, " ")}
        </h1>
        <p className="mt-4 max-w-[620px] text-[18px] leading-[1.4] text-[color:var(--text2)]">
          Placeholder agent profile. We’ll replicate the Realest agents page once you send screenshots of the agent
          layout.
        </p>
        <div className="mt-8">
          <Button href={whatsappSendUrl("Hi Khoa Rentals — I’d like help finding a monthly rental in Da Nang.")} variant="primary">
            Message on WhatsApp
          </Button>
        </div>
      </div>
    </Container>
  );
}

