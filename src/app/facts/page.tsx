import FactsList from "@/features/facts/components/FactsList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun Facts - Kalabari",
};

export default function FactsPage() {
  return <FactsList />;
}
