import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineLanguage } from "react-icons/md";

// components
import Overlay from "./Overlay";

interface NavItem {
  number: string;
  title: string;
  sectionRef: Element | null;
}

interface NavMobileMenuProps {
  mobileMenuMount: string;
  hide: () => void;
  isMenuActive: boolean;
  setIsMenuActive: (isActive: boolean) => void;
  sectionReferences: Record<string, Element | null>;
  scrollToSection: (sectionRef: Element | null) => void;
}

const ResumeButton = () => {
  const { t, i18n } = useTranslation();

  const cvUrl =
    i18n.language === "en"
      ? "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1728741033/personal_portfolio/Hamza-Eshoul-Front-End-Developer-Resume_dn5qjp.pdf"
      : "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1728739422/personal_portfolio/CV_Hamza_Eshoul_c412jb.pdf";

  return (
    <li className="group relative h-[46px] w-[180px]">
      <a href={cvUrl} target="_blank" rel="noopener noreferrer">
        <button className="absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor bg-lightPrimaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
          {t("navbar.cv")}
        </button>
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
      </a>
    </li>
  );
};

const NavMobileMenu = ({
  mobileMenuMount,
  hide,
  isMenuActive,
  setIsMenuActive,
  sectionReferences,
  scrollToSection,
}: NavMobileMenuProps) => {
  const { t, i18n } = useTranslation();

  const mobile_nav_items: NavItem[] = [
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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  const scrollToSectionFromMobileNav = (sectionRef: Element | null) => {
    scrollToSection(sectionRef);
    hideNavAndTriggerMenuAnimation();
  };

  const hideNavAndTriggerMenuAnimation = () => {
    hide();
    setIsMenuActive(!isMenuActive);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
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
        <ul className="fade-in-animation flex flex-col items-center gap-8 p-2.5">
          {mobile_nav_items.map((item) => (
            <li
              key={item.number}
              className="nav-links flex flex-col items-center justify-center gap-2"
              onClick={() => scrollToSectionFromMobileNav(item.sectionRef)}
            >
              <span className="text-[14px] text-secondaryColor">
                {item.number}
              </span>
              <span className="[font-size:_clamp(14px,4vw,18px)]">
                {item.title}
              </span>
            </li>
          ))}
          <ResumeButton />
          <li className="flex items-center justify-center gap-2">
            <MdOutlineLanguage className="text-[22px] text-secondaryColor" />
            <span
              className={`cursor-pointer font-mono transition duration-300 ease-in-out [font-size:_clamp(14px,4vw,16px)] ${
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
              className={`cursor-pointer font-mono transition duration-300 ease-in-out [font-size:_clamp(14px,4vw,16px)] ${
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
      </section>
    </>
  );
};

export default NavMobileMenu;
