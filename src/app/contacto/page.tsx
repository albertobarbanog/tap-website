import type { Metadata } from "next";
import ContactoContent from "@/components/ContactoContent";

export const metadata: Metadata = {
  title: "Contacto — The Antarctica Project",
  description: "Contacto, booking y redes sociales de The Antarctica Project.",
};

export default function ContactoPage() {
  return <ContactoContent />;
}
