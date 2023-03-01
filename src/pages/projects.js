import Project from "@/components/Project";
import projectData from "../projectData";
const Projects = () => {
  return (
    <div className="px-8 flex flex-col gap-4 py-10">
      {projectData.map((pr, index) => (
        <Project key={index} info={pr} />
      ))}
    </div>
  );
};

export default Projects;
