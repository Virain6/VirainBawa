import React from "react";
import WindowContainer from "../components/WindowContainer";
import FinderView from "../components/Languages/FinderView";

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
      flex flex-col
      h-[70vh]  
      min-h-[500px] 
      max-h-[90vh]  
 bg-neutral-800/50
 backdrop-blur-md
      text-white shadow-2xl
      overflow-hidden
    "
        onMouseDown={onClick}
      >
        <FinderView />
      </div>
    </WindowContainer>
  );
}
