"use client";
import React from "react";
import { MdOutlineMail } from "react-icons/md";

const Experience = () => {
  return (
    <div className="bg-[url('/images/Group.png')] bg-no-repeat bg-cover bg-center w-full h-[700px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center lg:text-left mt-10 lg:mt-0">
          <h3 className="text-[16px] text-[#5E3BEE] font-poppins pt-[100px]">
            GRAPHIC DESIGNER
          </h3>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#333333] 
          font-bold leading-tight lg:leading-[78px] font-poppins py-[20px] max-w-[480px] mx-auto lg:mx-0"
          >
            Graphic Designer With 10 Years Of{" "}
            <span className="text-[#5e3bee]">Experience.</span>
          </h1>
          <p
            className="
  text-[16px] text-[#333333] font-poppins leading-7 
  max-w-[584px] px-4 mx-auto text-center sm:text-center md:mx-0 md:text-left lg:mx-0 lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
            blandit lectus. Praesent at hendrerit velit, at dictum nisl.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start mt-[25px]">
            <button className="py-4 bg-[#5E3BEE] w-[220px] rounded-4xl text-white text-center flex items-center justify-center gap-x-2 hover:bg-transparent hover:text-black hover:border border duration-300">
              <MdOutlineMail /> CONTACT ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
