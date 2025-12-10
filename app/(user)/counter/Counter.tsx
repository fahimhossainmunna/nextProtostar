"use client";

import CountUp from "react-countup";

export default function Counter() {
  return (
    <div className="w-full py-16">
      <div className="max-w-[1420px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">

        {/* 1 */}
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl font-semibold font-poppins leading-tight">
            <CountUp end={100} duration={2} />+
          </h3>
          <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-medium leading-6">
            PROJECTS
          </p>
        </div>

        {/* 2 */}
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl font-semibold font-poppins leading-tight">
            <CountUp end={24} duration={2} />
          </h3>
          <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-medium leading-6">
            WINNING AWARD
          </p>
        </div>

        {/* 3 */}
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl font-semibold font-poppins leading-tight">
            <CountUp end={70} duration={2} />+
          </h3>
          <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-medium leading-6">
            HAPPY CLIENTS
          </p>
        </div>

        {/* 4 */}
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl font-semibold font-poppins leading-tight">
            <CountUp end={10} duration={2} />
          </h3>
          <p className="text-[16px] text-[rgba(18,18,18,0.7)] font-medium leading-6">
            YEAR EXPERIENCE
          </p>
        </div>

      </div>
    </div>
  );
}
