'use client'
import { useState, useEffect } from 'react';
import { HiOutlineSearch } from "react-icons/hi";

interface Imager {
  id: string;
  data: {
    image: string;
    title: string;
    description: string;
  };
}

export default function Search({ images, setFilteredImages }: { images: Imager[]; setFilteredImages: React.Dispatch<React.SetStateAction<Imager[]>> }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filtered = images.filter(image =>
      image.data.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [searchTerm, images, setFilteredImages]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={'flex items-center gap-2 bg-[#434343] w-full lg:w-[40%] p-2 mt-6 mb-3'}>
      <span className="inline-block text-[#FFFFFF] border-r-[1px] border-[#000000] pr-2">
        <HiOutlineSearch size={22} className="text-[#FFFFFF]" />
      </span>
      <input
        type="search"
        placeholder="Search..."
        className="w-full bg-[#434343] text-[#FFFFFF] focus:outline-none"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
}
