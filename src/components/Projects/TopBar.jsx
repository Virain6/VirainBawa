import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Bell,
  Users,
  User,
} from "lucide-react";

export default function ProjectTopBar({
  onHome,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  search,
  onSearchChange,
  onToggleSidebar,
}) {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-black/70 backdrop-blur-md">
      {/* Left: Nav Buttons */}
      <div className="flex items-center space-x-2">
        <button className="p-1 md:hidden" onClick={onToggleSidebar}>
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button className="p-1" onClick={onPrev} disabled={!hasPrev}>
          <ChevronLeft className="w-5 h-5 text-gray-500 hover:text-white" />
        </button>
        <button className="p-1" onClick={onNext} disabled={!hasNext}>
          <ChevronRight className="w-5 h-5 text-gray-500 hover:text-white" />
        </button>
      </div>

      {/* Center: Search */}
      <div className="flex items-center px-3 py-1 gap-2 w-100 max-w-full">
        <button className="ml-2 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700">
          <Home className="w-5 h-5 text-white" onClick={onHome} />
        </button>

        {/* Desktop search input */}
        <div className="hidden md:flex items-center bg-neutral-800 text-sm text-neutral-300 rounded-full px-3 py-2 w-80 max-w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="What project do you want to see?"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="bg-transparent outline-none placeholder:text-neutral-400 w-full"
          />
        </div>

        {/* Mobile search toggle */}
        <div className="flex md:hidden items-center">
          {mobileSearchOpen ? (
            <div className="flex items-center bg-neutral-800 text-sm text-neutral-300 rounded-full px-3 py-2 w-48 max-w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"
                />
              </svg>
              <input
                type="text"
                autoFocus
                placeholder="Search..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-transparent outline-none placeholder:text-neutral-400 w-full"
              />
              <button
                onClick={() => {
                  setMobileSearchOpen(false);
                  onSearchChange(""); // optional: clear search
                }}
                className="ml-2 text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              onClick={() => setMobileSearchOpen(true)}
              className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Right: Icons */}
      {mobileSearchOpen ? null : (
        <div className="flex items-center space-x-4">
          <button>
            <Bell className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-full bg-neutral-700 hover:bg-neutral-600">
            <User size={18} />
          </button>
        </div>
      )}
    </header>
  );
}
