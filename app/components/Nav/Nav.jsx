"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import Menu from "./Menu";
import MobileNav from "./MobileNav";

const Nav = () => {
  const viewWidth = useWindowSize();

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowWidth, setWindowWidth] = useState({
      width: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowWidth({
          width: window.innerWidth,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowWidth;
  }

  return (
    <>
      {viewWidth.width >= 1100 ? (
        <header className="desk_head">
          <div className="row">
            <Menu />
            <Logo />
            <SocialLinks />
          </div>
        </header>
      ) : (
        <header className="mob_head">
          <div className="row">
            <MobileNav />
          </div>
        </header>
      )}
    </>
  );
};

export default Nav;
