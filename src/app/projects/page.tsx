import React from "react";
import ProjectCards from "@/components/ProjectCards";

const ProjectsPage = () => {
  return (
    <div className="mb-20">
      <div className="mb-32 mt-44 ">
        <p className="text-6xl">
          <strong className="text-[rgb(125,96,208)]">Projects</strong>
        </p>
        <p className="text-2xl mt-10 mb-32">Things I’ve built so far</p>
      </div>

      <ProjectCards />
    </div>
  );
};

export default ProjectsPage;
