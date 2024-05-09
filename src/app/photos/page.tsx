import Search from '@/components/search';
import Image from 'next/image';
import Link from 'next/link';
import data from '@/assets/data/photos.json';

export default function Photos() {
  return (
    <main className={'bg-darkk p-2'} aria-label="You're at the Photos Section">
      <Search />
      <section className="photos-grid grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-4 w-full">
        {data.map((photo) => (
          <div key={photo.slug} className="photo-item">
            <Link href={photo.photo}>
              <div className='relative'>
                <Image
                  src={photo.photo}
                  alt={photo.name}
                  objectFit='cover'
                  className='w-full h-full'
                  width={1665}
                  height={100}
                />
                <p className='absolute bottom-0 left-0 w-full text-center bg-gray-900 text-white py-2'>{photo.slug}</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}