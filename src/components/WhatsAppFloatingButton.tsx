"use client";

import { WHATSAPP_PHONE_E164 } from "@/content/contact";

function MessageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      className="block"
    >
      <path
        fill="currentColor"
        d="M20 2H4a2 2 0 0 0-2 2v15.5A2.5 2.5 0 0 0 4.5 22H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 5.2-7.3 5.02a1.2 1.2 0 0 1-1.4 0L4 7.2V4h16v3.2ZM4 20V9.6l6.2 4.26a3.6 3.6 0 0 0 3.6 0L20 9.6V20H4Z"
      />
    </svg>
  );
}

export function WhatsAppFloatingButton() {
  const text = encodeURIComponent("Hi Khoa Rentals — I’d like to check availability.");
  const href = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_E164}&text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-4 top-1/2 z-[1000] -translate-y-1/2 border border-black/15 bg-black text-[var(--background)] shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 pointer-events-auto max-sm:bottom-5 max-sm:top-auto max-sm:-translate-y-0"
      aria-label="Message"
    >
      <span className="grid h-12 w-12 place-items-center">
        <MessageIcon />
      </span>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap border border-black/10 bg-[var(--background)] px-3 py-2 text-xs font-medium text-[var(--foreground)] shadow-[0_10px_30px_rgba(0,0,0,0.10)] group-hover:block">
        Message
      </span>
    </a>
  );
}

