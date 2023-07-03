"use client";
import { AnimatedTextCharacter, FadeInDiv } from "@/app/animations";
import { skills } from "@/app/constants/Skills";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const Skill = ({ key, name, icon }) => {
  return (
    <div className="skill">
      <Image src={icon} width={80} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <AnimatedTextCharacter className="margin med" text="Skills" />
      <FadeInDiv className="skills_con">
        {skills.map((skill) => {
          return (
            <Tilt key={skill.name} className="skill_con">
              <Skill name={skill.name} icon={skill.icon} />
            </Tilt>
          );
        })}
      </FadeInDiv>
    </div>
  );
};

export default Skills;
