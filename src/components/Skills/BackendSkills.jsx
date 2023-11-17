// icons
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPhp,
  SiLaravel,
  SiSupabase,
  SiGraphql,
  SiSocketdotio,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";

// components
import SkillIcon from "./SkillIcon";

const main_skills = [
  {
    name: "Node.Js",
    icon: <FaNodeJs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    name: "Socket.IO",
    icon: <SiSocketdotio />,
  },
];

const complementary_skills = [
  {
    name: "PHP",
    icon: <SiPhp />,
  },
  {
    name: "Laravel",
    icon: <SiLaravel />,
  },
  {
    name: "MySQL",
    icon: <GrMysql />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
  },
];

const BackendSkills = ({ language }) => {
  return (
    <section className="fade-in-animation flex w-full flex-col items-center gap-2">
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
              key={skill.name}
              skillName={skill.name}
              skillIcon={skill.icon}
            />
          ))}
        </div>
      </article>
      <article className="xsm:w-[90%]">
        {" "}
        {language == "French" && (
          <h3 className="fade-in-animation text-center font-mono text-[14px] text-secondaryColor">
            Technologies Complémentaires
          </h3>
        )}
        {language == "English" && (
          <h3 className="fade-in-animation text-center font-mono text-[14px] text-secondaryColor">
            Complementary Technologies
          </h3>
        )}
        <div className="my-4 flex flex-wrap justify-center gap-5 rounded bg-lightPrimaryColor px-3 py-6 text-justify text-[18px] text-lightTertiaryColor xsm:gap-6 xmd:gap-8 xlg:px-6">
          {complementary_skills.map((skill) => (
            <SkillIcon
              key={skill.name}
              skillName={skill.name}
              skillIcon={skill.icon}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default BackendSkills;
