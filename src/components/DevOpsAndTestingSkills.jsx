import {
  SiGithub,
  SiWebpack,
  SiRender,
  SiJest,
  SiPhp,
  SiLaravel,
  SiSupabase,
  SiGraphql,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { Icon } from "@iconify/react";

import SkillIcon from "./SkillIcon";

const DevOpsAndTestingSkills = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center">
        <div>
          <h2 className="text-center font-mono text-[14px] text-secondaryColor">
            Main Technologies
          </h2>
          <div className="my-4 flex w-[500px] flex-wrap justify-center gap-8 rounded bg-lightPrimaryColor p-6 text-justify text-[18px] text-lightTertiaryColor">
            <SkillIcon skillName={"Git"} skillIcon={<BsGit />} />
            <SkillIcon skillName={"GitHub"} skillIcon={<SiGithub />} />
            <SkillIcon skillName={"Webpack"} skillIcon={<SiWebpack />} />
            <SkillIcon skillName={"Render"} skillIcon={<SiRender />} />
            <SkillIcon skillName={"Jest"} skillIcon={<SiJest />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DevOpsAndTestingSkills;
