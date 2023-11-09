import React from "react";
import NoteworthyProject from "./NoteworthyProject";

const NoteworthyProjects = () => {
  return (
    <section className="pt-32">
      <h2 className="pb-12 text-center text-[32px] font-semibold text-lightestTertiaryColor">
        Other Noteworthy Projects
      </h2>
      <div className="grid grid-cols-3 gap-4">
        <NoteworthyProject
          title={"Members Only"}
          repoLink={"https://github.com/hamza-eshoul/Odin-Members-Only-Project"}
          previewLink={
            "https://odin-members-only-project-skynter.onrender.com/"
          }
          technologies={["Express.js", "MongoDB", "EJS", "Passport.js"]}
          summary={
            "An exclusive clubhouse application built using Express.js and Passport.js for authentication."
          }
        />
        <NoteworthyProject
          title={"Battleship Game"}
          repoLink={"https://github.com/hamza-eshoul/Battleship-Project/"}
          previewLink={"https://hamza-eshoul.github.io/Battleship-Project/"}
          summary={
            "A multiplayer strategy type guessing game built with vanilla JavaScript in a test driven manner with Jest. "
          }
          technologies={["HTML, CSS, JavaScript, Jest"]}
        />
        <NoteworthyProject
          title={"Where's Waldo "}
          repoLink={"https://github.com/skynter/Where-s-Waldo"}
          previewLink={"https://photo-tagging-app-ad275.web.app/"}
          summary={
            "An interactive version of 'Where's Waldo?', a game where players try to find several characters inside a picture.   "
          }
          technologies={["React, Tailwind CSS", "Firebase"]}
        />
        <NoteworthyProject
          title={"CV Application"}
          repoLink={"https://github.com/hamza-eshoul/React-Cv-Project"}
          previewLink={"https://hamza-eshoul.github.io/React-Cv-Project/"}
          summary={
            "A curriculum vitae generator that allows users to dynamically create professional-looking CV's."
          }
          technologies={["React, Tailwind CSS"]}
        />
        <NoteworthyProject
          title={"Memory Card Game"}
          repoLink={"https://github.com/hamza-eshoul/Memory-Card-Project"}
          previewLink={"https://hamza-eshoul.github.io/Memory-Card-Project/"}
          summary={
            "A memory card app themed game featuring 12 characters built with React."
          }
          technologies={["React, Tailwind CSS"]}
        />
        <NoteworthyProject
          title={"Binary Search Trees"}
          repoLink={"https://github.com/hamza-eshoul/Binary-Search-Trees"}
          summary={
            "An implementation of the binary search tree data structure written in JavaScript"
          }
          technologies={["JavaScript"]}
        />
      </div>
    </section>
  );
};

export default NoteworthyProjects;
