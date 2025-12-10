import React from 'react'

const profile = [
  {
    title: "Creativa - Elementor Template Kit",
    category: "UI/UX Design",
  },
  {
    title: "Nusapp - Elementor Template Kit",
    category: "UI/UX Design",
  },
  {
    title: "Webina - Elementor Template Kit",
    category: "UI/UX Design",
  },
  {
    title: "Marketin - Elementor Template Kit",
    category: "UI/UX Design",
  },
];

const AboutPage = () => {
  return (
    <div>
      <div className="max-w-[1320px] mx-auto py-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div>
            <h3 className="text-[16px] text-[#5E3BEE] font-poppins">
              PORTFOLIO
            </h3>
            <h2 className='text-[44px] font-semibold font-poppins leading-14'>
              Selected Works.
            </h2>
          </div>

          <div>
            <p className='text-[16px] text-[rgba(22,22,22,0.7)] font-poppins leading-8 max-w-[557px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* {profile.map((item, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-xl overflow-hidden"
            >
              
              <div className="h-[260px] bg-gray-300 w-full"></div>

              
              <div className="p-6">
                <h3 className="text-[16px] font-poppins font-medium">
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-500 font-poppins mt-1">
                  {item.category}
                </p>
              </div>
            </div>
          ))} */}
          {profile.map((item, index)=>(
            <div key={index} className='bg-white shadow-lg rounded-xl overflow-hidden'>
              <div className="h-[360px] bg-gray-300 w-full"></div>
              <div className="p-6">
                <h3 className='text-[16px] font-poppins font-medium'>
                  {item.title}
                </h3>
                <p className='text-[14px] text-gray-500 font-poppins mt-1'>
                  {item.category}
                </p>
              </div>
              

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default AboutPage;
