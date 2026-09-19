import type { Metadata } from "next";
import FactsList from "@/features/facts/components/FactsList";

export const metadata: Metadata = {
  title: "Fun Facts - Kalabari",
};

export default function FactsPage() {
  return <FactsList />;
}
