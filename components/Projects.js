//use client
// import { fadeIn, textVariant } from "@/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc";
// import { projects } from "@/data";
import ProjectCard from "./hoc/ProjectCard";
// import { github } from "@/public/assets";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";
import { projects } from "../data";
import { fadeIn, textVariant } from "../motion";
const Projects = () => {
  return (
    <>
      <motion.div id="projects" variants={textVariant()} className="w-full">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase ">
          my work
        </p>
        <h1 className=" text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects
        </h1>
      </motion.div>

      <motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {" "}
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </motion.div>
      <div className="flex flex-row justify-center items-center">
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

        <div className="absolute xl:right-0 bottom-0 xl:bottom-0 xl:top-80 flex justify-center items-center">
          <Link href="/projects">
            <BsFillArrowRightCircleFill size={50} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
