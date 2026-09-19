import NameGen from "@/features/nameGen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Names - Kalabari",
};

export default function NamesPage() {
  return <NameGen />;
}
