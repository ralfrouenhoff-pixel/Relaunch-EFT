import type { Metadata } from "next";
import AthleteInfoClient from "./AthleteInfoClient";

export const metadata: Metadata = {
  title: "Athleten-Information",
  description: "Alle wichtigen Informationen für Athleten: Wechselzone, Ausrüstung, Check-in, Parkplätze und Regeln.",
};

export default function AthleteInfoPage() {
  return <AthleteInfoClient />;
}
