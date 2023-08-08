import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "./public/assets";

import { kandyland } from "./public/projectsImg/kandyland.png";
import { blog } from "./public/projectsImg/blog.png";
import { momoguro } from "./public/projectsImg/momoguro.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },

  // {
  //   id: "experience",
  //   title: "Experience",
  // },

  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "blockchain Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "html",
    // icon: html,
    url: "/assets/tech/html.png",
  },

  {
    name: "css",
    // icon: css,
    url: "/assets/tech/css.png",
  },
  {
    name: "javascript",
    // icon: javascript,
    url: "/assets/tech/javascript.png",
  },
  {
    name: "typescript",
    icon: typescript,
    url: "/assets/tech/typescript.png",
  },
  {
    name: "reactjs",
    // icon: reactjs,
    url: "/assets/tech/reactjs.png",
  },
  {
    name: "nextjs",
    // icon: git,
    url: "/assets/tech/nextjs.png",
  },
  {
    name: "redux",
    // icon: redux,
    url: "/assets/tech/redux.png",
  },
  {
    name: "tailwind",
    // icon: tailwind,
    url: "/assets/tech/tailwind.png",
  },
  {
    name: "nodejs",
    // icon: nodejs,
    url: "/assets/tech/nodejs.png",
  },
  {
    name: "mongodb",
    // icon: mongodb,
    url: "/assets/tech/mongodb.png",
  },

  {
    name: "git",
    // icon: git,
    url: "/assets/tech/git.png",
  },

  {
    name: "solidity",
    // icon: solidty,
    url: "/assets/tech/solidity.png",
  },
  {
    name: "threejs",
    // icon: threejs,
    url: "/assets/tech/threejs.png",
  },
  {
    name: "c++",
    // icon: c++,
    url: "/assets/tech/c++.png",
  },
];

const projects = [
  {
    name: "KandyLand",
    description: "An interactive NFT website for kandyland nft.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer motion",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectsImg/kandyland.png",
    link: "https://kandyland-mocha.vercel.app/",
    source_code_link: "https://github.com/0xSunday/kandyland",
  },
  {
    name: "Blog",
    description: "The ultime Personal Blog website .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "markdown",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectsImg/blog.png",
    link: "https://blog-seven-gamma-55.vercel.app/",
    source_code_link: "https://github.com/0xSunday/blog",
  },
  {
    name: "Momoguro",
    description: "An interactive NFT website for Momoguro nft.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/projectsImg/momoguro.png",
    link: "https://momoguro-0xsunday.vercel.app/",
    source_code_link: "https://github.com/0xSunday/momoguro",
  },
];

export { services, technologies, projects };
