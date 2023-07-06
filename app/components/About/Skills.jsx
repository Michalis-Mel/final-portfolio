"use client";
import { AnimatedTextCharacter, FadeInDiv } from "@/app/animations";
import { techSkills, softSkills } from "@/app/constants/Skills";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const TechSkill = ({ key, name, icon }) => {
  return (
    <div className="skill">
      <Image src={icon} width={80} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
const SoftSkill = ({ key, name }) => {
  return (
    <div className="skill">
      <h2>{name}</h2>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <div className="techSkills">
        <AnimatedTextCharacter className="margin med" text="Technical Skills" />
        <FadeInDiv className="skills_con">
          {techSkills.map((skill) => {
            return (
              <Tilt key={skill.name} className="skill_con">
                <TechSkill name={skill.name} icon={skill.icon} />
                <h4>{skill.name}</h4>
              </Tilt>
            );
          })}
        </FadeInDiv>
      </div>
      <div className="softSkills">
        <AnimatedTextCharacter className="margin med" text="Soft Skills" />
        <FadeInDiv className="skills_con">
          {softSkills.map((skill) => {
            return (
              <Tilt key={skill.name} className="skill_con">
                <SoftSkill name={skill.name} />
              </Tilt>
            );
          })}
        </FadeInDiv>
      </div>
    </div>
  );
};

export default Skills;
