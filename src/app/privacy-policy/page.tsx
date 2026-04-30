import { Container } from "@/components/Container";

export default function PrivacyPolicy() {
  return (
    <Container className="max-w-[900px] px-10 py-24">
      <div className="inline-flex rounded-full border border-[color:var(--ui3)] bg-white px-4 py-2 text-[14px] font-medium text-[color:var(--text2)]">
        Privacy policy
      </div>
      <h1 className="mt-6 text-[48px] font-medium leading-[1.1] text-[color:var(--text)]">Privacy policy</h1>
      <p className="mt-6 text-[18px] leading-[1.6] text-[color:var(--text2)]">
        Placeholder policy. Add your real company details and we’ll format it to match the Realest template exactly.
      </p>
    </Container>
  );
}

