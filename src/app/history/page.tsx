import type { Metadata } from "next";
import HistoryOverview from "@/features/history";

export const metadata: Metadata = {
  title: "History - Kalabari",
};

export default function HistoryPage() {
  return <HistoryOverview />;
}
