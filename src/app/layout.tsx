import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { BrandedLoader } from "@/components/BrandedLoader";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });

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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <BrandedLoader />
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <SmoothScroll>
          <main className="min-w-0 flex-1">{children}</main>
        </SmoothScroll>
        <WhatsAppFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
