'use client'
import regionNames from '@/assets/data/regionNames.json';
import Back from '@/components/Back';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';

interface Imager {
  id: string;
  data: {
    name: string;
    photo: string;
    brief: string;
    slug: string;
    detail: string;
  };
}

export default function RegionDetails({ params }: { params: { regionId: string } }) {
  const [images, setImages] = useState<Imager[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://cdn.builder.io/api/v3/content/regions?apiKey=${process.env.NEXT_PUBLIC_BUILDER_IO_API}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setImages(data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const regionId = params.regionId;
  const regionData = images.find((region) => region.data.slug === regionId);

  if (loading) {
    return <div>Loading...</div>; // You can have a loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  if (!regionData) {
    return notFound();
  }

  return (
    <main className='p-2'>
      <Back />
      <h1 className='text-4xl text-center'>{regionId.charAt(0).toUpperCase() + regionId.slice(1)}</h1>
      <p>
        <b>Detail:</b> {ReactHtmlParser(regionData.data.detail)}
      </p>
    </main>
  );
}
