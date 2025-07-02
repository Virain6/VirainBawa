import React from "react";

export default function MenuBar({ dockApps, onOpen }) {
  return (
    <header
      className="
    fixed top-0 left-0 w-full
    flex justify-between items-center
    px-2 sm:px-4 md:px-8
    py-1 sm:py-2 md:py-3
    h-8 sm:h-10 md:h-12
    backdrop-blur-md
    bg-white/80
    border-b border-neutral-200
    text-black
    z-[1000]
    shadow
  "
    >
      <div className="menu-bar-text text-sm sm:text-base md:text-lg font-semibold !text-black">
        Virain Bawa
      </div>
      <nav className="flex space-x-1 sm:space-x-2 md:space-x-3 text-xs sm:text-sm md:text-base">
        {dockApps.map((app) => (
          <button
            key={app.name}
            onClick={() => onOpen(app)}
            className="
  px-2 py-1 rounded
  border-none
  focus:outline-none
  hover:bg-black/10

  transition
"
          >
            {app.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
