import React, { useState } from "react";
import WindowContainer from "../components/WindowContainer";
import TopBar from "../components/Projects/TopBar";
import Sidebar from "../components/Projects/Sidebar";
import ProjectGrid from "../components/Projects/ProjectGrid";
import BottomBar from "../components/Projects/BottomBar";
import ProjectDetails from "../components/Projects/ProjectDetails";
import { projectData } from "../data/projects";
import PlaylistProjectGrid from "../components/Projects/PlaylistProjectGrid";

export default function ProjectsWindow({ onClose, onClick, index }) {
  const [navigationQueue, setNavigationQueue] = useState([{ type: "grid" }]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [search, setSearch] = useState("");

  const currentView = navigationQueue[currentIndex];

  const project =
    currentView?.type === "project"
      ? projectData.find((p) => p.id === currentView.id)
      : null;

  const pushView = (view) => {
    // Truncate if not at end
    const newQueue = navigationQueue.slice(0, currentIndex + 1);
    newQueue.push(view);
    setNavigationQueue(newQueue);
    setCurrentIndex(newQueue.length - 1);
  };

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const goForward = () => {
    if (currentIndex < navigationQueue.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const goHome = () => {
    setSearch(""); // clear search
    if (currentView?.type !== "grid") {
      pushView({ type: "grid" });
    }
  };
  return (
    <WindowContainer
      title="Projects"
      onClose={onClose}
      onClick={onClick}
      index={index}
    >
      <div className="flex flex-col h-full bg-black text-white">
        <TopBar
          onHome={goHome}
          onPrev={goBack}
          onNext={goForward}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < navigationQueue.length - 1}
          search={search}
          onSearchChange={setSearch}
        />
        <div className="flex flex-1 overflow-hidden gap-x-4 p-2">
          <Sidebar
            onSelectPlaylist={(playlist) =>
              pushView({ type: "playlist", id: playlist.id })
            }
          />
          <main className="flex-1 overflow-y-auto bg-neutral-900 rounded-md">
            {currentView.type === "grid" && (
              <ProjectGrid
                search={search}
                onSelect={(project) =>
                  pushView({ type: "project", id: project.id })
                }
              />
            )}

            {currentView.type === "project" && (
              <ProjectDetails
                project={projectData.find((p) => p.id === currentView.id)}
                onClose={goHome}
              />
            )}

            {currentView.type === "playlist" && (
              <PlaylistProjectGrid
                playlistId={currentView.id}
                search={search}
                onSelect={(project) =>
                  pushView({ type: "project", id: project.id })
                }
              />
            )}
          </main>
        </div>

        <BottomBar project={project} />
      </div>
    </WindowContainer>
  );
}
