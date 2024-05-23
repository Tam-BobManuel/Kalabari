import React from 'react';
import Ecran from '../../assets/Images/history-img/Ecran-Kalabari-Art.jpg';
import Wharf from '../../assets/Images/history-img/Abonnema Wharf.jpeg';
import Royal from '@/assets/Images/Kalabari_ceremonial_attire.jpg'
import DuoCard from '@/components/duoCard';
import ReactHtmlParser from 'react-html-parser';
import briefKalabari from '@/assets/data/Origin.json'

const briefRegion = `From the bustling trading hub of Abonnema to the tranquil riverside settlements like Buguma, the towns of the Kalabari Kingdom offer a glimpse into the rich cultural heritage and economic dynamism of the region.<br/><br/>Abonnema, with its strategic location on the Bonny River, thrives as a center of commerce and cultural exchange, bustling with activity in its markets and waterfronts. Buguma, on the other hand, exudes a serene charm, with its scenic riverbanks and close-knit community life.<br/><br/>Towns like Bakana and Degema are steeped in history, with landmarks and traditions that reflect the enduring spirit of the Kalabari people. These towns have played pivotal roles in the region's political and social landscape, shaping its identity and influencing its trajectory`

export default function History() {
  const briefKalabariCombined = briefKalabari.content.reduce((acc, current) => {
    return acc + current.text;
  }, '');

  const briefKalabariTruncated = truncateText(briefKalabariCombined, 890);
  const briefRegionTruncated = truncateText(briefRegion, 690);

  return (
    <main className={'bg-darkk mt-6 p-2'} aria-label="You're at the History section">
      <DuoCard
        text={ReactHtmlParser(briefKalabariTruncated)}
        imageUrl={Ecran}
        mobileImageUrl={`/images/Ecran-Kalabari-Art.jpg`}
        linkUrl="/history/kalabari"
        linkText="More Details"
        heading='ORIGIN'
        reverse={false}
      />
      <DuoCard
        text={ReactHtmlParser(briefRegion)}
        imageUrl={Wharf}
        mobileImageUrl={`/images/regions/AbonnemaWharf.jpeg`}
        linkUrl="/history/kalabari/regions"
        linkText="Explore"
        heading='REGIONS'
        reverse={true}
      />
      <DuoCard
        text={ReactHtmlParser(briefRegionTruncated)}
        imageUrl={Royal}
        mobileImageUrl={`/images/Kalabari_ceremonial_attire.jpg`}
        linkUrl="/history/kalabari/royal"
        linkText="Explore"
        heading='ROYALTIES'
        reverse={false}
      />
    </main>
  );
}

function truncateText(text: string, limit: number) {
  if (text.length > limit) {
    return text.slice(0, limit) + '...';
  }
  return text;
}