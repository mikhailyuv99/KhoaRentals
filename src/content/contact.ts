export const WHATSAPP_PHONE_E164 = "84793875777";

export function siteUrl(pathname: string) {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://khoarentals.com";
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

export function whatsappSendUrl(text: string) {
  const t = encodeURIComponent(text);
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE_E164}&text=${t}`;
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

