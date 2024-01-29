"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { StaticImageData } from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
type ProjectCardProps = {
  projectName: string;
  projectSize: string;
  projectType: string;
  projectUrl: string;
  projectImage: StaticImageData;
  projectDescription: string;
  projectGithub?: string;
  projectStack: string;
  projectAlt: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectDescription,
  projectImage,
  projectName,
  projectSize,
  projectStack,
  projectType,
  projectUrl,
  projectGithub,
  projectAlt,
}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {clicked && (
        <motion.div
          className={` fixed inset-0  bg-black/90 z-50 flex  flex-col lg:flex-row backdrop-blur-sm overflow-y-auto`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            placeholder="blur"
            priority
            quality={50}
            className={" lg:w-1/2 w-full h-full object-cover p-4 order-1 "}
            src={projectImage}
            alt={projectAlt}
          />

          <div className="lg:w-1/2 h-full   p-4 lg:order-3 ">
            <div className="items-center flex justify-between mb-10">
              <p>{projectName}</p>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full "
                onClick={() => setClicked(!clicked)}
              >
                <X />
              </Button>
            </div>
            <div className="flex justify-between border-t-[1px] opacity-60 p-2 text-sm text-white">
              <p className="w-full">stack</p>
              <p className="w-full">{projectStack}</p>
            </div>
            <div className="flex justify-between border-t-[1px] opacity-60 p-2 text-sm text-white">
              <p className="w-full">Github</p>
              <Link
                className="w-full overflow-hidden"
                href={projectGithub || ""}
                target="_blank"
              >
                {projectGithub}
              </Link>
            </div>
            <div className="flex justify-between border-t-[1px] opacity-60 p-2 text-sm text-white">
              <p className="w-full ">Website link</p>
              <Link
                className="w-full overflow-hidden"
                target="_blank"
                href={projectUrl}
              >
                {projectUrl}
              </Link>
            </div>
            <div className="flex justify-between border-t-[1px] opacity-60 p-2 text-sm text-white">
              <p className="w-full">description</p>
              <p className="w-full">{projectDescription}</p>
            </div>
          </div>
        </motion.div>
      )}
      <div className="flex flex-col gap-3 border-t-[1px] hover:opacity-90 ">
        <div className="flex flex-col pt-1">
          <Link className="text-sm" href={projectUrl} target="_blank">
            {projectName}
          </Link>
          <div className="text-xs opacity-45 flex items-center justify-between">
            <p>{projectType}</p>
            <p>{projectSize}</p>
          </div>
        </div>
        <div
          className="h-[450px] bg-color1/30 dark:bg-color1/75 rounded-t-sm px-16 pt-16 hover:px-10 hover:pt-10 ease-in-out duration-500 cursor-pointer"
          onClick={() => setClicked(!clicked)}
        >
          <Image
            quality={30}
            className={`w-full h-full object-cover`}
            src={projectImage}
            alt={projectAlt}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
