"use client"
import { useState, useEffect } from 'react';
import FunFacts from '@/assets/data/regionNames.json';

const Facts = () => {
  const [facts, setFacts] = useState<
  {
    category: string;
    text: string;
  }[]
>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setFacts(FunFacts);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      if (hasMore) {
        setLoading(true);
        setTimeout(() => {
          const newFacts = FunFacts.slice(facts.length, facts.length + 10);
          setFacts([...facts, ...newFacts]);
          setLoading(false);
          if (newFacts.length < 10) {
            setHasMore(false);
          }
        }, 1000); // simulate delay
      }
    }
  };

  return (
    <div
      className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-darkk"
      onScroll={handleScroll}
    >
      {facts.map((fact, index) => (
        <div
          key={index}
          // style={{
          //   position: 'relative',
          //   top: `${Math.random() * 100}%`,
          //   left: `${Math.random() * 100}%`,
          //   textAlign: 'center',
          // }}
        >
          <h2 className="text-2xl">{fact.text}</h2>
          <p className="text-sm">{fact.category}</p>
          <br />
        </div>
      ))}
      {loading && (
        <div className="text-center">
          <svg
            className="animate-spin h-8 w-8 text-gray-500"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Facts;