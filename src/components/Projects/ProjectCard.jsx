import React from "react";
import Tilt from "react-parallax-tilt";

export default function ProjectCard({ project, onClick }) {
  const hasImage = Boolean(project.image);

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.02}
      transitionSpeed={400}
      className="w-full"
    >
      <div
        onClick={onClick}
        className={`
          relative
          cursor-pointer
          rounded-lg
          overflow-hidden
          group
          shadow-lg
          flex
          ${!hasImage ? "items-center justify-center bg-white text-black" : ""}
        `}
        style={{
          backgroundImage: hasImage ? `url(${project.image})` : undefined,
          backgroundSize: hasImage ? "cover" : undefined,
          backgroundPosition: hasImage ? "center" : undefined,
          minHeight: "250px",
        }}
      >
        {hasImage ? (
          // This block renders only if there *is* an image
          <div
            className="
              absolute bottom-0 left-0 w-full
              bg-black/50
              backdrop-blur-md
              p-4
              flex flex-col
              space-y-1
              z-10
            "
          >
            <h3 className="font-semibold text-white">{project.title}</h3>
            <p className="text-xs text-neutral-300 line-clamp-2">
              {project.description}
            </p>
          </div>
        ) : (
          // This block renders only if there *is no* image
          <h3 className="font-semibold text-lg">{project.title}</h3>
        )}
      </div>
    </Tilt>
  );
}
