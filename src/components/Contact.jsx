import { useInView } from "react-intersection-observer";

const Contact = ({ language }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      id="contact"
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } mx-auto flex max-w-4xl flex-col items-center justify-center py-[100px]`}
    >
      <header className="flex items-center gap-6">
        <h1 className="pb-2">
          {" "}
          <span className="pr-3 font-mono text-[14px] text-secondaryColor">
            04.{" "}
          </span>{" "}
          {language == "French" && (
            <span className="fade-in-animation font-mono text-[16px] text-secondaryColor">
              Prochaine étape ?
            </span>
          )}
          {language == "English" && (
            <span className="fade-in-animation font-mono text-[16px] text-secondaryColor">
              What's Next?
            </span>
          )}
        </h1>
      </header>

      {language == "French" && (
        <h2 className="fade-in-animation text-[60px] font-semibold text-lightestTertiaryColor">
          Me contacter
        </h2>
      )}

      {language == "English" && (
        <h2 className="fade-in-animation text-[60px] font-semibold text-lightestTertiaryColor">
          Get In Touch
        </h2>
      )}

      {language == "French" && (
        <p className="fade-in-animation w-[550px] pb-2 text-center text-[20px]">
          N'hésitez pas à me contacter si vous avez une question ou souhaitez
          travailler ensemble. Je serai heureux de vous répondre !
        </p>
      )}

      {language == "English" && (
        <p className="fade-in-animation w-[500px] pb-2 text-center text-[20px]">
          Feel free to contact me if you have a question or want to work
          together. I will be happy to get back to you !
        </p>
      )}

      {language == "French" && (
        <a
          href="mailto:hamza.eshoul.pro@gmail.com"
          className="fade-in-animation group relative mt-6 h-[48px] w-[170px] -translate-x-1"
        >
          <button className="absolute bottom-0 left-0 right-0 top-0 z-20 rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
            Écrire un message
          </button>
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
        </a>
      )}

      {language == "English" && (
        <a
          href="mailto:hamza.eshoul.pro@gmail.com"
          className="fade-in-animation group relative mt-6 h-[48px] w-[140px] -translate-x-1"
        >
          <button className="absolute bottom-0 left-0 right-0 top-0 z-20 rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
            Say Hello
          </button>
          <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
        </a>
      )}
    </section>
  );
};

export default Contact;
