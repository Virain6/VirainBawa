import React from "react";
import { X, Plus } from "lucide-react";

export default function WindowHeader({ title, onClose, onMaximize }) {
  return (
    <div
      className="
        window-drag-handle
        flex items-center justify-between
        px-2 py-1 bg-neutral-800 cursor-grab
      "
      onDoubleClick={(e) => {
        e.stopPropagation();
        onMaximize();
      }}
    >
      <div className="flex items-center space-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="
            relative w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600
            flex items-center justify-center
            group
          "
        >
          <X
            className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 transition-opacity"
            strokeWidth={3}
          />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMaximize();
          }}
          className="
            relative w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-500
            flex items-center justify-center
            group
          "
        >
          <Plus
            className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 transition-opacity"
            strokeWidth={3}
          />
        </button>
      </div>
      <h2 className="text-xs font-semibold text-white">{title}</h2>
      <div className="w-4" />
    </div>
  );
}
