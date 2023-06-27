"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { AnimatedTextCharacter } from "@/app/animations";
import { educations } from "@/app/constants/Education";
import "react-vertical-timeline-component/style.min.css";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "var(--blue1)", color: "var(--light)" }}
    contentArrowStyle={{ borderRight: "15px solid var(--blue1)" }}
    date={education.date}
  >
    <div className="edu_info">
      <h3>{education.school}</h3>
      <p>{education.learned}</p>
    </div>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <div className="education">
      <AnimatedTextCharacter text="Education" className="margin med" />
      <VerticalTimeline>
        {educations.map((education, index) => (
          <EducationCard key={index} education={education} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
