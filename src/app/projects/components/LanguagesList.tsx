import React from "react";
import { Languages } from "../../../../typing";

const getLang = async (URL: string) => {
  const res = await fetch(URL, {
    cache: "no-store",
    method: "GET",
    headers: {
      Authorization: `token ${process.env.GITHUB_PERSONAL_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error("failed to fetch languages.");
  }

  const lang: Languages = await res.json();

  return lang;
};

async function LanguagesList({ lang_url }: { lang_url: string }) {
  const languages = Object.keys(await getLang(lang_url)).slice(0, 4); //get top 4
  console.log(languages);
  return (
    <div className="flex flex-row text-xs font-light space-x-2">
      {languages &&
        languages.map((language, index) => (
          <span className="bg-gray-300 p-1 rounded-md" key={index}>
            {language}
          </span>
        ))}
    </div>
  );
}

export default LanguagesList;
