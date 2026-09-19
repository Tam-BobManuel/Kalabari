import type { Metadata } from "next";
import RoyalComingSoon from "@/features/history/components/RoyalComingSoon";

export const metadata: Metadata = {
  title: "Royal History - Kalabari",
};

export default function RoyalPage() {
  return <RoyalComingSoon />;
}
