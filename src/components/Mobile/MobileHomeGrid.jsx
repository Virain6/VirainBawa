import React from "react";
import { dockApps, mobileDockApps } from "../../content";

export default function MobileHomeGrid({ onOpen }) {
  const dockAppNames = mobileDockApps.map((app) => app.name);
  const homeApps = dockApps.filter((app) => !dockAppNames.includes(app.name));

  return (
    <div className="relative z-20 grid grid-cols-4 gap-4 p-4">
      {homeApps.map((app) => (
        <button
          key={app.name}
          onClick={() => onOpen(app)}
          className="
            flex flex-col items-center
            transition
            focus:outline-none
          "
        >
          {/* Icon container */}
          <div
            className="
              flex items-center justify-center
              h-16 w-16
              rounded-xl bg-white
              shadow
              transition
            "
          >
            <app.icon className="w-8 h-8 text-black" />
          </div>

          {/* App name */}
          <span className="text-xs text-white mt-1">{app.name}</span>
        </button>
      ))}
    </div>
  );
}
