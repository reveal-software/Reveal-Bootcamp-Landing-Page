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
      className="max-w-[1050px] w-full lg:mt-[150px] mx-auto grid md:grid-cols-3 gap-6 gap-y-10 md:gap-y-6"
    >
      {inView && (
        <>
          <div className="text-center">
            <h1 className="text-5xl mb-2">
              <CountUp end={7} duration={1} />
            </h1>
            <h1 className="text-xl">Students Enrolled</h1>
          </div>

          <div className="text-center">
            <h1 className="text-5xl mb-2">
              <CountUp end={5} duration={2} />
            </h1>
            <h1 className="text-xl">Instructors</h1>
          </div>

          <div className="text-center">
            <h1 className="text-5xl mb-2">
              <CountUp end={25} duration={4} />
            </h1>
            <h1 className="text-xl">Real World Projects</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default CountSection;
