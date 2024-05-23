import React from 'react';
import data from '@/assets/data/Origin.json';
import parse from 'html-react-parser';
import Back from '@/components/back';

function Kalabari() {
  return (
    <main className='p-2 w-[95%] mx-[auto]'>
      <Back/>
      {/* HISTORY OF KALABARI  */}
      <h1 className='text-4xl text-center'>{data.title}</h1>
      {data.content.map((paragraph, index) => (
        <div key={index} className='text-xl text-justify leading-10'>
          {parse(paragraph.text)}
          {paragraph.list && (
            <ol className="list-decimal pl-8">
              {paragraph.list.map((item, index) => (
                <li key={index}>{item.item}</li>
              ))}
            </ol>
          )}
        </div>
      ))}

      {/* TOWNS OF KALABARI */}
      <div className='text-3xl text-center'>{parse(data.presentKingdom.title)}</div>
      {data.presentKingdom.townsAndVillages.map((town, index) => (
        <div key={index} className='text-xl text-justify leading-10'>
          {parse(town.text)}
          {town.list && (
            <ol className="list-decimal pl-8">
              {town.list.map((item, index) => (
                <li key={index}>{item.item}</li>
              ))}
            </ol>
          )}
        </div>
      ))}
      {/* OCCUPATION OF KALABARI */}
      <div className='text-3xl text-center'>{parse(data.occupation.title)}</div>
      {data.occupation.content.map((job, index) => (
        <div key={index} className='text-xl text-justify leading-10'>
          {parse(job.text)}
        </div>
      ))}
    </main>
  );
}

export default Kalabari;