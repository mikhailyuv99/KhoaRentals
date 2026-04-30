import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { BrandedLoader } from "@/components/BrandedLoader";

const manrope = Manrope({ variable: "--font-body", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Khoa Rentals — Monthly Rentals in Da Nang",
  description:
    "Monthly apartments, houses, and villas across Da Nang. Browse photos, pricing in USD and VND, interactive maps, and inquire on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BrandedLoader />
        <Header />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
        <WhatsAppFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
