"use client";

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
      <div className="rounded-lg flex justify-center items-center  bg-zinc-800 p-11 h-[400px]">
        <ul className="flex flex-col gap-16 text-xl text-center text-white">
          <li>Work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
