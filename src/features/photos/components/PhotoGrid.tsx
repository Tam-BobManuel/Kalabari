import { Suspense } from "react";
import type { Imager } from "../types";
import PhotoCard from "./PhotoCard";

interface PhotoGridProps {
  photos: Imager[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <section className="photos-grid grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-4 w-full">
      <Suspense fallback={<p>Loading feed...</p>}>
        {photos?.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </Suspense>
    </section>
  );
}
