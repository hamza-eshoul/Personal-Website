import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiChakraui,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import SkillIcon from "./SkillIcon";

const FrontendSkills = ({ language }) => {
  return (
    <>
      <div className="fade-in-animation flex w-full flex-col items-center gap-2">
        <div>
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

          <div className="my-4 flex w-[500px] flex-wrap justify-center gap-8 rounded bg-lightPrimaryColor p-6 text-justify text-[18px] text-lightTertiaryColor">
            <SkillIcon skillName={"HTML"} skillIcon={<SiHtml5 />} />
            <SkillIcon skillName={"CSS"} skillIcon={<SiCss3 />} />
            <SkillIcon skillName={"JavaScript"} skillIcon={<SiJavascript />} />
            <SkillIcon skillName={"React"} skillIcon={<FaReact />} />
            <SkillIcon
              skillName={"Tailwind CSS"}
              skillIcon={<SiTailwindcss />}
            />
          </div>
        </div>
        <div>
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
          <div className="my-4 flex w-[500px] flex-wrap justify-center gap-8 rounded bg-lightPrimaryColor p-6 text-justify text-[18px] text-lightTertiaryColor">
            <SkillIcon skillName={"TypeScript"} skillIcon={<SiTypescript />} />
            <SkillIcon skillName={"Next.js"} skillIcon={<SiNextdotjs />} />
            <SkillIcon skillName={"Redux"} skillIcon={<SiRedux />} />
            <SkillIcon skillName={"Chakra UI"} skillIcon={<SiChakraui />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontendSkills;
