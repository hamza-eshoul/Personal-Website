import defaultProfile from "../assets/images/defaultProfile.png";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";

const Project = ({
  isReverse,
  image,
  title,
  repoLink,
  previewLink,
  technologies,
  children,
}) => {
  if (isReverse) {
    return (
      <article className="relative pb-[130px]">
        <div className="relative z-10 flex h-full flex-col gap-5 pt-12">
          <div className="flex flex-col gap-2">
            <h2 className="font-mono text-[13px] text-secondaryColor">
              Featured Project
            </h2>
            <a
              href="#"
              className="curor-pointer cursor-pointer text-[28px] font-semibold text-lightestTertiaryColor transition duration-300 ease-in-out hover:text-secondaryColor"
            >
              {" "}
              {title}
            </a>
          </div>

          <div className="w-[500px] rounded bg-lightPrimaryColor p-6 text-justify text-[18px] text-lightTertiaryColor">
            {children}
          </div>

          <ul className="flex gap-3 pt-2 font-mono text-[13px] text-lightTertiaryColor">
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

        <div className="group absolute right-0 top-0 h-[362px] w-[580px] cursor-pointer drop-shadow">
          <img
            src={image ? image : defaultProfile}
            className="h-full w-full rounded"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor opacity-60 group-hover:opacity-0" />
        </div>
      </article>
    );
  }

  return (
    <article className="relative pb-[100px]">
      <div className="group relative h-[362px] w-[580px] cursor-pointer drop-shadow">
        <img
          src={image ? image : defaultProfile}
          className="h-full w-full rounded"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor opacity-60 group-hover:opacity-0" />
      </div>

      <div className="absolute right-0 top-0 flex h-full flex-col items-end gap-5 pt-12">
        <div className="flex flex-col items-end gap-2">
          <h2 className="font-mono text-[13px] text-secondaryColor">
            Featured Project
          </h2>
          <a
            href="#"
            className="curor-pointer cursor-pointer text-[28px] font-semibold text-lightestTertiaryColor transition duration-300 ease-in-out hover:text-secondaryColor"
          >
            {" "}
            {title}
          </a>
        </div>

        <div className="w-[500px] rounded bg-lightPrimaryColor py-6 pl-12 pr-6 text-justify text-[18px] text-lightTertiaryColor">
          {children}
        </div>

        <ul className="flex gap-3 pt-2 font-mono text-[13px] text-lightTertiaryColor">
          <li>React</li>
          <li>Styled Component</li>
          <li>Express</li>
          <li>Spotify API</li>
          <li>Heroku</li>
        </ul>

        <ul className="flex gap-3">
          <li>
            <a href={repoLink} target="_blank">
              <FiGithub className="project-links" />
            </a>
          </li>
          <li>
            <a href={previewLink} target="_blank">
              <PiArrowSquareOut className="project-links" />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Project;
