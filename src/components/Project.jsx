import defaultProfile from "../assets/defaultProfile.png";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";

const Project = () => {
  return (
    <article className="flex py-10">
      <div className="group relative h-[362px] w-[580px] cursor-pointer">
        <img src={defaultProfile} className="h-full w-full rounded" />
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor opacity-60 group-hover:opacity-0" />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="font-mono text-[13px] text-secondaryColor">
            Featured Project
          </h2>
          <h3 className="font-semibold text-lightestTertiaryColor">
            {" "}
            Odin Book Project{" "}
          </h3>
        </div>

        <div className="rounded bg-lightPrimaryColor p-5 text-lightTertiaryColor">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on
          <span className="text-secondaryColor">
            Visual Studio Marketplace, Package Control, Atom Package Manager,
            and npm.
          </span>
        </div>

        <ul className="flex gap-3 font-mono text-[13px]">
          <li>React</li>
          <li>Styled Component</li>
          <li>Express</li>
          <li>Spotify API</li>
          <li>Heroku</li>
        </ul>

        <ul className="flex gap-3">
          <li>
            <FiGithub className="project-links" />
          </li>
          <li>
            <PiArrowSquareOut className="project-links" />
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Project;
