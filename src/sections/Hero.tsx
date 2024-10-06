import { useInView } from "react-intersection-observer";

const Hero = () => {
  // library hooks
  const { ref, inView } = useInView({ threshold: 0.6, triggerOnce: true });

  // data
  const contactRef = document.querySelector("#contact");

  // functions
  const scrollToContactSection = () => {
    contactRef?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className={`${inView ? "fade-appear-animation" : "opacity-0"}`}
      id="hero"
    >
      <div className="fade-in-animation flex h-screen min-h-screen flex-col justify-center pl-2.5">
        <p className="text-secondaryColor font-mono">Bonjour, je suis</p>
        <h2 className="text-lightestTertiaryColor -translate-x-1 pt-5 font-semibold [font-size:_clamp(40px,8vw,80px)]">
          Hamza Eshoul.
        </h2>
        <h2 className="-translate-x-1 font-semibold leading-[0.9] [font-size:_clamp(40px,8vw,70px)]">
          Je crée des applications pour le web.
        </h2>

        <p className="xsm:text-[20px] max-w-[540px] -translate-x-1 py-5 text-[18px] font-normal">
          Je suis un{" "}
          <span className="text-secondaryColor font-medium">
            {" "}
            développeur web{" "}
          </span>{" "}
          spécialisé dans la création de sites et d'applications web modernes
          centrées sur l'utilisateur en employant la puissance des technologies
          associées à la
          <span className="text-secondaryColor font-medium"> MERN </span>
          stack.
        </p>

        <div
          className="group relative mt-6 h-[48px] w-[170px] -translate-x-1"
          onClick={scrollToContactSection}
        >
          <button className="border-secondaryColor bg-primaryColor text-secondaryColor absolute bottom-0 left-0 right-0 top-0 z-20 w-full rounded border-[1px] font-mono text-[14px] transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
            Me contacter!
          </button>
          <div className="bg-secondaryColor absolute bottom-0 left-0 right-0 top-0 rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
