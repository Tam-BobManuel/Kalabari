import type { Metadata } from "next";
import RegionLanding from "@/features/region/components/RegionLanding";

export const metadata: Metadata = {
  title: "Regions - Kalabari",
};

export default function RegionPage() {
  return <RegionLanding />;
}
