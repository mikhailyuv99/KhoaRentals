import { redirect } from "next/navigation";
import { whatsappUrl } from "@/content/contact";

export default function ContactPage() {
  redirect(whatsappUrl("Hi KHOA Rentals — I’d like to check availability."));
}

