export const WHATSAPP_PHONE_E164 = "84793875777";
export const WHATSAPP_DISPLAY = "+84 79 387 5777";

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP_PHONE_E164}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function siteUrl(pathname: string) {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://khoarentals.com";
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

export function propertyInquiryText(args: {
  propertyName: string;
  propertyPath: string;
  monthlyUsd: number;
}) {
  const url = siteUrl(args.propertyPath);
  return `Hi Khoa Rentals — is this available for a monthly rental?\n\nProperty: ${args.propertyName}\nLink: ${url}\nBudget: around $${Math.round(
    args.monthlyUsd
  )}/month\n\nWe’d like to schedule a visit if possible.`;
}

