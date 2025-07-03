// components/Projects/PlaylistProjectGrid.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData, playlistData } from "../../data/projects";

export default function PlaylistProjectGrid({ playlistId, onSelect, search }) {
  const playlist = playlistData.find((p) => p.id === playlistId);
  if (!playlist) {
    return <p className="p-4">Playlist not found.</p>;
  }

  const filteredProjects = projectData
    .filter((project) => playlist.projects.includes(project.id))
    .filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <h2 className="text-2xl font-semibold pl-6 pt-3 text-neutral-100">
        {playlist.title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {filteredProjects.map((project) => (
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
