import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black py-5"></div>
      <div className="bg-[#3c3d45]">
        <div className="text-white w-11/12 my-0 mx-auto flex pt-5 pb-2">
          <div>Left</div>
          <div>Right</div>
        </div>
      </div>
      <div className="bg-black py-3.5">
        <p className="text-center text-[#6C6C6C] font-medium text-base leading-5">
          Copywrite @ 2024. name, All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
