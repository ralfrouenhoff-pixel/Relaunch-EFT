import type { Metadata } from "next";
import ScheduleClient from "./ScheduleClient";

export const metadata: Metadata = {
  title: "Zeitplan",
  description: "Der offizielle Zeitplan des Erich Fill Triathlons 2025.",
};

export default function SchedulePage() {
  return <ScheduleClient />;
}
