import React from 'react';
import Ecran from '@/assets/Images/history-img/Ecran-Kalabari-Art.jpg';
import Wharf from '@/assets/Images/history-img/Abonnema Wharf.jpeg';
import DuoCard from '@/components/DuoCard';
import ReactHtmlParser from 'react-html-parser';
import regionNames from '@/assets/data/regionNames.json';
import Back from '@/components/Back';

const briefAbonnema = `From the bustling trading hub of Abonnema to the tranquil riverside settlements like Buguma, the towns of the Kalabari Kingdom offer a glimpse into the rich cultural heritage and economic dynamism of the 
region.
<br/>
<br/>
Abonnema, with its strategic location on the Bonny River, thrives as a center of commerce and cultural exchange, bustling with activity in its markets and waterfronts. Buguma, on the other hand, exudes a serene charm, with its scenic riverbanks and close-knit community life.
<br/>
<br/>
Towns like Bakana and Degema are steeped in history, with landmarks and traditions that reflect the enduring spirit of the Kalabari people. These towns have played pivotal roles in the region's political and social landscape, shaping its identity and influencing its trajectory.`

const briefRegion = `From the bustling trading hub of Abonnema to the tranquil riverside settlements like Buguma, the towns of the Kalabari Kingdom offer a glimpse into the rich cultural heritage and economic dynamism of the region.<br/><br/>Abonnema, with its strategic location on the Bonny River, thrives as a center of commerce and cultural exchange, bustling with activity in its markets and waterfronts. Buguma, on the other hand, exudes a serene charm, with its scenic riverbanks and close-knit community life.<br/><br/>Towns like Bakana and Degema are steeped in history, with landmarks and traditions that reflect the enduring spirit of the Kalabari people. These towns have played pivotal roles in the region's political and social landscape, shaping its identity and influencing its trajectory`

export default function Region() {
  return (
    <main className={'bg-darkk p-2'} aria-label="You're at the History section">
      <Back/>
      <br/>
      {regionNames.map((region, index) => (
        <DuoCard
          key={index}
          text={ReactHtmlParser(region.brief)}
          imageUrl={Ecran}
          mobileImageUrl={Ecran}
          linkUrl={`/history/kalabari/regions/${region.slug}`}
          linkText="Explore"
          heading={region.name}
          reverse={index % 2 === 0}
        />
      ))}
    </main>
  );
}