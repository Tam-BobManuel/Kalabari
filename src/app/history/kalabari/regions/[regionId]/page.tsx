import regionNames from '@/assets/data/regionNames.json';
import Back from '@/components/back'; // Capitalize the component name
import { notFound } from 'next/navigation';
import ReactHtmlParser from 'react-html-parser'; // Import ReactHtmlParser

export default function RegionDetails({ params }: { params: { regionId: string } }) {
  const regionId = params.regionId;
  const regionData = regionNames.find((region) => region.slug === regionId);

  if (!regionData) {
    return notFound();
  }

  return (
    <main className='p-2'>
      <Back /> {/* Use the Back component */}
      <h1 className='text-4xl text-center'>{regionId.charAt(0).toUpperCase() + regionId.slice(1)}</h1>
      <p>
        <b>Detail:</b> {ReactHtmlParser(regionData.detail)} {/* Use ReactHtmlParser to parse HTML */}
      </p>
    </main>
  );
}