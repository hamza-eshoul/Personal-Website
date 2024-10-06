import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  // library hooks
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
      } xsm:py-[80px] xmd:py-[100px] mx-auto max-w-4xl py-[60px]`}
    >
      <header className="fade-in-animation flex items-center gap-6 pb-10">
        <h2>
          {" "}
          <span className="numberOfHeading ">01. </span>{" "}
          <span className="numbered-headings">À propos de moi </span>
        </h2>
        <div className="numbered-headings-bar" />
      </header>

      <div className="xmd:flex-row xmd:items-start flex flex-col items-center gap-14 font-medium">
        <section className="fade-in-animation xmd:basis-3/5 text-justify text-[20px] font-normal leading-7">
          <p>
            J'ai appris le développement Web à travers{" "}
            <a
              href="https://www.theodinproject.com/"
              target="_blank"
              className="text-secondaryColor font-medium underline"
            >
              {" "}
              The Odin Project
            </a>
            , une formation spécialisée dans l'enseignement des compétences
            nécessaires pour créer des applications web full stack modernes.
          </p>

          <p className="pt-4">
            Je suis constamment à la recherche d'opportunités pour apprendre de
            nouveaux concepts, technologies et outils pour créer des
            <span className="text-secondaryColor font-medium">
              {" "}
              applications web centrées sur l'utilisateur.
            </span>
          </p>

          <p className="pt-4">
            Je me spécialise dans l'utilisation de la bibliothèque JavaScript,{" "}
            <span className="text-secondaryColor font-medium">React </span> pour
            créer la partie{" "}
            <span className="text-secondaryColor font-medium">frontend</span>{" "}
            des mes applications et du framework
            <span className="text-secondaryColor font-medium"> Express, </span>
            ainsi que la base de données NoSQL
            <span className="text-secondaryColor font-medium"> MongoDB </span>
            pour créer des
            <span className="text-secondaryColor font-medium">
              {" "}
              APIs Restful{" "}
            </span>
            destinés à alimenter la partie
            <span className="text-secondaryColor font-medium"> backend </span>
            de ces applications.
          </p>
        </section>

        <div className="xmd:basis-2/5 group relative max-w-[300px] cursor-pointer transition duration-300 ease-in-out ">
          <div className="bg-secondaryColor before:bg-primaryColor relative z-[1] block aspect-square w-full rounded-md  transition duration-300 ease-in-out before:absolute before:inset-0 before:z-[3] before:h-full before:w-full before:rounded-md before:mix-blend-screen before:content-[''] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:bg-inherit group-hover:before:hidden">
            <div
              className="constrast-100 rounded-md mix-blend-multiply brightness-90 grayscale 
           transition duration-0 group-hover:brightness-100 group-hover:grayscale-0
           "
            >
              <div className="block">
                <img
                  className=" static bottom-0 left-0 right-0 top-0 block aspect-square w-full rounded-md"
                  src={""}
                />
              </div>
              <img
                src={""}
                className="absolute bottom-0 left-0 right-0 top-0 aspect-square w-full rounded-md"
              />
            </div>
          </div>
          <div className="border-secondaryColor absolute bottom-0 left-0 right-0 top-0 z-0 aspect-square translate-x-4 translate-y-4 rounded border-[2px] transition duration-300 ease-in-out group-hover:translate-x-5 group-hover:translate-y-5" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
