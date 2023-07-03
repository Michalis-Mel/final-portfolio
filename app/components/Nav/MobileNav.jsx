"use client";
import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const MotionLink = motion(Link);

const MobileNav = () => {
  const path = usePathname();

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="mob-nav"
      initial="closed"
      animate={mobileNavOpen ? "opened" : "closed"}
    >
      <div className="logo-container" variants={hideNavItemsVariant}>
        <Logo />
      </div>
      <div className="open-container">
        <button
          variants={hideNavItemsVariant}
          className="open"
          onClick={() => {
            setMobileNavOpen(true);
            document.body.classList.add("noScroll");
          }}
        >
          <span></span>
        </button>
      </div>

      <motion.div className="mobile-menu" variants={mobileMenuVariant}>
        <motion.button
          variants={fadeInVariant}
          className="close"
          onClick={() => {
            setMobileNavOpen(false);
            document.body.classList.remove("noScroll");
          }}
        >
          <span></span>
        </motion.button>
        <motion.nav variants={ulVariant}>
          <motion.div whileTap={{ scale: 0.95 }} className="link_container">
            <MotionLink
              variants={liVariant}
              className={`${path === "/" ? "active" : ""}`}
              href="/"
              onClick={() => setMobileNavOpen(false)}
            >
              Home
            </MotionLink>
          </motion.div>

          <motion.div whileTap={{ scale: 0.95 }} className="link_container">
            <MotionLink
              variants={liVariant}
              className={`${path === "/about" ? "active" : ""}`}
              href="/about"
              onClick={() => setMobileNavOpen(false)}
            >
              About
            </MotionLink>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }} className="link_container">
            <MotionLink
              variants={liVariant}
              className={`${path === "/projects" ? "active" : ""}`}
              href="/projects"
              onClick={() => setMobileNavOpen(false)}
            >
              Projects
            </MotionLink>
          </motion.div>
          <motion.div whileTap={{ scale: 0.95 }} className="link_container">
            <MotionLink
              variants={liVariant}
              className={`${path === "/contact" ? "active" : ""}`}
              href="/contact"
              onClick={() => setMobileNavOpen(false)}
            >
              Contact
            </MotionLink>
          </motion.div>
        </motion.nav>
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
