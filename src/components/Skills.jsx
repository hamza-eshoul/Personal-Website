import React, { useState } from "react";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import DevOpsAndTestingSkills from "./DevOpsAndTestingSkills";

const Skills = () => {
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
    <section className="mx-32 pt-72">
      <header className="flex items-center gap-6">
        <h1>
          {" "}
          <span className="pr-3 font-mono text-[26px] text-secondaryColor">
            02.{" "}
          </span>{" "}
          <span className="text-[32px] font-semibold text-lightestTertiaryColor">
            Skills & Technologies{" "}
          </span>
        </h1>
        <div className="h-[1px] w-[300px] bg-lightestPrimaryColor"></div>
      </header>

      <div className="flex">
        <ul>
          <li
            className={`skill-items ${
              isFrontend ? "border-secondaryColor" : ""
            } `}
            onClick={showFrontendSkills}
          >
            Frontend
          </li>
          <li
            className={`skill-items ${
              isBackend ? "border-secondaryColor" : ""
            } `}
            onClick={showBackEndSkills}
          >
            Backend
          </li>
          <li
            className={`skill-items ${
              isDevOpsAndTesting ? "border-secondaryColor" : ""
            } `}
            onClick={showDevOpsAndTestingSkills}
          >
            DevOps & Testing
          </li>
        </ul>

        {isFrontend && <FrontendSkills />}
        {isBackend && <BackendSkills />}
        {isDevOpsAndTesting && <DevOpsAndTestingSkills />}
      </div>
    </section>
  );
};

export default Skills;
