import Hero from "@/components/sections/Hero";
import EventHighlights from "@/components/sections/EventHighlights";
import RaceFormats from "@/components/sections/RaceFormats";
import CoursePreview from "@/components/sections/CoursePreview";
import Gallery from "@/components/sections/Gallery";
import SponsorsGrid from "@/components/sections/SponsorsGrid";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EventHighlights />
      <RaceFormats />
      <CoursePreview />
      <Gallery />
      <SponsorsGrid />
      <FAQ />
      <CTASection />
    </>
  );
}
