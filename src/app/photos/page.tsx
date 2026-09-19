import PhotoGallery from "@/features/photos/components/PhotoGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photos - Kalabari",
};

export default function PhotosPage() {
  return <PhotoGallery />;
}
