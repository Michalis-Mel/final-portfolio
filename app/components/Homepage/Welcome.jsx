"use client";
import { AnimatedTextCharacter, FadeInText, FadeInDiv } from "@/app/animations";
import Image from "next/image";
import Link from "next/link";
import man from "@/public/images/purple-man.webp";
import link from "@/public/images/icons/link.svg";
import mail from "@/public/images/icons/email.png";

const Welcome = () => {
  return (
    <div id="welcome" className="welcome">
      <div className="row">
        <AnimatedTextCharacter
          className="top med"
          text="Crafting Stellar Realities"
        />
        <AnimatedTextCharacter
          className="med margin"
          text="Using Cosmic Code and Design"
          myDelay={0.5}
        />
        <FadeInText
          text="Welcome, intrepid voyagers, to my celestial realm, M² Portfolio. I am
          Michael Meliopoulos, a visionary front-end developer, inviting you to
          embark on a cosmic journey through my stellar creations. Inspired by
          the mysteries of the universe, my space-themed portfolio aims to
          ignite your imagination and transport you to galaxies of innovation
          and captivating design. With each orbit, you'll witness the
          seamless fusion of technology and artistry, as breathtaking user
          interfaces and transcendent user experiences come to life. Prepare to
          be dazzled as you navigate the constellations of my projects,
          showcasing the boundless possibilities of web development. So buckle
          up, stargazers, and let M² Portfolio be your guiding star on this
          extraordinary adventure into the realm of digital marvels."
          myDelay={1.5}
        />

        <FadeInDiv className="welcome_btns" myDelay={1.5}>
          <Link
            href="/Resume.pdf"
            target="_blank"
            download={true}
            className="resume"
          >
            <i></i>
            <i></i>
            <span>
              Resume
              <Image src={link} width={25} alt="Link" />
            </span>
          </Link>
          <Link
            href="mailto:mixalismeliop@gmail.com"
            target="_blank"
            className="contact"
          >
            <i></i>
            <i></i>
            <span>
              Contact
              <Image src={mail} width={25} alt="Email" />
            </span>
          </Link>
        </FadeInDiv>
        <FadeInDiv className="man_container" myDelay={1.5}>
          <Image
            src={man}
            width={500}
            alt="Man"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="man_msg">
            <h3>
              Within the depths of my being, stardust dances, fueling the
              brilliance of my cosmic creations.
              <span>Michael Meliopoulos</span>
            </h3>
          </div>
        </FadeInDiv>
      </div>
    </div>
  );
};

export default Welcome;
