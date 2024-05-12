'use client'
import React, { useState } from 'react';
//@ts-expect-error
import ijawNames from 'ijaw-names';
import { Button } from '@/components/ui/button';

export default function Page() {
  const [nameInput, setNameInput] = useState('');
  const [meaning, setMeaning] = useState('');
  const [generatedName, setGeneratedName] = useState('');
  const [displayOption, setDisplayOption] = useState('random');

  const handleNameInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setNameInput(event.target.value);
  };

  const handleGetMeaning = () => {
    if (nameInput.trim() !== '') {
      const result = ijawNames(nameInput);
      if (result) {
        setMeaning(result.meaning);
      } else {
        setMeaning('Name not found, send us a message on the name links and email can be found at the bottom of the page');
      }
    } else {
      setMeaning('');
    }
  };
  

  const handleGenerateName = () => {
    const result = ijawNames();
    setGeneratedName(result.name);
    setMeaning(`${result.meaning}`);
    setDisplayOption('random');
  };

  const handleOptionClick = (option: React.SetStateAction<string>) => {
    setDisplayOption(option);
  };

  const handleOptionKeyPress = (event: React.KeyboardEvent<HTMLHeadingElement>, option: React.SetStateAction<string>) => {
    if (event.key === 'Enter') {
      handleOptionClick(option);
    }
  };

  return (
    <main className='p-2 mt-2'>
      <h1 className='text-4xl text-center'>GENERATE IJAW NAMES</h1>
      <div className='w-full bg-[#3C3D45] border rounded flex flex-col md:flex-row'>
        <div className='w-full md:w-1/6 p-2 text-2xl text-center flex flex-col md:flex-col sm:flex-row xs:flex-row'> 
          <h2 
            onClick={() => handleOptionClick('random')} 
            onKeyDown={(e) => handleOptionKeyPress(e, 'random')} 
            // tabIndex={0}
            className={displayOption === 'random' ? 'border-b cursor-pointer p-1 rounded' : 'cursor-pointer p-1 rounded'}
          >
            RANDOM
          </h2>
          <h2 
            onClick={() => handleOptionClick('meaning')} 
            onKeyDown={(e) => handleOptionKeyPress(e, 'meaning')} 
            // tabIndex={0}
            className={displayOption === 'meaning' ? 'border-b cursor-pointer p-1 rounded' : 'cursor-pointer p-1 rounded'}
          >
            MEANING
          </h2>
        </div>
        <div className='w-full md:w-5/6 p-2 bg-[#D9D9D9] text-center'>
          {displayOption === 'random' ? (
            <>
              <div className='text-black font-medium'>NAME: {generatedName}</div>
              <div className='text-black font-medium'>{`MEANING : ${meaning}`}</div>
              <Button onClick={handleGenerateName} className='text-white w-full font-medium'>
                GENERATE RANDOM NAME
              </Button>
            </>
          ) : (
            <>
              <div className='text-black'><input type="text" className='w-full border-2 border-black'/></div>
              <div className='text-black'>MEANING: {meaning}</div>
              {/* MAKE ERRORS WHEN USERS  WHEN USER'S NAME DOESN'T HAVE A MEANING IN OUR DATABASE APPEAR HERE*/}
              <div className='text-[#8B0505] italic'>{}</div>
              <Button onClick={handleGenerateName} className='text-white w-full'>
                FIND MEANING  
              </Button>
            </>
          )}
        </div>
      </div>
      <span className='text-center'>*these names involve names that are not just specific to Kalabari but the ijaws as a whole</span>
    </main>
  );
}
