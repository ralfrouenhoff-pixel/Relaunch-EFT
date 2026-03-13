import type { Metadata } from "next";
import SponsorsClient from "./SponsorsClient";

export const metadata: Metadata = {
  title: "Sponsoren",
  description: "Die Sponsoren und Partner des Erich Fill Triathlons 2025.",
};

export default function SponsorsPage() {
  return <SponsorsClient />;
}
