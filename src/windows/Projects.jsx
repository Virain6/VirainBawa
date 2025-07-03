import React, { useState } from "react";
import WindowContainer from "../components/WindowContainer";
import TopBar from "../components/Projects/TopBar";
import Sidebar from "../components/Projects/Sidebar";
import ProjectGrid from "../components/Projects/ProjectGrid";
import BottomBar from "../components/Projects/BottomBar";
import ProjectDetails from "../components/Projects/ProjectDetails";

export default function ProjectsWindow({ onClose, onClick, index }) {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <WindowContainer
      title="Projects"
      onClose={onClose}
      onClick={onClick}
      index={index}
    >
      <div className="flex flex-col h-full bg-black text-white">
        <TopBar onHome={() => setSelectedProject(null)} />

        <div className="flex flex-1 overflow-hidden gap-x-4 p-2">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-neutral-900 rounded-md">
            {!selectedProject ? (
              <ProjectGrid onSelect={setSelectedProject} />
            ) : (
              <ProjectDetails
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </main>
        </div>

        <BottomBar project={selectedProject} />
      </div>
    </WindowContainer>
  );
}
