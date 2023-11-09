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

import SkillIcon from "./SkillIcon";

const BackendSkills = ({ language }) => {
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
            <SkillIcon skillName={"Node.js"} skillIcon={<FaNodeJs />} />
            <SkillIcon skillName={"Express.js"} skillIcon={<SiExpress />} />
            <SkillIcon skillName={"MongoDB"} skillIcon={<SiMongodb />} />
            <SkillIcon skillName={"Firebase"} skillIcon={<SiFirebase />} />
            <SkillIcon skillName={"Socket.IO"} skillIcon={<SiSocketdotio />} />
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
            <SkillIcon skillName={"PHP"} skillIcon={<SiPhp />} />
            <SkillIcon skillName={"Laravel"} skillIcon={<SiLaravel />} />
            <SkillIcon skillName={"MySQL"} skillIcon={<GrMysql />} />
            <SkillIcon skillName={"Supabase"} skillIcon={<SiSupabase />} />
            <SkillIcon skillName={"GraphQL"} skillIcon={<SiGraphql />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackendSkills;
