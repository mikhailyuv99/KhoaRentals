import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });

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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
