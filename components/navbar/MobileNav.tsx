"use client";
import Link from "next/link";
import { ToggleMode } from "@/components/ToggleMode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WeatherData } from "@/app/layout";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type MobileNavProps = {
  weatherData: WeatherData;
};

const MobileNav: React.FC<MobileNavProps> = ({ weatherData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 450);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <nav className="lg:hidden">
      <motion.nav
        animate={{ height: expanded ? 400 : 100 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={` overflow-hidden transition-all border-b-2 py-4 w-full  dark:bg-black bg-color2   fixed  z-50 text-xs  lg:hidden   ease-in-out duration-500 flex-col  ${
          isVisible ? "opacity-100" : "opacity-0"
        }
      `}
      >
        <div
          className={`${
            expanded ? "h-auto" : "h-20"
          }   w-full text-center h-full`}
        >
          <div className={`${!expanded && "hidden"} p-4 flex flex-col`}>
            <div className="h-10 w-10  ml-auto ">
              <Button
                variant="outline"
                className="rounded-full bg-transparent"
                size="icon"
                onClick={() => setExpanded(!expanded)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center h-full flex-1">
              <Link
                href="/"
                className="p-4 text-center text-lg"
                onClick={() => setExpanded(false)}
              >
                Home
              </Link>
              <Link
                href="work"
                className="p-4 text-center text-lg"
                onClick={() => setExpanded(false)}
              >
                Work
              </Link>
              <Link
                href="blog"
                className="p-4 text-center text-lg"
                onClick={() => setExpanded(false)}
              >
                Blog
              </Link>
              <Link
                href="contact"
                className="p-4 text-center text-lg"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Link>
            </div>
          </div>
          <div
            className={`flex justify-between  w-full items-center p-4  ${
              expanded && "hidden"
            }`}
          >
            <Link
              className="flex items-center gap-3 transform duration-700"
              href="/"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/sabir222.png" />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="hover:text-color1/45 dark:hover:text-white/45 transition duration-500">
                  Sabir Koutabi
                </p>
                <p className="text-color1/45 dark:text-white/45 dark:hover:text-white transition duration-500 hover:text-color1">
                  Front-End dev
                </p>
              </div>
            </Link>
            <div className="h-10 w-10">
              <ToggleMode />
            </div>
            <div className="h-10 w-10 ">
              <Button
                variant="outline"
                className="rounded-full bg-transparent"
                size="icon"
                onClick={() => setExpanded(!expanded)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>
    </nav>
  );
};

export default MobileNav;
