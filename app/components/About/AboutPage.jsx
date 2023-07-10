import Biography from "./Biography";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

const AboutPage = () => {
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

export default AboutPage;
