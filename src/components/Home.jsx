const Home = ({ language }) => {
  return (
    <>
      {language == "French" && (
        <div className="fade-in-animation pl-2.5 pt-[205px]">
          <p className="font-mono text-secondaryColor">Bonjour, je suis</p>
          <p className="-translate-x-1 pt-5 text-[80px] font-semibold text-lightestTertiaryColor">
            Hamza Eshoul.
          </p>
          <p className="-translate-x-1 -translate-y-4  text-[80px] font-semibold">
            Je crée des ... pour le web.
          </p>

          <p className="w-[540px] -translate-x-1 -translate-y-7 text-[20px] font-normal">
            Je suis un{" "}
            <span className="font-medium text-secondaryColor">
              {" "}
              développeur full stack{" "}
            </span>{" "}
            spécialisé dans la création d'applications web modernes centrées sur
            l'utilisateur en utilisant la puissance de la
            <span className="font-medium text-secondaryColor"> MERN </span>
            stack.
          </p>

          <div className="group relative mt-6 h-[48px] w-[170px] -translate-x-1">
            <button className="absolute bottom-0 left-0 right-0 top-0 z-20 rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
              Me contacter!
            </button>
            <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
          </div>
        </div>
      )}

      {language == "English" && (
        <div className="fade-in-animation pl-2.5 pt-[205px]">
          <p className="font-mono text-secondaryColor">Hi, my name is</p>
          <p className="-translate-x-1 pt-5 text-[80px] font-semibold text-lightestTertiaryColor">
            Hamza Eshoul.
          </p>
          <p className="-translate-x-1 -translate-y-4  text-[80px] font-semibold">
            I build things for the web.
          </p>

          <p className="w-[540px] -translate-x-1 -translate-y-7 text-[20px] font-normal">
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

          <div className="group relative mt-6 h-[48px] w-[170px] -translate-x-1">
            <button className="absolute bottom-0 left-0 right-0 top-0 z-20 rounded border-[1px] border-secondaryColor bg-primaryColor font-mono text-[14px] text-secondaryColor transition-transform duration-300 ease-in-out group-hover:-translate-x-1 group-hover:-translate-y-1">
              Get in touch!
            </button>
            <div className="absolute bottom-0 left-0 right-0 top-0 rounded bg-secondaryColor"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
