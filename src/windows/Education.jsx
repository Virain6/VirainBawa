import React from "react";
import { Rnd } from "react-rnd";
import WindowHeader from "../components/WindowHeader";

export default function EducationWindow({ onClose, onClick, index }) {
  return (
    <Rnd
      default={{
        x: 100 + index * 40,
        y: 100 + index * 40,
        width: 400,
        height: 600,
      }}
      minWidth={300}
      minHeight={400}
      bounds="window"
      dragHandleClassName="window-drag-handle"
      className="z-50"
      onDragStart={onClick}
    >
      <div
        className="
          flex flex-col h-full
          bg-gradient-to-b from-green-600 to-green-800
          text-white
          rounded-lg shadow-2xl overflow-hidden
        "
        onMouseDown={onClick}
      >
        {/* Reusable header */}
        <WindowHeader title="Education" onClose={onClose} />

        {/* Content */}
        <div className="flex-1 p-4 overflow-auto text-sm">Coming soon</div>
      </div>
    </Rnd>
  );
}
