import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="mt-24 bg-[color:var(--ui2)]">
      <Container className="max-w-[1200px] py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-lg font-semibold text-[color:var(--text)]">Khoa Rentals</div>
            <div className="mt-3 max-w-md text-[17px] leading-[1.4] text-[color:var(--text2)]">
              Monthly rentals across Da Nang—beach, city, and quiet neighborhoods. Message on WhatsApp for availability.
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <div className="text-sm font-semibold text-[color:var(--text)]">Main pages</div>
              <div className="mt-4 grid gap-3 text-[17px] text-[color:var(--text2)]">
                <Link href="/" className="u-motion hover:text-[color:var(--text)]">
                  Home
                </Link>
                <Link href="/listings" className="u-motion hover:text-[color:var(--text)]">
                  Listings
                </Link>
                <Link href="/blog" className="u-motion hover:text-[color:var(--text)]">
                  Blog
                </Link>
                <Link href="/about" className="u-motion hover:text-[color:var(--text)]">
                  About
                </Link>
                <Link href="/contact" className="u-motion hover:text-[color:var(--text)]">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-[color:var(--text)]">Other pages</div>
              <div className="mt-4 grid gap-3 text-[17px] text-[color:var(--text2)]">
                <Link href="/privacy-policy" className="u-motion hover:text-[color:var(--text)]">
                  Privacy policy
                </Link>
                <Link href="/404" className="u-motion hover:text-[color:var(--text)]">
                  404
                </Link>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-[color:var(--text)]">Follow</div>
              <div className="mt-4 grid gap-3 text-[17px] text-[color:var(--text2)]">
                <a className="u-motion hover:text-[color:var(--text)]" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <a className="u-motion hover:text-[color:var(--text)]" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
                <a className="u-motion hover:text-[color:var(--text)]" href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[color:var(--ui3)] pt-8 text-[14px] text-[color:var(--text2)] sm:flex-row sm:items-center sm:justify-between">
          <div>Copyright © {new Date().getFullYear()} All rights reserved</div>
          <Link href="/privacy-policy" className="u-motion hover:text-[color:var(--text)]">
            Privacy policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}

