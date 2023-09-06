import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { Check } from "phosphor-react";

import Dropdown from "..";

import ImgEnglish from "../../../assets/english.png";
import ImgMandarin from "../../../assets/mandarin.png";
import ImgRussian from "../../../assets/russian.png";

const languages = [
  { title: "English", abbr: "Eng", image: ImgEnglish, active: true }, // only one active!
  { title: "Mandarin", abbr: "Man", image: ImgMandarin },
  { title: "Russian", abbr: "Rus", image: ImgRussian },
];

export default function DropdownLanguages() {
  const activeItem = languages.filter((language) => language.active)[0];

  const [abbr, setAbbr] = useState<string>(activeItem.abbr);

  return (
    <Dropdown label="Multi-language" trigger={abbr} caret>
      <>
        {languages.map((language) => (
          <DropdownMenu.Item
            onClick={() => setAbbr(language.abbr)}
            key={language.title}
            className="flex items-center gap-3 py-2 cursor-pointer"
          >
            <img src={language.image} width={20} height={20} alt={language.title} />

            <span className={`${language.abbr === abbr ? "text-gray-900 font-medium" : "text-gray-600"}`}>
              {language.title}
            </span>

            {language.abbr === abbr && <Check size={16} weight="bold" className="text-primary-500 ml-auto" />}
          </DropdownMenu.Item>
        ))}
      </>
    </Dropdown>
  );
}
