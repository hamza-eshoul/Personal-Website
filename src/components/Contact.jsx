import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 pt-72">
      <header className="flex items-center gap-6">
        <h1>
          {" "}
          <span className="pr-3 font-mono text-[26px] text-secondaryColor">
            04.{" "}
          </span>{" "}
          <span className="text-[32px] font-semibold text-lightestTertiaryColor">
            Contact{" "}
          </span>
        </h1>
      </header>

      <h2 className="text-5xl text-secondaryColor">Get In Touch</h2>
      <p className="text-center">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      <button className="btn-primary">Say Hello</button>

      <div className="flex items-center justify-center gap-4">
        <div className="h-[1px] w-[250px] bg-lightestPrimaryColor"></div>
        <div>OR</div>
        <div className="h-[1px] w-[250px] bg-lightestPrimaryColor"></div>
      </div>
      <p>Reach me through social media</p>
      <ul className="flex gap-6">
        <li>
          <FiGithub className="cursor-pointer text-5xl text-lightestTertiaryColor hover:text-secondaryColor" />
        </li>
        <li>
          <FiLinkedin className="cursor-pointer text-5xl text-lightestTertiaryColor hover:text-secondaryColor" />
        </li>
      </ul>
    </section>
  );
};

export default Contact;
