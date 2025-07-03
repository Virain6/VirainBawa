import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Bell,
  Users,
  User,
} from "lucide-react";

export default function ProjectTopBar({ onHome }) {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-black/70 backdrop-blur-md">
      {/* Left: Nav Buttons */}
      <div className="flex items-center space-x-2">
        <button className="p-1">
          <ChevronLeft className="w-5 h-5 text-gray-500 hover:text-white" />
        </button>
        <button className="p-1">
          <ChevronRight className="w-5 h-5 text-gray-500 hover:text-white" />
        </button>
      </div>

      {/* Center: Search */}
      <div className="flex items-center px-3 py-1 gap-2 w-100 max-w-full">
        <button className="ml-2 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700">
          <Home className="w-5 h-5 text-white" onClick={onHome} />
        </button>
        <div className="flex items-center bg-neutral-800 text-sm text-neutral-300 rounded-full px-3 py-2 w-80 max-w-full">
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
            className="bg-transparent outline-none placeholder:text-neutral-400 w-full"
          />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <button>
          <Bell className="w-5 h-5 text-white" />
        </button>
        <button className="p-2 rounded-full bg-neutral-700 hover:bg-neutral-600">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}
