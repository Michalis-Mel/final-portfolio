"use client";
import { AnimatedTextCharacter, FadeInDiv } from "@/app/animations";
import { projects } from "@/app/constants/Projects";
import gitIcon from "@/public/images/icons/github.svg";
import liveIcon from "@/public/images/icons/live.svg";
import Image from "next/image";
import Link from "next/link";

const Project = ({ project }) => {
  return (
    <FadeInDiv className="project">
      <div className="project_con">
        <div className="project_img">
          <Image
            placeholder="blur"
            src={project.image}
            alt={project.name}
            width={1920}
          />
        </div>
        <div className="project_info">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <h4>Technologies used:</h4>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
          <div className="project_btns">
            {project.github ? (
              <Link href={project.github} target="_blank">
                <Image src={gitIcon} width={35} alt="Github" />
                <span>Github</span>
              </Link>
            ) : (
              <></>
            )}
            {project.live ? (
              <Link href={project.live} target="_blank">
                <Image src={liveIcon} width={35} alt="Live" />
                <span>Live</span>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </FadeInDiv>
  );
};

const ProjectSection = () => {
  return (
    <>
      <div className="mob_ttl">
        <AnimatedTextCharacter
          className="margin med"
          text=" Inspiring Projects from"
        />
        <AnimatedTextCharacter className="margin med" text="  the Cosmos" />
      </div>
      <div className="desk_ttl">
        <AnimatedTextCharacter
          className="margin med"
          text=" Inspiring Projects from the Cosmos"
        />
      </div>

      <div className="projects_con">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
