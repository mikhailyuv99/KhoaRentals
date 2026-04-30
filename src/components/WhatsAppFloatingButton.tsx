import Link from "next/link";
import { WHATSAPP_PHONE_E164 } from "@/content/contact";

export function WhatsAppFloatingButton() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP_PHONE_E164}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="u-motion fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--ui3)] bg-white shadow-sm hover:shadow-md"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path
          fill="#25D366"
          d="M12 2C6.477 2 2 6.34 2 11.692c0 1.884.57 3.63 1.546 5.096L2 22l5.423-1.42c1.41.772 3.04 1.212 4.577 1.212 5.523 0 10-4.34 10-9.692C22 6.34 17.523 2 12 2z"
        />
        <path
          fill="#fff"
          d="M17.3 14.54c-.22.62-1.1 1.16-1.8 1.3-.48.1-1.1.18-3.56-.75-3.13-1.25-5.15-4.33-5.31-4.55-.16-.22-1.28-1.68-1.28-3.22 0-1.54.82-2.3 1.1-2.62.28-.32.62-.4.82-.4h.58c.18 0 .44-.06.68.5.24.56.82 2 0 0 .22.53.36.46.5.78.14.32.22.68.06 1.02-.16.34-.24.54-.48.82-.24.28-.5.62-.72.84-.22.22-.44.46-.18.9.26.44 1.16 1.88 2.5 3.04 1.72 1.5 3.18 1.96 3.64 2.18.46.22.74.2 1-.12.26-.32 1.14-1.3 1.44-1.74.3-.44.6-.36.98-.22.38.14 2.44 1.12 2.86 1.32.42.2.7.3.8.48.1.18.1 1.02-.12 1.64z"
        />
      </svg>
    </Link>
  );
}

