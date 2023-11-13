import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useInView } from "react-intersection-observer";
import { MdOutlineLanguage } from "react-icons/md";

let oldScrollY = 25;

const Navbar = ({ language, setLanguage }) => {
  const [scrollDirection, setScrollDirection] = useState("up");

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);

    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  // section references

  const aboutMeRef = document.querySelector("#aboutMe");
  const skillsRef = document.querySelector("#skills");
  const projectsRef = document.querySelector("#projects");
  const contactRef = document.querySelector("#contact");

  const scrollToSection = (sectionRef) => {
    sectionRef.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <nav
        className={`${
          scrollDirection == "down"
            ? "-translate-y-32 transition duration-700 ease-in-out"
            : "navbar-fade-appear-animation"
        } bg-navbarBgColor fixed z-20 flex w-full justify-between px-[50px] py-[31px] font-mono backdrop-blur`}
      >
        <Logo />

        <div
          ref={ref}
          className={`${inView ? "navbar-fade-appear-animation" : "opacity-0"}`}
        >
          {language == "French" && (
            <ul className="fade-in-animation flex items-center gap-9">
              <li
                className="nav-links"
                onClick={() => scrollToSection(aboutMeRef)}
              >
                <span className=" text-[12px] text-secondaryColor">01.</span> À
                propos
              </li>
              <li
                className="nav-links"
                onClick={() => scrollToSection(skillsRef)}
              >
                <span className="text-[12px] text-secondaryColor">02.</span>{" "}
                Compétences
              </li>
              <li
                className="nav-links"
                onClick={() => scrollToSection(projectsRef)}
              >
                <span className="text-[12px] text-secondaryColor">03.</span>{" "}
                Projets
              </li>
              <li
                className="nav-links"
                onClick={() => scrollToSection(contactRef)}
              >
                <span className="text-[12px] text-secondaryColor">04.</span>{" "}
                Contact
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
              <li
                className="nav-links"
                onClick={() => scrollToSection(aboutMeRef)}
              >
                <span className=" text-[12px] text-secondaryColor">01.</span>{" "}
                About
              </li>
              <li
                className="nav-links"
                onClick={() => scrollToSection(skillsRef)}
              >
                <span className="text-[12px] text-secondaryColor">02.</span>{" "}
                Skills
              </li>
              <li
                className="nav-links"
                onClick={() => scrollToSection(projectsRef)}
              >
                <span className="text-[12px] text-secondaryColor">03.</span>{" "}
                Projects
              </li>
              <li
                className="nav-links"
                onClick={() => scrollToSection(contactRef)}
              >
                <span className="text-[12px] text-secondaryColor">04.</span>{" "}
                Contact
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
