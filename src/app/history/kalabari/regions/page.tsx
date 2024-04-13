import React from 'react';
import Ecran from '@/assets/Images/history-img/Ecran-Kalabari-Art.jpg';
import Wharf from '@/assets/Images/history-img/Abonnema Wharf.jpeg';
import DuoCard from '@/components/duoCard';
import ReactHtmlParser from 'react-html-parser';

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
    <main className={'bg-darkk'} aria-label="You're at the History section">
      <DuoCard
        text={ReactHtmlParser(briefAbonnema)}
        imageUrl={Ecran}
        mobileImageUrl={Ecran.src}
        linkUrl={`/history/kalabari`}
        linkText="More Details"
        heading='ABONNEMA'
        reverse={false}
      />
       <DuoCard
        text={ReactHtmlParser(briefRegion)}
        imageUrl={Wharf}
        mobileImageUrl={Wharf.src}
        linkUrl="/history/kalabari/regions"
        linkText="Explore"
        heading='BUGUMA'
        reverse={true}
      />
    </main>
  );
}
