import { FaCopyright } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoPython,
} from "react-icons/bi";
import { DiHtml5, DiCode } from "react-icons/di";
import { FaTerminal } from "react-icons/fa";
interface CardProps {
  repoUrl: string | undefined;
  repoLang?: string | undefined;
  repoName?: string | undefined;
  repoDesc?: string | undefined;
  index?: number;
  height: string;
}
//
const GithubCard: React.FC<CardProps> = ({
  repoUrl,
  repoLang,
  repoDesc,
  repoName,
  index,
  height,
}) => {
  return (
    <div key={index}>
      <a href={repoUrl} target="_blank">
        <div className={``}>
          <div
            className={`dark:transparent cursor-pointer  mb-5 md:mb-0 h-[${height}]  flex flex-col ring-gray-600  ring-1  shadow-md p-7`}
          >
            <div className="h-[30%] flex align-center  gap-3">
              <div>
                {repoLang === "Python" ? (
                  <BiLogoPython size={50} />
                ) : repoLang === "Shell" ? (
                  <FaTerminal size={50} />
                ) : repoLang === "JavaScript" ? (
                  <BiLogoJavascript size={50} />
                ) : repoLang === "TypeScript" ? (
                  <BiLogoTypescript size={50} />
                ) : repoLang === "HTML" ? (
                  <DiHtml5 size={50} />
                ) : repoLang === "C" ? (
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
                        repoLang === "Python"
                          ? "underline-python"
                          : repoLang === "Shell"
                          ? "underline-shell"
                          : repoLang === "JavaScript"
                          ? "underline-javascript"
                          : repoLang === "TypeScript"
                          ? "underline-typescript"
                          : repoLang === "HTML"
                          ? "underline-html"
                          : repoLang === "C"
                          ? "underline-c"
                          : "underline-noLanguage"
                      }`}
                    >
                      {repoLang === "C"
                        ? "C Language"
                        : repoLang === null
                        ? "no language"
                        : repoLang}
                    </span>
                  </div>
                </div>
                <p className="line-clamp-1 ">{repoName}</p>
              </div>
            </div>
            <div className="h-[70%] pt-2 pl-1 text-sm flex gap-1 flex-col">
              <p className="text-gray-600 ">{"<h3>"}</p>
              <div className="flex gap-3 ">
                <div className="">
                  <div className="h-full ml-4 border-l border-gray-600 border-solid "></div>
                </div>
                <p className="h-full line-clamp-3">{repoDesc}</p>
              </div>
              <p className="text-gray-600 ">{"</h3>"}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GithubCard;
