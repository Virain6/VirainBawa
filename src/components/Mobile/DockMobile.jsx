// src/components/DockMobile.jsx
import React from "react";
import DockItem from "../DockItem";
import { mobileDockApps, dockApps } from "../../content";

export default function DockMobile({ visible, onOpen, onClose, openApps }) {
  // 1️⃣ Find the active app (only one in mobile)
  const activeApp = openApps[0];

  // 2️⃣ Build dock items array
  let displayedApps = [...mobileDockApps];

  if (
    activeApp &&
    activeApp.name !== "Home" &&
    !mobileDockApps.some((app) => app.name === activeApp.name)
  ) {
    // If the active app isn't in the default dock, replace last slot
    displayedApps = [
      ...mobileDockApps.slice(0, -1),
      {
        name: activeApp.name,
        icon: activeApp.icon,
        component: activeApp.component,
        hoverEffect: activeApp.hoverEffect,
      },
    ];
  }

  return (
    <div
      className={`
        fixed bottom-4 left-1/2 transform -translate-x-1/2
        flex gap-4
        px-4 py-2
        rounded-xl
        bg-slate-800/30
        backdrop-blur-md
        border border-white/20
        shadow-xl shadow-black/10
        z-[9999]
        transition-all duration-500 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {displayedApps.map((app) => (
        <DockItem
          key={app.name}
          name={app.name}
          icon={app.icon}
          hoverEffect={app.hoverEffect}
          onClick={() => {
            if (app.name === "Home") {
              // Home clears open apps
              onClose();
            } else {
              onOpen(app);
            }
          }}
          onClose={() => onClose(app.name)}
          isActive={
            openApps.length === 0
              ? app.name === "Home"
              : openApps.some((a) => a.name === app.name)
          }
        />
      ))}
    </div>
  );
}
