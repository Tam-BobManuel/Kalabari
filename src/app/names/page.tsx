'use client'
import React, { useState } from 'react';
//@ts-expect-error
import ijawNames from 'ijaw-names';

export default function Page() {
  const [nameInput, setNameInput] = useState('');
  const [meaning, setMeaning] = useState('');
  const [generatedName, setGeneratedName] = useState('');

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
    setMeaning(result.meaning);
  };

  return (
    <div>
      <h1>Ijaw Names Generator</h1>
      <div>
        <label htmlFor="nameInput">Enter Name:</label>
        <input
          type="text"
          id="nameInput"
          value={nameInput}
          onChange={handleNameInputChange}
          className={'text-black'}
        />
        <button onClick={handleGetMeaning}>Get Meaning</button>
      </div>
      <div>
        <button onClick={handleGenerateName}>Generate Random Name</button>
      </div>
      <div>
        {generatedName && (
          <p>
            Random Ijaw Name: {generatedName}
          </p>
        )}
        {meaning && (
          <p>
            Meaning: {meaning}
          </p>
        )}
      </div>
    </div>
  );
}
