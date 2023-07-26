"use client";
import HeroDiv from "./HeroDiv";
import Header from "./Header";
import Image from "next/image";
import Projects from "./Projects";

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col ">
        <Header
          firstp="Hello, I'm Sabir Welcome to my Webiste"
          secondp="Self-taught web developer with a passion for creativity and endless
          possibilities. Happy to collaborate as a web developer."
        />
        <div className="h-full   bg-[#EEEEEE] pb-[80px]">
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Hero;
