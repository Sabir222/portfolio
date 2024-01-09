import Image, { StaticImageData } from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { AiOutlineGithub } from "react-icons/ai";

interface CardProps {
  key: number;
  projectSrc: StaticImageData;
  projectName: string | undefined;
  projectUrl: string | undefined;
  projectGithub: string | undefined;
}
const ProjectCard: React.FC<CardProps> = ({
  key,
  projectName,
  projectSrc,
  projectUrl,
  projectGithub,
}) => {
  return (
    <div
      className="flex flex-col backdrop-blur-sm bg-opacity-70  gradient-background h-[400px] mb-8 md:mb-0  shadow-lg hover:shadow-zinc-700 ease-in-out duration-500 "
      key={key}
    >
      <div className="h-[15%] "></div>
      <div className="bg-black h-[65%] relative  ">
        <Image
          src={projectSrc}
          objectFit="cover"
          alt="img"
          layout="fill"
          placeholder="blur"
        />
      </div>
      <div className="h-[15%] text-white p-4 flex justify-between items-center md:text-[10px] lg:text-[16px]">
        <div>{projectName}</div>
        <div>
          <a href={projectGithub} target="_blank">
            <button
              className={`flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 bg-opacity-10 top-4 right-4 ${
                projectGithub === undefined && "hidden"
              }`}
            >
              <AiOutlineGithub className="text-white" />
            </button>
          </a>
        </div>
        <div className="">
          <a
            href={projectUrl}
            target="_blank"
            className="flex items-center gap-3"
          >
            <div>Visit</div>
            <HiOutlineArrowLongRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
