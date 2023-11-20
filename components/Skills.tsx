import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoHtml5,
} from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";

const Skills = () => {
  return (
    <div className="">
      <div className="  px-[32px] py-20 gradient-background3  text-gray-800 dark:text-white duration-700  overflow-hidden">
        <div className=" gradient-background3Child"></div>
        <div className="flex items-center justify-center gap-3 text-white md:gap-10 skills-container ">
          <GrReactjs size={50} />
          <BiLogoTypescript size={50} />
          <TbBrandNextjs size={50} />
          <BiLogoTailwindCss size={50} />
          <BiLogoCss3 size={50} />
          <BsGit size={50} />
          <BiLogoHtml5 size={50} />
          <FaNodeJs size={50} />
          <SiGnubash size={50} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
