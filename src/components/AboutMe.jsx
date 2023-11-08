import mern from "../assets/images/MERN.png";

const AboutMe = () => {
  return (
    <section className="mx-16 mt-96">
      <header className="flex items-center gap-6">
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

      <div className="flex gap-10">
        <section className="w-1/2 pt-6 text-justify text-[20px] font-normal leading-7">
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
            I specialize in using the{" "}
            <span className="font-medium text-secondaryColor">React </span>{" "}
            JavaScript library to build the{" "}
            <span className="font-medium text-secondaryColor">frontend</span> of
            my applications and the
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

        <div className="group relative h-72 w-72 transition duration-300 ease-in-out hover:-translate-x-3 hover:-translate-y-3">
          <img src={mern} alt="profile" className="h-full w-full rounded" />
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor opacity-70 transition duration-200 ease-in-out group-hover:opacity-0" />
          <div className="absolute bottom-0 left-0 right-0 top-0 z-0 translate-x-4 translate-y-4 rounded border-[2px] border-secondaryColor" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
