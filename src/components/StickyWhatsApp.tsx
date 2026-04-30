"use client";

import { whatsappSendUrl, WHATSAPP_PHONE_E164 } from "@/content/contact";

export function StickyWhatsApp() {
  const href = whatsappSendUrl("Hi Khoa Rentals — I’d like to check availability.");
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="u-motion fixed right-5 top-1/2 z-[2147483647] hidden -translate-y-1/2 rounded-full bg-[color:var(--accent)] px-4 py-2 text-[15px] font-medium text-white shadow-[0_12px_28px_rgba(120,175,207,0.35)] hover:brightness-[0.97] md:inline-flex"
        aria-label={`WhatsApp ${WHATSAPP_PHONE_E164}`}
      >
        WhatsApp
      </a>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="u-motion fixed bottom-5 right-5 z-[2147483647] inline-flex rounded-full bg-[color:var(--accent)] px-4 py-3 text-[15px] font-medium text-white shadow-[0_12px_28px_rgba(120,175,207,0.35)] hover:brightness-[0.97] md:hidden"
        aria-label={`WhatsApp ${WHATSAPP_PHONE_E164}`}
      >
        WhatsApp
      </a>
    </>
  );
}

