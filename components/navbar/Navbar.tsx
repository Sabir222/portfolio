"use client";
import { AiOutlineGithub, AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeButton from "../ThemeButton";
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
        className={`  z-20 fixed  top-0 left-0 right-0 h-26   ${
          scrolled ? "bg-black/40 backdrop-blur-sm " : "bg-transparent "
        }  `}
      >
        <div className="max-w-[1400px] px-[32px] mx-auto items-center justify-between flex pt-2">
          <div className="">
            <Link href="/">
              <div className="cursor-pointer top-4 left-4">
                <Image
                  src={"/logo2.png"}
                  alt="logo"
                  loading="eager"
                  fetchPriority="high"
                  width={100}
                  height={100}
                  style={{ width: 75, height: 75 }}
                />
              </div>
            </Link>
          </div>
          <div>
            <ul className="hidden gap-10 text-white md:flex">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/studies" about="See my studies">
                <li>Studies</li>
              </Link>
              <Link href="/projects" about="Check out my projects">
                <li>Projects</li>
              </Link>
              <Link href="/about" about="see more about me">
                <li>About</li>
              </Link>
              <Link href="/contact" about="Contact me for more information">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <div className="flex gap-2">
              <ThemeButton />
              <a href="https://github.com/Sabir222/portfolio" target="_blank">
                <button className="flex items-center justify-center w-8 h-8 rounded-full gradient-background bg-opacity-10 top-4 right-4">
                  <AiOutlineGithub className="text-white" />
                </button>
              </a>
              <button
                className="flex items-center justify-center w-8 h-8 rounded-full hover:gradient-background md:hidden bg-zinc-100 bg-opacity-10 top-4 right-4"
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
