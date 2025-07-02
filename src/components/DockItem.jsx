import React, { useState, useRef, useEffect } from "react";

export default function DockItem({
  name,
  icon,
  onClick,
  onClose,

  isActive,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const Icon = icon;

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setMenuOpen(true);
  };

  return (
    <div className="relative">
      <button
        onClick={onClick}
        onContextMenu={handleContextMenu}
        className="
          relative flex flex-col items-center group
          transition-all duration-300 ease-out
        "
      >
        {/* Tooltip */}
        <div
          className="
            absolute -top-18
            px-2 py-1
            rounded
            bg-black/80
            text-xs text-white
            opacity-0
            translate-y-2
            group-hover:opacity-100
            group-hover:-translate-y-2
            transition-all duration-300
            pointer-events-none
            whitespace-nowrap
          "
        >
          {name}
        </div>

        <div
          className={`
    flex items-center justify-center
    h-16 w-16
    rounded-xl bg-white
    transition-all duration-300 ease-out
    group-hover:scale-125
    group-hover:-translate-y-7
  `}
        >
          <Icon className="w-8 h-8 text-black" />
        </div>

        {/* Active dot */}
        {isActive && <div className="mt-1 w-2 h-2 rounded-full bg-gray-500" />}
      </button>

      {/* Context menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="
    absolute left-full top-1/2 transform -translate-y-1/2 ml-2
    w-24 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700
    rounded shadow-lg z-50 text-xs
  "
        >
          {isActive && (
            <button
              onClick={() => {
                onClose();
                setMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-white"
            >
              Close
            </button>
          )}
          {!isActive && (
            <button
              onClick={() => {
                onClick();
                setMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 text-white"
            >
              Open
            </button>
          )}
        </div>
      )}
    </div>
  );
}
