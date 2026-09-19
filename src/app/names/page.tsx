import type { Metadata } from "next";
import NameGen from "@/features/nameGen";

export const metadata: Metadata = {
  title: "Names - Kalabari",
};

export default function NamesPage() {
  return <NameGen />;
}
