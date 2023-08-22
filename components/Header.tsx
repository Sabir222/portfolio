"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
interface headerProps {
  firstp: string;
  secondp?: string;
  contact: string;
}
const Header = ({ firstp, secondp, contact }: headerProps) => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 500; // Adjust this value for the fade effect
      const opacity = 1 - scrollY / maxScroll;
      setScrollOpacity(opacity < 0 ? 0 : opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`h-[100vh] sm:h-[50vh] p-6   animation-div flex justify-start md:justify-center items-center  relative animation-div`}
    >
      <div className="p-5 bg-slate-100/10  backdrop-blur-sm max-w-[1400px] md:rounded-xl">
        <Image src={"/logo.png"} alt="logo" width={30} height={30} />
        <p className="mb-4 text-2xl font-bold text-white">{firstp}</p>
        <p className="mb-3 text-gray-200">{secondp}</p>
        <Link href="/contact">
          <button
            className={`flex text-white animation-div3 self-end  items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px]  cursor-pointer ${contact} `}
          >
            Contact
          </button>
        </Link>
      </div>
      <div
        className="absolute bottom-4 text-white sm:hidden left-[50%] flex items-center justify-center w-8 h-8 rounded-full animation-div3"
        style={{ opacity: scrollOpacity }}
      >
        <AiOutlineArrowDown />
      </div>
    </div>
  );
};

export default Header;
