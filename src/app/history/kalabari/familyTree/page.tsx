import React from 'react';
import data from '@/assets/data/Origin.json';
import parse from 'html-react-parser';
import Back from '@/components/back';

function Kalabari() {
  return (
    <main className='p-2 w-[95%] mx-[auto]'>
      <Back/>
      <h1 className='text-center item-center text-4xl mt-5 center'>Family tree coming soon...</h1>
    </main>
  );
}

export default Kalabari;