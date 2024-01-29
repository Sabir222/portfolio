"use client";
import Link from "next/link";
import { ToggleMode } from "@/components/ToggleMode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { WeatherData } from "@/app/layout";
import Time from "./Time";
import {
  Cloud,
  CloudDrizzle,
  CloudRainWind,
  CloudSnow,
  Haze,
  Sun,
} from "lucide-react";
type NavbarProps = {
  weatherData: WeatherData;
};

const Navbar: React.FC<NavbarProps> = ({ weatherData }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 450);
    return () => clearTimeout(timeout);
  }, []);

  let icon;

  if (weatherData.weather[0].id.toString().startsWith("2")) {
    icon = <CloudRainWind />;
  } else if (weatherData.weather[0].id.toString().startsWith("3")) {
    icon = <CloudDrizzle />;
  } else if (weatherData.weather[0].id.toString().startsWith("4")) {
    icon = <CloudRainWind />;
  } else if (weatherData.weather[0].id.toString().startsWith("5")) {
    icon = <CloudRainWind />;
  } else if (weatherData.weather[0].id.toString().startsWith("6")) {
    icon = <CloudSnow />;
  } else if (weatherData.weather[0].id.toString().startsWith("7")) {
    icon = <Haze />;
  } else if (weatherData.weather[0].id === 800) {
    icon = <Sun />;
  } else if (weatherData.weather[0].id > 800) {
    icon = <Cloud />;
  }

  return (
    <section className="hidden lg:block">
      <nav
        className={`fixed w-full flex justify-between items-center h-20   px-5 z-40   transition-opacity ease-in-out duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"}  dark:bg-[black]  bg-[#f7f7f7]
      `}
      >
        <Link
          className="flex items-center gap-3 transform duration-700"
          href="/"
        >
          <Avatar className="">
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
        <div className="flex gap-6 items-center ">
          <div>
            <div className="hover:text-color1/45 dark:hover:text-white/45 transition duration-500 ">
              {icon}
            </div>
            <div className="text-color1/45 dark:text-white/45 dark:hover:text-white transition duration-500 hover:text-color1 cursor-default">
              {Math.floor(weatherData.main.temp - 273.15)}°C
            </div>
          </div>
          <div>
            <Time />
            <div className="text-color1/45 dark:text-white/45 dark:hover:text-white transition duration-500 hover:text-color1 cursor-default">
              Essaouira,Morocco
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center  ">
          <ul className="flex gap-3 dark:text-white/45 dark:hover:text-white/15 text-color1/45">
            <Link href="/work">
              <li className="dark:hover:text-white duration-700 transition cursor-pointer hover:text-color1">
                Work
              </li>
            </Link>
            <Link href="/blog">
              <li className="dark:hover:text-white duration-700 transition cursor-pointer hover:text-color1">
                Blog
              </li>
            </Link>
            <Link href="/contact">
              <li className="dark:hover:text-white duration-700 transition cursor-pointer hover:text-color1">
                Contact
              </li>
            </Link>
          </ul>
          <div className="h-10 w-10">
            <ToggleMode />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
