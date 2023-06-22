"use client";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "../AnimatedTitle";
import Image from "next/image";
import Link from "next/link";
import man from "@/public/images/purple-man.webp";
import link from "@/public/images/icons/link.svg";

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
          myDelay={1}
        />
        <motion.p
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 2 },
          }}
        >
          Welcome, intrepid voyagers, to my celestial realm, M² Portfolio. I am
          Michael Meliopoulos, a visionary front-end developer, inviting you to
          embark on a cosmic journey through my stellar creations. Inspired by
          the mysteries of the universe, my space-themed portfolio aims to
          ignite your imagination and transport you to galaxies of innovation
          and captivating design. With each orbit, you&apos;ll witness the
          seamless fusion of technology and artistry, as breathtaking user
          interfaces and transcendent user experiences come to life. Prepare to
          be dazzled as you navigate the constellations of my projects,
          showcasing the boundless possibilities of web development. So buckle
          up, stargazers, and let M² Portfolio be your guiding star on this
          extraordinary adventure into the realm of digital marvels.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 2 },
          }}
          className="welcome_btns"
        >
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
            <span> Contact</span>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: { duration: 4 },
          }}
          className="man_container"
        >
          <Image src={man} width={500} alt="Man" />
          <div className="man_msg">
            <h3>
              Within the depths of my being, stardust dances, fueling the
              brilliance of my cosmic creations.
              <span>Michael Meliopoulos</span>
            </h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
