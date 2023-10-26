import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

const SocialLinks = () => {
  return (
    <div className="fixed bottom-0 left-12">
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
        <div className="bg-lightestTertiaryColor h-24 w-[1px] mt-5" />
      </ul>
    </div>
  );
};

export default SocialLinks;
