import { Container } from "@/components/Container";

export default function BlogIndex() {
  return (
    <Container className="max-w-[1200px] px-10 py-24">
      <div className="inline-flex rounded-full border border-[color:var(--ui3)] bg-white px-4 py-2 text-[14px] font-medium text-[color:var(--text2)]">
        Blog
      </div>
      <h1 className="mt-6 text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">Explore our latest blogs</h1>
      <p className="mt-4 max-w-[520px] text-[18px] leading-[1.4] text-[color:var(--text2)]">
        Coming soon. We’ll post Da Nang neighborhood guides and rental tips here.
      </p>
    </Container>
  );
}

