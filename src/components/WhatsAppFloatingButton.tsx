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
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.64c-.27-.14-1.58-.78-1.83-.87-.25-.09-.43-.14-.62.14-.18.27-.71.87-.87 1.05-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.34-.79-.7-1.33-1.57-1.48-1.84-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.67 4.13.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.58-.65 1.8-1.28.22-.62.22-1.16.16-1.28-.06-.12-.25-.2-.52-.34ZM16 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.26.59 4.38 1.63 6.22L3.2 28.8l6.77-1.57A12.77 12.77 0 0 0 16 28.8c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16 3.2Zm0 23.02c-2.02 0-3.91-.6-5.5-1.63l-.39-.24-4.02.93.93-3.92-.25-.4A10.2 10.2 0 0 1 5.8 16c0-5.64 4.56-10.2 10.2-10.2S26.2 10.36 26.2 16 21.64 26.22 16 26.22Z" />
      </svg>
    </Link>
  );
}

