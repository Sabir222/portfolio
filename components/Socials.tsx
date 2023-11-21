import { BsLinkedin, BsGithub, BsCloudDownload } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
const Socials = () => {
  return (
    <section className="dark:bg-[#EADBC8] bg-[#EEEEEE] text-black ">
      <div className=" max-w-[1400px] mx-auto px-[32px] pb-[1200px] relative md:pb-[250px]">
        <div className="absolute left-[32px] right-[32px] p-8 rounded-lg backdrop-blur-sm bg-white/30 top-[-210px] sm:top-[-90px] flex flex-col md:flex-row gap-5 ">
          <div className="h-[300px]  ease-in-out duration-300 md:w-[300px] bg-[#fbfdfb] dark:bg-zinc-900 rounded-lg flex flex-col items-center justify-center gap-4  shadow-sm">
            <h1 className="text-xl font-semibold dark:text-white">
              Download CV
            </h1>
            <div className=" dark:text-white">
              <BsCloudDownload size={70} />
            </div>
            <div>
              <a download="My Resume.pdf" href="My Resume.pdf" target="_blank">
                <button className="w-[100px] py-2 text-white rounded gradient-background">
                  Download
                </button>
              </a>
            </div>
          </div>
          <div className="h-[300px]  ease-in-out duration-300 md:w-[300px] bg-[#fbfdfb] dark:bg-zinc-900 rounded-lg flex flex-col items-center justify-center gap-4 shadow-sm ">
            <h1 className="text-xl font-semibold dark:text-white">
              My LinkedIn
            </h1>
            <div className=" dark:text-white">
              <BsLinkedin size={70} />
            </div>
            <a href="https://www.linkedin.com/in/skoutabi/" target="_blank">
              <button className="w-[100px] py-2 text-white rounded gradient-background">
                LinkedIn
              </button>
            </a>
          </div>
          <div className="h-[300px]  ease-in-out duration-300 md:w-[300px] bg-[#fbfdfb] dark:bg-zinc-900 rounded-lg flex flex-col items-center justify-center gap-4 shadow-sm ">
            <h1 className="text-xl font-semibold dark:text-white">My GitHub</h1>
            <div className=" dark:text-white">
              <BsGithub size={70} />
            </div>
            <a href="https://github.com/Sabir222" target="_blank">
              <button className="w-[100px] py-2 text-white rounded gradient-background">
                GitHub
              </button>
            </a>
          </div>
          <div className="h-[300px]  ease-in-out duration-300 md:w-[300px] bg-[#fbfdfb] dark:bg-zinc-900 rounded-lg flex flex-col items-center justify-center gap-4  shadow-sm">
            <h1 className="text-xl font-semibold dark:text-white">
              My Twitter
            </h1>
            <div className=" dark:text-white">
              <RiTwitterXLine size={70} />
            </div>
            <a href="https://twitter.com/sabirkoutabi" target="_blank">
              <button className="w-[100px] py-2 text-white rounded gradient-background">
                Twitter
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
