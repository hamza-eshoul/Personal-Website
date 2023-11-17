import { useEffect } from "react";

// icons
import { MdOutlineLanguage } from "react-icons/md";

// components
import Overlay from "../Overlay";

const NavMobileMenu = ({
  mobileMenuMount,
  hide,
  isMenuActive,
  setIsMenuActive,
  language,
  setLanguage,
  sectionReferences,
  scrollToSection,
}) => {
  const mobile_nav_items = [
    {
      number: "01.",
      french_title: "À propos",
      english_title: "About",
      sectionRef: sectionReferences.aboutMeRef,
    },
    {
      number: "02.",
      french_title: "Compétences",
      english_title: "Skills",
      sectionRef: sectionReferences.skillsRef,
    },
    {
      number: "03.",
      french_title: "Projets",
      english_title: "Projects",
      sectionRef: sectionReferences.projectsRef,
    },
    {
      number: "04.",
      french_title: "Contact",
      english_title: "Contact",
      sectionRef: sectionReferences.contactRef,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const scrollToSectionFromMobileNav = (sectionRef) => {
    scrollToSection(sectionRef);
    hideNavAndTriggerMenuAnimation();
  };

  const hideNavAndTriggerMenuAnimation = () => {
    hide();
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <Overlay
        hideNavAndTriggerMenuAnimation={hideNavAndTriggerMenuAnimation}
      />
      <section
        className={`mobileMenu-slidein-animation ${
          mobileMenuMount === "unmounting"
            ? "mobileMenu-slideout-animation"
            : ""
        } fixed right-0 top-0 z-30 flex min-h-screen w-[70%] max-w-[400px] items-center justify-center bg-lightPrimaryColor font-mono text-tertiaryColor xmd:hidden`}
      >
        {language == "French" && (
          <ul className="fade-in-animation flex flex-col items-center gap-8 p-2.5">
            {mobile_nav_items.map((item) => (
              <li
                key={item.number}
                className="nav-links flex flex-col items-center justify-center gap-2"
                onClick={() => scrollToSectionFromMobileNav(item.sectionRef)}
              >
                <span className="text-[14px] text-secondaryColor">
                  {" "}
                  {item.number}{" "}
                </span>
                <span className="[font-size:_clamp(14px,4vw,18px)]">
                  {" "}
                  {item.french_title}
                </span>
              </li>
            ))}

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
            {mobile_nav_items.map((item) => (
              <li
                key={item.number}
                className="nav-links flex flex-col items-center justify-center gap-2"
                onClick={() => scrollToSectionFromMobileNav(item.sectionRef)}
              >
                <span className="text-[14px] text-secondaryColor">
                  {" "}
                  {item.number}{" "}
                </span>
                <span className="[font-size:_clamp(14px,4vw,18px)]">
                  {" "}
                  {item.english_title}
                </span>
              </li>
            ))}
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
      </section>
    </>
  );
};

export default NavMobileMenu;
