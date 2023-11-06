import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";

const NoteworthyProject = () => {
  return (
    <div className="group cursor-pointer space-y-5 rounded bg-lightPrimaryColor p-6">
      <header className="flex items-center justify-between px-1">
        <AiOutlineFolder className="text-4xl text-secondaryColor" />

        <ul className="flex gap-3">
          <li>
            <FiGithub className="noteworthy-project-links" />
          </li>
          <li>
            <PiArrowSquareOut className="noteworthy-project-links" />
          </li>
        </ul>
      </header>

      <h2 className="pt-2 text-xl font-semibold text-lightestTertiaryColor hover:text-secondaryColor group-hover:text-secondaryColor">
        NoteworthyProject Title
      </h2>

      <p className="text-[15px]">
        Building a custom multisite compatible WordPress plugin to build global
        search with Algolia
      </p>

      <ul className="flex gap-3 font-mono text-[12px]">
        <li>React</li>
        <li>Express</li>
        <li>Heroku</li>
      </ul>
    </div>
  );
};

export default NoteworthyProject;
