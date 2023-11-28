import { useInView } from "react-intersection-observer";

// images
import mern from "../assets/images/MERN.png";

const AboutMe = ({ language }) => {
  const { ref, inView } = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id="aboutMe"
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } mx-auto max-w-4xl py-[60px] xsm:py-[80px] xmd:py-[100px]`}
    >
      {language == "French" && (
        <header className="fade-in-animation flex items-center gap-6 pb-10">
          <h2>
            {" "}
            <span className="numberOfHeading ">01. </span>{" "}
            <span className="numbered-headings">À propos de moi </span>
          </h2>
          <div className="numbered-headings-bar" />
        </header>
      )}
      {language == "English" && (
        <header className="fade-in-animation flex items-center gap-6 pb-10">
          <h2>
            {" "}
            <span className="numberOfHeading">01. </span>{" "}
            <span className="numbered-headings">About Me </span>
          </h2>
          <div className="numbered-headings-bar" />
        </header>
      )}

      <div className="flex flex-col items-center gap-14 font-medium xmd:flex-row xmd:items-start">
        {language == "French" && (
          <section className="fade-in-animation text-justify text-[20px] font-normal leading-7 xmd:basis-3/5">
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
              , une formation spécialisée dans l'enseignement des compétences
              nécessaires pour créer des applications web full stack modernes.
            </p>

            <p className="pt-4">
              Je suis constamment à la recherche d'opportunités pour apprendre
              de nouveaux concepts, technologies et outils pour créer des
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
          <section className="fade-in-animation text-justify text-[20px] font-normal leading-7 xmd:basis-3/5">
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

        <div className="group relative max-w-[300px] cursor-pointer transition duration-300 ease-in-out xmd:basis-2/5 ">
          <div className="relative z-[1] block aspect-square w-full rounded-md bg-secondaryColor transition  duration-300 ease-in-out before:absolute before:inset-0 before:z-[3] before:h-full before:w-full before:rounded-md before:bg-primaryColor before:mix-blend-screen before:content-[''] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-inherit group-hover:before:hidden">
            <div
              className="constrast-100 rounded-md mix-blend-multiply brightness-90 grayscale 
           transition duration-0 group-hover:brightness-100 group-hover:grayscale-0
           "
            >
              <div className="block">
                <img
                  className=" static bottom-0 left-0 right-0 top-0 block aspect-square w-full rounded-md"
                  src={mern}
                />
              </div>
              <img
                src={mern}
                className="absolute bottom-0 left-0 right-0 top-0 aspect-square w-full rounded-md"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-0 aspect-square translate-x-4 translate-y-4 rounded border-[2px] border-secondaryColor transition duration-300 ease-in-out group-hover:translate-x-5 group-hover:translate-y-5" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
