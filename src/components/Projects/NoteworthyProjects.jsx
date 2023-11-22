import { useInView } from "react-intersection-observer";

// components
import NoteworthyProject from "./NoteworthyProject";

const NoteworthyProjects = ({ language }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const noteworthy_projects_list = [
    {
      title: "Members Only",
      repoLink: "https://github.com/hamza-eshoul/Odin-Members-Only-Project",
      previewLink: "https://odin-members-only-project-skynter.onrender.com/",
      technologies: ["Express.js", "MongoDB", "EJS", "Passport.js"],
      frenchDescription:
        "Une application clubhouse exclusive créée à l'aide d'Expressjs et Passport.js pour l'authentification.",
      englishDescription:
        "An exclusive clubhouse application built using Express.js and Passport.js for authentication.",
    },
    {
      title: "Battleship Game",
      repoLink: "https://github.com/hamza-eshoul/Battleship-Project/",
      previewLink: "https://hamza-eshoul.github.io/Battleship-Project/",
      technologies: ["HTML, CSS, JavaScript, Jest"],
      frenchDescription:
        "Un jeu multijoueur stratégique construit avec Vanilla JavaScript et piloté par des test implementés à travers Jest.",
      englishDescription:
        "A multiplayer strategy type guessing game built with vanilla JavaScript in a test driven manner with Jest.",
    },
    {
      title: "Where's Waldo",
      repoLink: "https://github.com/skynter/Where-s-Waldo",
      previewLink: "https://photo-tagging-app-ad275.web.app/",
      technologies: ["React, Tailwind CSS", "Firebase"],
      frenchDescription:
        "Une version interactive de 'Where's Waldo ?', un jeu consistant à retrouver plusieurs personnages dans une image.",
      englishDescription:
        " An interactive version of 'Where's Waldo?', a game where players have to find several characters inside a picture.",
    },
    {
      title: "CV Application",
      repoLink: "https://github.com/hamza-eshoul/React-Cv-Project",
      previewLink: "https://cv-generator-vezb.onrender.com",
      technologies: ["React, Tailwind CSS"],
      frenchDescription:
        "Un générateur de CV permettant aux utilisateurs de créer de manière dynamique des CV professionels.",
      englishDescription:
        "A curriculum vitae generator that allows users to dynamically create professional-looking CV's.",
    },
    {
      title: "Memory Card Game",
      repoLink: "https://github.com/hamza-eshoul/Memory-Card-Project",
      previewLink: "https://odin-memory-card.onrender.com/",
      technologies: ["React, Tailwind CSS"],
      frenchDescription:
        "Un jeu de mémoire comprenant 12 cartes et 12 personnages créé à travers React.",
      englishDescription:
        "A memory card app themed game featuring 12 characters built with React.",
    },
    {
      title: "Binary Search Trees",
      repoLink: "https://github.com/hamza-eshoul/Binary-Search-Trees",
      technologies: ["JavaScript"],
      frenchDescription:
        "Une implémentation de la structure de données de l'arbre binaire de recherche écrite en JavaScript.",
      englishDescription:
        "An implementation of the binary search tree data structure written in JavaScript",
    },
  ];

  return (
    <section className="py-[60px] xsm:py-[80px] xmd:py-[100px]">
      <header
        ref={ref}
        className={`${inView ? "fade-appear-animation" : "opacity-0"}`}
      >
        {language == "French" && (
          <h2 className="fade-in-animation numbered-headings pb-12 text-center">
            Autres projets significatifs
          </h2>
        )}

        {language == "English" && (
          <h2 className="fade-in-animation numbered-headings pb-12 text-center">
            Other Noteworthy Projects
          </h2>
        )}
      </header>

      <section className="noteworthy-projects-grid">
        {noteworthy_projects_list.map((project) => (
          <NoteworthyProject
            key={project.title}
            title={project.title}
            repoLink={project.repoLink}
            previewLink={project.previewLink}
            technologies={project.technologies}
          >
            {language == "French" && (
              <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
                {project.frenchDescription}
              </p>
            )}

            {language == "English" && (
              <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
                {project.englishDescription}
              </p>
            )}
          </NoteworthyProject>
        ))}
      </section>
    </section>
  );
};

export default NoteworthyProjects;
