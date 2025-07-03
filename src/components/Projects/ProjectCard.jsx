import React from "react";

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        bg-neutral-800 hover:bg-neutral-700
        rounded-lg p-4 transition cursor-pointer
      "
    >
      <div className="aspect-square mb-3 overflow-hidden rounded">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold truncate">{project.title}</h3>
      <p className="text-xs text-neutral-400 truncate">{project.description}</p>
    </div>
  );
}
