import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoCss3,
  BiLogoHtml5,
} from "react-icons/bi";
const Skills = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center gap-3 md:gap-10 px-[32px] py-20 dark:bg-black text-gray-800 dark:text-white duration-700">
        <GrReactjs size={50} />
        <BiLogoTypescript size={50} />
        <TbBrandNextjs size={50} />
        <BiLogoTailwindCss size={50} />
        <BiLogoCss3 size={50} />
        <BsGit size={50} />
        <BiLogoHtml5 size={50} />
      </div>
    </div>
  );
};

export default Skills;
