import Link from "next/link";

type StudiesCardProps = {
  description: string;
  name: string;
  language: string;
  html_url: string;
  created_at: string;
  node_id: string;
};

const StudiesCard: React.FC<StudiesCardProps> = ({
  name,
  language,
  html_url,
  node_id,
  created_at,
  description,
}) => {
  return (
    <div className=" border-x-[1px] h-[400px] border-y-[1px] p-14 hover:bg-white dark:hover:bg-white/45 relative">
      <Link
        href={html_url || ""}
        target="_blank"
        className="bg-color1/30 dark:bg-color1/75 w-full h-full cursor-pointer flex  flex-col"
      >
        <p className=" p-2 border-y-[1px]">
          {language === "C"
            ? "C Language"
            : language === null
            ? "no language"
            : language}
        </p>
        <p className=" p-2 border-b-[1px] truncate">{name}</p>
        <p className=" p-2  text-xs  h-full overflow-hidden">
          {description === null ? "No description" : description}
        </p>
      </Link>
      <div className="absolute top-4 left-6 uppercase">{node_id}</div>
      <div className="absolute bottom-4 left-6 uppercase text-xs">
        {new Date(created_at).toISOString().slice(0, 16).replace("T", " - ")}
      </div>
    </div>
  );
};

export default StudiesCard;