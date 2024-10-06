import { useState } from "react";
import { useInView } from "react-intersection-observer";

type activeSkills = "frontend" | "backend" | "devops";

const Skills = () => {
  // local state
  const [activeSkills, setActiveSkills] = useState<activeSkills>("frontend");
  
  // library hooks
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id="skills"
      className={`${
        inView ? "fade-appear-animation" : "opacity-0"
      } xsm:py-[80px] xmd:py-[100px] mx-auto max-w-3xl py-[60px]`}
    >
      <header className="flex items-center gap-6 pb-10">
        <h2>
          <span className="numberOfHeading">02. </span>{" "}
          <span className="fade-in-animation numbered-headings">
            Compétences & Technologies{" "}
          </span>
        </h2>
        <div className="numbered-headings-bar" />
      </header>
    </section>
  );
};

export default Skills;
