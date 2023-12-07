import React from "react";
import { useInView } from "react-intersection-observer";

// icons
import { RiFolderInfoLine } from "react-icons/ri";

// images
import odinBook from "../../assets/images/odinBook.png";
import messagingApp from "../../assets/images/messagingApp.png";
import instagramClone from "../../assets/images/instagramClone.png";
import odinBlog from "../../assets/images/odinBlog.png";
import shoppingCart from "../../assets/images/shoppingCart.png";

// components
import Project from "./Project";

const projects_list = [
  {
    isReverse: false,
    image: odinBook,
    title: "Odin Book",
    repoLink: "https://github.com/hamza-eshoul/Odin-Book",
    previewLink: "https://odin-book-project.onrender.com/",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Cloudinary",
    ],
    frenchDescriptionTemplate: (
      <p className="fade-in-animation">
        Une{" "}
        <span className="text-secondaryColor">
          {" "}
          application de médias sociaux{" "}
        </span>{" "}
        qui implémente les principales fonctionnalités des plateformes de médias
        sociaux. Les fonctionnalités clés incluent l'ajout d'amis, la création
        et la personnalisation des profils d'utilisateurs ainsi que la
        publication de posts, de photos et de commentaires.
      </p>
    ),
    englishDescriptionTemplate: (
      <p className="fade-in-animation">
        A{" "}
        <span className="text-secondaryColor"> social media application </span>{" "}
        that implements the core features of social medias platforms. Key
        features include adding friends as well as creating and editing
        accounts, posts, photos and comments.
      </p>
    ),
  },
  {
    isReverse: true,
    image: messagingApp,
    title: "Messaging App",
    repoLink: "https://github.com/hamza-eshoul/Messaging-App",
    previewLink: "https://messaging-app-project.onrender.com",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Socket.IO",
    ],
    frenchDescriptionTemplate: (
      <p className="fade-in-animation">
        Une{" "}
        <span className="text-secondaryColor">
          {" "}
          application web de messagerie{" "}
        </span>{" "}
        qui permet aux utilisateurs d'envoyer et de recevoir des messages en
        temps réel à l'aide de sockets web implémentés à travers la bibliothèque
        Socket.IO.
      </p>
    ),
    englishDescriptionTemplate: (
      <p className="fade-in-animation">
        A{" "}
        <span className="text-secondaryColor"> messaging web application </span>{" "}
        that allows users to send and receive real-time messages utilizing web
        sockets implemented through the Socket.IO library.
      </p>
    ),
  },
  {
    isReverse: false,
    image: instagramClone,
    title: "Instagram Clone",
    repoLink: "https://github.com/hamza-eshoul/Instagram-Clone",
    previewLink: "https://skynter-instagram-clone.onrender.com/",
    technologies: ["React", "Tailwind CSS", "Firestore", "Firebase Storage"],
    frenchDescriptionTemplate: (
      <p className="fade-in-animation">
        Un
        <span className="text-secondaryColor">
          {" "}
          clone full stack d'Instagram{" "}
        </span>
        qui implémente les principales fonctionnalités de la plateforme de
        médias sociaux. Les fonctionnalités clés incluent l'authentification, la
        création et la suppression de publications ainsi qu'une interface de
        recherche d'utilisateurs en temps réel.
      </p>
    ),
    englishDescriptionTemplate: (
      <p className="fade-in-animation">
        A
        <span className="text-secondaryColor">
          {" "}
          full stack clone of Instagram{" "}
        </span>
        that implements the core features of the social media platform. Key
        features include authentication, creating and deleting posts as well as
        a realtime search interface.
      </p>
    ),
  },
  {
    isReverse: true,
    image: odinBlog,
    title: "Odin Blog",
    repoLink: "https://github.com/hamza-eshoul/Blog-API",
    previewLink: "https://odin-blog-project.onrender.com/",
    technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    frenchDescriptionTemplate: (
      <p className="fade-in-animation">
        Un
        <span className="text-secondaryColor"> blog fonctionnel </span>{" "}
        permettant aux utilisateurs de s'authentiifer, lire des articles et
        ajouter des commentaires. La partie frontend du blog est alimentée par
        une API RESTFul créé à travers Express.js et MongoDB.
      </p>
    ),
    englishDescriptionTemplate: (
      <p className="fade-in-animation">
        A <span className="text-secondaryColor"> fully featured blog </span>{" "}
        that allows users to authenticate, read blog posts and add post
        comments. The blog client is powered by a RESTFul blog API built with
        Express.js and mongoDB.
      </p>
    ),
  },
  {
    isReverse: false,
    image: shoppingCart,
    title: "Shopping Cart",
    repoLink: "https://github.com/hamza-eshoul/Shopping-Cart-Project-Vite",
    previewLink: "https://thunder-computation.onrender.com/",
    technologies: ["React", "Tailwind CSS"],
    frenchDescriptionTemplate: (
      <p className="fade-in-animation">
        Un
        <span className="text-secondaryColor">
          {" "}
          site de vente en ligne d'ordinateurs{" "}
        </span>
        créé à travers React pour réfleter, en temps réel, les modifications
        résultant des interactions des utilisateurs. Le site permet aux
        utilisateurs de parcourir, ajouter et supprimer des articles de leur
        panier
      </p>
    ),
    englishDescriptionTemplate: (
      <p className="fade-in-animation">
        A<span className="text-secondaryColor"> computers store </span>
        built with React to reflect real-time updates restulting from user
        interactions. The store allows users to browse, add and remove items
        from their cart.
      </p>
    ),
  },
];

