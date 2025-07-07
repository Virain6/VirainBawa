import React, { useState, useEffect } from "react";

export default function MenuBar({ dockApps, onOpen }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Add leading zeros if needed
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const spaceBuffer = "\u00A0".repeat(3);
    return `${date.toLocaleDateString()}${spaceBuffer}${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <header
      className="
    fixed top-0 left-0 w-full
    flex items-center justify-between
    px-2 sm:px-2 md:px-4
    py-1 sm:py-1 md:py-1
    h-8 sm:h-10 md:h-8
    backdrop-blur-md
    bg-white/50
    text-black
    z-[9999]
    shadow
    relative
  "
    >
      {/* Left - Name */}
      <div
        className="menu-bar-text text-sm sm:text-base md:text-lg font-semibold !text-black px-2 py-1  rounded border-none focus:outline-none hover:bg-black/10 transition"
        onClick={() => onOpen(dockApps.find((app) => app.name === "About"))}
      >
        Virain Bawa
      </div>

      {/* Center - Nav */}
      <nav
        className="
      absolute left-1/2 -translate-x-1/2
      flex space-x-1 sm:space-x-1 md:space-x-1
      text-xs sm:text-sm md:text-md font-medium
    "
      >
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

      {/* Right - Time */}
      <div className="sm:space-x-1 md:space-x-1 text-xs sm:text-sm md:text-md font-medium !text-black px-2 py-1 rounded border-none focus:outline-none hover:bg-black/10 transition">
        {formatTime(time)}
      </div>
    </header>
  );
}
