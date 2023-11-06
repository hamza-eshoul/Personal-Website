import React from "react";
import Project from "./Project";
import NoteworthyProjects from "./NoteworthyProjects";

const Projects = () => {
  return (
    <section className="mx-auto max-w-4xl pt-72">
      <header className="flex items-center gap-6">
        <h1>
          {" "}
          <span className="pr-3 font-mono text-[26px] text-secondaryColor">
            03.{" "}
          </span>{" "}
          <span className="text-[32px] font-semibold text-lightestTertiaryColor">
            Projects{" "}
          </span>
        </h1>
        <div className="h-[1px] w-[300px] bg-lightestPrimaryColor"></div>
      </header>

      <section>
        <Project />
        <Project />
        <Project />
      </section>
    </section>
  );
};

export default Projects;