const Projects = ({ language }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="pt-[60px] xsm:pt-[80px] xmd:pt-[100px]">
      <header
        ref={ref}
        className={`${inView ? "fade-appear-animation" : "opacity-0"}`}
      >
        <div className="flex items-center gap-5 pb-4">
          <h2>
            {" "}
            <span className="numberOfHeading">03. </span>{" "}
            {language == "French" && (
              <span className="fade-in-animation numbered-headings">
                Projets{" "}
              </span>
            )}
            {language == "English" && (
              <span className="fade-in-animation numbered-headings">
                Projects{" "}
              </span>
            )}
          </h2>
          <div className="numbered-headings-bar" />
        </div>

        {language == "French" && (
          <div className="fade-in-animation flex flex-col items-center gap-2 pb-10 xsm:flex-row">
            <div>
              <RiFolderInfoLine className="text-[50px] text-secondaryColor" />
            </div>

            <p className=" rounded-md bg-lightPrimaryColor p-4 text-[18.5px] font-medium text-lightestTertiaryColor">
              {" "}
              Les projets qui incluent des
              <span className="text-secondaryColor">
                {" "}
                APIs Express.js pour le backend{" "}
              </span>
              (e.g : Odin Book, Messaging App ...) auront besoin de quelques
              secondes pour rendre leurs serveurs opérationnels suite à une
              requête initiale. Les APIs de ces projets sont hebergées
              gratuitement sur la plateforme{" "}
              <a
                href="https://render.com/"
                target="_blank"
                className="text-secondaryColor underline"
              >
                Render
              </a>{" "}
              qui
              <span className="text-secondaryColor">
                {" "}
                suspend l'activité{" "}
              </span>{" "}
              des serveurs hebergés
              <span className="text-secondaryColor">
                {" "}
                suite à 15 minutes d'inactivité.
              </span>
            </p>
          </div>
        )}

        {language == "English" && (
          <div className="fade-in-animation flex flex-col items-center gap-2 pb-10 xsm:flex-row">
            <div>
              <RiFolderInfoLine className="text-[50px] text-secondaryColor" />
            </div>

            <p className=" rounded-md bg-lightPrimaryColor p-4 text-[18.5px] font-medium text-lightestTertiaryColor">
              {" "}
              Projects that include
              <span className="text-secondaryColor">
                {" "}
                Express.js backend APIs{" "}
              </span>
              (e.g : Odin Book, Messaging App ...) will need a few seconds to
              spin up their servers after an initial request. The APIs of these
              projects are hosted on the{" "}
              <a
                href="https://render.com/"
                target="_blank"
                className="text-secondaryColor underline"
              >
                Render
              </a>{" "}
              platform for free which{" "}
              <span className="text-secondaryColor"> spins down </span> hosted
              servers
              <span className="text-secondaryColor">
                {" "}
                after 15 minutes of inactivity.
              </span>
            </p>
          </div>
        )}
      </header>

      <section>
        {projects_list.map((project) => (
          <Project
            key={project.title}
            isReverse={project.isReverse}
            language={language}
            image={project.image}
            title={project.title}
            repoLink={project.repoLink}
            previewLink={project.previewLink}
            technologies={project.technologies}
          >
            {language == "French" && project.frenchDescriptionTemplate}

            {language == "English" && project.englishDescriptionTemplate}
          </Project>
        ))}
      </section>
    </section>
  );
};

export default Projects;
