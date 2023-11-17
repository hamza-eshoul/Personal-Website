import { useInView } from "react-intersection-observer";

// icons
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

const social_links_icons = [
  {
    icon: <FiGithub />,
    link: "https://github.com/hamza-eshoul",
  },
  {
    icon: <FaInstagram />,
    link: "1",
  },
  {
    icon: <FiTwitter />,
    link: "2",
  },
  {
    icon: <FiLinkedin />,
    link: "3",
  },
];

const SocialLinks = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } fixed  bottom-0 left-6 hidden xmd:block xlg:left-12`}
    >
      <ul className="flex flex-col items-center gap-5">
        {social_links_icons.map((social) => (
          <li className="social-links animate-social-links" key={social.link}>
            <a href={social.link} target="_blank">
              {" "}
              {social.icon}
            </a>
          </li>
        ))}
        <div className="mt-5 h-24 w-[1px] bg-lightestTertiaryColor" />
      </ul>
    </div>
  );
};

export default SocialLinks;
