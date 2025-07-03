import React from "react";

export default function ProjectDetails({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="
        bg-neutral-900 text-white rounded-lg
        overflow-y-auto max-h-full flex flex-col
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-neutral-700 sticky top-0 bg-neutral-900 z-10">
        <h2 className="text-2xl font-bold">{project.title}</h2>
        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-white transition text-xl"
        >
          ✕
        </button>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-8">
        {/* Hero Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* About */}
        {project.about && (
          <section>
            <h3 className="text-lg font-semibold border-b border-purple-500 pb-1 mb-3">
              Overview
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.about}
            </p>
          </section>
        )}

        {/* Tech Stack */}
        {project.tech && (
          <section>
            <h3 className="text-lg font-semibold border-b border-blue-500 pb-1 mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-neutral-800 text-xs px-3 py-1 rounded-full border border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Features */}
        {project.features && (
          <section>
            <h3 className="text-lg font-semibold border-b border-green-500 pb-1 mb-3">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-neutral-300">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Links */}
        {(project.github || project.url) && (
          <section>
            <h3 className="text-lg font-semibold border-b border-yellow-500 pb-1 mb-3">
              Resources
            </h3>
            <div className="flex gap-4 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 px-3 py-2 rounded hover:bg-neutral-700 transition text-xs"
                >
                  GitHub Repository
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 px-3 py-2 rounded hover:bg-neutral-700 transition text-xs"
                >
                  Live Demo
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
