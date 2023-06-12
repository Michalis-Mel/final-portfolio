"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/m²logo.png";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const Logo = () => {
  return (
    <Link className="logo" href="/">
      <MotionImage
        animate={{
          rotate: 360,
          transition: {
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        src={logo}
        width={100}
        height={100}
        alt="logo"
      />
      <h1>M² Portfolio</h1>
    </Link>
  );
};

export default Logo;
