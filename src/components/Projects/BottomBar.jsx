import React from "react";

export default function ProjectBottomBar({ project }) {
  return (
    <div className="bg-neutral-900 text-white p-4 flex items-center justify-between gap-4">
      {/* Left */}
      <div className="flex items-center gap-4">
        {project ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-12 h-12 object-cover rounded"
          />
        ) : (
          <div className="w-12 h-12 bg-neutral-800 rounded animate-pulse" />
        )}
        <div>
          <h3 className="text-sm font-semibold">
            {project ? project.title : "Project"}
          </h3>
          <p className="text-xs text-neutral-400">
            {project ? project.description : "Select a project."}
          </p>
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-col items-center w-3/5">
        <div className="flex items-center gap-2 w-full">
          <span className="text-xs text-neutral-400">
            {project ? project.progress : "00"}:00
          </span>
          <div className="relative flex-1 h-1 bg-neutral-700 rounded">
            <div
              className="absolute h-1 bg-green-500 rounded"
              style={{ width: `${project?.progress || 0}%` }}
            />
            <div
              className="absolute w-3 h-3 bg-white rounded-full -top-1"
              style={{ left: `${project?.progress || 0}%` }}
            />
          </div>
          <span className="text-xs text-neutral-400">100:00</span>
        </div>
      </div>

      {/* Right (Empty space or controls) */}
      <div className="w-12" />
    </div>
  );
}
