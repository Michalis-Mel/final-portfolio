"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { AnimatedTextCharacter } from "@/app/animations";
import { experiences } from "@/app/constants/Experiences";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "var(--blue1)", color: "var(--light)" }}
    contentArrowStyle={{ borderRight: "15px solid var(--blue1)" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <Image
        className="exp_img"
        width={40}
        src={experience.icon}
        alt={experience.company_name}
      />
    }
  >
    <div className="exp_info">
      <h3>{experience.title}</h3>
      <p>{experience.company_name}</p>
    </div>
    <ul>
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="experiences">
      <AnimatedTextCharacter text="Work Experience" className="margin med" />
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
