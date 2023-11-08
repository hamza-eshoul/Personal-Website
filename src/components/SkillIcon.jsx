import React from "react";

const SkillIcon = ({ skillName, skillIcon }) => {
  return (
    <div className="hover:animate-skill-icons group flex flex-col items-center justify-center gap-2 text-[30px]">
      {skillIcon}
      <span className="text-[18px] font-medium">{skillName}</span>
    </div>
  );
};

export default SkillIcon;
