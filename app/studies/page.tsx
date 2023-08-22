
import Header from "@/components/Header";
import Image from "next/image";
import getRepos from "@/app/api/getRepos";
import { DataProps } from "@/app/api/getRepos";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = async () => {
  const repos = await getRepos();
  return (
    <>
      <Navbar />
      <Header
        firstp=" What i study"
        contact=""
        secondp="Welcome to my page documenting my studies in the ALX Africa Software Engineering Intensive Program! By day, I delve into ALX courses, while at night, I passionately pursue personal projects. Join me on this exhilarating journey of learning and creation!"
      />
      <section className="py-20  pb-[100px] dark:bg-black duration-700 ">
        <div className="max-w-[1400px] mx-auto">
          <div className=" px-[32px]  mb-6">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">
              Studies / Side Projects
            </h1>
          </div>
          <main className=" flex flex-col md:flex-row dark:text-white text-gray-800  px-[32px] ">
            <div className="grid-cols-1 gap-3 md:grid md:grid-cols-3">
              {repos.map((repo: DataProps) => {
                const shortenedCreatedAt = repo.created_at.slice(0, 10);
                return (
                  <>
                    <div className="dark:bg-zinc-700 dark:bg-opacity-40 mb-5 md:mb-0  h-[200px] flex flex-col justify-between p-[16px]  rounded-md ring-1 dark:ring-0 ring-gray-800 shadow-md">
                      <div className="h-[60%] ">
                        <p className="pb-2 text-sm font-light text-blue-400">
                          {repo.language ?? "No language detected"}
                        </p>
                        <p className="pb-2 text-lg font-bold truncate">
                          {repo.name}
                        </p>
                        <div className="">
                          <div className="text-[10px] font-semibold mb-5  truncate  ">
                            {repo.description ?? "No Description"}
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
                              alt=""
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
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
