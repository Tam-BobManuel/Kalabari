import type { Metadata } from "next";
import PhotoGallery from "@/features/photos/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Photos - Kalabari",
};

export default function PhotosPage() {
  return <PhotoGallery />;
}
