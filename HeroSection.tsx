import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className=" w-[1760px] ml-[190px] bg-[#F0F2F3]">
      <div className="flex flex-col lg:flex-row items-center lg:w-[1420px] lg:h-[850px] lg:ml-[290px]">
        <div className="flex flex-col lg:w-[50%] px-6 lg:px-20 lg:mt-20">
          <div className="text-lg lg:text-xl font-serif text-[#272343] mt-10 lg:mt-[229px]">
            WELCOME TO CHAIRY
          </div>
          <div className="mt-6 lg:mt-10 text-3xl lg:text-6xl font-sans font-bold text-[#272343] leading-xl">
            Best Furniture Collection for your interior.
          </div>
          <div className="flex items-center mt-6 lg:mt-10 gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#029FAE] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#027a87] transition">
              Shop Now
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="lg:w-[50%] mt-10 lg:mt-0">
          <img
            className="w-full h-auto lg:h-[600px] object-cover"
            src="/image/BG.png"
            alt="chair"
          />
        </div>
      </div>

      <div className="flex justify-center flex-wrap items-center w-full mt-10 lg:mt-20 gap-6 lg:gap-12">
        <img
          className="w-20 lg:w-40 h-auto"
          src="/image/comlogo.svg"
          alt="logos"
        />
       
      </div>
    </div>
  );
};

export default HeroSection;