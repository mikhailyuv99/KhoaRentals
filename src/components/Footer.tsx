import { Container } from "@/components/Container";
import { FooterLink } from "@/components/FooterLink";
import { WHATSAPP_PHONE_E164 } from "@/content/contact";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--ui3)] bg-white">
      <Container className="max-w-[1300px] px-5 py-6 sm:px-10 sm:py-14">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-display text-[22px] tracking-tight text-[color:var(--text)]">Khoa Rentals</div>
            <div className="mt-2 max-w-[420px] text-[15px] leading-[1.55] text-[color:var(--text2)] sm:mt-3 sm:text-[16px] sm:leading-[1.6]">
              Curated monthly rentals in Da Nang — clear communication, fast viewings, and honest recommendations.
            </div>
          </div>

          <div className="grid max-w-full min-w-0 grid-cols-1 gap-y-2 gap-x-6 sm:grid-cols-2 sm:gap-y-4 lg:col-span-7 lg:grid-cols-3 lg:gap-10">
            <div className="grid gap-0.5 sm:gap-2">
              <div className="text-[14px] font-medium text-[color:var(--text)] sm:text-[15px]">Explore</div>
              <FooterLink href="/#hero" label="Home" />
              <FooterLink href="/#listings" label="Listings" />
              <FooterLink href="/contact#hero" label="Contact" />
            </div>

            <div className="grid gap-0.5 sm:gap-2">
              <div className="text-[14px] font-medium text-[color:var(--text)] sm:text-[15px]">Contact</div>
              <FooterLink href={`https://wa.me/${WHATSAPP_PHONE_E164}`} label="WhatsApp" external />
              <FooterLink href="/privacy-policy#nav" label="Privacy policy" />
            </div>

            <div className="grid gap-0.5 sm:gap-2">
              <div className="text-[14px] font-medium text-[color:var(--text)] sm:text-[15px]">Location</div>
              <div className="text-[15px] leading-[1.5] text-[color:var(--text2)] sm:text-[16px] sm:leading-[1.6]">Da Nang, Vietnam</div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 border-t border-[color:var(--ui3)] pt-4 text-[13px] text-[color:var(--text2)] sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-5 sm:text-[14px]">
          <div>© {new Date().getFullYear()} Khoa Rentals. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <FooterLink href="/privacy-policy#nav" label="Privacy policy" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

