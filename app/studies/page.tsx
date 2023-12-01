import Header from "@/components/Header";
import getRepos from "@/app/api/getRepos";
import { DataProps } from "@/app/api/getRepos";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import TheModal from "@/components/StudyModal";
import { Metadata } from "next";
import GithubCard from "@/components/studies/GithubCard";

export const metadata: Metadata = {
  title: "Studies",
  description: "Sabir Koutabi's studies",
  alternates: {
    canonical: `https://sabirkoutabi.dev/studies`,
  },
  // icons: {
  //   icon: "/favlogo.png",
  // },
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
            <h1 className="inline text-3xl font-semibold text-gray-800 dark:text-white underline-title">
              Studies / Side Projects
            </h1>
            <TheModal />
          </div>
          <main className=" flex flex-col md:flex-row dark:text-white text-gray-800  px-[32px] ">
            <div className="grid-cols-1 gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
              {repos.map((repo: DataProps, index: any) => {
                return (
                  <GithubCard
                    height="300px"
                    key={index}
                    repoUrl={repo.html_url}
                    repoDesc={repo.description}
                    repoLang={repo.language}
                    repoName={repo.name}
                  />
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
