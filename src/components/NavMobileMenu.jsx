import { useEffect } from "react";

// icons
import { MdOutlineLanguage } from "react-icons/md";

// components
import Overlay from "../components/Overlay";

const NavMobileMenu = ({
  mobileMenuMount,
  language,
  setLanguage,
  isMenuActive,
  setIsMenuActive,
  hide,
  sectionReferences,
  scrollToSection,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const scrollToSectionAndHideNav = (sectionRef) => {
    scrollToSection(sectionRef);
    hide();
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <Overlay />
      <section
        className={`mobileMenu-slidein ${
          mobileMenuMount === "unmounting" ? "mobileMenu-slideout" : ""
        } fixed right-0 top-0 z-30 flex min-h-screen w-[70%] max-w-[400px] items-center justify-center bg-lightPrimaryColor font-mono text-tertiaryColor xmd:hidden`}
      >
        <div>
          {language == "French" && (
            <ul className="fade-in-animation flex flex-col items-center gap-8 p-2.5">
              <li
                className="nav-links flex flex-col items-center justify-center gap-2"
                onClick={() => {
                  scrollToSectionAndHideNav(sectionReferences.aboutMeRef);
                }}
              >
                <span className=" text-[14px] text-secondaryColor">01.</span>
                <span className="[font-size:_clamp(14px,4vw,18px)]">
                  À propos
                </span>
              </li>
              <li
                className="nav-links flex flex-col items-center justify-center gap-2"
                onClick={() => {
                  scrollToSectionAndHideNav(sectionReferences.skillsRef);
                }}
              >
                <span className="text-[14px] text-secondaryColor">02.</span>{" "}
                <span className="[font-size:_clamp(14px,4vw,18px)]">
                  Compétences
                </span>
              </li>
              <li
                className="nav-links flex flex-col items-center justify-center gap-2"
                onClick={() => {
                  scrollToSectionAndHideNav(sectionReferences.projectsRef);
                }}
              >
                <span className="text-[14px] text-secondaryColor">03.</span>{" "}
                <span className="[font-size:_clamp(14px,4vw,18px)]">
                  Projets
                </span>
              </li>
              <li
                className="nav-links flex flex-col items-center justify-center gap-2"
                onClick={() => {
                  scrollToSectionAndHideNav(sectionReferences.contactRef);
                }}
              >
                <span className="text-[14px] text-secondaryColor">04.</span>{" "}
                <span className="[font-size:_clamp(14px,4vw,18px)]">
                  Contact
                </span>
              </li>
              <li>
                <div className={`group relative h-[46px] w-[180px]`}>
                  <button className="absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor bg-lightPrimaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Mon CV
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
                </div>
              </li>
              <li className="flex items-center justify-center gap-2">
                <MdOutlineLanguage className="text-[22px] text-secondaryColor" />
                <span
                  className={`cursor-pointer font-mono transition duration-300 ease-in-out [font-size:_clamp(14px,4vw,16px)] ${
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
                  className={`cursor-pointer font-mono transition duration-300 ease-in-out [font-size:_clamp(14px,4vw,16px)]  ${
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
            <ul className="fade-in-animation flex flex-col items-center gap-8 p-2.5">
              <li
                className="nav-links flex flex-col items-center justify-center gap-2"
                onClick={() => {
                  scrollToSectionAndHideNav(sectionReferences.aboutMeRef);
                }}
              >
                <span className=" text-[14px] text-secondaryColor">01.</span>{" "}
                <span className="[font-size:_clamp(14px,4vw,18px)]">About</span>
              </li>
              <li
                className="nav-links flex flex-col items-center justify-center gap-2"
                onClick={() => {
                  scrollToSectionAndHideNav(sectionReferences.skillsRef);
                }}
              >
                <span className="text-[14px] text-secondaryColor">02.</span>{" "}
                <span className="[font-size:_clamp(14px,4vw,18px)]">
                  Skills
                </span>
              </li>
              <li
                className="nav-links flex flex-col items-center justify-center gap-2"
                onClick={() => {
                  scrollToSectionAndHideNav(sectionReferences.projectsRef);
                }}
              >
                <span className="text-[14px] text-secondaryColor">03.</span>{" "}
                <span className="[font-size:_clamp(14px,4vw,18px)]">
                  Projects
                </span>
              </li>
              <li
                className="nav-links flex flex-col items-center justify-center gap-2"
                onClick={() => {
                  scrollToSectionAndHideNav(sectionReferences.contactRef);
                }}
              >
                <span className="text-[14px] text-secondaryColor">04.</span>{" "}
                <span className="[font-size:_clamp(14px,4vw,18px)]">
                  Contact
                </span>
              </li>
              <li>
                <div className={`group relative h-[50px] w-[180px]`}>
                  <button className="absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor bg-lightPrimaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Resume
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
                </div>
              </li>
              <li className="flex items-center justify-center gap-2">
                <MdOutlineLanguage className="text-[22px] text-secondaryColor" />
                <span
                  className={`cursor-pointer font-mono transition duration-300 ease-in-out [font-size:_clamp(14px,4vw,16px)] ${
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
                  className={`cursor-pointer font-mono transition duration-300 ease-in-out [font-size:_clamp(14px,4vw,16px)]  ${
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
      </section>
    </>
  );
};

export default NavMobileMenu;
