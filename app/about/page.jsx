import Biography from "../components/About/Biography";
import Skills from "../components/About/Skills";
import Experience from "../components/About/Experience";
import Education from "../components/About/Education";

export const metadata = {
  title: "M² Portfolio | About",
};

const About = () => {
  return (
    <main className="about">
      <div className="row">
        <Biography />
        <Skills />
        <Experience />
        <Education />
      </div>
    </main>
  );
};

export default About;
