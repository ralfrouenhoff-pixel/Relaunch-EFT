import type { Metadata } from "next";
import CourseClient from "./CourseClient";

export const metadata: Metadata = {
  title: "Strecke",
  description: "Swim, Bike, Run – alle Details zu den Strecken des Erich Fill Triathlons 2025.",
};

export default function CoursePage() {
  return <CourseClient />;
}
