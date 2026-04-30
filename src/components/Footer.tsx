import { Container } from "@/components/Container";
import Image from "next/image";
import { FooterLink } from "@/components/FooterLink";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden rounded-t-[24px] bg-[color:var(--accent)]">
      {/* clouds */}
      {[
        { left: "-120px", top: "380px", opacity: 0.7 },
        { right: "-170px", top: "396px", opacity: 0.7 },
        { right: "-170px", top: "453px", opacity: 1 },
        { left: "-390px", top: "448px", opacity: 1 },
        { left: "50%", top: "429px", opacity: 1, center: true },
      ].map((p, idx) => (
        <div
          key={idx}
          className="pointer-events-none absolute h-[500px] w-[771px]"
          style={{
            ...(p.center ? { left: "54%", transform: "translateX(-50%)" } : {}),
            ...(p.left ? { left: p.left } : {}),
            ...(p.right ? { right: p.right } : {}),
            top: p.top,
            opacity: p.opacity,
          }}
        >
          <Image
            src="https://framerusercontent.com/images/j9okKxti4thZpb9o9HyabG9PsA.png"
            alt=""
            fill
            sizes="771px"
            className="object-cover"
          />
        </div>
      ))}

      <Container className="relative max-w-[1300px] px-10 pb-12 pt-[100px]">
        <div className="grid gap-[42px] lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-[22px] font-medium text-white">Khoa Rentals</div>
            <div className="mt-4 max-w-[380px] text-[17px] leading-[1.4] text-white/90">
              Rentals in Da Nang inspired by the Realest template. Message on WhatsApp for availability.
            </div>
          </div>

          <div className="grid gap-[60px] sm:grid-cols-3 lg:col-span-7">
            <div className="grid gap-3">
              <div className="text-[17px] font-medium text-white">Main pages</div>
              <FooterLink href="/#hero" label="Home" />
              <FooterLink href="/listings#nav" label="Listings" />
              <FooterLink href="/blog#nav" label="Blog" />
              <FooterLink href="/about#nav" label="About" />
              <FooterLink href="/contact#hero" label="Contact" />
            </div>
            <div className="grid gap-3">
              <div className="text-[17px] font-medium text-white">Other pages</div>
              <FooterLink href="/listings/my-khe-boutique-studio#nav" label="Listing" />
              <FooterLink href="/blog/the-right-property#nav" label="Blog" />
              <FooterLink href="/agents/khoa#nav" label="Agent" />
              <FooterLink href="/privacy-policy#nav" label="Privacy policy" />
              <FooterLink href="/404#nav" label="404" />
            </div>
            <div className="grid gap-3">
              <div className="text-[17px] font-medium text-white">Follow us</div>
              <FooterLink href="https://linkedin.com" label="Linkedin" external />
              <FooterLink href="https://youtube.com" label="Youtube" external />
              <FooterLink href="https://x.com" label="X" external />
              <FooterLink href="https://facebook.com" label="Meta" external />
              <FooterLink href="https://tiktok.com" label="Tiktok" external />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/25 pt-6 text-[17px] text-white/90 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span>Copyright © All rights reserved</span>
            <span className="inline-flex h-6 w-6 items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                <circle cx="12" cy="12" r="2.2" />
              </svg>
            </span>
            <FooterLink href="/privacy-policy#nav" label="Privacy policy" />
          </div>
          <div className="flex items-center gap-2">
            <span>Made by</span>
            <FooterLink href="https://www.framer.com/@amar-kzr/" label="Amar KZR" external />
          </div>
        </div>
      </Container>
    </footer>
  );
}

