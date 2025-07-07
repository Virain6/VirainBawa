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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      width={1200}
      height={600}
    >
      <div className="relative flex flex-col h-full bg-black text-white">
        <TopBar
          onHome={goHome}
          onPrev={goBack}
          onNext={goForward}
          hasPrev={currentIndex > 0}
          hasNext={currentIndex < navigationQueue.length - 1}
          search={search}
          onSearchChange={setSearch}
          onToggleSidebar={() => setSidebarOpen(true)}
        />
        <div className="flex flex-1 overflow-hidden gap-x-4 p-2">
          <>
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
              <Sidebar
                onSelectPlaylist={(playlist) => {
                  pushView({ type: "playlist", id: playlist.id });
                  setSidebarOpen(false); // close if selecting on mobile
                }}
              />
            </div>

            {/* Mobile Sidebar Overlay */}
            <div className="absolute inset-0 z-50 flex pointer-events-none">
              {/* Backdrop */}
              <div
                onClick={() => setSidebarOpen(false)}
                className={`
      fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
      ${
        sidebarOpen
          ? "opacity-60 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }
    `}
              />
              {/* Sidebar */}
              <div
                className={`
      relative w-64 bg-neutral-900 border-r border-neutral-800 z-50 p-4
      transform transition-transform duration-300
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    `}
              >
                <Sidebar
                  onSelectPlaylist={(playlist) => {
                    pushView({ type: "playlist", id: playlist.id });
                    setSidebarOpen(false);
                  }}
                />
              </div>
            </div>
          </>
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
