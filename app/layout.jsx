"use client";
import localFont from "next/font/local";
import { useState } from "react";
import { motion } from "framer-motion";

import Nav from "./components/Nav/Nav";
import Loading from "./components/loading";

import "./styles/app.scss";

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

export const metadata = {
  title: "M² Portfolio",
  description:
    "Welcome to my space-themed portfolio! As a front-end developer specializing in Next.js 13 and SCSS, I have crafted a captivating digital universe that showcases my skills and projects. ",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "space",
  ],
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);

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
        </motion.body>
      ) : (
        <body className={nunito.className} suppressHydrationWarning={true}>
          <Loading setLoading={setLoading} />
        </body>
      )}
    </html>
  );
}
