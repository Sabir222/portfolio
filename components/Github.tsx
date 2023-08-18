import Image from "next/image";
import Link from "next/link";
import getRepos from "@/app/api/getRepos";
import { DataProps } from "@/app/api/getRepos";
const Github = async () => {
  const repos = await getRepos();
  const filteredRepo = repos.filter((repo: DataProps) => {
    return repo.name.toLowerCase().startsWith("alx");
  });

  return (
    <>
      <section className="py-20 duration-700 dark:bg-black">
        <div className="max-w-[1400px] mx-auto">
          {" "}
          <div className=" px-[32px]  mb-6 ">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white ">
              Studies
            </h1>
          </div>
          <main className="flex flex-col text-gray-800 dark:text-white md:flex-row">
            <div className="md:w-[80%]  px-[32px]  md:grid grid-cols-1 md:grid-cols-3 gap-3 ">
              {filteredRepo.map((repo: DataProps) => {
                const shortenedCreatedAt = repo.created_at.slice(0, 10);
                return (
                  <>
                    <div className="dark:bg-zinc-700 dark:bg-opacity-40 mb-5 md:mb-0  h-[200px] flex flex-col justify-between p-[16px]  rounded-md ring-1 ring-gray-800 dark:ring-0 shadow-md">
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
                          <button className="w-8 h-8 bg-[#07284b] rounded-md flex justify-center items-center">
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
                );
              })}
            </div>
            <div className="md:w-[20%] flex p-10 justify-center items-center">
              <div className="animation-div2 rounded-2xl">
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
