// icons
import { FiGithub } from "react-icons/fi";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

const social_links_icons = [
  {
    icon: <FiGithub />,
    link: "https://github.com/hamza-eshoul",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/hamza.eshoul",
  },
  {
    icon: <FiTwitter />,
    link: "https://twitter.com/hamza_eshoul",
  },
  {
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCP21svaUb9Cn4M2zlLiEoKA",
  },
  {
    icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/hamza-eshoul/",
  },
];

const Footer = ({ language }) => {
  return (
    <footer className="flex flex-col gap-8 pt-20 xmd:pt-48">
      <ul className="flex items-center justify-center gap-9 xmd:hidden">
        {social_links_icons.map((social) => (
          <li className="social-links animate-social-links" key={social.link}>
            <a href={social.link} target="_blank">
              {" "}
              {social.icon}
            </a>
          </li>
        ))}
      </ul>

      {language == "French" && (
        <div className="fade-in-animation flex flex-col items-center justify-center gap-2 pb-10  font-mono text-[12px]">
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
        <div className="fade-in-animation flex flex-col items-center justify-center gap-2 pb-10  font-mono text-[12px]">
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
    </footer>
  );
};

export default Footer;
