import { useInView } from "react-intersection-observer";
import NoteworthyProject from "../components/NoteworthyProject";

interface NoteworthyProject {
  title: string;
  repoLink: string;
  previewLink?: string;
  technologies: string[];
  description: string;
}

const noteworthy_projects_list: NoteworthyProject[] = [
  {
    title: "Members Only",
    repoLink: "https://github.com/hamza-eshoul/Odin-Members-Only-Project",
    previewLink: "https://odin-members-only-project-skynter.onrender.com/",
    technologies: ["Express.js", "MongoDB", "EJS", "Passport.js"],
    description:
      "Une application clubhouse exclusive créée à l'aide d'Expressjs et Passport.js pour l'authentification.",
  },
  {
    title: "Battleship Game",
    repoLink: "https://github.com/hamza-eshoul/Battleship",
    previewLink: "https://hamza-eshoul.github.io/Battleship/",
    technologies: ["HTML, CSS, JavaScript, Jest"],
    description:
      "Un jeu multijoueur stratégique construit avec Vanilla JavaScript et piloté par des test implementés à travers Jest.",
  },
  {
    title: "Where's Waldo",
    repoLink: "https://github.com/skynter/Where-s-Waldo",
    previewLink: "https://photo-tagging-app-ad275.web.app/",
    technologies: ["React, Tailwind CSS", "Firebase"],
    description:
      "Une version interactive de 'Where's Waldo ?', un jeu consistant à retrouver plusieurs personnages dans une image.",
  },
  {
    title: "CV Application",
    repoLink: "https://github.com/hamza-eshoul/React-Cv-Project",
    previewLink: "https://cv-generator-vezb.onrender.com",
    technologies: ["React, Tailwind CSS"],
    description:
      "Un générateur de CV permettant aux utilisateurs de créer de manière dynamique des CV professionels.",
  },
  {
    title: "Memory Card Game",
    repoLink: "https://github.com/hamza-eshoul/Memory-Card-Project",
    previewLink: "https://odin-memory-card.onrender.com/",
    technologies: ["React, Tailwind CSS"],
    description:
      "Un jeu de mémoire comprenant 12 cartes et 12 personnages créé à travers React.",
  },
  {
    title: "Binary Search Trees",
    repoLink: "https://github.com/hamza-eshoul/Binary-Search-Trees",
    technologies: ["JavaScript"],
    description:
      "Une implémentation de la structure de données de l'arbre binaire de recherche écrite en JavaScript.",
  },
];

const NoteworthyProjects = () => {
  // library hooks
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section className="xsm:py-[80px] xmd:py-[100px] py-[60px]">
      <header
        ref={ref}
        className={`${inView ? "fade-appear-animation" : "opacity-0"}`}
      >
        {" "}
        <h2 className="fade-in-animation numbered-headings pb-12 text-center">
          Autres projets significatifs
        </h2>
      </header>

      <section className="noteworthy-projects-grid">
        {noteworthy_projects_list.map((project) => (
          <NoteworthyProject data={project} />
        ))}
      </section>
    </section>
  );
};

export default NoteworthyProjects;
