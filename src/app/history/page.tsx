import React from 'react';
import Ecran from '../../assets/Images/history-img/Ecran-Kalabari-Art.jpg';
import Wharf from '../../assets/Images/history-img/Abonnema Wharf.jpeg';
import DuoCard from '@/components/duoCard';
import ReactHtmlParser from 'react-html-parser';

const briefKalabari = `The Kalabari are a sub-group of the Ijaw people living in the eastern Niger Delta region of Nigeria. Originally, they were known as the Awome. The name Kalabari was derived from their ancestor Perebokelekeibari who was a son of Mein Owei.
<br/>
<br/>
Their original settlement was Old shipping also known as Elem-Ama (Old Kalabari). This settlement (town) was abandoned as the people moved to other fishing settlements. Portuguese settlers continued to maintain the name New Calabar which came about when they met the Duke of Calabar on a sailing expedition he was found along the River called Kalabari toru so they named it New Calabar river.
<br/>
<br/>
When the British came the word Kalabari was pronounced as Calabar (Kalaba) instead of Kalabari. At this time the original Ijaw Kalabaris had moved to a new location which became the new Calabar territory since the old Calabar is occupied by different people. Old Calabar became an Efik town with time which has the name Calabar`

const briefRegion = `From the bustling trading hub of Abonnema to the tranquil riverside settlements like Buguma, the towns of the Kalabari Kingdom offer a glimpse into the rich cultural heritage and economic dynamism of the region.<br/><br/>Abonnema, with its strategic location on the Bonny River, thrives as a center of commerce and cultural exchange, bustling with activity in its markets and waterfronts. Buguma, on the other hand, exudes a serene charm, with its scenic riverbanks and close-knit community life.<br/><br/>Towns like Bakana and Degema are steeped in history, with landmarks and traditions that reflect the enduring spirit of the Kalabari people. These towns have played pivotal roles in the region's political and social landscape, shaping its identity and influencing its trajectory`

export default function History() {
  return (
    <main className={'bg-darkk'} aria-label="You're at the History section">
      <DuoCard
        text={ReactHtmlParser(briefKalabari)}
        imageUrl={Ecran}
        mobileImageUrl={Ecran.src}
        linkUrl="/history/kalabari"
        linkText="More Details"
        heading='KALABARI'
        reverse={false}
      />
       <DuoCard
        text={ReactHtmlParser(briefRegion)}
        imageUrl={Wharf}
        mobileImageUrl={Wharf.src}
        linkUrl="/history/kalabari/regions"
        linkText="Explore"
        heading='REGIONS'
        reverse={true}
      />
      <DuoCard
       text={ReactHtmlParser(briefRegion)}
       imageUrl={Wharf}
       mobileImageUrl={Wharf.src}
       linkUrl="/history/kalabari/royal"
       linkText="Explore"
       heading='ROYALTIES'
       reverse={false}
     />
    </main>
  );
}
