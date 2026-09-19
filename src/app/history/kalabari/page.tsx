import type { Metadata } from "next";
import KalabariHistory from "@/features/history/components/KalabariHistory";

export const metadata: Metadata = {
  title: "Kalabari History - Kalabari",
};

export default function KalabariPage() {
  return <KalabariHistory />;
}
