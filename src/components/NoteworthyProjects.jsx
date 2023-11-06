import React from "react";
import NoteworthyProject from "./NoteworthyProject";

const NoteworthyProjects = () => {
  return (
    <section className="mx-auto max-w-4xl pt-32">
      <h2 className="text-center text-[32px] font-semibold text-lightestTertiaryColor">
        Other Noteworthy Projects
      </h2>
      <div className="grid grid-cols-3 gap-4 py-6">
        <NoteworthyProject />
        <NoteworthyProject />
        <NoteworthyProject />
        <NoteworthyProject />
        <NoteworthyProject />
        <NoteworthyProject />
      </div>

      <div className="flex items-center justify-center">
        <button className="btn-primary"> Show More </button>
      </div>
    </section>
  );
};

export default NoteworthyProjects;
