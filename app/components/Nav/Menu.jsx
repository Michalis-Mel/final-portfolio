"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const path = usePathname();
  return (
    <nav className="menu">
      <Link
        className={`${path === "/" ? "active" : ""}`}
        href="/"
        scroll={true}
      >
        Home
      </Link>
      <Link
        className={`${path === "/about" ? "active" : ""}`}
        href="/about"
        scroll={true}
      >
        About
      </Link>
      <Link
        className={`${path === "/projects" ? "active" : ""}`}
        href="/projects"
        scroll={true}
      >
        Projects
      </Link>
      <Link
        className={`${path === "/contact" ? "active" : ""}`}
        href="/contact"
        scroll={true}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Menu;
