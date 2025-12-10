import React from "react";
import { FiHexagon, FiBox, FiEye } from "react-icons/fi";

const services = [
  {
    icon: <FiHexagon className="text-[32px] text-[#5E3BEE]" />,
    title: "UI/UX Design",
    desc: "lorem ipsum dolor sit amet consectetur adi pising leo",
  },
  {
    icon: <FiBox className="text-[32px] text-[#5E3BEE]" />,
    title: "Product Design",
    desc: "lorem ipsum dolor sit amet consectetur adi pising leo",
  },
  {
    icon: <FiEye className="text-[32px] text-[#5E3BEE]" />,
    title: "Motion Graphics",
    desc: "lorem ipsum dolor sit amet consectetur adi pising leo",
  },
];

const ServiceSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-[1320px] mx-auto text-center">

        {/* Top Titles */}
        <h3 className="text-[16px] text-[#5E3BEE] font-poppins tracking-wide">
          SERVICES
        </h3>

        <h2 className="text-[44px] font-semibold font-poppins mt-2">
          What I Do For My Customer.
        </h2>

        <p className="text-[16px] w-[620px] mx-auto text-gray-500 font-poppins leading-7 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg py-15 px-6 text-center hover:-translate-y-2 duration-300"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-[20px] font-semibold font-poppins">
                {item.title}
              </h3>
              <p className="text-[rgba(18,18,18,0.69)] font-poppins text-[16px] mt-2 leading-8 w-[307px] mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;
