"use client";
import { AnimatedTextCharacter } from "@/app/animations";
import arrow from "@/public/images/arrow3.png";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function Loading({ setLoading }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2,
          ease: "linear",
        },
      }}
      className="loadingBlackScreen"
    >
      <div className="loadAnimated">
        <AnimatedTextCharacter
          text="M² Portfolio"
          className="big"
          myDelay={2}
        />
        <AnimatedTextCharacter
          text="by Michael Meliopoulos"
          className="small "
          myDelay={3}
        />
      </div>

      <MotionImage
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { duration: 2, delay: 4 },
        }}
        onClick={() => setLoading(true)}
        className="arrow"
        src={arrow}
        width={40}
        height={40}
        alt="continue"
      />
    </motion.div>
  );
}
