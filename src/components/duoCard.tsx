"use client"
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { useOnPC } from '../hooks/useWindowResize';
import imgPlaceholder from '../assets/Images/home-Img/Blurred-GI5YHyFXsAAHRGi.svg';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DuoCardProps {
  text: React.ReactNode;
  imageUrl: string | StaticImageData;
  mobileImageUrl?: string | StaticImageData;
  linkUrl: string;
  linkText: string;
  heading?: string;
  reverse?: boolean;
}

const DuoCard: React.FC<DuoCardProps> = ({ text, imageUrl, mobileImageUrl, linkUrl, linkText, heading, reverse }) => {
  const pathname = usePathname();
  const onLaptop = useOnPC(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  if (mobileImageUrl==='' || mobileImageUrl=== null || mobileImageUrl===undefined) {
    mobileImageUrl = imgPlaceholder.src;
  }
  const mobileBgImg = {
    backgroundImage: `url(${mobileImageUrl})`,
    background: `url(${mobileImageUrl}) no-repeat center center`,
    width: '100%',
    backgroundSize: 'cover',
  }
  

  return (
    <motion.div
      initial={{ x: reverse ? 100 : -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`justify-center flex items-center w-full contain border-box overflow-hidden ${onLaptop ? 'flex-row' : 'flex-col'}`}
    >
      {onLaptop? (
        <>
          <div className={`${reverse ? 'flex-row-reverse' : ''} pt-0  px-2 flex mb-[20px] h-[3/4] overflow-none ${onLaptop ? 'flex-row' : 'flex-col'}`}>
            <div className={`w-[60%] h-[70%] container ${reverse ? 'ml-5' :'mr-5'} inline justify-self-stretch overflow-hidden bg-white bg-opacity-[4%] p-5`}>
              {/* {pathname === '/history' ? ('')  */}
              <h1 className="text-center text-white text-3xl">{heading}</h1>
              <span className="text-white justify-self-stretch max-w-sm text-base">
                {text}
              </span>
              <div className="mt-[5%] mx-0 px-0 pl-0 w-full border-box container relative">
                <Link href={linkUrl} passHref className="text-black bg-white text-xl mx-0 ml-0 px-4 py-2 rounded-md">
                  {linkText}
                </Link>
              </div>
            </div>
            <div className="w-[40%] max-h-[450px] inline justify-self-stretch overflow-hidden">
              <Image src={imageUrl} alt="some Images on the Kalabari culture" objectFit='cover' width={1665}height={100}/>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={'h-[50%]  p-[20%] flex items-center justify-center w-full'} style={mobileBgImg}>
            <div className='h-full w-full flex items-center justify-center' ><h1 className="text-center text-white text-3xl">{heading}</h1></div>
          </div>
          <div className="w-full container inline justify-self-stretch bg-white bg-opacity-[4%] p-5">
            <span className="text-white justify-self-stretch max-w-sm text-base">
              {text}
            </span>
            <div className="mt-3 w-full">
              <Link href={linkUrl} passHref className=' w-full flex items-center justify-center text-black text-center bg-white text-xl px-4 py-2 rounded-md'>
                {linkText}
              </Link>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default DuoCard;