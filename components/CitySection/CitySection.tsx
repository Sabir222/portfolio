"use client";
import { useState } from "react";
import image3 from "@/public/image3.jpg";
import ReactAudioPlayer from "react-audio-player";
import Image from "next/image";
import { motion } from "framer-motion";
import { Pause, PlayCircle } from "lucide-react";

type CitySectionProps = {};

const CitySection: React.FC<CitySectionProps> = ({}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const isTop = clientY < rect.top + rect.height / 4;
    const isBottom = clientY > rect.bottom - rect.height / 4;
    const isLeft = clientX < rect.left + rect.width / 4;
    const isRight = clientX > rect.right - rect.width / 4;

    if (isTop && isLeft) {
      setPosition("top-left");
    } else if (isTop && isRight) {
      setPosition("top-right");
    } else if (isBottom && isLeft) {
      setPosition("bottom-left");
    } else if (isBottom && isRight) {
      setPosition("bottom-right");
    } else if (isTop) {
      setPosition("top");
    } else if (isBottom) {
      setPosition("bottom");
    } else if (isRight) {
      setPosition("right");
    } else if (isLeft) {
      setPosition("left");
    } else {
      setPosition(null);
    }
  };

  const handleMouseLeave = () => {
    setPosition(null);
  };

  //
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`${isHovered ? "" : "px-4 ease-in-out duration-500"} mb-20`}
    >
      <div className=" min-h-[100vh] md:min-h-[130vh]  flex-col overflow-hidden relative ">
        <h1 className="w-full text-4xl text-center my-20 opacity-70 dark:opacity-50 ">
          Where i live
        </h1>

        <div
          className={`bg-[#eb2926]  w-full max-w-[1250px]   h-[550px] md:h-[850px] rounded-[2rem]
         
         absolute
         left-1/2
         -translate-x-1/2
         transform transition duration-1000
         p-4
        ${isHovered ? "scale-[200%]" : ""}
        
        `}
          onMouseEnter={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`${
              isHovered
                ? "text-[#eb2926] ease-in-out duration-500"
                : "text-color1 ease-in-out duration-500"
            } py-2 flex justify-center items-center gap-4  `}
          >
            <p>Wind city</p>
            <p className="text-3xl  font-medium ">ESSAOUIRA</p>
          </div>
          <div
            className={`${
              isHovered
                ? "text-color1"
                : "text-[#eb2926] ease-in-out duration-500"
            } md:pt-28 flex justify-center items-center gap-4 
              pt-10

            `}
          >
            <p className="text-[10px]">Wind city</p>
            <p className="md:text-3xl  font-medium ">ESSAOUIRA</p>
          </div>
        </div>

        <div
          className={` h-[550px] md:h-[850px] rounded-[2rem]
         
         absolute
         left-1/2
         -translate-x-1/2
        mt-20
        max-w-[1100px]
        w-full
        px-4
<`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <motion.div
            animate={
              position === "top-left"
                ? { x: -10, y: -10, transition: { duration: 1 } }
                : position === "top"
                ? { x: 0, y: -10, transition: { duration: 1 } }
                : position === "top-right"
                ? { x: 10, y: -10, transition: { duration: 1 } }
                : position === "right"
                ? { x: 10, y: 0, transition: { duration: 1 } }
                : position === "bottom-right"
                ? { x: 10, y: 10, transition: { duration: 1 } }
                : position === "bottom"
                ? { x: 0, y: 10, transition: { duration: 1 } }
                : position === "bottom-left"
                ? { x: -10, y: 10, transition: { duration: 1 } }
                : position === "left"
                ? { x: -10, y: 0, transition: { duration: 1 } }
                : { x: 0, y: 0, transition: { duration: 1 } }
            }
          >
            <Image
              src={image3}
              className="object-cover h-[550px]  md:h-[850px]  rounded-[2rem] relative "
              alt="essaouira picture"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
              <ReactAudioPlayer
                src="./gnawa.mp3"
                controls
                controlsList=""
                className={`${
                  isHovered ? "opacity-55" : "opacity-0"
                } transition duration-500`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CitySection;
