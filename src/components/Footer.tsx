import { Container } from "@/components/Container";
import { FooterLink } from "@/components/FooterLink";
import { WHATSAPP_PHONE_E164 } from "@/content/contact";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[color:var(--ui3)] bg-white">
      <Container className="max-w-[1300px] px-6 py-8 sm:px-10 sm:py-14">
        <div className="grid gap-4 sm:gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="font-display text-[22px] tracking-tight text-[color:var(--text)]">Khoa Rentals</div>
            <div className="mt-3 max-w-[420px] text-[16px] leading-[1.6] text-[color:var(--text2)]">
              Curated monthly rentals in Da Nang — clear communication, fast viewings, and honest recommendations.
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3 lg:gap-10">
            <div className="grid gap-2">
              <div className="text-[15px] font-medium text-[color:var(--text)]">Explore</div>
              <FooterLink href="/#hero" label="Home" />
              <FooterLink href="/#listings" label="Listings" />
              <FooterLink href="/contact#hero" label="Contact" />
            </div>

            <div className="grid gap-2">
              <div className="text-[15px] font-medium text-[color:var(--text)]">Contact</div>
              <FooterLink href={`https://wa.me/${WHATSAPP_PHONE_E164}`} label="WhatsApp" external />
              <FooterLink href="/privacy-policy#nav" label="Privacy policy" />
            </div>

            <div className="grid gap-2">
              <div className="text-[15px] font-medium text-[color:var(--text)]">Location</div>
              <div className="text-[16px] leading-[1.6] text-[color:var(--text2)]">Da Nang, Vietnam</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-[color:var(--ui3)] pt-5 text-[14px] text-[color:var(--text2)] sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Khoa Rentals. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <FooterLink href="/privacy-policy#nav" label="Privacy policy" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

