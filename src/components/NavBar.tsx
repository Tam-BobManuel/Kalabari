import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'; // Import useRouter hook
import logo from "../assets/shared/logo.png";
// import hamburger from '../assets/shared/icon-hamburger.svg';
import { HiOutlineMenu ,HiOutlineX } from "react-icons/hi";
import closeBtn from '../assets/shared/icon-close.svg';
import useWindowResize from '../hooks/use-WindowResize'; // Import the useWindowResize hook
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export default function NavBar() {
  const onPC = useWindowResize(false); // Use the useWindowResize hook
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

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
      
    <Drawer>

      <div className='rounded-full inline w-[70px] overflow-hidden'>
        <Image src={logo}  alt="Brand logo"  onClick={() => router.back()}/>
      </div>
      {onPC ? (
       <div className='justify-between bg-white bg-opacity-[4%] backdrop-blur w-[60%] flex items-center justify-center z-40 text-white'>
        <ul className='justify-between flex items-center justify-center px-5 mx-auto space-x-4 text-base'>
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
      ) : (
        <div className='justify-between bg-white bg-opacity-[4%] backdrop-blur flex items-center justify-center mr-3'>
          <ul className='justify-between flex items-center justify-center p-5 mx-auto space-x-4'>
            <li className='flex justify-center items-center text-white'>
              {/* <Image src={hamburger} alt="Navigation Button" className='mx-auto' /> */}
              
              <DrawerTrigger><HiOutlineMenu  size={42}/></DrawerTrigger>
            </li>
          </ul>
        </div>
      )}
     
        <DrawerContent vaul-drawer-direction="right">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
