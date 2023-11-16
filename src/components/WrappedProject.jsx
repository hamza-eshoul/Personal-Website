import { useInView } from "react-intersection-observer";

// icons
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";

const WrappedProject = ({
  language,
  image,
  title,
  children,
  technologies,
  repoLink,
  previewLink,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } xsm:p-10 xsm:pb-[30px] relative mb-[70px] rounded bg-lightPrimaryColor p-5 pb-[15px] xmd:hidden`}
    >
      <div className="xsm:py-[6%]  py-2.5">
        <div className="flex h-full flex-col gap-5 xl:pt-10">
          <div className="flex flex-col gap-2">
            {language == "French" && (
              <h2 className="fade-in-animation font-mono text-[13px] text-secondaryColor">
                Projet Fonctionnel
              </h2>
            )}
            {language == "English" && (
              <h2 className="fade-in-animation pt-2.5 font-mono text-[13px] text-secondaryColor">
                Featured Project
              </h2>
            )}

            <a
              href="#"
              className="curor-pointer cursor-pointer text-[28px] font-semibold text-lightestTertiaryColor transition duration-300 ease-in-out hover:text-secondaryColor"
            >
              {" "}
              {title}
            </a>
          </div>

          <div className="text-justify text-[18px] text-lightTertiaryColor">
            {children}
          </div>

          <ul className="z-10 flex w-full flex-wrap gap-3 pb-3 pt-2 font-mono text-[13px] text-lightestTertiaryColor">
            {technologies &&
              technologies.map((technology) => <li>{technology}</li>)}
          </ul>

          <ul className="z-10 flex gap-3">
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
      </div>

      <div className="group absolute left-0 top-0 h-full w-full cursor-pointer opacity-10">
        <a
          href={previewLink}
          target="_blank"
          className="before relative z-[1] block h-full w-full rounded-md bg-secondaryColor transition duration-300 ease-in-out before:absolute before:inset-0 before:z-[3] before:w-full before:rounded-md before:rounded-md before:bg-primaryColor before:mix-blend-screen before:content-[''] group-hover:bg-inherit group-hover:before:hidden"
        >
          <div className="constrast-100 h-full rounded-md mix-blend-multiply brightness-90 grayscale transition duration-300 ease-in-out group-hover:brightness-100 group-hover:grayscale-0">
            <div className="block h-full">
              <img
                className="static bottom-0 left-0 right-0 top-0 block h-full w-full rounded-md"
                src={image}
              />
            </div>
            <img
              src={image}
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-md"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default WrappedProject;
