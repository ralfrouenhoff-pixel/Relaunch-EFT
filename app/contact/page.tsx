import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktiere das Team des Erich Fill Triathlons.",
};

export default function ContactPage() {
  return <ContactClient />;
}
