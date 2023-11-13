import mern from "../assets/images/mern.jpg";
import { useInView } from "react-intersection-observer";

const AboutMe = ({ language }) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      id="aboutMe"
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } mx-16 py-[100px]`}
    >
      {language == "French" && (
        <header className="fade-in-animation flex items-center gap-6 pb-10">
          <h1>
            {" "}
            <span className="font-mono text-[20px] text-secondaryColor">
              01.{" "}
            </span>{" "}
            <span className="text-[32px] font-semibold text-lightestTertiaryColor">
              À propos de moi{" "}
            </span>
          </h1>
          <div className="h-[1px] w-[300px] bg-lightestPrimaryColor"></div>
        </header>
      )}
      {language == "English" && (
        <header className="fade-in-animation flex items-center gap-6 pb-10">
          <h1>
            {" "}
            <span className="font-mono text-[20px] text-secondaryColor">
              01.{" "}
            </span>{" "}
            <span className="text-[32px] font-semibold text-lightestTertiaryColor">
              About Me{" "}
            </span>
          </h1>
          <div className="h-[1px] w-[300px] bg-lightestPrimaryColor"></div>
        </header>
      )}

      <div className="flex gap-14 font-medium">
        {language == "French" && (
          <section className="fade-in-animation w-1/2 text-justify text-[20px] font-normal leading-7">
            <p>
              J'ai appris le développement Web à travers{" "}
              <a
                href="https://www.theodinproject.com/"
                target="_blank"
                className="font-medium text-secondaryColor underline"
              >
                {" "}
                The Odin Project
              </a>
              , un programme spécialisé dans l'enseignement des compétences
              nécessaires pour créer des applications web full stack modernes.
            </p>

            <p className="pt-4">
              Je suis constamment à la recherche d'opportunités pour apprendre
              de nouveux concepts, technologies et outils pour créer des
              <span className="font-medium text-secondaryColor">
                {" "}
                applications web centrées sur l'utilisateur.
              </span>
            </p>

            <p className="pt-4">
              Je me spécialise dans l'utilisation de la bibliothèque JavaScript,{" "}
              <span className="font-medium text-secondaryColor">React </span>{" "}
              pour créer la partie{" "}
              <span className="font-medium text-secondaryColor">frontend</span>{" "}
              des mes applications et du framework
              <span className="font-medium text-secondaryColor">
                {" "}
                Express,{" "}
              </span>
              ainsi que la base de données NoSQL
              <span className="font-medium text-secondaryColor"> MongoDB </span>
              pour créer des
              <span className="font-medium text-secondaryColor">
                {" "}
                APIs Restful{" "}
              </span>
              destinés à alimenter la partie
              <span className="font-medium text-secondaryColor"> backend </span>
              de ces applications.
            </p>
          </section>
        )}

        {language == "English" && (
          <section className="fade-in-animation w-1/2 text-justify text-[20px] font-normal leading-7">
            <p>
              I learned web development with the{" "}
              <a
                href="https://www.theodinproject.com/"
                target="_blank"
                className="font-medium text-secondaryColor"
              >
                {" "}
                Odin Project
              </a>
              , a curriculum specialized in teaching the skills to build full
              stack modern web applications.
            </p>

            <p className="pt-4">
              I'm constantly seeking opportunities to learn new concepts,
              technologies, and tools to create
              <span className="font-medium text-secondaryColor">
                {" "}
                user-centric web applications.
              </span>
            </p>

            <p className="pt-4">
              I specialize in using the JavaScript library,{" "}
              <span className="font-medium text-secondaryColor">React </span> to
              build the{" "}
              <span className="font-medium text-secondaryColor">frontend</span>{" "}
              of my applications and the
              <span className="font-medium text-secondaryColor"> Express </span>
              framework, along with the NoSQL
              <span className="font-medium text-secondaryColor"> MongoDB </span>
              database, to create
              <span className="font-medium text-secondaryColor">
                {" "}
                RESTful APIs{" "}
              </span>
              that power the
              <span className="font-medium text-secondaryColor"> backend </span>
              of these applications.
            </p>
          </section>
        )}

        <div className="group relative h-[300px] w-[300px] cursor-pointer transition duration-300 ease-in-out ">
          <div className="relative z-[1] block h-full w-full rounded-md bg-secondaryColor transition  duration-300 ease-in-out before:absolute before:inset-0 before:z-[3] before:h-full before:w-full before:rounded-md before:bg-primaryColor before:mix-blend-screen before:content-[''] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-inherit group-hover:before:hidden">
            <div
              className="constrast-100 h-full  rounded-md mix-blend-multiply brightness-90 grayscale 
           transition duration-0 group-hover:brightness-100 group-hover:grayscale-0
           "
            >
              <div className="block h-full">
                <img
                  className="static bottom-0 left-0 right-0 top-0 block h-full w-full rounded-md"
                  src={mern}
                />
              </div>
              <img
                src={mern}
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-md"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-0 translate-x-4 translate-y-4 rounded border-[2px] border-secondaryColor transition duration-300 ease-in-out group-hover:translate-x-5 group-hover:translate-y-5" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
