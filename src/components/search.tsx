"use client"
import { onPC } from '@/hooks/use-WindowResize';
import { HiOutlineSearch } from "react-icons/hi";

export default function Search() {
  const onLaptop = onPC(false);
  return (
       <>
        {onLaptop?(
            <div className={`flex items-center gap-2 bg-[#434343] w-[40%] p-2 mt-3`}>
            <span className="inline-block text-[#FFFFFF] border-r-[1px] border-[#000000] pr-2">
              <HiOutlineSearch size={22} className="text-[#FFFFFF]" />
            </span>
            <input type="search" placeholder="Search..." className="w-full bg-[#434343] text-[#FFFFFF] focus:outline-none" />
          </div>
        ): (
            <div className={`flex items-center gap-2 bg-[#434343] w-[60%] p-2 mt-3`}>
        <span className="inline-block text-[#FFFFFF] border-r-[1px] border-[#000000] pr-2">
          <HiOutlineSearch size={22} className="text-[#FFFFFF]" />
        </span>
        <input type="search" placeholder="Search..." className="w-full bg-[#434343] text-[#FFFFFF] focus:outline-none" />
      </div>
        )}
       </>
       
  );
}