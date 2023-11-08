import Project from "./Project";
import odinBook from "../assets/images/odinBook.png";

const Projects = () => {
  return (
    <section className="pt-72">
      <header className="flex items-center gap-6 pb-10">
        <h1>
          {" "}
          <span className="pr-3 font-mono text-[26px] text-secondaryColor">
            03.{" "}
          </span>{" "}
          <span className="text-[32px] font-semibold text-lightestTertiaryColor">
            Projects{" "}
          </span>
        </h1>
        <div className="h-[1px] w-[300px] bg-lightestPrimaryColor"></div>
      </header>

      <section>
        <Project
          image={odinBook}
          title={"Odin Book"}
          repoLink={"https://github.com/hamza-eshoul/Odin-Book"}
          previewLink={"https://odin-book-project.onrender.com/"}
        >
          A{" "}
          <span className="text-secondaryColor">
            {" "}
            social media application{" "}
          </span>{" "}
          that implements the core features of social medias platforms. Key
          features include adding friends as well as creating and editing
          accounts, posts, photos and comments.
        </Project>
        <Project isReverse={true} />
        <Project />
      </section>
    </section>
  );
};

export default Projects;
