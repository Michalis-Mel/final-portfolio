"use client";
import { AnimatedTextCharacter } from "@/app/animations";
import { projects } from "@/app/constants/Projects";
import gitIcon from "@/public/images/icons/github.svg";
import liveIcon from "@/public/images/icons/live.svg";
import Image from "next/image";
import Link from "next/link";

const Project = ({ project }) => {
  return (
    <div className="project">
      <Image src={project.image} alt={project.name} width={600} />
      <div className="project_info">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <div className="btns">
          <Link href={project.github} target="_blank">
            <Image src={gitIcon} width={70} alt="Github" />
            Github
          </Link>
          <Link href={project.live} target="_blank">
            <Image src={liveIcon} width={70} alt="Live" />
            Live
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <>
      <AnimatedTextCharacter
        className="margin med"
        text=" Inspiring Projects from the Cosmos"
      />
      <div className="projects_con">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
