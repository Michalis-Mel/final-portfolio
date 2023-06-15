"use client";

import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import Menu from "./Menu";

const Nav = () => {
  return (
    <header>
      <div className="row">
        <Menu />
        <Logo />
        <SocialLinks />
      </div>
    </header>
  );
};

export default Nav;
