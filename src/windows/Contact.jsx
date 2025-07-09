import React from "react";
import WindowContainer from "../components/WindowContainer";

export default function ContactWindow({ onClose, onClick, index }) {
  return (
    <WindowContainer
      title="Contact"
      onClose={onClose}
      onClick={onClick}
      index={index}
    >
      <div
        className="
    flex flex-col h-full
    bg-[radial-gradient(ellipse_at_top_left,rgba(0,180,255,0.4),rgba(10,30,60,1))]
    text-white shadow-[0_0_30px_rgba(0,180,255,0.3)]
    ring-1 ring-inset ring-white/10
    rounded-b-xl
  "
        onMouseDown={onClick}
      >
        <div className="flex-1 flex items-center justify-center text-center px-6">
          <p className="text-5xl font-bold tracking-wide animate-pulse text-white/90">
            Coming Soon
          </p>
        </div>
      </div>
    </WindowContainer>
  );
}
