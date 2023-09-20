import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import MovieWebsite from "../public/moviewebsite.png";
import Crypto from "../public/crypto.png";
import RealEstate from "../public/realestate.png";
import { AiOutlineGithub } from "react-icons/ai";
const projects = [
  {
    name: "Real Estate Website",
    url: "https://real-estate-phi-three.vercel.app/",
    src: RealEstate,
    github: "https://github.com/Sabir222/real-estate",
  },
  {
    name: "Crypto Tracker",
    url: "https://crypto-tracker-2-six.vercel.app/",
    src: Crypto,
    github: "https://github.com/Sabir222/crypto-tracker",
  },
  {
    name: "Movie App",
    url: "https://movie-swart-five.vercel.app/",
    src: MovieWebsite,
    github: "https://github.com/Sabir222/Movie",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col mt-[80px] max-w-[1400px] mx-auto">
      <div className=" px-[32px] mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 ">Projects</h1>
      </div>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className=" md:grid md:grid-cols-3 px-[32px]  gap-3 md:w-[80%]  ">
          {projects.map((project, key) => {
            return (
              <div
                className="flex flex-col backdrop-blur-sm bg-opacity-70  animation-div3 h-[400px] mb-8 md:mb-0  shadow-lg hover:shadow-zinc-700 ease-in-out duration-500 "
                key={key}
              >
                <div className="h-[15%] "></div>
                <div className="bg-black h-[65%] relative  ">
                  <Image
                    src={project.src}
                    objectFit="cover"
                    alt="img"
                    layout="fill"
                    placeholder="blur"
                  />
                </div>
                <div className="h-[15%] text-white p-4 flex justify-between items-center md:text-[10px] lg:text-[16px]">
                  <div>{project.name}</div>
                  <div>
                    <a href={project.github} target="_blank">
                      <button className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 bg-opacity-10 top-4 right-4">
                        <AiOutlineGithub className="text-white" />
                      </button>
                    </a>
                  </div>
                  <div className="">
                    <a
                      href={project.url}
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
          })}
        </div>
        <div className="md:w-[20%] flex p-10 justify-center items-center">
          <div className="text-white animation-div3 rounded-2xl">
            <Link href="/projects">
              <button className="flex items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px] ">
                More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
