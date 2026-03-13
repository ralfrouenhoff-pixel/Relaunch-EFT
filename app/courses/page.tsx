import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "Strecken",
  description: "Alle Details zu den Schwimm-, Rad- und Laufstrecken des Erich Fill Triathlons.",
};

export default function CoursesPage() {
  return <CoursesClient />;
}
