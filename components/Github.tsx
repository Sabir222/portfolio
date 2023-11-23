import Link from "next/link";
import getRepos from "@/app/api/getRepos";
import { DataProps } from "@/app/api/getRepos";
import TheModal from "./StudyModal";
import { FaCopyright } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoPython,
} from "react-icons/bi";
import { DiHtml5, DiCode } from "react-icons/di";
import { FaTerminal } from "react-icons/fa";
const Github = async () => {
  const repos = await getRepos();
  const filteredRepos = repos.filter((repo: DataProps) => {
    return repo.name.toLowerCase().startsWith("alx");
  });
  const filteredRepo = filteredRepos.slice(0, 5);

  return (
    <>
      <section className="py-20 duration-700 dark:bg-black">
        <div className="max-w-[1400px] mx-auto">
          <div className=" px-[32px] flex  gap-10 mb-6 items-end ">
            <div className="text-3xl font-semibold text-gray-800 underline-title dark:text-white ">
              Studies
            </div>
            <TheModal />
          </div>
          <main className="flex flex-col text-gray-800 dark:text-white md:flex-row">
            <div className="md:w-[80%]  px-[32px]  md:grid grid-cols-1 md:grid-cols-2  gap-3 lg:grid-cols-3 ">
              {filteredRepo.map((repo: DataProps, index: any) => {
                const shortenedCreatedAt = repo.created_at.slice(0, 10);
                return (
                  <a href={repo.html_url} target="_blank" key={index}>
                    <div>
                      <div className="dark:transparent cursor-pointer  mb-5 md:mb-0  h-[250px] flex flex-col ring-gray-600  ring-1  shadow-md p-7 ">
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
                                  {repo.language === "C"
                                    ? "C Language"
                                    : repo.language}
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
              <div className="flex gap-4 px-3 py-6">
                <div className="h-full w-[10px] gradient-background"></div>
                <div className="flex flex-col justify-between">
                  <div className="mb-6 text-2xl font-semibold md:mb-0">
                    The only way to learn a new programming language is by
                    writing programs in it.
                  </div>
                  <div className="text-sm text-gray-600">
                    - <span className="text-gray-300">Dennis Ritchie,</span>{" "}
                    &apos;Creator of the C programming language &apos;
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[20%] flex p-10 justify-center items-center">
              <div className="gradient-background rounded-2xl">
                <Link href="/studies">
                  <button className="flex items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px] text-white">
                    More
                  </button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Github;
/*

<>
                   <div className="dark:transparent dark:bg-opacity-40 mb-5 md:mb-0  h-[200px] flex flex-col justify-between p-[16px]  rounded-md ring-1 ring-gray-800 dark:ring-0 shadow-md">
                      <div className="h-[60%] ">
                        <p className="pb-2 text-sm font-light text-blue-400">
                          {repo.language}
                        </p>
                        <p className="pb-2 text-lg font-bold truncate">
                          {repo.name}
                        </p>
                        <div className="">
                          <div className="text-[10px] font-semibold mb-5  truncate  ">
                            {repo.description}
                          </div>
                        </div>

                        <hr className="bg-[#07284b] opacity-40" />
                      </div>
                      <div className="flex items-end justify-between">
                        <div className="flex flex-col">
                          <div className="flex gap-2">
                            <Image
                              src="/star1.png"
                              height={2}
                              width={18}
                              alt="star"
                            />
                            <p className="text-sm font-light">
                              {repo.stargazers_count}
                            </p>
                          </div>

                          <p className="text-sm">{shortenedCreatedAt}</p>
                        </div>
                        <a href={repo.html_url} target="_blank">
                          <button className="w-8 h-8 bg-[#07284b]  rounded-md flex justify-center items-center">
                            <Image
                              src="/arrow.png"
                              width={20}
                              height={20}
                              alt="arrow"
                            />
                          </button>
                        </a>
                      </div>
                    </div>
                  </>
 */
