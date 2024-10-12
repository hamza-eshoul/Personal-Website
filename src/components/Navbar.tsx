import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useDelayMobileNavUnmounting } from "../useDelayMobileNavUnmounting";
import { MdOutlineLanguage } from "react-icons/md";

// components
import Logo from "./Logo";
import NavMobileMenu from "./NavMobileMenu";

let oldScrollY = 0;

const Navbar = () => {
  // local state
  const { t, i18n } = useTranslation();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [mobileMenuMount, show, hide] = useDelayMobileNavUnmounting();

  // library hooks
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  // data
  const sectionReferences = {
    aboutMeRef: document.querySelector("#aboutMe"),
    skillsRef: document.querySelector("#skills"),
    projectsRef: document.querySelector("#projects"),
    contactRef: document.querySelector("#contact"),
  };

  const nav_items = [
    {
      number: "01.",
      title: t("navbar.about"),
      sectionRef: sectionReferences.aboutMeRef,
    },
    {
      number: "02.",
      title: t("navbar.skills"),
      sectionRef: sectionReferences.skillsRef,
    },
    {
      number: "03.",
      title: t("navbar.projects"),
      sectionRef: sectionReferences.projectsRef,
    },
    {
      number: "04.",
      title: t("navbar.contact"),
      sectionRef: sectionReferences.contactRef,
    },
  ];

  // functions
  const scrollToSection = (sectionRef: Element | null): void => {
    if (sectionRef && "scrollIntoView" in sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  const controlDirection = () => {
    if (window.scrollY < 50) return;
    setScrollDirection(window.scrollY > oldScrollY ? "down" : "up");
    oldScrollY = window.scrollY;
  };

  const toggleMobileMenu = () => {
    setIsMenuActive(!isMenuActive);
    mobileMenuMount === "mounted" ? hide() : show();
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const cvUrl =
    i18n.language === "en"
      ? "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1728741033/personal_portfolio/Hamza-Eshoul-Front-End-Developer-Resume_dn5qjp.pdf"
      : "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1728739422/personal_portfolio/CV_Hamza_Eshoul_c412jb.pdf";

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
          <ul className="flex items-center">
            {nav_items.map((item, index) => (
              <li key={index} className="mr-[5px] px-[10px] py-[10px]">
                <button
                  onClick={() => scrollToSection(item.sectionRef)}
                  className="text-[13px] transition-colors duration-300 ease-in-out hover:text-secondaryColor"
                >
                  <span className="text-secondaryColor">{item.number}</span>{" "}
                  {item.title}
                </button>
              </li>
            ))}
            <li className="group relative ml-[15px] h-[38px] w-[84px]">
              <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                <button className="absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                  {t("navbar.cv")}
                </button>
                <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
              </a>
            </li>
            <li className="ml-4 flex items-center justify-center gap-2">
              <MdOutlineLanguage className="text-[22px] text-secondaryColor" />
              <span
                className={`cursor-pointer font-mono text-[13px] transition duration-300 ease-in-out ${
                  i18n.language === "fr"
                    ? "text-secondaryColor"
                    : "hover:text-lightestTertiaryColor"
                }`}
                onClick={() => changeLanguage("fr")}
              >
                Français
              </span>
              <div className="h-3 w-[1px] bg-lightTertiaryColor"> </div>
              <span
                className={`cursor-pointer font-mono text-[13px] transition duration-300 ease-in-out ${
                  i18n.language === "en"
                    ? "text-secondaryColor"
                    : "hover:text-lightestTertiaryColor"
                }`}
                onClick={() => changeLanguage("en")}
              >
                English
              </span>
            </li>
          </ul>
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
        onClick={toggleMobileMenu}
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
          sectionReferences={sectionReferences}
          scrollToSection={scrollToSection}
        />
      )}
    </header>
  );
};

export default Navbar;
