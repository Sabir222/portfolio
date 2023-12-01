import Link from "next/link";
import getRepos from "@/app/api/getRepos";
import { DataProps } from "@/app/api/getRepos";
import TheModal from "../StudyModal";
import GithubCard from "./GithubCard";
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
              {filteredRepo.map((repo: DataProps, index: number) => {
                return (
                  <GithubCard
                    height="250px"
                    key={index}
                    repoUrl={repo.html_url}
                    repoDesc={repo.description}
                    repoLang={repo.language}
                    repoName={repo.name}
                  />
                );
              })}
              <div className="flex h-[90%] gap-4 px-3 py-6">
                <div className="h-full w-[10px] gradient-background "></div>
                <div className="flex flex-col justify-between">
                  <div className="mb-6 text-[21px] font-semibold md:mb-0">
                    The only way to learn a new programming language is by
                    writing programs in it.
                  </div>
                  <div className="text-sm text-gray-600">
                    - <span className="text-gray-300">Dennis Ritchie,</span>
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
