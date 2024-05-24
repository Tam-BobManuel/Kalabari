"use client"
import { useState, useEffect } from 'react';
import FunFacts from '../../assets/data/funFacts.json';

const Facts = () => {

  const [facts, setFacts] = useState(FunFacts);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-darkk">
    {facts.map((fact, index) => (
      <div key={index}>
        <h2 className="text-2xl">{fact.text}</h2>
        <p className="text-sm">{fact.category}</p>
        <br />
      </div>
    ))}
  </div>
  );
};

export default Facts;