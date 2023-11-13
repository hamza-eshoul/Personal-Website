import React, { useState } from "react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import DevOpsAndTestingSkills from "./DevOpsAndTestingSkills";
import { useInView } from "react-intersection-observer";

const Skills = ({ language }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const [isFrontend, setIsFrontend] = useState(true);
  const [isBackend, setIsBackend] = useState(false);
  const [isDevOpsAndTesting, setIsDevOpsAndTesting] = useState(false);

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

  return (
    <section
      ref={ref}
      id="skills"
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } mx-32 py-[100px]`}
    >
      <header className="flex items-center gap-6 pb-10">
        <h1>
          {" "}
          <span className="pr-3 font-mono text-[26px] text-secondaryColor">
            02.{" "}
          </span>{" "}
          {language == "French" && (
            <span className="fade-in-animation text-[32px] font-semibold text-lightestTertiaryColor">
              Compétences & Technologies{" "}
            </span>
          )}
          {language == "English" && (
            <span className="fade-in-animation text-[32px] font-semibold text-lightestTertiaryColor">
              Skills & Technologies{" "}
            </span>
          )}
        </h1>
        <div className="h-[1px] w-[300px] bg-lightestPrimaryColor"></div>
      </header>

      <div className="relative flex">
        <div
          className={`absolute ${
            isDevOpsAndTesting ? "h-[61.797px]" : "h-[44.898px]"
          } ${isBackend ? "translate-y-[44.898px]" : ""} ${
            isDevOpsAndTesting ? "translate-y-[90px]" : ""
          } rounded border-[1px] border-secondaryColor transition duration-300 ease-in-out`}
        />
        <ul>
          <li
            className={`skill-items ${isFrontend ? "text-secondaryColor" : ""}`}
            onClick={showFrontendSkills}
          >
            Frontend
          </li>
          <li
            className={`skill-items ${isBackend ? "text-secondaryColor" : ""}`}
            onClick={showBackEndSkills}
          >
            Backend
          </li>
          <li
            className={`skill-items ${
              isDevOpsAndTesting ? "text-secondaryColor" : ""
            }`}
            onClick={showDevOpsAndTestingSkills}
          >
            DevOps & Testing
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
