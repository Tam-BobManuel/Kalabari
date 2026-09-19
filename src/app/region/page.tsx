import RegionLanding from "@/features/region/components/RegionLanding";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regions - Kalabari",
};

export default function RegionPage() {
  return <RegionLanding />;
}
