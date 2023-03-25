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
  const languages = Object.keys(await getLang(lang_url)).slice(0, 3); //get top 4

  // if (languages.length > 0) {
  //   <div className="text-xs font-regs flex flex-row space-x-3">
  //     {languages.map((lang, index) => (
  //       <span key={index} className="px-2 py-1 bg-gray-200">
  //         {lang}
  //       </span>
  //     ))}
  //   </div>;

  return (
    <div>
      <h3>Hello</h3>
    </div>
  );

  //   <div className="text-xs font-regs flex flex-row space-x-3">
  //   {languages.map((lang, index) => (
  //     <span key={index} className="px-2 py-1 bg-gray-200">
  //       lang
  //     </span>
  //   ))}
  // </div>
}

export default LanguagesList;
