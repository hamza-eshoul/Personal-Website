import Project from "./Project";
import odinBook from "../assets/images/odinBook.png";
import messagingApp from "../assets/images/messagingApp.png";
import instagramClone from "../assets/images/instagramClone.png";
import odinBlog from "../assets/images/odinBlog.png";
import shoppingCart from "../assets/images/shoppingCart.png";

const Projects = ({ language }) => {
  return (
    <section className="pt-72">
      <header className="flex items-center gap-6 pb-10">
        <h1>
          {" "}
          <span className="pr-3 font-mono text-[26px] text-secondaryColor">
            03.{" "}
          </span>{" "}
          {language == "French" && (
            <span className="fade-in-animation text-[32px] font-semibold text-lightestTertiaryColor">
              Projets{" "}
            </span>
          )}
          {language == "English" && (
            <span className="fade-in-animation text-[32px] font-semibold text-lightestTertiaryColor">
              Projects{" "}
            </span>
          )}
        </h1>
        <div className="h-[1px] w-[300px] bg-lightestPrimaryColor"></div>
      </header>

      <section>
        <Project
          image={odinBook}
          title={"Odin Book"}
          repoLink={"https://github.com/hamza-eshoul/Odin-Book"}
          previewLink={"https://odin-book-project.onrender.com/"}
          technologies={[
            "React",
            "Tailwind CSS",
            "Express.js",
            "MongoDB",
            "Cloudinary",
          ]}
        >
          {language == "French" && (
            <div className="fade-in-animation">
              Une{" "}
              <span className="text-secondaryColor">
                {" "}
                application de médias sociaux{" "}
              </span>{" "}
              qui implémente les fonctionnalités de base des plateformes de
              médias sociaux. Les fonctionnalités clés incluent l'ajout d'amis
              ainsi que la création et la modification de comptes, de
              publications, de photos et de commentaires
            </div>
          )}
          {language == "English" && (
            <div className="fade-in-animation">
              A{" "}
              <span className="text-secondaryColor">
                {" "}
                social media application{" "}
              </span>{" "}
              that implements the core features of social medias platforms. Key
              features include adding friends as well as creating and editing
              accounts, posts, photos and comments.
            </div>
          )}
        </Project>
        <Project
          isReverse={true}
          image={messagingApp}
          title={"Messaging App"}
          repoLink={"https://github.com/hamza-eshoul/Messaging-App"}
          previewLink={"https://messaging-app-project.onrender.com"}
          technologies={[
            "React",
            "Tailwind CSS",
            "Express.js",
            "MongoDB",
            "Socket.IO",
          ]}
        >
          A{" "}
          <span className="text-secondaryColor">
            {" "}
            messaging web application{" "}
          </span>{" "}
          that allows users to send and receive real-time messages utilizing web
          sockets implemented through the Socket.IO library.
        </Project>
        <Project
          image={instagramClone}
          title={"Instagram Clone"}
          repoLink={"https://github.com/hamza-eshoul/Instagram-Clone"}
          previewLink={"https://skynter-instagram-clone.onrender.com/"}
          technologies={[
            "React",
            "Tailwind CSS",
            "Firestore",
            "Firebase Storage",
          ]}
        >
          A
          <span className="text-secondaryColor">
            {" "}
            full stack clone of Instagram{" "}
          </span>
          that implements the core features of the social media platform. Key
          features include authentication, creating and deleting posts as well
          as a realtime search interface.
        </Project>
        <Project
          isReverse={true}
          image={odinBlog}
          title={"Odin Blog"}
          repoLink={"https://github.com/hamza-eshoul/Blog-API"}
          previewLink={"https://odin-blog-project.onrender.com/"}
          technologies={["React", "Tailwind CSS", "Express.js", "MongoDB"]}
        >
          A <span className="text-secondaryColor"> fully featured blog </span>{" "}
          that allows users to authenticate, read blog posts and add post
          comments. The blog client is powered by a RESTFul blog API built with
          Express.js and mongoDB.
        </Project>
        <Project
          image={shoppingCart}
          title={"Shopping Cart"}
          repoLink={
            "https://github.com/hamza-eshoul/Shopping-Cart-Project-Vite"
          }
          previewLink={"https://thunder-computation.onrender.com/"}
          technologies={["React", "Tailwind CSS"]}
        >
          A
          <span className="text-secondaryColor">
            {" "}
            front end computers store.{" "}
          </span>
          built with React to reflect live updates to user interactions. The
          store allows users to browse, add and remove items from their cart.
        </Project>
      </section>
    </section>
  );
};

export default Projects;
