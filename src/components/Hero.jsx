import { useInView } from "react-intersection-observer";

const Hero = ({ language }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  const contactRef = document.querySelector("#contact");

  return (
    <section
      ref={ref}
      className={`${inView ? "fade-appear-animation" : "opacity-0"}`}
      id="hero"
    >
      {language == "French" && (
        <div className="fade-in-animation flex h-screen min-h-screen flex-col justify-center pl-2.5">
          <p className="font-mono text-secondaryColor">Bonjour, je suis</p>
          <h2 className="-translate-x-1 pt-5 font-semibold text-lightestTertiaryColor [font-size:_clamp(40px,8vw,80px)]">
            Hamza Eshoul.
          </h2>
          <h2 className="-translate-x-1 font-semibold leading-[0.9] [font-size:_clamp(40px,8vw,70px)]">
            Je crée des applications pour le web.
          </h2>

          <p className="max-w-[540px] -translate-x-1 py-5 text-[18px] font-normal xsm:text-[20px]">
            Je suis un{" "}
            <span className="font-medium text-secondaryColor">
              {" "}
              développeur full stack{" "}
            </span>{" "}
            spécialisé dans la création de sites et d'applications web modernes
            centrées sur l'utilisateur en employant la puissance des
            technologies associées à la
            <span className="font-medium text-secondaryColor"> MERN </span>
            stack.
          </p>

          <div
            className="group relative mt-6 h-[48px] w-[170px] -translate-x-1"
            onClick={() => contactRef.scrollIntoView({ behavior: "smooth" })}
          >
            <button className="absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
              Me contacter!
            </button>
            <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
          </div>
        </div>
      )}

      {language == "English" && (
        <div className="fade-in-animation flex h-screen min-h-screen flex-col justify-center pl-2.5">
          <p className="font-mono text-secondaryColor">Hi, my name is</p>
          <h2 className="-translate-x-1 pt-5 font-semibold text-lightestTertiaryColor [font-size:_clamp(40px,8vw,80px)]">
            Hamza Eshoul.
          </h2>
          <h2 className="-translate-x-1  font-semibold leading-[0.9] [font-size:_clamp(40px,8vw,80px)]">
            I build things for the web.
          </h2>

          <p className="max-w-[540px] -translate-x-1  py-5 text-[18px] font-normal xsm:text-[20px]">
            I’m a{" "}
            <span className="font-medium text-secondaryColor">
              {" "}
              full stack web developer{" "}
            </span>{" "}
            specializing in building modern user-centric web applications
            utilizing the power of the
            <span className="font-medium text-secondaryColor"> MERN </span>
            technology stack.
          </p>

          <div
            className="group relative mt-6 h-[50px] w-[170px] -translate-x-1"
            onClick={() => contactRef.scrollIntoView({ behavior: "smooth" })}
          >
            <button className="absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
              Get in touch!
            </button>
            <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
