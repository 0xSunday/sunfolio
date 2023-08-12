import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Skills from "../../components/Skills";
import { StarsCanvas } from "../../components/canvas";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> Sunil | Portfolio</title>
        <meta name="sunil reddy" content="sunil reddy personal portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shotcut icon" href="/srlogo.png" />
      </Head>
      <div className="flex flex-col relative z-0 bg-primary">
        <div className="hero bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Skills />
        <Projects />
        {/* <Experience />   */}

        <div>
          {/* <Contact /> */}
          {/* <StarsCanvas /> */}
          {/* <Links /> */}
        </div>
      </div>
    </>
  );
}
