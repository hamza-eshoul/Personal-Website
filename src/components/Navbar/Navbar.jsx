import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDelayMobileNavUnmounting } from "../../hooks/useDelayMobileNavUnmounting";

// icons
import { MdOutlineLanguage } from "react-icons/md";

// components
import Logo from "./Logo";
import NavMobileMenu from "./NavMobileMenu";

let oldScrollY = 25;

const Navbar = ({ language, setLanguage }) => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  const [mobileMenuMount, show, hide] = useDelayMobileNavUnmounting();
  const [isMenuActive, setIsMenuActive] = useState(false);

  const sectionReferences = {
    aboutMeRef: document.querySelector("#aboutMe"),
    skillsRef: document.querySelector("#skills"),
    projectsRef: document.querySelector("#projects"),
    contactRef: document.querySelector("#contact"),
  };

  const nav_items = [
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

  const scrollToSection = (sectionRef) => {
    sectionRef.scrollIntoView({ behavior: "smooth" });
  };

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

  return (
    <header>
      <nav
        className={`${
          scrollDirection == "down"
            ? "-translate-y-32 transition duration-700 ease-in-out"
            : "navbar-fade-appear-animation"
        } fixed z-30 flex h-[100px] w-full justify-between bg-navbarBgColor px-[25px] py-[31px] font-mono text-tertiaryColor backdrop-blur xlg:px-[50px]`}
      >
        <Logo />

        <div
          ref={ref}
          className={`${
            inView ? "navbar-fade-appear-animation" : "opacity-0"
          } hidden xmd:block`}
        >
          {language == "French" && (
            <ul className="fade-in-animation flex items-center gap-5 xlg:gap-9">
              {nav_items.map((item) => (
                <li
                  key={item.number}
                  className="nav-links"
                  onClick={() => scrollToSection(item.sectionRef)}
                >
                  <span className="text-[12px] text-secondaryColor">
                    {item.number}
                  </span>{" "}
                  {item.french_title}
                </li>
              ))}

              <li>
                <div className={`group relative h-[38px] w-[84px]`}>
                  <button className="absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
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
            <ul className="fade-in-animation flex items-center gap-7 xlg:gap-9">
              {nav_items.map((item) => (
                <li
                  key={item.number}
                  className="nav-links"
                  onClick={() => scrollToSection(item.sectionRef)}
                >
                  <span className="text-[12px] text-secondaryColor">
                    {item.number}
                  </span>{" "}
                  {item.english_title}
                </li>
              ))}
              <li>
                <div className={`group relative h-[38px] w-[84px]`}>
                  <button className="absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
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

      <button
        className={`${
          isMenuActive ? "menuActive" : ""
        } fixed right-[25px] top-6 z-40 flex gap-10 py-3.5 xmd:hidden ${
          scrollDirection == "down"
            ? "transtion -translate-y-32 duration-700 ease-in-out"
            : "navbar-fade-appear-animation"
        }`}
        onClick={() => {
          setIsMenuActive(!isMenuActive);
          if (mobileMenuMount === "mounted") {
            hide();
          } else {
            show();
          }
        }}
      >
        <div className="relative h-6 w-[30px]">
          <div className="menu-bar1"></div>
          <div className="menu-bar2"></div>
          <div className="menu-bar3"></div>
        </div>
      </button>

      {mobileMenuMount !== "unmounted" && (
        <NavMobileMenu
          mobileMenuMount={mobileMenuMount}
          hide={hide}
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
          language={language}
          setLanguage={setLanguage}
          sectionReferences={sectionReferences}
          scrollToSection={scrollToSection}
        />
      )}
    </header>
  );
};

export default Navbar;
