import React from "react";
import NoteworthyProject from "./NoteworthyProject";

const NoteworthyProjects = () => {
  return (
    <section className="pt-32">
      <h2 className="pb-12 text-center text-[32px] font-semibold text-lightestTertiaryColor">
        Other Noteworthy Projects
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <NoteworthyProject />
        <NoteworthyProject />
        <NoteworthyProject />
        <NoteworthyProject />
        <NoteworthyProject />
        <NoteworthyProject />
      </div>

      <div className="mt-20 flex w-full justify-center">
        <div className="group relative  h-[53px] w-[128px] -translate-x-1">
          <button className="absolute bottom-0 left-0 right-0 top-0 z-20 rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[13px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
            Show More
          </button>
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
        </div>
      </div>
    </section>
  );
};

export default NoteworthyProjects;
