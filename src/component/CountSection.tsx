import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountSection = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0
  });

  return (
    <div
      ref={ref}
      className="border-t max-w-[1050px] w-full mt-[50px] md:mt-[80px] lg:mt-[100px] pt-[50px] md:pt-[80px] lg:pt-[100px] mx-auto grid grid-cols-3 gap-6 gap-y-10 md:gap-y-6"
    >
      {inView && (
        <>
          <div className="text-left md:text-center mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl text-yellow-400 xl:text-9xl font-[700] mb-2">
              <CountUp end={7} duration={1} /> +
            </h1>
            <h1 className="text-sm md:text-lg lg:text-xl mt-3 xl:mt-5 font-[700] md:font-normal">
              Students Enrolled
            </h1>
          </div>

          <div className="text-left md:text-center mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl text-yellow-400 xl:text-9xl font-[700] mb-2">
              <CountUp end={5} duration={2} /> +
            </h1>
            <h1 className="text-sm md:text-lg lg:text-xl mt-3 xl:mt-5 font-[700] md:font-normal">
              Instructors
            </h1>
          </div>

          <div className="text-left md:text-center mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl text-yellow-400 xl:text-9xl font-[700] mb-2">
              <CountUp end={25} duration={4} /> +
            </h1>
            <h1 className="text-sm md:text-lg lg:text-xl mt-3 xl:mt-5 font-[700] md:font-normal">
              Real World Projects
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default CountSection;
