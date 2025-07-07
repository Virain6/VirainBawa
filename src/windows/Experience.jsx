import React from "react";
import WindowContainer from "../components/WindowContainer";

export default function ExperienceWindow({ onClose, onClick, index }) {
  return (
    <WindowContainer
      title="Experience"
      onClose={onClose}
      onClick={onClick}
      index={index}
    >
      <div
        className="
          flex flex-col h-full
          bg-gradient-to-b from-purple-600 to-purple-800
          text-white
          shadow-2xl overflow-hidden
        "
        onMouseDown={onClick}
      >
        <div className="flex-1 p-4 overflow-auto text-sm">Coming soon</div>
      </div>
      ,/{" "}
    </WindowContainer>
  );
}
