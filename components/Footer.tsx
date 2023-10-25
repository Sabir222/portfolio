import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  
} from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#EEEEEE] dark:bg-zinc-800">
      <div className="  md:h-[200px] gap-10 py-[40px] md:py-0 md:gap-0 flex md:flex-row flex-col justify-between px-[32px] items-start md:items-center max-w-[1400px] mx-auto">
        <div className="flex items-center order-2 gap-4 text-gray-800 dark:text-white ">
          <Link href="/contact">Contact</Link>
          <a href="https://twitter.com/sabirkoutabi" target="_blank">
            <button className="flex items-center justify-center w-8 h-8 duration-300 ease-in-out rounded-full bg-zinc-100 dark:bg-opacity-10 top-4 right-4 hover:bg-slate-400">
              <RiTwitterXLine
                size={20}
                className="text-gray-800 dark:text-white"
              />
            </button>
          </a>
          <a href="https://github.com/Sabir222" target="_blank">
            <button className="flex items-center justify-center w-8 h-8 duration-300 ease-in-out rounded-full bg-zinc-100 dark:bg-opacity-10 top-4 right-4 hover:bg-slate-400">
              <AiOutlineGithub
                size={20}
                className="text-gray-800 dark:text-white"
              />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/skoutabi/" target="_blank">
            <button className="flex items-center justify-center w-8 h-8 duration-300 ease-in-out rounded-full bg-zinc-100 dark:bg-opacity-10 top-4 right-4 hover:bg-slate-400">
              <AiOutlineLinkedin
                size={20}
                className="text-gray-800 dark:text-white"
              />
            </button>
          </a>
        </div>
        <div className="flex flex-col items-start text-gray-800 dark:text-white md:items-center md:order-1">
          <Image src="/tree.png" alt="" height={40} width={40} />
          <p className="mt-6 duration-700"> Lets Work Together.</p>
        </div>

        <div>
          <ul className="flex items-center order-1 gap-4 text-gray-800 duration-700 dark:text-white">
            <Link href="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
