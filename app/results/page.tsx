import type { Metadata } from "next";
import ResultsClient from "./ResultsClient";

export const metadata: Metadata = {
  title: "Ergebnisse",
  description: "Offizielle Ergebnisse des Erich Fill Triathlons.",
};

export default function ResultsPage() {
  return <ResultsClient />;
}
