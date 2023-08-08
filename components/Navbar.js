
import React from "react";
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "../data";
import { close, menu } from "../public/assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`w-full relative z-10  sm:pr-16 pr-5 sm:pl-14 pl-4 sm:py-6 py-4 flex justify-between items-center `}
    >
      <div className=" flex  items-center justify-center gap-3 ">
        <Link href="/">
          <Image
            onClick={() => {
              setActive("");
              setToggle(false);
              window.scrollTo(0, 0);
            }}
            className="w-20"
            src="/headLogo.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Link>

        <h3 className="text-2xl font-semibold sm:block hidden">
          Sunil | Portfolio
        </h3>
      </div>
      <ul className={` gap-8 hidden lg:flex`}>
        {navLinks.map((link) => (
          <li
            onClick={() => setActive(link.title)}
            className={`text-2xl hover ${
              active === link.title ? "active" : "hover"
            }`}
            key={link.id}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="flex justify-items-start flex-col items-end lg:hidden ">
        <Image
          onClick={() => {
            setToggle(!toggle);
          }}
          className="w-6 z-20"
          src={toggle ? close : menu}
          width={500}
          height={500}
          alt="menu"
        />
        {toggle && (
          <div className="p-6 backdrop-blur-md border-2 border-[#915eff] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
            <ul className={` gap-5 flex flex-col lg:block items-center`}>
              {navLinks.map((link) => (
                <li
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                  className={`text-2xl hover ${
                    active === link.title ? "active" : "hover"
                  }`}
                  key={link.id}
                >
                  <a className="" href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
