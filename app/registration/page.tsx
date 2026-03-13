import type { Metadata } from "next";
import RegistrationClient from "./RegistrationClient";

export const metadata: Metadata = {
  title: "Anmeldung",
  description: "Melde dich jetzt für den Erich Fill Triathlon 2025 an. Sprint, Olympisch oder Staffel.",
};

export default function RegistrationPage() {
  return <RegistrationClient />;
}
