import getRepos, { GithubDataProps } from "@/app/api/githubRepoAction";
import StudiesCard from "./StudiesCard";

type StudiesProps = {};

const Studies: React.FC<StudiesProps> = async ({}) => {
  const data = await getRepos();
  return (
    <section className="container my-44 ">
      <h1 className="text-4xl font-medium my-8">studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data.map((repo: GithubDataProps) => {
          return (
            <StudiesCard
              key={repo.node_id}
              created_at={repo.created_at}
              name={repo.name}
              node_id={repo.node_id}
              description={repo.description}
              html_url={repo.html_url}
              language={repo.language}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Studies;
