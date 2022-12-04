import React from "react";
import CountUp from "react-countup";

const CountSection = () => {
  return (
    <div className="max-w-[1050px] w-full mt-[150px] mx-auto grid grid-cols-3 gap-6">
      <div className="text-center">
        <h1 className="text-5xl mb-2">
          <CountUp end={7} duration={1} />
        </h1>
        <h1 className="text-xl">Students Enrolled</h1>
      </div>

      <div className="text-center">
        <h1 className="text-5xl mb-2">
          <CountUp end={7} duration={5} />
        </h1>
        <h1 className="text-xl">Instructors</h1>
      </div>

      <div className="text-center">
        <h1 className="text-5xl mb-2">
          <CountUp end={25} duration={4} />
        </h1>
        <h1 className="text-xl">Real World Projects</h1>
      </div>
    </div>
  );
};

export default CountSection;
