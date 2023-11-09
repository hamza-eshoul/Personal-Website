import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";

const NoteworthyProject = ({
  title,
  repoLink,
  previewLink,
  summary,
  technologies,
}) => {
  return (
    <div className="group cursor-pointer rounded bg-lightPrimaryColor p-8">
      <header className="flex items-center justify-between pb-[35px]">
        <AiOutlineFolder className="text-[45px] text-secondaryColor" />

        <ul className="flex gap-3">
          <li>
            <a href={repoLink} target="_blank">
              <FiGithub className="noteworthy-project-links text-[20px]" />
            </a>
          </li>
          {previewLink && (
            <li>
              <a href={previewLink} target="_blank">
                <PiArrowSquareOut className="noteworthy-project-links" />
              </a>
            </li>
          )}
        </ul>
      </header>

      <h2 className="pb-2.5 text-[22px] font-semibold text-lightestTertiaryColor hover:text-secondaryColor group-hover:text-secondaryColor">
        {title}
      </h2>

      <p className="text-[17px] text-lightTertiaryColor">{summary}</p>

      <ul className="flex gap-3 pt-5 font-mono text-[12px]">
        {technologies &&
          technologies.map((technology) => <li> {technology}</li>)}
      </ul>
    </div>
  );
};

export default NoteworthyProject;
