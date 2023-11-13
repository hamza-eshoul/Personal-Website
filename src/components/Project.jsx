import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";
import { useInView } from "react-intersection-observer";

const Project = ({
  isReverse,
  language,
  image,
  title,
  repoLink,
  previewLink,
  technologies,
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  if (isReverse) {
    return (
      <article
        ref={ref}
        className={`${
          inView ? "fade-appear-animation" : "opacity-0"
        } relative pb-[130px]`}
      >
        <div className="relative flex h-full flex-col gap-5 pt-12">
          <div className="flex flex-col gap-2">
            {language == "French" && (
              <h2 className="fade-in-animation font-mono text-[13px] text-secondaryColor">
                Projet Fonctionnel
              </h2>
            )}
            {language == "English" && (
              <h2 className="fade-in-animation font-mono text-[13px] text-secondaryColor">
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

          <div className="z-10 w-[500px] rounded bg-lightPrimaryColor p-6 text-justify text-[18px] text-lightTertiaryColor">
            {children}
          </div>

          <ul className="flex gap-3 pt-2 font-mono text-[13px] text-lightTertiaryColor">
            {technologies &&
              technologies.map((technology) => <li>{technology}</li>)}
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
        <div className="group absolute right-0 top-0 h-[362px] w-[580px] cursor-pointer">
          <a
            href={previewLink}
            target="_blank"
            className="relative z-[1] block h-full w-full rounded-md bg-secondaryColor transition duration-300 ease-in-out before:absolute before:inset-0 before:z-[3] before:h-full before:w-full before:rounded-md before:rounded-md before:bg-primaryColor before:mix-blend-screen before:content-[''] group-hover:bg-inherit group-hover:before:hidden"
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
      </article>
    );
  }

  return (
    <article
      ref={ref}
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } relative pb-[100px]`}
    >
      <div className="group relative h-[362px] w-[580px] cursor-pointer ">
        <a
          href={previewLink}
          target="_blank"
          className="relative z-[1] block h-full w-full rounded-md  bg-secondaryColor transition duration-300 ease-in-out before:absolute before:inset-0 before:z-[3] before:h-full before:w-full before:bg-primaryColor before:mix-blend-screen before:content-[''] group-hover:bg-inherit group-hover:before:hidden"
        >
          <div
            className="constrast-100 h-full rounded-md mix-blend-multiply brightness-90 grayscale transition 
           duration-0 group-hover:brightness-100 group-hover:grayscale-0
           "
          >
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

      <div className="absolute right-0 top-0 z-10 flex h-full flex-col items-end gap-5 pt-12">
        <div className="flex flex-col items-end gap-2">
          {language == "French" && (
            <h2 className="fade-in-animation font-mono text-[13px] text-secondaryColor">
              Projet Fonctionnel
            </h2>
          )}
          {language == "English" && (
            <h2 className="fade-in-animation font-mono text-[13px] text-secondaryColor">
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

        <div className="w-[500px] rounded bg-lightPrimaryColor py-6 pl-12 pr-6 text-justify text-[18px] text-lightTertiaryColor">
          {children}
        </div>

        <ul className="flex gap-5 pt-2 font-mono text-[13px] text-lightTertiaryColor">
          {technologies &&
            technologies.map((technology) => <li>{technology}</li>)}
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
