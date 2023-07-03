"use client";
import Link from "next/link";
import { motion } from "framer-motion";
//import icons
import { FacebookIcon, InstagramIcon, LinkedIn, GithubIcon } from "./Icons";

const MotionLink = motion(Link);

const SocialLinks = () => {
  return (
    <div className="socials">
      <MotionLink
        href="https://github.com/Michalis-Mel"
        target="_blank"
        whileHover={{
          y: -3,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        whileTap={{ scale: 0.7 }}
      >
        <GithubIcon />
      </MotionLink>
      <MotionLink
        href="https://www.linkedin.com/in/mixalis-meliopoulos/"
        target="_blank"
        whileHover={{
          y: -3,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        whileTap={{ scale: 0.7 }}
      >
        <LinkedIn />
      </MotionLink>
      <MotionLink
        href="https://www.facebook.com/mixalis.meliopoulos/"
        target="_blank"
        whileHover={{
          y: -3,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        whileTap={{ scale: 0.7 }}
      >
        <FacebookIcon />
      </MotionLink>
      <MotionLink
        href="https://www.instagram.com/mixalis__meliopoulos/"
        target="_blank"
        whileHover={{
          y: -3,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        whileTap={{ scale: 0.7 }}
      >
        <InstagramIcon />
      </MotionLink>
    </div>
  );
};

export default SocialLinks;
