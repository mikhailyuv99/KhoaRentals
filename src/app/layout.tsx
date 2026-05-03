import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { BrandedLoader } from "@/components/BrandedLoader";

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Khoa Rentals | Da Nang Monthly Rentals for Foreigners",
  description:
    "Da Nang monthly rentals for foreigners — studios, apartments, and houses. Search by area, browse photos, maps, and message Khoa on WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <BrandedLoader />
        <SmoothScroll>
          <main className="min-w-0 flex-1">{children}</main>
        </SmoothScroll>
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
