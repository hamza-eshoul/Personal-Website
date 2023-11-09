import Logo from "./Logo";

import { MdOutlineLanguage } from "react-icons/md";

const Navbar = ({ language, setLanguage }) => {
  return (
    <nav className="fixed flex w-full justify-between px-[50px] py-[26px] font-mono">
      <Logo />

      {language == "French" && (
        <ul className="fade-in-animation flex items-center gap-9">
          <li className="nav-links">
            <span className=" text-[12px] text-secondaryColor">01.</span> À
            propos
          </li>
          <li className="nav-links">
            <span className="text-[12px] text-secondaryColor">02.</span>{" "}
            Compétences
          </li>
          <li className="nav-links">
            <span className="text-[12px] text-secondaryColor">03.</span> Projets
          </li>
          <li className="nav-links">
            <span className="text-[12px] text-secondaryColor">04.</span> Contact
          </li>
          <li>
            <div className={`group relative h-[38px] w-[84px]`}>
              <button className="absolute bottom-0 left-0 right-0 top-0 z-20 rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                Mon CV
              </button>
              <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
            </div>
          </li>
          <li className="flex items-center justify-center gap-2">
            <MdOutlineLanguage className="text-[22px] text-secondaryColor" />
            <span
              className={`cursor-pointer font-mono text-[13px] transition duration-300 ease-in-out ${
                language == "French"
                  ? "text-secondaryColor"
                  : "hover:text-lightestTertiaryColor"
              }`}
              onClick={() => setLanguage("French")}
            >
              Français
            </span>
            <div className="h-3 w-[1px] bg-lightTertiaryColor"> </div>
            <span
              className={`cursor-pointer font-mono text-[13px] transition duration-300 ease-in-out  ${
                language == "English"
                  ? "text-secondaryColor"
                  : "hover:text-lightestTertiaryColor"
              }`}
              onClick={() => setLanguage("English")}
            >
              Anglais
            </span>
          </li>
        </ul>
      )}

      {language == "English" && (
        <ul className="fade-in-animation flex items-center gap-9">
          <li className="nav-links">
            <span className=" text-[12px] text-secondaryColor">01.</span> About
          </li>
          <li className="nav-links">
            <span className="text-[12px] text-secondaryColor">02.</span> Skills
          </li>
          <li className="nav-links">
            <span className="text-[12px] text-secondaryColor">03.</span>{" "}
            Projects
          </li>
          <li className="nav-links">
            <span className="text-[12px] text-secondaryColor">04.</span> Contact
          </li>
          <li>
            <div className={`group relative h-[38px] w-[84px]`}>
              <button className="absolute bottom-0 left-0 right-0 top-0 z-20 rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                Resume
              </button>
              <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
            </div>
          </li>
          <li className="flex items-center justify-center gap-2">
            <MdOutlineLanguage className="text-[22px] text-secondaryColor" />
            <span
              className={`cursor-pointer font-mono text-[13px] transition duration-300 ease-in-out ${
                language == "French"
                  ? "text-secondaryColor"
                  : "hover:text-lightestTertiaryColor"
              }`}
              onClick={() => setLanguage("French")}
            >
              French
            </span>
            <div className="h-3 w-[1px] bg-lightTertiaryColor"> </div>
            <span
              className={`cursor-pointer font-mono text-[13px] transition duration-300 ease-in-out  ${
                language == "English"
                  ? "text-secondaryColor"
                  : "hover:text-lightestTertiaryColor"
              }`}
              onClick={() => setLanguage("English")}
            >
              English
            </span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
