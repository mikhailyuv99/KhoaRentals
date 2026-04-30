import Link from "next/link";
import { Container } from "@/components/Container";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <Container className="max-w-[900px] px-10 py-24">
      <Link href="/blog" className="u-motion text-[17px] text-[color:var(--text2)] hover:text-[color:var(--text)]">
        ← Back to blog
      </Link>
      <h1 className="mt-10 text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">
        {slug.replace(/-/g, " ")}
      </h1>
      <p className="mt-6 text-[18px] leading-[1.6] text-[color:var(--text2)]">
        Placeholder article. When you’re ready, we’ll connect a CMS (or Google Sheets) and copy the Realest blog layout
        1:1.
      </p>
    </Container>
  );
}

