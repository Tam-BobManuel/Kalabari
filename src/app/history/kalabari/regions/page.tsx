import RegionsList from "@/features/history/components/RegionsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regions - Kalabari",
};

export default function RegionsPage() {
  return <RegionsList />;
}
