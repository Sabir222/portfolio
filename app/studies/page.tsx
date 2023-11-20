import Header from "@/components/Header";
import Image from "next/image";
import getRepos from "@/app/api/getRepos";
import { DataProps } from "@/app/api/getRepos";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TheModal from "@/components/StudyModal";
import { Metadata } from "next";
import { FaCopyright } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoPython,
} from "react-icons/bi";
import { DiHtml5, DiCode } from "react-icons/di";
import { FaTerminal, FaRust } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Studies",
  description: "Sabir Koutabi's studies",
  alternates: {
    canonical: `https://sabirkoutabi.dev/studies`,
  },
  icons: {
    icon: "/favlogo.png",
  },
};
const page = async () => {
  const repos = await getRepos();
  return (
    <div>
      <Navbar />
      <Header
        firstp=" What i study"
        contact=""
        secondp="Welcome to my page documenting my studies in the ALX Africa Software Engineering Intensive Program."
      />
      <section className="py-20  pb-[100px] dark:bg-black duration-700 ">
        <div className="max-w-[1400px] mx-auto">
          <div className=" px-[32px]  mb-6 sm:flex gap-4 items-end">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
              Studies / Side Projects
            </h1>
            <TheModal />
          </div>
          <main className=" flex flex-col md:flex-row dark:text-white text-gray-800  px-[32px] ">
            <div className="grid-cols-1 gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo: DataProps, index: any) => {
                const shortenedCreatedAt = repo.created_at.slice(0, 10);
                return (
                  <a href={repo.html_url} target="_blank" key={index}>
                    <div>
                      <div className="dark:transparent cursor-pointer  mb-5 md:mb-0  h-[300px] flex flex-col ring-gray-600  ring-1  shadow-md p-7 ">
                        <div className="h-[30%] flex align-center  gap-3">
                          <div>
                            {repo.language === "Python" ? (
                              <BiLogoPython size={50} />
                            ) : repo.language === "Shell" ? (
                              <FaTerminal size={50} />
                            ) : repo.language === "JavaScript" ? (
                              <BiLogoJavascript size={50} />
                            ) : repo.language === "TypeScript" ? (
                              <BiLogoTypescript size={50} />
                            ) : repo.language === "HTML" ? (
                              <DiHtml5 size={50} />
                            ) : repo.language === "C" ? (
                              <FaCopyright size={50} />
                            ) : (
                              <DiCode size={50} />
                            )}
                          </div>
                          <div className="flex flex-col">
                            <div className="relative text-lg font-semibold ">
                              <div>
                                <span
                                  className={`${
                                    repo.language === "Python"
                                      ? "underline-python"
                                      : repo.language === "Shell"
                                      ? "underline-shell"
                                      : repo.language === "JavaScript"
                                      ? "underline-javascript"
                                      : repo.language === "TypeScript"
                                      ? "underline-typescript"
                                      : repo.language === "HTML"
                                      ? "underline-html"
                                      : repo.language === "C"
                                      ? "underline-c"
                                      : "highlight"
                                  }`}
                                >
                                  {repo.language ?? "No language"}
                                </span>
                              </div>
                            </div>
                            <p className="line-clamp-1 ">{repo.name}</p>
                          </div>
                        </div>
                        <div className="h-[70%] pt-2 pl-1 text-sm flex gap-1 flex-col">
                          <p className="text-gray-600 ">{"<h3>"}</p>
                          <div className="flex gap-3 ">
                            <div className="">
                              <div className="h-full ml-4 border-l border-gray-600 border-solid "></div>
                            </div>
                            <p className="h-full line-clamp-3">
                              {repo.description}
                            </p>
                          </div>
                          <p className="text-gray-600 ">{"</h3>"}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
