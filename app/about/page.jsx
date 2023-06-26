"use client";
import {
  FadeInText,
  AnimatedTextCharacter,
  AnimatedStats,
  FadeInDiv,
} from "@/app/animations";
import Skills from "../components/About/Skills";
import Experience from "../components/About/Experience";
import Image from "next/image";
import hotel from "@/public/images/hotel-portrait.png";

export const metadata = {
  title: "M² Portfolio | About",
};

const About = () => {
  return (
    <main className="about">
      <div className="row">
        <div className="bio">
          <AnimatedTextCharacter
            className="margin med"
            text="Meet the Mind Behind the Code"
          />
          <div className="bio_txt">
            <FadeInText className="bio_ttl" text="Biography" myDelay={2} />

            <FadeInText
              text="Welcome, cosmic explorers! I'm Michael Meliopoulos, an
            interstellar front-end web developer, driven by a celestial passion
            for crafting breathtaking, user-centered digital experiences. With 2
            years of traversing the digital cosmos, I constantly seek new
            frontiers and innovative methods to manifest my client's
            visions into reality."
              myDelay={2}
            />
            <FadeInText
              text="In my cosmic design philosophy, I believe that aesthetics transcend
            mere beauty, encompassing problem-solving and forging intuitive,
            awe-inspiring journeys for users. Whether it's shaping
            celestial websites, stellar mobile apps, or other astral digital
            creations, I infuse each project with a commitment to design
            excellence and user-centricity."
              myDelay={2}
            />
            <FadeInText
              text="Embark on an extraordinary expedition and allow me to channel my
            skills and celestial devotion into realizing your next visionary
            project. Together, we shall redefine the boundaries of the digital
            universe."
              myDelay={2}
            />
            <FadeInDiv className="stats" myDelay={2}>
              <div className="stat">
                <div className="number_con">
                  <AnimatedStats value={20} />+
                </div>
                <h2>Satisfied Clients</h2>
              </div>
              <div className="stat">
                <div className="number_con">
                  <AnimatedStats value={40} />+
                </div>
                <h2>Projects Completed</h2>
              </div>
              <div className="stat">
                <div className="number_con">
                  <AnimatedStats value={2} />+
                </div>
                <h2>Years of Experience</h2>
              </div>
            </FadeInDiv>
          </div>
          <FadeInDiv className="bio_img_con" myDelay={2}>
            <Image src={hotel} width={450} alt="Web Developer in Space Hotel" />
          </FadeInDiv>
        </div>
        <Skills />
        <Experience />
      </div>
    </main>
  );
};

export default About;
