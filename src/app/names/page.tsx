'use client'
import type React from 'react';
import { useState } from 'react';
//@ts-expect-error
import ijawNames from 'ijaw-names';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { useOnPC, useOnTablet } from '@/hooks/useWindowResize';

export default function Page() {
  const [nameInput, setNameInput] = useState('');
  const [meaning, setMeaning] = useState('');
  const [secondMeaning, setSecondMeaning] = useState('');
  const [error, setError] = useState('');
  const [generatedName, setGeneratedName] = useState('');
  const [displayOption, setDisplayOption] = useState('random');
  const onLaptop = useOnPC(false);
  const onTab = useOnTablet(false);

  const handleNameInputChange = (event: { target: { value: string; }; }) => {
    setNameInput(event.target.value);
  };

  const handleGetMeaning = () => {
    if (nameInput.trim() !== '') {
      const result = ijawNames(nameInput);
      if (result) {
        if (result.meaning !== false){
          console.log('no errors')
          setSecondMeaning(result.meaning);
          setError('');
        } else if (result.meaning === false){
          setSecondMeaning('')
          setError('ERROR: name not found. contact us if it\'s an Ijaw name. ');
          console.log('name no dey valid nau, oya sharp sharp message us the name')
        }
      } else {
        setMeaning('Name not found');
      }
    } else {
      setError('Please use the input field');
    }
  };

  const handleGenerateName = () => {
    const result = ijawNames();
    setGeneratedName(result.name);
    setMeaning(result.meaning);
    setDisplayOption('random');
  };

  const handleOptionClick = (option: string) => {
    setDisplayOption(option);
  };

  const handleOptionKeyPress = (event: React.KeyboardEvent<HTMLHeadingElement>, option: string) => {
    if (event.key === 'Enter') {
      handleOptionClick(option);
    }
  };

  return (
    <main className='p-2 mt-4 h-full'>
      <h1 className='text-4xl text-center'>GENERATE IJAW NAMES</h1>
      <div className='w-full bg-[#3C3D45] rounded-xl overflow-hidden flex flex-col md:flex-row'>

        {/* ON PAGE NAVIGATION */}
        <div className={'place-content-center w-full md:w-1/6 p-2 text-xl text-center flex lg:flex-col md:flex-col sm:flex-row xs:flex-row'}> 
          <h2 
            onClick={() => handleOptionClick('random')} 
            onKeyDown={(e) => handleOptionKeyPress(e, 'random')} 
            // tabIndex={0}
            className={onLaptop
              ? (displayOption === 'random' ? "filter-none border-b sm:bg-[#D9D9D9] sm:text-[#261818] cursor-pointer p-1 rounded inline sm:text-center" : "sm:text-center cursor-pointer p-1 rounded inline")
              : (displayOption === 'random' ? "filter-none bg-[#D9D9D9] text-[#261818] cursor-pointer p-1 rounded inline sm:text-center" : "sm:text-center cursor-pointer p-1 rounded inline")
            }
          >
            RANDOM
          </h2>
          <h2 
            onClick={() => handleOptionClick('meaning')} 
            onKeyDown={(e) => handleOptionKeyPress(e, 'meaning')} 
            // tabIndex={0}
            className={onLaptop
              ? (displayOption === 'meaning' ? "border-b sm:bg-[#D9D9D9] sm:text-[#261818] cursor-pointer p-1 rounded inline sm:text-center" : "sm:text-center cursor-pointer p-1 rounded inline")
              : (displayOption === 'meaning' ? "bg-[#D9D9D9] text-[#261818] cursor-pointer p-1 rounded inline sm:text-center" : "sm:text-center cursor-pointer p-1 rounded inline")
            }
          >
            MEANING
          </h2>
        </div>

        {/* CONTENT GOES HERE */}
        <div className='w-full md:w-5/6 p-2 bg-[#D9D9D9] text-center pt-5'>
          {displayOption === 'random' ? (
            // RANDOM NAME GENERATOR FUNCTIONALITY
            <>
              <div className='text-black text-xl font-medium mt-5 mb-5'>
                <p className='inline'>NAME : </p>
                <p className='inline'>{generatedName}</p>
              </div>
              <div className='text-black text-xl font-medium mt-5 mb-5'>
                <p className='inline'>MEANING : </p>
                <p className='inline'>{meaning}</p>
              </div>
              <Button onClick={handleGenerateName} className={onLaptop? 'text-white text-xl w-full font-medium mt-5' : 'text-white text-base w-full font-regular mt-5'}>
                GENERATE RANDOM NAME
              </Button>
            </>
          ) : (
            // USER SEARCHING NAMES MEANING FUNCTIONALITY
            <>
              <div className='text-black'>
                <Input 
                  type="text" 
                  className='w-full border-2 border-black bg-[#D9D9D9] font-normal text-base text-black' 
                  placeholder='ENTER IJAW NAME HERE...'
                  value={nameInput}
                  onChange={handleNameInputChange}
                />
              </div>
              <div className='text-black text-xl font-medium mt-5 mb-5'>
              {secondMeaning ? (
                  <p className='inline'>MEANING : </p>
               ) : ''}
                  <p className='inline'>{secondMeaning}</p>
                <p className='italic inline text-[#8B0505]'>{error}</p>
              </div>
              <Button onClick={handleGetMeaning} className='text-white text-xl w-full font-medium mt-5'>
                FIND MEANING  
              </Button>
            </>
          )}
        </div>
      </div>
      <p className='text-center'>*these names involve names that are not just specific to Kalabari but the ijaws as a whole</p>
    </main>
  );
}
