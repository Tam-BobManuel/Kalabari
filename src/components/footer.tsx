import Link from "next/link";
import Image from 'next/image';
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <div className="bg-[#0B0D17] py-5"></div> */}
      <div className="bg-[#3c3d45] mt-2">
        <div className="text-white w-11/12 my-0 mx-auto flex flex-col-reverse gap-y-3.5 md:flex-row lg:flex-row items-center justify-between pt-5 pb-2">
          <div className="flex flex-col text-center gap-y-1.5 md:text-right lg:text-right w-fit">
            <h3 className="font-normal text-sm">
              SUBSCRIBE TO OUR NEWS LETTTER
            </h3>
            <div className="flex items-center gap-x-2.5 justify-end border-b border-[#8D8D8D]">
              <div className="basis-full lg:basis-1/2 w-full">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="text-[#737C87] outline-[#737C87] text-sm font-normal w-[100%] lg:w-[256px] py-1 px-3 bg-transparent"
                />
              </div>
              <div className="text-[#737C87]">|</div>
              <div className="lg:basis-1/4">
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="flex items-center gap-x-2.5 text-sm text-[#737C87] font-normal p-2.5">
                  Subscribe <Image src="/icons/Arrow Up.svg" alt="Arrow Up" width={35} height={35}/>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-1.5 md:items-end lg:items-end w-fit">
            <h3 className="font-normal text-sm">
              CONTACT US
            </h3>
            <div className="flex items-center gap-x-2.5">
              <Link href="">
              <Image src="/icons/Facebook.svg" alt="Facebook" width={35} height={35}/>
              </Link>
              <Link href="">
              <Image src="/icons/Tik Tok.svg" alt="Tik Tok" width={35} height={35}/>
              </Link>
              <Link href="">
              <Image src="/icons/Instagram.svg" alt="Instagram" width={35} height={35}/>
              </Link>
              <Link href="">
              <Image src="/icons/Email.svg" alt="Email" width={35} height={35}/>
              </Link>
              <Link href="">
              <Image src="/icons/X.svg" alt="X" width={35} height={35}/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0B0D17] py-3.5">
        <p className="text-center text-[#6C6C6C] font-medium text-base leading-5">
          Copywrite @ 2024. name, All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
