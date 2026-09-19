import type { Metadata } from "next";
import RegionsList from "@/features/history/components/RegionsList";

export const metadata: Metadata = {
  title: "Regions - Kalabari",
};

export default function RegionsPage() {
  return <RegionsList />;
}
