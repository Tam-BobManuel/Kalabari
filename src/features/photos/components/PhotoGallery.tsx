"use client";
import Footer from "@/features/shared/components/Footer";
import GallerySearch from "./GallerySearch";
import PhotoGrid from "./PhotoGrid";
import PhotoLoader from "./PhotoLoader";
import { useInfiniteImages } from "../hooks/useInfiniteImages";

export default function PhotoGallery() {
  const { images, filteredImages, setFilteredImages, hasMore, loading, bottomBoundaryRef } = useInfiniteImages();

  if (loading) {
    return <PhotoLoader />;
  }

  return (
    <>
      <main className="bg-darkk p-2" aria-label="You're at the Photos Section">
        <div className="sticky bg-transparent top-[12%] left-0 right-0 z-10">
          <GallerySearch images={images} setFilteredImages={setFilteredImages} />
        </div>
        <PhotoGrid photos={filteredImages} />
        {hasMore ? (
          <div id="page-bottom-boundary" ref={bottomBoundaryRef}></div>
        ) : (
          // <p className="text-center">Looks like that's all we have</p>
          ""
        )}
      </main>
      <Footer />
    </>
  );
}