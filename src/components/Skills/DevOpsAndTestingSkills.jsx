// icons
import { SiGithub, SiWebpack, SiRender, SiJest } from "react-icons/si";
import { BsGit } from "react-icons/bs";

// components
import SkillIcon from "./SkillIcon";

const main_skills = [
  {
    name: "Git",
    icon: <BsGit />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
  {
    name: "Webpack",
    icon: <SiWebpack />,
  },
  {
    name: "Render",
    icon: <SiRender />,
  },
  {
    name: "Jest",
    icon: <SiJest />,
  },
];

const DevOpsAndTestingSkills = ({ language }) => {
  return (
    <section className="fade-in-animation flex w-full flex-col items-center">
      <article className="xsm:w-[90%]">
        {language == "French" && (
          <h3 className="fade-in-animation text-center font-mono text-[14px] text-secondaryColor">
            Technologies Principales
          </h3>
        )}
        {language == "English" && (
          <h3 className="fade-in-animation text-center font-mono text-[14px] text-secondaryColor">
            Main Technologies
          </h3>
        )}

        <div className="my-4 flex flex-wrap justify-center gap-5 rounded bg-lightPrimaryColor px-3 py-6 text-justify text-[18px] text-lightTertiaryColor xsm:gap-6 xmd:gap-8 xlg:px-6">
          {main_skills.map((skill) => (
            <SkillIcon
              skill={skill.name}
              skillName={skill.name}
              skillIcon={skill.icon}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default DevOpsAndTestingSkills;
