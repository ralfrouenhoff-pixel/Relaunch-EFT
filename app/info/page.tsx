import type { Metadata } from "next";
import InfoClient from "./InfoClient";

export const metadata: Metadata = {
  title: "Info",
  description: "Alles Wichtige für Athleten: Check-in, Wechselzone, Ausrüstung, Regeln, Parken und FAQ.",
};

export default function InfoPage() {
  return <InfoClient />;
}
