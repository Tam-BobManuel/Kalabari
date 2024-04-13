import { useState, useEffect } from 'react'; // Added import for useEffect
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import logo from "../assets/logo.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { onPC, onTablet } from '../hooks/use-WindowResize';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetClose, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/history", label: "HISTORY" },
  { path: "/photos", label: "PHOTOS" },
  { path: "/login", label: "LOGIN" }
];

interface CommonLinkProps {
  path: string;
  label: string;
  isActive: boolean;
}

const CommonLink = ({ path, label, isActive }: CommonLinkProps)=> (
  <Link href={path}>
    <p className={`p-5 ${isActive ? "border-b" : ""}`} aria-label={`Navigate to ${label}`}>
      <span className='text-base'>
        <span className='text-italic'>{label}</span>
      </span>
    </p>
  </Link>
);

interface MobileMenuProps {
  navItems: { path: string; label: string }[];
  pathname: string;
}

const MobileMenu = ({ navItems, pathname }: MobileMenuProps)=> {

  useEffect(() => {});

  return (
    <SheetContent className='w-full bg-slate-950 bg-opacity-[90%] text-white border-none'>
      <SheetHeader>
        <SheetClose className='flex justify-end mt-[4.5%]'>
          <HiOutlineX size={42} className='rounded-full bg-white bg-opacity-[20%] text-white'/>
        </SheetClose>
        {/* <SheetTitle></SheetTitle> */}
        <SheetDescription className='text-white'>
          <ul className='mt-4 grid grid-rows'>
            {navItems.map(({ path, label }) => (
              <Link aria-label={`Navigate to ${label}`} key={path} href={path} className={`${pathname === path ? "text-3xl mb-4 justify-start grid grid-cols" : "text-3xl mb-4 justify-start grid grid-cols"}`}>
                {/* <h1 className='text-3xl mb-4 justify-start grid grid-cols'> */}
                  <span className='text-italic' aria-label={label}>{label}</span>
                {/* </h1> */}
              </Link>
            ))}
          </ul>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default function NavBar() {
  const onLaptop = onPC(false);
  const onTab = onTablet(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className={`flex items-center justify-between w-full p-0 pl-5 mb-[10px]  ${pathname === "/" ? "fixed top-[4%] w-[90%]" : "sticky top-[2%] w-full"}`}>
      <Sheet>
        <div className='rounded-full inline w-[50px] overflow-hidden'>
          <Image src={logo} alt="website logo, click to go back" onClick={() => router.back()} />
        </div>
        {onLaptop ? (
          <div className='justify-between bg-white bg-opacity-[4%] backdrop-blur w-[65%] flex items-center justify-center z-40 text-white'>
            <ul className='justify-between flex items-center justify-center px-5 mx-auto space-x-2 text-base'>
              {navItems.map(({ path, label }) => (
                <CommonLink key={path} path={path} label={label} isActive={pathname === path} />
              ))}
            </ul>
          </div>
        ) : (
          <>
            {onTab ? (
              <div className='justify-between bg-white bg-opacity-[4%] backdrop-blur w-[80%] flex items-center justify-center z-40 text-white'>
                <ul className='justify-between flex items-left justify-start mx-auto space-x-2 text-base'>
                  {navItems.map(({ path, label }) => (
                    <CommonLink key={path} path={path} label={label} isActive={pathname === path} />
                  ))}
                </ul>
              </div>
            ) : (
              <div className='justify-between bg-white bg-opacity-[4%] backdrop-blur flex items-center justify-center mr-3'>
                <ul className='justify-between flex items-center justify-center p-2 mx-auto space-x-4'>
                  <li className='flex justify-center items-center text-white'>
                    <SheetTrigger><HiOutlineMenu size={32} aria-label='Mobile menu' /></SheetTrigger>
                  </li>
                </ul>
                <MobileMenu navItems={navItems} pathname={pathname} /> 
              </div>
            )}
          </>
        )}
      </Sheet>
    </nav>
  );
}
