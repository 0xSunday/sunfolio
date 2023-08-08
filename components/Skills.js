//use client
import React from "react";

import { SectionWrapper } from "./hoc";
// import { technologies } from "@/data";
import { BallCanvas } from "./canvas";
import { technologies } from "../data";
const Skills = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className=" text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Skills
      </h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas name={technology.name} url={technology.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
