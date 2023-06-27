import ProjectSection from "../components/Projects/page";
export const metadata = {
  title: "M² Portfolio | Projects",
};

const Projects = () => {
  return (
    <main className="projects">
      <div className="row">
        <ProjectSection />
      </div>
    </main>
  );
};

export default Projects;
