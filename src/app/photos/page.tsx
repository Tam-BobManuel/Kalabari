"use client"
import Search from '@/components/Search';
import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';

interface Imager {
  id: string;
  data: {
    image: string;
    title: string;
    description: string;
  };
}

export default function Photos() {
  const [images, setImages] = useState<Imager[]>([]);

  useEffect(() => {
    fetch(`https://cdn.builder.io/api/v3/content/images?apiKey=${process.env.NEXT_PUBLIC_BUILDER_IO_API}`)
      .then(response => response.json())
      .then(data => setImages(data.results));
  }, []);
  
  return (
    <main className={'bg-darkk p-2'} aria-label="You're at the Photos Section">
      <Search />
      <section className="photos-grid grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-4 w-full">
        {images?.map((photo) => (
          <div key={photo.id} className="photo-item">
            <Link href={photo.data.image}>
              <div className='relative'>
                <Image
                  src={photo.data.image}
                  alt={photo.data.title}
                  objectFit='cover'
                  className='w-full h-full'
                  width={1665}
                  height={100}
                />
                <p className='absolute bottom-0 left-0 w-full text-center bg-gray-900 text-white py-2'>{photo.data.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}