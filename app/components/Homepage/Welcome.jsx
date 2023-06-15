"use client";
import { motion } from "framer-motion";
import AnimatedTextCharacter from "../AnimatedTitle";
import { SpaceshipCanvas } from "../canvas";

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
        {/* A 3D airship model in .gltf that made the app slow down
        <SpaceshipCanvas />  */}
      </div>
    </div>
  );
};

export default Welcome;
