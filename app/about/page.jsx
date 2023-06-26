import Biography from "../components/About/Biography";
import Skills from "../components/About/Skills";
import Experience from "../components/About/Experience";

export const metadata = {
  title: "M² Portfolio | About",
};

const About = () => {
  return (
    <main className="about">
      <Biography />
      <Skills />
      <Experience />
    </main>
  );
};

export default About;
