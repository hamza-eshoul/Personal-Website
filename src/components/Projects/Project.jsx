import { useInView } from "react-intersection-observer";

// icons
import { FiGithub } from "react-icons/fi";
import { PiArrowSquareOut } from "react-icons/pi";

// components
import WrappedProject from "./WrappedProject";

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
      <>
        <article
          ref={ref}
          className={`${
            inView ? "fade-appear-animation" : "opacity-0"
          } relative hidden pb-[130px] xmd:block`}
        >
          <div className="relative flex h-full w-1/2 flex-col gap-5 xl:pt-10">
            <div className="flex flex-col gap-2">
              {language == "French" && (
                <h3 className="fade-in-animation font-mono text-[13px] text-secondaryColor">
                  Projet Fonctionnel
                </h3>
              )}
              {language == "English" && (
                <h3 className="fade-in-animation font-mono text-[13px] text-secondaryColor">
                  Featured Project
                </h3>
              )}

              <a
                href="#"
                className="curor-pointer cursor-pointer text-[28px] font-semibold text-lightestTertiaryColor transition duration-300 ease-in-out hover:text-secondaryColor"
              >
                {" "}
                {title}
              </a>
            </div>

            <div className="z-10 rounded bg-lightPrimaryColor p-6 text-justify text-[18px] text-lightTertiaryColor">
              {children}
            </div>

            <ul className="z-10 flex w-full flex-wrap justify-start gap-3 pt-2 font-mono text-[13px] text-lightTertiaryColor">
              {technologies &&
                technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
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
          <div className="group absolute right-0 top-0 w-[60%] cursor-pointer">
            <a
              href={previewLink}
              target="_blank"
              className="relative z-[1] block w-full rounded-md bg-secondaryColor transition duration-300 ease-in-out before:absolute before:inset-0 before:z-[3] before:h-full before:w-full before:rounded-md before:rounded-md before:bg-primaryColor before:mix-blend-screen before:content-[''] group-hover:bg-inherit group-hover:before:hidden"
            >
              <div className="constrast-100 rounded-md mix-blend-multiply brightness-90 grayscale transition duration-300 ease-in-out group-hover:brightness-100 group-hover:grayscale-0">
                <div className="block">
                  <img
                    className="static bottom-0 left-0 right-0 top-0 block aspect-[1.6] w-full rounded-md"
                    src={image}
                  />
                </div>
                <img
                  src={image}
                  className="absolute bottom-0 left-0 right-0 top-0 aspect-[1.6] w-full rounded-md"
                />
              </div>
            </a>
          </div>
        </article>

        <WrappedProject
          language={language}
          image={image}
          title={title}
          children={children}
          technologies={technologies}
          repoLink={repoLink}
          previewLink={previewLink}
        />
      </>
    );
  }

  return (
    <>
      <article
        ref={ref}
        className={`${
          inView ? "fade-appear-animation" : "opacity-0"
        } relative hidden pb-[100px] xmd:block`}
      >
        <div className="group relative w-[57%] cursor-pointer xmd:py-10 slg:py-0">
          <a
            href={previewLink}
            target="_blank"
            className="relative z-[1] block w-full rounded-md  bg-secondaryColor transition duration-300 ease-in-out before:absolute before:inset-0 before:z-[3] before:h-full before:w-full before:bg-primaryColor before:mix-blend-screen before:content-[''] group-hover:bg-inherit group-hover:before:hidden"
          >
            <div
              className="constrast-100 rounded-md mix-blend-multiply brightness-90 grayscale transition 
           duration-0 group-hover:brightness-100 group-hover:grayscale-0
           "
            >
              <div className="block">
                <img
                  className="static bottom-0 left-0 right-0 top-0 block aspect-[1.6] w-full rounded-md"
                  src={image}
                />
              </div>
              <img
                src={image}
                className="absolute bottom-0 left-0 right-0 top-0 aspect-[1.6] w-full rounded-md"
              />
            </div>
          </a>
        </div>

        <div className="absolute right-0 top-0 z-10 flex w-1/2 flex-col items-end gap-5 xl:pt-10">
          <div className="flex flex-col items-end gap-2">
            {language == "French" && (
              <h3 className="fade-in-animation font-mono text-[13px] text-secondaryColor">
                Projet Fonctionnel
              </h3>
            )}
            {language == "English" && (
              <h3 className="fade-in-animation font-mono text-[13px] text-secondaryColor">
                Featured Project
              </h3>
            )}
            <a
              href="#"
              className="curor-pointer cursor-pointer text-[28px] font-semibold text-lightestTertiaryColor transition duration-300 ease-in-out hover:text-secondaryColor"
            >
              {" "}
              {title}
            </a>
          </div>

          <div className="rounded bg-lightPrimaryColor py-6 pl-6 pr-6 text-justify text-[18px] text-lightTertiaryColor xl:pl-12">
            {children}
          </div>

          <ul className="z-20 flex w-full flex-wrap justify-end gap-5 pt-2 font-mono text-[13px] text-lightTertiaryColor">
            {technologies &&
              technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
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
      <WrappedProject
        language={language}
        image={image}
        title={title}
        children={children}
        technologies={technologies}
        repoLink={repoLink}
        previewLink={previewLink}
      />
    </>
  );
};

export default Project;
