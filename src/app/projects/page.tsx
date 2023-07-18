import React from "react";
import ProjectCards from "@/components/ProjectCards";

const ProjectsPage = () => {
  return (
    <div className="mb-20 ml-3">
      <div className="sm:mb-32 mb-20   sm:mt-44 mt-20 ml-2 ">
        <p className="sm:text-6xl text-2xl">
          <strong className="text-[rgb(125,96,208)]">Projects</strong>
        </p>
        <p className="sm:text-2xl tex-xl mt-10 sm:mb-32 mb-20">
          Things I’ve built so far
        </p>
      </div>

      <ProjectCards />
    </div>
  );
};

export default ProjectsPage;
