import defaultProfile from "../assets/defaultProfile.png";

const AboutMe = () => {
  return (
    <section className="mx-auto max-w-4xl pt-72">
      <header className="flex items-center gap-6">
        <h1>
          {" "}
          <span className="pr-3 font-mono text-[26px] text-secondaryColor">
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
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>

          <p className="pt-4">
            Fast-forward to today, and I’ve had the privilege of working at
            <span className="text-secondaryColor">
              {" "}
              an advertising agency, a start-up, a huge corporation, and a
              student-led design studio.{" "}
            </span>{" "}
            My main focus these days is building accessible, inclusive products
            and digital experiences at Upstatement for a variety of clients.
          </p>

          <p className="pt-4">
            I also recently{" "}
            <span className="text-secondaryColor"> launched a course </span>{" "}
            that covers everything you need to build a web app with the Spotify
            API using Node & React. Here are a few technologies I’ve been
            working with recently:
          </p>
        </section>

        <div className="group relative h-72 w-72 transition duration-300 ease-in-out hover:-translate-x-3 hover:-translate-y-3">
          <img
            src={defaultProfile}
            alt="profile"
            className="h-full w-full rounded"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor opacity-70 transition duration-200 ease-in-out group-hover:opacity-0" />
          <div className="absolute bottom-0 left-0 right-0 top-0 z-0 translate-x-4 translate-y-4 rounded border-[2px] border-secondaryColor" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
