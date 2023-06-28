"use client";
import {
  FadeInText,
  AnimatedTextCharacter,
  AnimatedStats,
  FadeInDiv,
} from "@/app/animations";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import hotel from "@/public/images/hotel-portrait.png";

const Biography = () => {
  return (
    <div className="bio">
      <AnimatedTextCharacter
        className="margin med"
        text="Meet the Mind Behind the Code"
      />
      <div className="bio_txt">
        <FadeInText className="bio_ttl" text="Biography" myDelay={1} />

        <FadeInText
          text="Welcome, cosmic explorers! I'm Michael Meliopoulos, an
            interstellar front-end web developer, driven by a celestial passion
            for crafting breathtaking, user-centered digital experiences. With 2
            years of traversing the digital cosmos, I constantly seek new
            frontiers and innovative methods to manifest my client's
            visions into reality."
          myDelay={1}
        />
        <FadeInText
          text="In my cosmic design philosophy, I believe that aesthetics transcend
            mere beauty, encompassing problem-solving and forging intuitive,
            awe-inspiring journeys for users. Whether it's shaping
            celestial websites, stellar mobile apps, or other astral digital
            creations, I infuse each project with a commitment to design
            excellence and user-centricity."
          myDelay={1}
        />
        <FadeInText
          text="Embark on an extraordinary expedition and allow me to channel my
            skills and celestial devotion into realizing your next visionary
            project. Together, we shall redefine the boundaries of the digital
            universe."
          myDelay={1}
        />
        <FadeInDiv className="stats" myDelay={1}>
          <Tilt>
            <div className="stat">
              <div className="number_con">
                <AnimatedStats value={20} />+
              </div>
              <h2>Satisfied Clients</h2>
            </div>
          </Tilt>

          <Tilt>
            <div className="stat">
              <div className="number_con">
                <AnimatedStats value={40} />+
              </div>
              <h2>Projects Completed</h2>
            </div>
          </Tilt>
          <Tilt>
            <div className="stat">
              <div className="number_con">
                <AnimatedStats value={2} />+
              </div>
              <h2>Years of Experience</h2>
            </div>
          </Tilt>
        </FadeInDiv>
      </div>
      <FadeInDiv className="bio_img_con" myDelay={1}>
        <Image src={hotel} width={450} alt="Web Developer in Space Hotel" />
      </FadeInDiv>
    </div>
  );
};

export default Biography;