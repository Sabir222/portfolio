import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CarWebsite from "../public/carwebsite.png";
import MovieWebsite from "../public/moviewebsite.png";
const projects = [
  {
    name: "MovieApp",
    url: "https://movie-swart-five.vercel.app/",
    src: MovieWebsite,
  },
  {
    name: "Car Rental",
    url: "https://car-rental-eta-pearl.vercel.app/",
    src: CarWebsite,
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col mt-[80px] max-w-[1400px] mx-auto">
      <div className=" px-[32px] mb-6">
        <h1 className="text-3xl font-semibold text-black ">Projects</h1>
      </div>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className=" md:grid md:grid-cols-3 px-[32px] gap-3 md:w-[80%] ">
          {projects.map((project, key) => {
            return (
              <div
                className="flex flex-col bg-zinc-700 h-[400px] mb-8 md:mb-0  "
                key={key}
              >
                <div className="bg-black h-[85%] relative  ">
                  <Image
                    src={project.src}
                    objectFit="cover"
                    alt="img"
                    layout="fill"
                    placeholder="blur"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-zinc-700 to-transparent from-10% to-100%"></div>
                </div>
                <div className="h-[15%] text-white p-4 flex justify-between items-center">
                  <div>{project.name}</div>
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
          <div className="text-white animation-div2 rounded-2xl">
            <Link href="/studies">
              <button className="flex items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px] bg-zinc-700">
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
