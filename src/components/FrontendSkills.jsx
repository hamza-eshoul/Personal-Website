// icons
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiChakraui,
} from "react-icons/si";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// components
import SkillIcon from "./SkillIcon";

const main_skills = [
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
];

const complementary_skills = [
  {
    name: "Vue.js",
    icon: <FaVuejs />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Chakra UI",
    icon: <SiChakraui />,
  },
];

const FrontendSkills = ({ language }) => {
  return (
    <div className="fade-in-animation flex w-full flex-col items-center gap-2">
      <div className="xsm:w-[90%]">
        {language == "French" && (
          <h2 className="fade-in-animation text-center font-mono text-[14px] text-secondaryColor">
            Technologies Principales
          </h2>
        )}
        {language == "English" && (
          <h2 className="fade-in-animation text-center font-mono text-[14px] text-secondaryColor">
            Main Technologies
          </h2>
        )}

        <div className="my-4 flex flex-wrap justify-center gap-5 rounded bg-lightPrimaryColor px-3 py-6 text-justify text-[18px] text-lightTertiaryColor  xsm:gap-6 xmd:gap-8 xlg:px-6">
          {main_skills.map((skill) => (
            <SkillIcon skillName={skill.name} skillIcon={skill.icon} />
          ))}
        </div>
      </div>
      <div className="xsm:w-[90%]">
        {" "}
        {language == "French" && (
          <h2 className="fade-in-animation text-center font-mono text-[14px] text-secondaryColor">
            Technologies Complémentaires
          </h2>
        )}
        {language == "English" && (
          <h2 className="fade-in-animation text-center font-mono text-[14px] text-secondaryColor">
            Complementary Technologies
          </h2>
        )}
        <div className="my-4 flex flex-wrap justify-center  gap-5 rounded bg-lightPrimaryColor px-3 py-6 text-justify text-[18px] text-lightTertiaryColor xsm:gap-6 xmd:gap-8  xlg:px-6">
          {complementary_skills.map((skill) => (
            <SkillIcon skillName={skill.name} skillIcon={skill.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontendSkills;
