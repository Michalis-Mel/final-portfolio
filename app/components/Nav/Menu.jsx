"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const path = usePathname();
  return (
    <nav className="menu">
      <Link className={`${path === "/" ? "active" : ""}`} href="/">
        Home
      </Link>
      <Link className={`${path === "/about" ? "active" : ""}`} href="/about">
        About
      </Link>
      <Link
        className={`${path === "/projects" ? "active" : ""}`}
        href="/projects"
      >
        Projects
      </Link>
      <Link
        className={`${path === "/contact" ? "active" : ""}`}
        href="/contact"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Menu;
