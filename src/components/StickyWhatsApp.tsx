"use client";

import { WHATSAPP_PHONE_E164, whatsappSendUrl } from "@/content/contact";

export function StickyWhatsApp() {
  const href = whatsappSendUrl("Hi Khoa Rentals — I’d like to check availability.");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 top-1/2 z-[1000] -translate-y-1/2 u-border bg-[color:var(--surface)] px-3 py-2 text-xs font-semibold tracking-wide text-[color:var(--fg)] hover:bg-[color:var(--surface2)]"
      aria-label={`WhatsApp ${WHATSAPP_PHONE_E164}`}
    >
      WhatsApp
    </a>
  );
}

