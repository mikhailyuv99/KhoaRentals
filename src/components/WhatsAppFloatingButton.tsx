"use client";

import { WHATSAPP_PHONE_E164 } from "@/content/contact";

export function WhatsAppFloatingButton() {
  const text = encodeURIComponent("Hi Khoa Rentals — I’d like to check availability.");
  const href = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_E164}&text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 top-1/2 z-[2147483647] -translate-y-1/2 border border-black/20 bg-[var(--background)] px-3 py-2 text-xs font-semibold tracking-wide text-[var(--foreground)] hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 pointer-events-auto max-sm:bottom-5 max-sm:top-auto max-sm:-translate-y-0"
      aria-label="WhatsApp"
    >
      WhatsApp
    </a>
  );
}

