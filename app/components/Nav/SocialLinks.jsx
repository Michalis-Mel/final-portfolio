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
        href="/"
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
      <MotionLink
        href="/"
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
        href="/"
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
    </nav>
  );
};

export default SocialLinks;
