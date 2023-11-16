const Footer = ({ language }) => {
  return (
    <>
      {language == "French" && (
        <div className="fade-in-animation flex flex-col items-center justify-center gap-2 pb-10 pt-48 font-mono text-[12px]">
          {" "}
          <a
            href="https://github.com/hamza-eshoul/Personal-Website"
            target="_blank"
            className="transition duration-300 ease-in-out hover:text-secondaryColor"
          >
            Développé par Hamza Eshoul
          </a>
          <a
            href="https://github.com/bchiang7/v4"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:text-secondaryColor"
          >
            Conçu par Britanny Chiang
          </a>{" "}
        </div>
      )}
      {language == "English" && (
        <div className="fade-in-animation flex flex-col items-center justify-center gap-2 pb-10 pt-48 font-mono text-[12px]">
          {" "}
          <a
            href="https://github.com/hamza-eshoul/Personal-Website"
            target="_blank"
            className="transition duration-300 ease-in-out hover:text-secondaryColor"
          >
            Developed by Hamza Eshoul
          </a>
          <a
            href="https://github.com/bchiang7/v4"
            target="_blank"
            className="cursor-pointer transition duration-300 ease-in-out hover:text-secondaryColor"
          >
            Desgined by Britanny Chiang
          </a>{" "}
        </div>
      )}
    </>
  );
};

export default Footer;
