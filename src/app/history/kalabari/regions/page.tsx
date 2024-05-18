'use client'
import React,{ useState,useEffect }  from 'react';
import Ecran from '@/assets/Images/history-img/Ecran-Kalabari-Art.jpg';
import Wharf from '@/assets/Images/history-img/Abonnema Wharf.jpeg';
import DuoCard from '@/components/duoCard';
import ReactHtmlParser from 'react-html-parser';
import regionNames from '@/assets/data/regionNames.json';
import Back from '@/components/back';

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


export default function Region() {
  const [images, setImages] = useState<Imager[]>([]);

  useEffect(() => {
    fetch(`https://cdn.builder.io/api/v3/content/regions?apiKey=${process.env.NEXT_PUBLIC_BUILDER_IO_API}`)
      .then(response => response.json())
      .then(data => setImages(data.results));
  }, []);
  
  return (
    <main className={'bg-darkk p-2'} aria-label="You're at the History section">
      <Back/>
      <br/>
      {images?.map((region,index) => (
        <DuoCard
          key={region.id}
          text={ReactHtmlParser(region.data.brief)}
          imageUrl={region.data.photo}
          mobileImageUrl={region.data.photo}
          linkUrl={`/history/kalabari/regions/${region.data.slug}`}
          linkText="Explore"
          heading={region.data.name}
          reverse={index % 2 === 0}
        />
      ))}
    </main>
  );
}