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
      className="border-t max-w-[1050px] w-full mt-[100px] pt-[100px] mx-auto grid md:grid-cols-3 gap-6 gap-y-10 md:gap-y-6"
    >
      {inView && (
        <>
          <div className="text-center">
            <h1 className="text-6xl text-yellow-400 xl:text-9xl font-[700] mb-2">
              <CountUp end={7} duration={1} /> +
            </h1>
            <h1 className="text-lg lg:text-xl mt-3 xl:mt-5">
              Students Enrolled
            </h1>
          </div>

          <div className="text-center">
            <h1 className="text-6xl text-yellow-400 xl:text-9xl font-[700] mb-2">
              <CountUp end={5} duration={2} /> +
            </h1>
            <h1 className="text-lg lg:text-xl mt-3 xl:mt-5">Instructors</h1>
          </div>

          <div className="text-center">
            <h1 className="text-6xl text-yellow-400 xl:text-9xl font-[700] mb-2">
              <CountUp end={25} duration={4} /> +
            </h1>
            <h1 className="text-lg lg:text-xl mt-3 xl:mt-5">
              Real World Projects
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default CountSection;
