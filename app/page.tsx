import type { Metadata } from "next";
import { PAGE_METADATA } from "@/lib/services-data";
import HeroSection from "@/components/home/HeroSection";
import KeyHighlights from "@/components/home/KeyHighlights";
import FeaturedServices from "@/components/home/FeaturedServices";
import VehicleTypes from "@/components/home/VehicleTypes";
import SecondaryCta from "@/components/home/SecondaryCta";

export const metadata: Metadata = {
  title: PAGE_METADATA.home.title,
  description: PAGE_METADATA.home.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <KeyHighlights />
      <FeaturedServices />
      <VehicleTypes />
      <SecondaryCta />
    </>
  );
}
