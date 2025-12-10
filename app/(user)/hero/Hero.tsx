"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="bg-[#F9F9FC] pt-[16px] pb-[40px]">
      <div className="max-w-[1320px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-5 lg:px-0">

        {/* LEFT TEXT */}
        <div className="text-center lg:text-left mt-10 lg:mt-0">
          <h3 className="text-[16px] text-[#5E3BEE] font-poppins">
            Fahim Hossain Munna
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#333333] 
          font-bold leading-tight lg:leading-[78px] font-poppins py-[20px] max-w-[480px] mx-auto lg:mx-0">
            Hello, my name’s Fahim. I’m{" "}
            <span className="text-[#5e3bee] text-4xl">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Backend Developer",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h1>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className="py-4 bg-[#5E3BEE] w-[220px] rounded-4xl text-white text-center flex items-center justify-center gap-x-2 hover:bg-transparent hover:text-black hover:border border duration-300">
              <MdOutlineMail /> CONTACT ME
            </button>

            <button className="py-4 bg-[#5E3BEE] w-[220px] rounded-4xl text-white text-center flex items-center justify-center gap-x-2 hover:bg-transparent hover:text-black hover:border border duration-300">
              <LuDownload /> DOWNLOAD CV
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/Avatar.png"
            alt="avatar.png"
            width={700}
            height={686}
            className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
