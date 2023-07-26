import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
const Projects = () => {
  return (
    <div className="flex flex-col mt-[80px] max-w-[1400px] mx-auto">
      <div className=" px-[32px] mb-6">
        <h1 className="text-3xl font-semibold text-white ">Projects</h1>
      </div>
      <div className="flex ">
        <div className="grid grid-cols-3 px-[32px] gap-3 w-[80%] ">
          <div className="flex flex-col bg-slate-400 h-[400px] ">
            <div className="bg-black h-[85%]">
              {/* <Image
                src="/moviescreenshot.png"
                width={400}
                height={600}
                alt="img"
              /> */}
            </div>
            <div className="h-[15%] p-4 flex justify-between items-center">
              <div>MovieApp</div>
              <div className="">
                <a
                  href="https://movie-swart-five.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  <div>Visit</div>
                  <HiOutlineArrowLongRight />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-20% flex justify-center items-center">
          <div className="animation-div2 rounded-2xl">
            <Link href="/studies">
              <button className="flex items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px] text-white bg-zinc-700">
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
