"use client"
import { useState, useEffect } from 'react';
import FunFacts from '@/assets/data/regionNames.json';
import { Card } from "@/components/ui/card"


const Facts = () => {

  const [facts, setFacts] = useState(FunFacts);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-darkk">
    {facts.map((fact, index) => (
      <Card key={index} className='border my-4 p-2 text-center bg-[#26262D] text-white'>
        <p className="text-sm">{fact.category}</p>
        <h2 className="text-2xl">{fact.text}</h2>
        <br />
      </Card>
    ))}
  </div>
  );
};

export default Facts;