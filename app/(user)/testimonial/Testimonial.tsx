import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { TiMessage } from "react-icons/ti";

const Testimonial = () => {
  return (
    <div className="bg-[url('/images/testimonial.png')] bg-no-repeat bg-cover bg-center w-full pt-30 pb-20 relative">
      <div className="max-w-[1320px] mx-auto text-center px-4">
        <h3 className="text-[16px] text-[#5E3BEE] font-poppins">TESTIMONY</h3>

        <h1 className="text-[32px] sm:text-[40px] md:text-[44px] font-semibold font-poppins mt-2">
          What Our Clients Say.
        </h1>

        <p className="text-[14px] text-[rgba(18,18,18,0.7)] font-poppins leading-7 max-w-[600px] mx-auto mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
          blandit lectus. Praesent at hendrerit velit, at dictum nisl.
        </p>
        <div className="flex flex-col md:flex-row items-start justify-between relative mt-5 gap-10">

  {/* CARD 1 */}
  <div className="p-[45px] bg-[#ffffff] shadow-lg rounded-2xl w-full md:w-[584px] relative">
    <div className="flex items-center text-[#EEC01C]">
      <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
    </div>

    <p className="text-[18px] font-medium text-left font-poppins leading-[26px] py-[30px]">
      Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem,
      porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum.
    </p>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-5">
        <Image src="/images/Ellipse.png" alt="ellipse" width={64} height={64} />
        <div className="text-left">
          <h3>David Gueta</h3>
          <p>UI/UX Designer</p>
        </div>
      </div>
      <TiMessage className="w-[55px] h-[55px]" />
    </div>
  </div>

  {/* CARD 2 */}
  <div className="p-[45px] bg-[#ffffff] shadow-lg rounded-2xl w-full md:w-[584px] relative">
    <div className="flex items-center text-[#EEC01C]">
      <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
    </div>

    <p className="text-[18px] font-medium text-left font-poppins leading-[26px] py-[30px]">
      Nulla nunc orci, suscipit vitae rutrum vitae, sagittis eget dui. Vestibulum nisl lorem,
      porta at mollis varius, tincidunt in lectus. Nam pulvinar auctor sem ac dictum.
    </p>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-5">
        <Image src="/images/Ellipse.png" alt="ellipse" width={64} height={64} />
        <div className="text-left">
          <h3>David Gueta</h3>
          <p>UI/UX Designer</p>
        </div>
      </div>
      <TiMessage className="w-[55px] h-[55px]" />
    </div>
  </div>

</div>

      </div>
    </div>
  );
};

export default Testimonial;
