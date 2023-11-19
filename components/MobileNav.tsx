"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
interface VisibleProps {
  visible: boolean;
  Click: () => void;
}

const MobileNav = ({ visible, Click }: VisibleProps) => {
  const [isVisible, setIsVisible] = useState(visible);
  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <div
      className={`fixed ${
        isVisible ? "block" : "hidden"
      }   top-0 bottom-0 left-0 right-0 z-30 px-16 pt-16 pt bg-black/40 buttom-0`}
      onClick={Click}
    >
      <div className="rounded-lg flex justify-center items-center  bg-zinc-800 p-11 h-[500px]">
        <ul className="flex flex-col gap-16 text-xl text-center text-white">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/studies" about="See my studies">
            <li>Studies</li>
          </Link>
          <Link href="/projects" about="Check out my projects">
            <li>Projects</li>
          </Link>
          <Link href="/about" about="See more about me">
            <li>About</li>
          </Link>
          <Link href="/contact" about="Contact me for more information">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
