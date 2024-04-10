import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; // Import useRouter hook
import logo from "../assets/shared/logo.png";
// import hamburger from '../assets/shared/icon-hamburger.svg';
import { HiOutlineMenu ,HiOutlineX } from "react-icons/hi";
import {onPC,onTablet} from '../hooks/use-WindowResize'; // Import the useWindowResize hook
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"

export default function NavBar() {
  const onLaptop = onPC(false);
  const onTab = onTablet(false);
  const router = useRouter();
  const pathname = usePathname();

  // const [sheetOpen, setSheetOpen] = useState(true);

  // const closeSheet = () => {
  //   setSheetOpen(false);
  // };
  // Navigation items styles
  const commonLinkClass = "p-5";
  const activeLinkClass = "border-b";

  // Navigation items data with index
  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/history", label: "HISTORY" },
    { path: "/photos", label: "PHOTOS" },
    { path: "/login", label: "LOGIN" }
  ].map((item, index) => ({ ...item, index }));

  return (
    <nav className={`flex items-center justify-between w-full p-0 pl-5 fixed top-[4%] ${pathname === "/" ? "w-[90%]" : ""}`}>
      
    <Sheet>

      <div className='rounded-full inline w-[70px] overflow-hidden'>
        <Image src={logo}  alt="Brand logo"  onClick={() => router.back()}/>
      </div>
      {onLaptop ? (
       <div className='justify-between bg-white bg-opacity-[4%] backdrop-blur w-[65%] flex items-center justify-center z-40 text-white'>
        <ul className='justify-between flex items-center justify-center px-5 mx-auto space-x-2 text-base'>
          {navItems.map(item => (
            <Link key={item.path} href={item.path} className={`${pathname === item.path ? `${activeLinkClass} ` : ""}${commonLinkClass}`}>
              <span className='text-base'>
                {/* {`${item.index < 10 ? `0${item.index}` : item.index} ${item.label}`}  */}
                <span className='text-italic'>{`${item.index < 10 ? `0${item.index}` : item.index}`}  </span>
                <span>{`${item.label}`}</span>
              </span>
            </Link>
          ))}
        </ul>
      </div>
      ) :(
        <>
          {onTab?(
            <div className='justify-between bg-white bg-opacity-[4%] backdrop-blur w-[80%] flex items-center justify-center z-40 text-white'>
            <ul className='justify-between flex items-left justify-start px-2 mx-auto space-x-2 text-base'>
              {navItems.map(item => (
                <Link key={item.path} href={item.path} className={`${pathname === item.path ? `${activeLinkClass} ` : ""}${commonLinkClass}`}>
                  <span className='text-base'>
                    {/* {`${item.index < 10 ? `0${item.index}` : item.index} ${item.label}`}  */}
                    <span className='text-italic'>{`${item.index < 10 ? `0${item.index}` : item.index}`}  </span>
                    <span>{`${item.label}`}</span>
                  </span>
                </Link>
              ))}
            </ul>
          </div>
          ):(
            <div className='justify-between bg-white bg-opacity-[4%] backdrop-blur flex items-center justify-center mr-3'>
            <ul className='justify-between flex items-center justify-center p-5 mx-auto space-x-4'>
              <li className='flex justify-center items-center text-white'>
                {/* <Image src={hamburger} alt="Navigation Button" className='mx-auto' /> */}
                
                <SheetTrigger><HiOutlineMenu  size={42}/></SheetTrigger>
              </li>
            </ul>
            <SheetContent className='w-full bg-slate-950 p-0 bg-opacity-[90%] text-white border-none'>
              <SheetHeader>
                <SheetClose className='flex justify-end mt-[4.5%]'>
                  <HiOutlineX size={42} className='rounded-full bg-white bg-opacity-[20%] text-white'/>
                </SheetClose>
                <SheetTitle></SheetTitle>
                <SheetDescription className='text-white w-full'>
                <ul className='mt-4 w-full'>
                  {navItems.map(item => (
                    <Link key={item.path} href={item.path} className={`${pathname === item.path ? "" : ""}`}>
                      <h1 className='text-3xl mb-4 justify-start grid grid-rows'>
                        {/* {`${item.index < 10 ? `0${item.index}` : item.index} ${item.label}`}  */}
                        <span className='text-italic'>{`${item.index < 10 ? `0${item.index} ${item.label}` : item.index}`}  </span>
                        {/* <span>{`${item.label}`}</span> */}
                      </h1>
                    </Link>
                  ))}
                </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </div>
          )}
        </>
      )}
      </Sheet>
    </nav>
  );
}
