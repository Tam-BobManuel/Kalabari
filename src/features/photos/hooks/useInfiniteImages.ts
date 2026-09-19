import { useCallback, useEffect, useRef, useState } from "react";
import type { Imager } from "../types";

const PAGE_SIZE = 8;
const BUILDER_IO_API = process.env.NEXT_PUBLIC_BUILDER_IO_API;

export function useInfiniteImages() {
  const [images, setImages] = useState<Imager[]>([]);
  const [filteredImages, setFilteredImages] = useState<Imager[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const bottomBoundaryRef = useRef<HTMLDivElement | null>(null);
  const fetchedImageIds = useRef(new Set<string>());

  const fetchImages = useCallback(async () => {
    try {
      const response = await fetch(
        `https://cdn.builder.io/api/v3/content/images?apiKey=${BUILDER_IO_API}&limit=${PAGE_SIZE}&offset=${offset}`,
      );
      const data = await response.json();
      const x = data?.results;

      if (x?.length === 0) {
        setHasMore(false);
        return;
      }

      const newImages = data.results.filter(
        (image: Imager) => !fetchedImageIds.current.has(image.id),
      );

      for (const image of newImages) {
        fetchedImageIds.current.add(image.id);
      }

      if (newImages.length > 0) {
        setImages((prevImages) => [...prevImages, ...newImages]);
        setFilteredImages((prevImages) => [...prevImages, ...newImages]);
      } else {
        setOffset((prevOffset) => prevOffset + PAGE_SIZE);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [offset]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOffset((prevOffset) => prevOffset + PAGE_SIZE);
        }
      },
      { threshold: 1.0 },
    );

    const bottomBoundary = bottomBoundaryRef.current;

    if (bottomBoundary) {
      observer.observe(bottomBoundary);
    }

    return () => {
      if (bottomBoundary) {
        observer.unobserve(bottomBoundary);
      }
    };
  }, [hasMore]);

  useEffect(() => {
    if (images.length > 20) {
      setImages((prevImages) => prevImages.slice(8));
      setFilteredImages((prevImages) => prevImages.slice(8));
    }
  }, [images]);

  return {
    images,
    filteredImages,
    setFilteredImages,
    hasMore,
    loading,
    bottomBoundaryRef,
  };
}
