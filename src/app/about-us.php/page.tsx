import Back from '@/components/back';
import React from 'react';
import HTMLParser from 'react-html-parser';

export default function Page () {
  const text = `
    <p>As an undergraduate Economist and web developer hailing from Kalabari, I was driven to create a website showcasing my culture due to the scarcity of readily accessible and accurate information on our history and heritage.</p>
    
    <br/>
    <p>Growing up, I often found myself struggling to find reliable sources to learn about my roots, and I knew I wasn't alone in this quest for knowledge. This experience sparked a desire within me to create a platform that would bridge this gap and provide a comprehensive resource for anyone seeking to understand and appreciate Kalabari culture.</p>
    
    <br/>
    <p>In the course of this project, I developed a feature that enables users to generate Ijaw names and their meanings, as well as decipher the meanings of names they encounter. This functionality was made possible with the invaluable assistance of fellow Kalabari developer, Ibifa <a href="https://github.com/ibifaa" aria-label="Link to Ibifaa's GitHub profile">[Visit Ibifaa's GitHub profile]</a>, who shared her expertise and passion for our culture. Her contributions were instrumental in bringing this feature to life, and I'm grateful for her support.</p>
    
    <br/>
    <p>Furthermore, I was fortunate to receive support from Henry <a className='underline underline-offset-1 ' href="https://github.com/HenryAgu" aria-label="Link to Henry's GitHub profile">[Visit Henry's GitHub profile]</a>, a developer who, although not from Kalabari, graciously offered his expertise in building parts of the user interface. His willingness to contribute to the project, despite not being from our community, demonstrates the power of collaboration and the importance of supporting initiatives that promote cultural understanding and preservation. I also benefited from the wise counsel of a number of people, whose guidance and encouragement helped shape the project's direction.</p>
    <br/>
    <p>My hope is that this endeavour will educate visitors about the beauty of our culture and inspire them to contribute, either by sharing their knowledge or providing financial support to ensure the continued operation of the website. By creating a platform that celebrates and preserves Kalabari culture, I aim to foster a sense of community and pride among my people, and to share our rich heritage with the world. I believe that this project has the potential to make a meaningful impact, and I invite anyone who shares this vision to join me on this journey.</p>
  `;

  return (
    <main
      role="article"
      aria-label="Personal story about creating a website to showcase Kalabari culture"
      className='mt-5 p-4'
    >
      <Back/>
      {HTMLParser(text)}
    </main>
  );
};