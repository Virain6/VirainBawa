import React from "react";
import { projectData } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ onSelect, search }) {
  return (
    <>
      <h2 className="text-2xl font-semibold pl-6 pt-3 text-neutral-100">
        Project Library
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 ">
        {projectData
          .filter((project) =>
            project.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((project) => (
            <ProjectCard
              key={project.id}
              onClick={() => onSelect(project)}
              project={project}
            />
          ))}
      </div>
    </>
  );
}
