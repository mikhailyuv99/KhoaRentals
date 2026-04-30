import { redirect } from "next/navigation";
import { whatsappSendUrl } from "@/content/contact";

export default function ContactPage() {
  redirect(whatsappSendUrl("Hi Khoa Rentals — I’d like to ask about monthly rentals in Da Nang."));
}

