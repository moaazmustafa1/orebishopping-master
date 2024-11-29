import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3]   ">
      <div className="max-w-container mx-auto border-t-[1px] pt-8 ">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex mb-8">
            <AiOutlineCopyright  />
          </span>
          
          <span className="ml-1 font-medium group-hover:text-primeColor mb-8 ">
          Copyright Powered by myz 2025
          </span>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
