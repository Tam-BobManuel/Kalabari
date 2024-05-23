"use client"
import regionNames from '@/assets/data/regionNames.json';
import Back from '@/components/back';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import regions from '@/assets/data/regions.json';

export default function RegionDetails({ params }: { params: { regionId: string } }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  const regionId = params.regionId;
  const regionData = regions.find((region) => region.slug === regionId);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  if (!regionData) {
    return notFound();
  }

  return (
    <main className='p-2'>
      <Back />
      <h1 className='text-4xl text-center'>{regionId.charAt(0).toUpperCase() + regionId.slice(1)}</h1>
      {regionData.detail.map((item, index) => (
        <p key={index}>
          {ReactHtmlParser(item.text)}
        </p>
      ))}
    </main>
  );
}