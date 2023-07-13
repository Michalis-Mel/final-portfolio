"use client";
import localFont from "next/font/local";
import { useState } from "react";
import { motion } from "framer-motion";
import ReactAudioPlayer from "react-audio-player";
import Image from "next/image";

import mySong from "@/public/music.mp3";
import Nav from "./components/Nav/Nav";
import Loading from "./components/loading";
import volumeControl from "@/public/images/icons/music.png";

const nunito = localFont({
  src: [
    {
      path: "./fonts/Nunito-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export function ClientRootLayout({ children }) {
  const [loading, setLoading] = useState(false);
  const [controls, setControls] = useState(false);

  return (
    <html lang="en">
      {loading ? (
        <motion.body
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 3,
              ease: "linear",
            },
          }}
          className={nunito.className}
          suppressHydrationWarning={true}
        >
          <Nav />
          {children}
          <motion.div
            className="musicCon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
          >
            <ReactAudioPlayer
              className={`${controls ? "active" : ""}`}
              src={mySong}
              loop
              controls
            />
            <button id="controls" onClick={() => setControls(!controls)}>
              <Image
                src={volumeControl}
                width={30}
                height={30}
                alt="Music Controls"
              />
            </button>
          </motion.div>
        </motion.body>
      ) : (
        <body
          className={`${nunito.className} load`}
          suppressHydrationWarning={true}
        >
          <Loading setLoading={setLoading} />
        </body>
      )}
    </html>
  );
}
