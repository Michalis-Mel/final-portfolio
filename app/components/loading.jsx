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
        whileHover={{
          scale: 2,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        onClick={() => setLoading(true)}
        className="arrow"
        src={arrow}
        width={50}
        height={50}
        alt="continue"
      />
    </motion.div>
  );
}
