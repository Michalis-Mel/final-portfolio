import Logo from "./Nav/Logo";
import SocialLinks from "./Nav/SocialLinks";
import Menu from "./Nav/Menu";

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
