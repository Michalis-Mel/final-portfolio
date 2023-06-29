"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { AnimatedTextCharacter } from "@/app/animations";
import { educations } from "@/app/constants/Education";
import Link from "next/link";
import Image from "next/image";
import "react-vertical-timeline-component/style.min.css";

import certIcon from "@/public/images/certificate.png";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "var(--blue1)", color: "var(--light)" }}
    contentArrowStyle={{ borderRight: "15px solid var(--blue1)" }}
    date={education.date}
  >
    <div className="edu_info">
      <h3>{education.school}</h3>
      <p>{education.learned}</p>
      <Link href={education.document.src} target="_blank">
        <Image src={certIcon} width={22} alt="Certificate" />
        <span>Certificate</span>
      </Link>
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
