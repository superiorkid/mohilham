import moment from "moment";
import Link from "next/link";
import { FaCalendarWeek, FaGithub, FaPlay, FaStar } from "react-icons/fa";
import { Repository } from "../../../../typing";

type PageProps = {
  repo: Repository;
};

function ReposCard({ repo }: PageProps) {
  return (
    <div className="border flex flex-col mt-auto rounded-md shadow-md px-3 py-5 space-y-3 hover:bg-slate-50 h-72 w-full relative">
      <div>
        <h3 className="text-lg font-medium">{repo.name}</h3>
      </div>

      <div className="flex flex-row justify-between text-xs font-light text-slate-700">
        <span className="flex flex-row items-center">
          <FaCalendarWeek className="text-sm mr-1" />
          {moment(repo.created_at).format("MMM YYYY")}
        </span>
        <span className="flex flex-row items-center font-bold">
          <FaStar className="text-sm mr-1" />
          {repo.stargazers_count}
        </span>
      </div>

      <div className={"my-auto"}>
        {repo.description ? (
          <p className="font-reg text-slate-600">{repo.description}</p>
        ) : (
          <p className="font-light text-slate-600 italic">No description...</p>
        )}
      </div>

      {/* @ts-expect-error Server Component */}
      <LanguagesList lang_url={repo.languages_url} />

      <div className="pt-6 flex flex-row justify-between space-x-1 bottom-5 w-full absolute right-0 px-2">
        {repo.homepage && (
          <Link
            href={repo.homepage}
            className="w-full justify-center px-5 py-2 rounded-md outline-gray-300 outline-1 outline hover:bg-black hover:text-white flex flex-row items-center"
          >
            <FaPlay className="mr-1" />
            Demo
          </Link>
        )}

        <Link
          href={repo.html_url}
          className="w-full justify-center px-5 py-2 rounded-md outline-gray-300 outline-1 outline hover:bg-black hover:text-white flex flex-row items-center"
        >
          <FaGithub className="mr-1" />
          Source code
        </Link>
      </div>
    </div>
  );
}

export default ReposCard;
