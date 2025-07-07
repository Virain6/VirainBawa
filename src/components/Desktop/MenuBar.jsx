import React from "react";

export default function MenuBar({ dockApps, onOpen }) {
  return (
    <header
      className="
    fixed top-0 left-0 w-full
    flex justify-between items-center
    px-2 sm:px-2 md:px-4
    py-1 sm:py-1 md:py-1
    h-8 sm:h-10 md:h-8
    backdrop-blur-md
    bg-white/50
    text-black
     z-[9999]
    shadow
  "
    >
      <div className="menu-bar-text text-sm sm:text-base md:text-lg font-semibold !text-black">
        Virain Bawa
      </div>
      <nav className="flex space-x-1 sm:space-x-1 md:space-x-1 text-xs sm:text-sm md:text- font-medium">
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
