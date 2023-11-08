import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";

const NoteworthyProject = () => {
  return (
    <div className="group cursor-pointer rounded bg-lightPrimaryColor p-8">
      <header className="flex items-center justify-between pb-[35px]">
        <AiOutlineFolder className="text-[45px] text-secondaryColor" />

        <ul className="flex gap-3">
          <li>
            <FiGithub className="noteworthy-project-links text-[20px]" />
          </li>
          <li>
            <PiArrowSquareOut className="noteworthy-project-links" />
          </li>
        </ul>
      </header>

      <h2 className="pb-2.5 text-[22px] font-semibold text-lightestTertiaryColor hover:text-secondaryColor group-hover:text-secondaryColor">
        Noteworthy Project Title
      </h2>

      <p className="text-[17px] text-lightTertiaryColor">
        Building a custom multisite compatible WordPress plugin to build global
        search with Algolia
      </p>

      <ul className="flex gap-3 pt-5 font-mono text-[12px]">
        <li>React</li>
        <li>Express</li>
        <li>Heroku</li>
      </ul>
    </div>
  );
};

export default NoteworthyProject;
