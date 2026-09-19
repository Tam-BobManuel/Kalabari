import type { Imager } from "../types";

interface PhotoCardProps {
  photo: Imager;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <div key={photo.id} className="photo-item">
      <a href={photo.data.image}>
        <div className="relative">
          <img
            src={photo.data.image}
            alt={photo.data.title}
            className="w-full h-full"
            width={1665}
            height={100}
          />
          <p className="absolute bottom-0 left-0 w-full text-center bg-gray-900 text-white py-2">
            {photo.data.title}
          </p>
        </div>
      </a>
    </div>
  );
}
