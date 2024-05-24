"use client"
import { useState, useEffect } from 'react';
import FunFacts from '../../assets/data/funFacts.json';

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
        const newFacts = FunFacts.slice(facts.length, facts.length + 10);
        setFacts([...facts, ...newFacts]);
        setHasMore(newFacts.length < 10 ? false : true);
        setLoading(false);
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