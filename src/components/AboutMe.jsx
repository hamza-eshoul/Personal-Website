import defaultProfile from "../assets/defaultProfile.png";

const AboutMe = () => {
  return (
    <section className="max-w-4xl mx-auto pt-72">
      <header className="flex gap-6 items-center">
        <h1>
          {" "}
          <span className="text-secondaryColor text-[26px] pr-3">
            01.{" "}
          </span>{" "}
          <span className="text-lightestTertiaryColor font-semibold text-[32px]">
            About Me{" "}
          </span>
        </h1>
        <div className="h-[1px] w-[300px] bg-lightestPrimaryColor"></div>
      </header>

      <div className="flex gap-10">
        <section className="pt-6 w-1/2 text-justify leading-7">
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

        <div className="h-72 w-72 border-[1px] border-secondaryColor rounded relative">
          <img
            src={defaultProfile}
            alt="profile"
            className="h-full w-full rounded -translate-y-3 -translate-x-3 hover:-translate-y-6 hover:-translate-x-6 transition-all duration-300 ease-in-out"
          />
          <div className="bg-secondaryColor absolute top-0 right-0 left-0 bottom-0 opacity-70 -translate-y-3 -translate-x-3" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
