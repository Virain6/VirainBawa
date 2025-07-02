import React from "react";
import DockItem from "./DockItem";
import { dockApps } from "../content";

export default function Dock({ visible, onOpen, onClose, openApps }) {
  return (
    <div
      className={`
        fixed bottom-4 left-1/2 transform -translate-x-1/2
        flex gap-4
        px-6 py-3
        rounded-2xl
        bg-slate-800/20
        backdrop-blur-md
        border border-white/20
        shadow-xl shadow-black/10
        transition-all duration-500 ease-out
            z-[9999]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {dockApps.map((app) => (
        <DockItem
          key={app.name}
          name={app.name}
          icon={app.icon}
          hoverEffect={app.hoverEffect}
          onClick={() => onOpen(app)}
          onClose={() => onClose(app.name)}
          isActive={openApps.some((a) => a.name === app.name)}
        />
      ))}
    </div>
  );
}
