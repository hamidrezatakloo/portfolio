import Project from "@/components/Project";
import projectData from "../projectData";
const Projects = () => {
  return (
    <main className="flex-1 flex items-center">
      <div className="px-8 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center sm:w-8/12 mx-auto gap-4 py-10">
        {projectData.map((pr, index) => (
          <Project key={index} info={pr} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
