import React from "react";
import WindowContainer from "../components/WindowContainer";

export default function LanguagesWindow({ onClose, onClick, index }) {
  return (
    <WindowContainer
      title="Languages"
      onClose={onClose}
      onClick={onClick}
      index={index}
    >
      <div
        className="
          flex flex-col h-full
          bg-gradient-to-b from-green-600 to-green-800
          text-white
          shadow-2xl overflow-hidden
        "
        onMouseDown={onClick}
      >
        {/* Content */}
        <div className="flex-1 p-4 overflow-auto text-sm">Coming soon</div>
      </div>
    </WindowContainer>
  );
}
