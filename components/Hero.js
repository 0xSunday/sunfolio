 //use client
// import { styles } from "@/styles";
import React from "react";
import { motion } from "framer-motion";

import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [text] = useTypewriter({
    words: [" Sunil Reddy", "A Developer"],

    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="relative -z-0 w-full h-screen mx-auto -mt-24">
      <div className=" absolute top-24 z-10 right-0 left-0 sm:pl-16 pl-5  flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-60 violet-gradient" />
        </div>
        <div className="flex flex-col gap-5 w-full  ">
          <h1
            className={`font-black lg:text-[80px] sm:text-[55px] xs:text-[45px] text-[31px] lg:leading-[98px] mt-2 text-white`}
          >
            Im <span className="text-[#915eff]">{text}</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[20px] lg:leading-[40px]">
            Full Stack Web And <br className="md:hidden block" /> Blockchain
            Developer{" "}
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute sm:bottom-8 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[54px] rounded-3xl sm:border-4 border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
