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

const BackendSkills = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center">
        <div>
          <h2 className="text-center font-mono text-[14px] text-secondaryColor">
            Main Technologies
          </h2>
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
          <h2 className="text-center font-mono text-[14px] text-secondaryColor">
            Side Technologies
          </h2>
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
