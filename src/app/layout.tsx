import { Fraunces, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
