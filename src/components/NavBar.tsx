"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import logo from "../assets/logo.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useOnPC, useOnTablet } from '@/hooks/useWindowResize';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetClose, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/history", label: "HISTORY" },
  { path: "/photos", label: "PHOTOS" },
  { path: "/names", label: 'NAMES' },
  { path: "/about-us.php", label: "ABOUT US" }
];

interface CommonLinkProps {
  path: string;
  label: string;
  isActive: boolean;
}

const CommonLink = ({ path, label, isActive }: CommonLinkProps) => (
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
  closeMenu: () => void;
}

const MobileMenu = ({ navItems, pathname, closeMenu }: MobileMenuProps) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    closeMenu(); // Close the menu
    router.push(path); // Navigate to the selected path
  };

  return (
    <SheetContent className='w-full bg-slate-950 bg-opacity-[90%] text-white border-none'>
      <SheetHeader>
        <SheetClose className='flex justify-end mt-[4.5%]' onClick={closeMenu}>
          <HiOutlineX size={42} className='rounded-full bg-white bg-opacity-[20%] text-white' />
        </SheetClose>
        <SheetDescription className='text-white'>
          <ul className='mt-4 grid grid-rows'>
            {navItems.map(({ path, label }) => (
              <li key={path} className={`${pathname === path ? "text-3xl mb-4 justify-start grid grid-cols" : "text-3xl mb-4 justify-start grid grid-cols"}`}>
                <button
                  aria-label={`Navigate to ${label}`}
                  className='text-italic'
                  onClick={() => handleNavigation(path)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default function NavBar() {
  const onLaptop = useOnPC(false);
  const onTab = useOnTablet(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`flex items-center justify-between w-full p-0 pl-5 mb-[10px] z-50 ${pathname === "/" ? "fixed top-[4%] w-[90%]" : "sticky top-[2%] w-full"}`}>
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
                    <SheetTrigger onClick={openMenu}>
                      <HiOutlineMenu size={32} aria-label='Mobile menu' />
                    </SheetTrigger>
                  </li>
                </ul>
                {isMenuOpen && <MobileMenu navItems={navItems} pathname={pathname ? String(pathname) : ''} closeMenu={closeMenu} />}
              </div>
            )}
          </>
        )}
      </Sheet>
    </nav>
  );
}
