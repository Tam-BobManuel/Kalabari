import HistoryOverview from "@/features/history";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History - Kalabari",
};

export default function HistoryPage() {
  return <HistoryOverview />;
}
