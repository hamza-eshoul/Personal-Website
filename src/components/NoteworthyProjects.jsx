import React from "react";
import NoteworthyProject from "./NoteworthyProject";
import { useInView } from "react-intersection-observer";

const NoteworthyProjects = ({ language }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section className="py-[100px]">
      <div
        ref={ref}
        className={`${inView ? "fade-appear-animation" : "opacity-0"}`}
      >
        {language == "French" && (
          <h2 className="fade-in-animation pb-12 text-center text-[32px] font-semibold text-lightestTertiaryColor">
            Autres projets significatifs
          </h2>
        )}

        {language == "English" && (
          <h2 className="fade-in-animation pb-12 text-center text-[32px] font-semibold text-lightestTertiaryColor">
            Other Noteworthy Projects
          </h2>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4">
        <NoteworthyProject
          title={"Members Only"}
          repoLink={"https://github.com/hamza-eshoul/Odin-Members-Only-Project"}
          previewLink={
            "https://odin-members-only-project-skynter.onrender.com/"
          }
          technologies={["Express.js", "MongoDB", "EJS", "Passport.js"]}
        >
          {language == "French" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              Une application clubhouse exclusive créée à l'aide d'Expressjs et
              Passport.js pour l'authentification.
            </p>
          )}
          {language == "English" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              An exclusive clubhouse application built using Express.js and
              Passport.js for authentication.
            </p>
          )}
        </NoteworthyProject>

        <NoteworthyProject
          title={"Battleship Game"}
          repoLink={"https://github.com/hamza-eshoul/Battleship-Project/"}
          previewLink={"https://hamza-eshoul.github.io/Battleship-Project/"}
          technologies={["HTML, CSS, JavaScript, Jest"]}
        >
          {language == "French" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              Un jeu multijoueur stratégique construit avec Vanilla JavaScript
              et piloté par des test implementés à travers Jest.
            </p>
          )}
          {language == "English" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              A multiplayer strategy type guessing game built with vanilla
              JavaScript in a test driven manner with Jest.
            </p>
          )}
        </NoteworthyProject>
        <NoteworthyProject
          title={"Where's Waldo "}
          repoLink={"https://github.com/skynter/Where-s-Waldo"}
          previewLink={"https://photo-tagging-app-ad275.web.app/"}
          technologies={["React, Tailwind CSS", "Firebase"]}
        >
          {language == "French" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              Une version interactive de "Where's Waldo ?", un jeu consistant à
              retrouver plusieurs personnages dans une image.
            </p>
          )}
          {language == "English" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              An interactive version of 'Where's Waldo?', a game where players
              have to find several characters inside a picture.
            </p>
          )}
        </NoteworthyProject>
        <NoteworthyProject
          title={"CV Application"}
          repoLink={"https://github.com/hamza-eshoul/React-Cv-Project"}
          previewLink={"https://hamza-eshoul.github.io/React-Cv-Project/"}
          technologies={["React, Tailwind CSS"]}
        >
          {language == "French" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              Un générateur de CV permettant aux utilisateurs de créer de
              manière dynamique des CV professionels.
            </p>
          )}
          {language == "English" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              A curriculum vitae generator that allows users to dynamically
              create professional-looking CV's.
            </p>
          )}
        </NoteworthyProject>
        <NoteworthyProject
          title={"Memory Card Game"}
          repoLink={"https://github.com/hamza-eshoul/Memory-Card-Project"}
          previewLink={"https://hamza-eshoul.github.io/Memory-Card-Project/"}
          technologies={["React, Tailwind CSS"]}
        >
          {language == "French" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              Un jeu de mémoire comprenant 12 cartes et 12 personnages créé à
              travers React.
            </p>
          )}
          {language == "English" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              A memory card app themed game featuring 12 characters built with
              React.
            </p>
          )}
        </NoteworthyProject>
        <NoteworthyProject
          title={"Binary Search Trees"}
          repoLink={"https://github.com/hamza-eshoul/Binary-Search-Trees"}
          technologies={["JavaScript"]}
        >
          {language == "French" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              Une implémentation de la structure de données de l'arbre binaire
              de recherche écrite en JavaScript.
            </p>
          )}
          {language == "English" && (
            <p className="fade-in-animation text-[17px] text-lightTertiaryColor">
              An implementation of the binary search tree data structure written
              in JavaScript
            </p>
          )}
        </NoteworthyProject>
      </div>
    </section>
  );
};

export default NoteworthyProjects;
