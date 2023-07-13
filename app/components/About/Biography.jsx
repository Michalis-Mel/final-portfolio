"use client";
import {
  FadeInText,
  AnimatedTextCharacter,
  AnimatedStats,
  FadeInDiv,
} from "@/app/animations";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import hotelMob from "@/public/images/hotel.webp";
import me from "@/public/images/me.png";

const Biography = () => {
  return (
    <div className="bio">
      <div className="mob_ttl">
        <AnimatedTextCharacter className="margin med" text="Meet the Mind" />
        <AnimatedTextCharacter className="margin med" text="Behind the Code" />
      </div>
      <div className="desk_ttl">
        <AnimatedTextCharacter
          className="margin med"
          text="Meet the Mind Behind the Code"
        />
      </div>

      <div className="bio_txt">
        <FadeInDiv myDelay={1} className="bio_images bio_images_mob">
          <div className="me_con">
            <Image className="me" src={me} width={300} alt="Myself" />
          </div>
        </FadeInDiv>
        <FadeInText className="bio_ttl" text="Biography" myDelay={1} />
        <FadeInText
          text="Greetings, cosmic explorers! Prepare for an otherworldly encounter as
        you venture into the cosmic domain of Michael Meliopoulos. Born on the
        astral plane of 1st February 1996, I am a celestial being with a
        profound love for anime, a relentless devotion to the gym, and an
        unyielding passion for football. "
          myDelay={1}
        />
        <FadeInText
          text="I am an interstellar front-end web developer, harnessing the cosmic
        energies to craft awe-inspiring digital experiences. With a journey
        spanning 2 years through the boundless reaches of the digital cosmos, I
        am constantly pushing the boundaries of innovation, seeking novel
        frontiers to bring my client's visions to life. "
          myDelay={1}
        />
        <FadeInText
          text="In the realm of my cosmic design philosophy, I transcend the
        conventional notion of aesthetics, intertwining the art of
        problem-solving to forge intuitive and breathtaking journeys for users.
        For the creation of celestial websites, stellar mobile apps, or other
        astral digital marvels, I infuse each project with an unwavering
        commitment to design excellence and a laser focus on user-centricity."
          myDelay={1}
        />
        <FadeInText
          text="Prepare to embark on an extraordinary expedition through the cosmos, as
        I channel my celestial skills and unwavering devotion to manifest your
        next visionary project. Together, we shall defy the limits of the
        digital universe, reshaping the cosmic fabric and redefining what is
        possible."
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

        <FadeInDiv className="bio_img_con mob" myDelay={1}>
          <Image
            src={hotelMob}
            quality={100}
            width={600}
            alt="Web Developer in Space Hotel"
            priority
            sizes="(max-width: 1100px) 100vw"
          />
        </FadeInDiv>
      </div>

      <FadeInDiv myDelay={1} className="bio_images bio_images_desk">
        <div className="me_con">
          <Image className="me" src={me} width={300} alt="Myself" />
        </div>
      </FadeInDiv>
    </div>
  );
};

export default Biography;
