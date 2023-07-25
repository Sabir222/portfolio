import { log } from "console";
import Image from "next/image";

interface DataProps {
  stargazers_count: number;
  description: string;
  name: string;
  language: string;
  html_url: string;
  created_at: string;
}
const getRepo = async (): Promise<any> => {
  const response = await fetch("https://api.github.com/users/sabir222/repos");
  const data = response.json();
  return data;
};
const Github = async () => {
  const repos = await getRepo();
  const filteredRepo = repos.filter((repo: DataProps) => {
    return repo.name.toLowerCase().startsWith("alx");
  });

  return (
    <>
      <section className="my-20 max-w-[1400px] mx-auto ">
        <div className=" px-[32px]  mb-6">
          <h1 className="text-3xl font-semibold text-white ">Studies</h1>
        </div>
        <main className=" flex flex-col md:flex-row text-white  px-[32px] ">
          <div className="md:w-[80%]   md:grid grid-cols-1 md:grid-cols-3 gap-3 ">
            {filteredRepo.map((repo: DataProps) => {
              const shortenedCreatedAt = repo.created_at.slice(0, 10);
              return (
                <>
                  <div className="bg-zinc-700 bg-opacity-40 mb-5 md:mb-0  h-[200px] flex flex-col justify-between p-[16px]  rounded-md">
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
                            alt=""
                          />
                          <p className="text-sm font-light">
                            {repo.stargazers_count}
                          </p>
                        </div>

                        <p className="text-sm">{shortenedCreatedAt}</p>
                      </div>
                      <a href={repo.html_url} target="_blank">
                        {" "}
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
            <div className="third-bg-div rounded-2xl">
              <button className="flex items-center justify-center p-4 rounded-2xl bg-opacity-70 h-[50px] w-[100px] bg-zinc-700">
                More
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Github;
