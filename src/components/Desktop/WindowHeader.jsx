import React from "react";

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
          <span
            className="
              text-black text-[10px] leading-none opacity-0 group-hover:opacity-100 transition-opacity
            "
          >
            ×
          </span>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMaximize();
          }}
          className="
            relative w-3.5 h-3.5 rounded-full bg-green-400 hover:bg-green-500
            flex items-center justify-center
            group
          "
        >
          <span
            className="
              text-black text-[10px] leading-none opacity-0 group-hover:opacity-100 transition-opacity
            "
          >
            ☐
          </span>
        </button>
      </div>
      <h2 className="text-xs font-semibold text-white">{title}</h2>
      <div className="w-4" />
    </div>
  );
}
