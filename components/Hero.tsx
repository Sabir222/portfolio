"use client";
import HeroDiv from "./HeroDiv";
import Header from "./Header";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="h-[100vh] flex flex-col overflow-hidden ">
        <Header
          firstp="Hello, I'm Sabir Welcome to my Webiste"
          secondp="Self-taught web developer with a passion for creativity and endless
          possibilities. Happy to collaborate as a web developer."
        />
        <div className="md:h-[50vh] p-5 md:p-0 h-auto bg-[#EEEEEE] flex flex-col justify-center items-center gap-3  relative second-div">
          <HeroDiv
            source="work.svg"
            title="Projects"
            rounded="md:rounded-l-xl"
            custom=" top-[15%] right-0"
            flex=""
          />
          <HeroDiv
            source="about.svg"
            title="About"
            rounded="md:rounded-l-xl"
            custom=" top-[55%] right-0"
            flex=""
          />
          <HeroDiv
            source="socials.svg"
            title="Socials"
            rounded="md:rounded-r-xl"
            custom=" top-[15%] left-0"
            flex="justify-end"
          />
          <HeroDiv
            source="contact.svg"
            title="Contact"
            rounded="md:rounded-r-xl"
            custom=" top-[55%] left-0"
            flex="justify-end"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
