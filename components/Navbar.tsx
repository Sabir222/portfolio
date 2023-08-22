"use client";
import { AiOutlineGithub, AiOutlineMenu } from "react-icons/ai";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeButton from "./ThemeButton";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
      <MobileNav visible={isVisible} Click={handleClick} />
      <nav
        className={`  ease-in-out duration-500   z-20 fixed  top-0 left-0 right-0 h-16   ${
          scrolled ? "bg-black/40 backdrop-blur-md " : "bg-transparent "
        }  `}
      >
        <div className="max-w-[1400px] px-[32px] mx-auto items-center justify-between flex pt-2">
          <div className="">
            <Link href="/" >
              <div className="cursor-pointer top-4 left-4">
                <Image
                  src={"/tree.png"}
                  alt="logo"
                  width={40}
                  height={40}
                  style={{ width: 40, height: 40 }}
                />
              </div>
            </Link>
          </div>
          <div>
            <ul className="hidden gap-10 text-white md:flex">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/studies">
                <li>Projects</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <div className="flex gap-2">
              <ThemeButton />
              <a href="https://github.com/Sabir222/portfolio" target="_blank">
                <button className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 bg-opacity-10 top-4 right-4">
                  <AiOutlineGithub className="text-white" />
                </button>
              </a>
              <button
                className="flex items-center justify-center w-8 h-8 rounded-full md:hidden bg-zinc-100 bg-opacity-10 top-4 right-4"
                onClick={handleClick}
              >
                <AiOutlineMenu className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
