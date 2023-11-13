import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const SocialLinks = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${
        inView ? "fade-appear-animation" : "oapcity-0"
      } fixed bottom-0 left-12`}
    >
      <ul className="flex flex-col items-center gap-5">
        <li>
          <FiGithub className="social-links animate-social-links" />
        </li>
        <li>
          <FaInstagram className="social-links animate-social-links" />
        </li>
        <li>
          <FiTwitter className="social-links animate-social-links" />
        </li>
        <li>
          <FiLinkedin className="social-links animate-social-links" />
        </li>
        <div className="mt-5 h-24 w-[1px] bg-lightestTertiaryColor" />
      </ul>
    </div>
  );
};

export default SocialLinks;
