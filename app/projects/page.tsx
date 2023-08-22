import Footer from "@/components/Footer";
import Image from "next/image";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import MovieWebsite from "../../public/moviewebsite.png";
import Crypto from "../../public/crypto.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { AiOutlineGithub } from "react-icons/ai";

const projects = [
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

const page = () => {
  return (
    <div>
      <Navbar />
      <Header
        firstp="My Projects"
        secondp="Discover my projects  examples of what I'm learning as a software engineering student."
        contact=""
      />
      <div className="duration-300 bg-white dark:bg-black">
        <div className="flex flex-col pt-[80px] pb-[80px] max-w-[1400px] mx-auto">
          <div className=" px-[32px] mb-6">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white ">Projects</h1>
          </div>
          <div className="flex flex-col gap-10 md:flex-row">
            <div className=" md:grid md:grid-cols-3 px-[32px]  gap-3 md:w-[100%]  ">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
