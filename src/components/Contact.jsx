import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center justify-center pt-72">
      <header className="flex items-center gap-6">
        <h1 className="pb-2">
          {" "}
          <span className="pr-3 font-mono text-[14px] text-secondaryColor">
            04.{" "}
          </span>{" "}
          <span className="font-mono text-[16px] text-secondaryColor">
            What's Next?
          </span>
        </h1>
      </header>

      <h2 className="text-[60px] font-semibold text-lightestTertiaryColor">
        Get In Touch
      </h2>
      <p className="w-[500px] pb-2 text-center text-[20px]">
        Feel free to contact me if you have a question or want to work together.
        I will be happy to get back to you !
      </p>

      <a
        href="mailto:hamza.eshoul.pro@gmail.com"
        className="group relative mt-6 h-[48px] w-[140px] -translate-x-1"
      >
        <button className="absolute bottom-0 left-0 right-0 top-0 z-20 rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
          Say Hello
        </button>
        <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
      </a>
    </section>
  );
};

export default Contact;
