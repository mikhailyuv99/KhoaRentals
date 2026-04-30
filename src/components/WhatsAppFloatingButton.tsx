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
      className="fixed right-4 top-1/2 z-[2147483647] -translate-y-1/2 u-border bg-[color:var(--surface)] px-3 py-2 text-xs font-semibold tracking-wide text-[color:var(--fg)] hover:bg-[color:var(--surface2)] pointer-events-auto"
      aria-label="WhatsApp"
    >
      WhatsApp
    </a>
  );
}

