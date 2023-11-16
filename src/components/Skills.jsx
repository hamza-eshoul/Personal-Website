import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// components
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import DevOpsAndTestingSkills from "./DevOpsAndTestingSkills";

const Skills = ({ language }) => {
  const [isFrontend, setIsFrontend] = useState(true);
  const [isBackend, setIsBackend] = useState(false);
  const [isDevOpsAndTesting, setIsDevOpsAndTesting] = useState(false);
  const [skillWidth, setSkillWidth] = useState(0);
  const skillRef = useRef();

  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const showFrontendSkills = () => {
    setIsFrontend(true);
    setIsBackend(false);
    setIsDevOpsAndTesting(false);
  };

  const showBackEndSkills = () => {
    setIsBackend(true);
    setIsFrontend(false);
    setIsDevOpsAndTesting(false);
  };

  const showDevOpsAndTestingSkills = () => {
    setIsDevOpsAndTesting(true);
    setIsFrontend(false);
    setIsBackend(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setSkillWidth(skillRef.current.offsetWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="skills"
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } mx-auto max-w-3xl py-[60px] xsm:py-[80px] xmd:py-[100px]`}
    >
      <header className="flex items-center gap-6 pb-10">
        <h1>
          {" "}
          <span className="numberOfHeading">02. </span>{" "}
          {language == "French" && (
            <span className="fade-in-animation numbered-headings">
              Compétences & Technologies{" "}
            </span>
          )}
          {language == "English" && (
            <span className="fade-in-animation numbered-headings">
              Skills & Technologies{" "}
            </span>
          )}
        </h1>
        <div className="numbered-headings-bar" />
      </header>

      <div className="relative flex flex-col gap-8 xmd:flex-row xmd:gap-0 ">
        <div
          className={`absolute hidden xmd:block ${
            isDevOpsAndTesting ? "h-[61.797px]" : "h-[44.898px]"
          } ${isBackend ? "translate-y-[44.898px]" : ""} ${
            isDevOpsAndTesting ? "translate-y-[90px]" : ""
          } rounded border-[1px] border-secondaryColor transition duration-300 ease-in-out`}
        />
        <div
          className={`absolute top-[45px] h-[1px] rounded border-[1px] border-secondaryColor transition duration-300 ease-in-out xmd:hidden`}
          style={{
            width: `${skillWidth - 1}px`,
            transform: `${
              isBackend
                ? `translateX(${skillWidth}px)`
                : isDevOpsAndTesting
                ? `translateX(${skillWidth * 2}px)`
                : ""
            }`,
          }}
        />

        <ul className="flex w-full flex-row xmd:w-auto xmd:flex-col">
          <li
            ref={skillRef}
            className={`skill-items ${
              isFrontend ? "text-secondaryColor" : ""
            } flex-1 text-center xmd:flex-none xmd:text-start`}
            onClick={showFrontendSkills}
          >
            Frontend
          </li>
          <li
            className={`skill-items ${
              isBackend ? "text-secondaryColor" : ""
            } flex-1 text-center xmd:flex-none xmd:text-start`}
            onClick={showBackEndSkills}
          >
            Backend
          </li>
          <li
            className={`skill-items ${
              isDevOpsAndTesting ? "text-secondaryColor" : ""
            } flex-1 text-center xmd:flex-none xmd:text-start`}
            onClick={showDevOpsAndTestingSkills}
          >
            DevOps
            <span className="hidden min-[560px]:inline"> & Testing</span>
          </li>
        </ul>

        {isFrontend && <FrontendSkills language={language} />}
        {isBackend && <BackendSkills language={language} />}
        {isDevOpsAndTesting && <DevOpsAndTestingSkills language={language} />}
      </div>
    </section>
  );
};

export default Skills;
