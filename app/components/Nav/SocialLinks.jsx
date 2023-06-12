"use client";
import Link from "next/link";
import { motion } from "framer-motion";
//import icons
import { FacebookIcon, InstagramIcon, LinkedIn, GithubIcon } from "./Icons";

const MotionLink = motion(Link);

const SocialLinks = () => {
  return (
    <nav className="socials">
      <MotionLink
        href="/"
        target="_blank"
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <FacebookIcon />
      </MotionLink>
      <MotionLink
        href="/"
        target="_blank"
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <InstagramIcon />
      </MotionLink>
      <MotionLink
        href="/"
        target="_blank"
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <LinkedIn />
      </MotionLink>
      <MotionLink
        href="/"
        target="_blank"
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        <GithubIcon />
      </MotionLink>
    </nav>
  );
};

export default SocialLinks;
