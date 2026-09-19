import KalabariHistory from "@/features/history/components/KalabariHistory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalabari History - Kalabari",
};

export default function KalabariPage() {
  return <KalabariHistory />;
}
