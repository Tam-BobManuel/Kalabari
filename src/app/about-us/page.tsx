import type { Metadata } from "next";
import AboutContent from "@/features/about/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us - Kalabari",
};

export default function AboutUsPage() {
  return <AboutContent />;
}
